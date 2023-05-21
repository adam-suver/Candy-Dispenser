import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    money: 0,
    purchaseLog: [],
    products: [
      {
        id: 1,
        name: 'Scrumdiddlyumptious Bar',
        price: 1.75,
        type: 'Chocolate',
        message: "A little nonsense now and then is relished by the wisest men.",
        quantity: 5
      },
      {
        id: 2,
        name: 'Everlasting Gobstopper',
        price: 2.75,
        type: 'Hard Candy',
        message: "One is enough for anybody.",
        quantity: 5
      },
      {
        id: 3,
        name: 'Fizzy Lifting Drink',
        price: 3.25,
        type: 'Drink',
        message: "Remember to burp if you float too high. Don't touch my ceilings.",
        quantity: 5
      },
      {
        id: 4,
        name: 'Golden Egg',
        price: 6.35,
        type: 'Chocolate',
        message: "Be a good egg.",
        quantity: 5
      },
      {
        id: 5,
        name: 'Wonka Bar',
        price: 1.50,
        type: 'Chocolate',
        message: "No golden tickets--they make the chocolate taste terrible.",
        quantity: 5
      },
      {
        id: 6,
        name: 'Chocolate River',
        price: 1.85,
        type: 'Drink',
        message: "My beautiful chocolate! In a bottle!",
        quantity: 5
      },
      {
        id: 7,
        name: 'Slugworth Sizzler',
        price: 2.10,
        type: 'Chocolate',
        message: "How dare you try to purchase a Slugworth product!",
        quantity: 5
      },
      {
        id: 8,
        name: 'Exploding Candy',
        price: 2.65,
        type: 'Hard Candy',
        message: "For your enemies.",
        quantity: 5
      },
      {
        id: 9,
        name: 'Three-Course-Meal Gum',
        price: 1.15,
        type: 'Gum',
        message: "Better hope you don't turn violet like Violet!",
        quantity: 5
      },
    ]
  },
  getters: {
  },
  mutations: {
    ADD_MONEY(state, payload) {
      state.money += payload;
    },
    DECREASE_QUANTITY(state, id) {
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].id === id) {
          state.products[i].quantity--;
        }
      }
    },
    DECREASE_MONEY(state, amount) {
      state.money -= amount;
    },
    DISPENSE_CHANGE(state) {
      state.money = 0;
      state.purchaseLog = [];
    },
    LOG_PURCHASE(state, name) {
      state.purchaseLog.unshift(name);
    }
  },
  actions: {
  },
  modules: {
  }
})
