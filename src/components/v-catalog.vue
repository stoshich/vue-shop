<template>
  <div class="v-catalog">
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
      'PRODUCTS'
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
  }
</style>