<template>
<div id="app">
  <div id="main-grid">
    <wonka-header id="header"/>
    <feed-money id="feed"/>
    <change-display id="change"/>
    <product-list id="product"/>
  </div>
  </div>
</template>

<script>
import ChangeDisplay from './components/ChangeDisplay.vue'
import FeedMoney from './components/FeedMoney.vue'
import ProductList from './components/ProductList.vue'
import WonkaHeader from './components/WonkaHeader.vue'


export default {
  name: 'App',
  components: {
    FeedMoney,
    ChangeDisplay,
    ProductList,
    WonkaHeader
    
  }
}
</script>
    

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  align-content: center;
  color: #603F8B;
  margin-top: 60px;
  
}
#main-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
  "header header"
  "feed change"
  "product product";
  
}

#feed {
  grid-area: feed;
  border: 2px solid #603F8B;
  background-color: #A16AE8;
}

#change {
  grid-area: change;
  border: 2px solid #603F8B;
  background-color: #FD49A0;
}

#product {
  grid-area: product;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border: 2px solid #603F8B;
  background-color: #B4FEE7;
  padding: 10px;
}

#header {
  grid-area: header;
  border: 2px solid #603F8B;
  background-color: #B4FEE7;
}

button {
  background-color: #FD49A0;
}


</style>
