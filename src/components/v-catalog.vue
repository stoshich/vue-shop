<template>
  <div class="v-catalog">
    <router-link to="/cart">
      <div class="v-catalog__to-cart">
      Cart: {{CART.length}}
    </div>
    </router-link>
    
    <h1>Catalog</h1>
    <div class="v-catalog__list">
      <v-catalog-item
        v-for="product in PRODUCTS"
        :key="product.id"
        :productData="product"
        @addToCart="ADD_TO_CART"
      />
    </div>
  </div>
</template>
<script>

import vCatalogItem from './v-catalog-item.vue';
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'v-catalog',
  components: {
    vCatalogItem
  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART'
    ])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_API',
      'ADD_TO_CART'
    ]),
  },
  mounted() {
    this.GET_PRODUCTS_API()
  }
}
</script>
<style lang="scss">
  .v-catalog{
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
    &__to-cart {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: $padding * 2;
      border: solid 1px #aeaeae;
    }
  }
</style>