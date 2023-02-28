<template >
  <div class="v-catalog-item">
    <img class="v-catalog-item__image" :src="productData.image" alt="img">
    <p class="v-catalog-item__name">{{productData.title}}</p>
    <p class="v-catalog-item__price">Price : {{ productData.price }}$</p>
    <button class="v-catalog-item__add-to-cart-btn btn" @click="sendDataToParent">Add to cart</button>
  </div>
</template>
<script>
export default {
  name: 'v-catalog-item',
  props: {
    productData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    sendDataToParent() {
      this.$emit('sendId', this.productData.id)
    }
  }
}
</script>
<style lang="scss">
  .v-catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;
    &__image {
      width: 100px;
    }
  }
</style>