<template>
  <div class="v-cart-item">
    <img :src="productData.image" alt="">
    <div class="v-cart-item__info">
      <p>{{ productData.title }}</p>
      <p>{{ productData.price }}</p>
      <p>{{ productData.category }}</p>
    </div>
    <div class="v-cart-item__quantity">{{ productData.quantity }}</div>
    <button @click="DELETE_FROM_CART(productData.id)">Delete</button>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'v-cart-item',
  props: {
    productData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART'
    ])
  }
}
</script>
<style lang="scss">
  .v-cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    box-shadow: 0 0 8px #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;
    img {
      max-width: 50px;
    }
  }
</style>