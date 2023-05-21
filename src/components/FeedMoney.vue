<template>
  <div id="feed-main">
      <h2>Insert Cash</h2>
      <button v-on:click="addMoney(1)">$1.00</button>
      <button v-on:click="addMoney(5)">$5.00</button>
      <button @click="addMoney(10)">$10.00</button>
  </div>
</template>

<script>
export default {
  methods: {
    addMoney(amount) {
      this.$store.commit('ADD_MONEY', parseInt(amount));
    },
    
  }

}
</script>

<style scoped>
  button {
    width: 200px;
    margin: 5px auto;
    display: block;
    background-color: #FD49A0;
  }


</style>