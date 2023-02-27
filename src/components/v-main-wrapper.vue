<template>
  <div class="v-main-wrapper-vue">
    <v-catalog />
    <v-cart />
  </div>
</template>

<script>

import vCatalog from './v-catalog.vue';
import vCart from './v-cart.vue';

export default {
  name: 'v-main-wrapper-vue',
  components: {
    vCatalog,
    vCart
  },
  data() {
    return {
    }
  },
  mounted() {
  }
}
</script>

<style>
.v-main-wrapper-vue {
  max-width: 900px;
  margin: 0 auto;
}
</style>