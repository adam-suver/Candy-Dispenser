<template>
  <div>
      <h2>{{product.name}}</h2>
      <p>${{product.price.toFixed(2)}}</p>
      <p>{{product.type}}</p>
      <p v-if="product.id != 7">{{product.message}}</p>
      <p>Quantity: {{product.quantity}}</p>
      <button v-bind:disabled="product.quantity===0" v-on:click="purchaseProduct(product.id)">Give it to me now!</button>
      
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  methods: {
    purchaseProduct(id) {
      if (this.product.id === 7) {
        window.alert(this.product.message);
      }
      else if (this.$store.state.money >= this.product.price && 
      this.product.quantity > 0) {
      this.$store.commit('DECREASE_QUANTITY', id);
      this.$store.commit('DECREASE_MONEY', this.product.price);
      this.$store.commit('LOG_PURCHASE', this.product.name);
      } 
    }
  }
}
</script>

<style>




</style>