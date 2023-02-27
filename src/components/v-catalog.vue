<template>
  <div class="v-catalog">
    <h1>Catalog</h1>
    <div class="v-catalog__list">
      <v-catalog-item
        v-for="product in products"
        :key="product.id"
        :productData="product"
        @sendId="showId"
      />
    </div>
  </div>
</template>
<script>

import vCatalogItem from './v-catalog-item.vue';

export default {
  name: 'v-catalog',
  components: {
    vCatalogItem
  },
  data() {
    return {
      products: [
        {
          id: 1,
          title: 'testTitle',
          price: 100,
          img: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
        }
      ]
    }
  },
  methods: {
    showId (data) {
      console.log(data)
    }
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