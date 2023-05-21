<template>
  <div>
      <product-display 
      v-for="product in $store.state.products"
      v-bind:key="product.id"
      v-bind:product="product" />
  </div>
</template>

<script>
import ProductDisplay from "./ProductDisplay.vue";
export default {
  components: {ProductDisplay},
}
</script>

<style>

</style>