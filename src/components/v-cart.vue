<template>
  <div>
    <h1>Cart</h1>
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