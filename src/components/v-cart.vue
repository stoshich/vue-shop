<template>
  <div class="v-cart">
    <router-link to="/">
      <div class="v-catalog__to-cart">
      Back to catalog
    </div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="!CART.length">There is no products in cart...</p>
    <v-cart-item 
      v-for="product in CART"
      :key="product.id"
      :productData="product"
    />
    <div class="v-cart__total">
      <p class="total__name">Total: </p>
      <p>{{cartTotalCost}}</p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import vCartItem from './v-cart-item.vue';

export default {
  name: 'v-cart',
  components: {
    vCartItem
  },
  computed: {
    ...mapGetters([
      'CART'
    ]),
    cartTotalCost() {
      if (!this.CART.length) return 0
      return this.CART.reduce((prev, product) => prev + product.price * product.quantity, 0)
    }
  }
}
</script>
<style lang="scss">
  .v-cart {
    margin-bottom: 100px;
    &__total {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      padding: $padding*2 $padding*3;
      display: flex;
      justify-content: center;
      color: #FFFFFF;
      background-color: #46793a;
      font-size: 20px;
    }
  }
  .total__name {
    margin-right: $margin * 2;

  }
</style>