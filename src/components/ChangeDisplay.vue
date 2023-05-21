<template>
  <div>
      <h2>Funds Available</h2>
      <p>${{ $store.state.money.toFixed(2) }}</p>
      <button @click="dispenseChange">Dispense Change</button>
  </div>
</template>

<script>
export default {


computed: {
  purchasedItems() {
    let list;
    this.$store.state.purchasedItems.array.forEach(element => {
      list = list + ' ' + element;
    });
    return list;
  }
},

  methods: {
    dispenseChange() {
      if (this.$store.state.money > 0 ) { 
      window.alert('Thank you! Goodbye!');
      this.$store.commit('DISPENSE_CHANGE');
      }
    },
    showPurchases() {
      this.isViewLog = !this.isViewLog;

    }
  }
}
</script>

<style>

</style>