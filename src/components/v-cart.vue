<template>
  <div>
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
    ])
  }
}
</script>
<style>
  
</style>