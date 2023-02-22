<template>
  <div class="v-main-wrapper-vue">
    <p>{{ title }}</p>
    <v-catalog/>
    <v-cart/>
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
      title: 'Hello'
    }
  },
  mounted() {
  }
}
</script>

<style>
  .v-main-wrapper-vue {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
  }
</style>