import axios from 'axios'
import { createStore } from 'vuex'


const store = createStore({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products
    },
    SET_CART: (state, product) => {
      const repeatedItem = state.cart.find(item => item.id === product.id)
      if (repeatedItem) {
        repeatedItem.quantity += 1
      } else {
        state.cart.push({
          ...product,
          quantity: 1
        })
      }
    },
    REMOVE_ITEM_CART: (state, id) => {
      state.cart = state.cart.filter(item => item.id !== id)
    },
    INCREMENT: (state, id) => {
      state.cart = state.cart.map(item => {
        if (item.id === id) return { ...item, quantity: item.quantity + 1 }
        return item
      })
    },
    DECREMENT: (state, id) => {
      state.cart = state.cart.map(item => {
        if (item.id === id) return { ...item, quantity: item.quantity - 1 }
        return item
      })
    }
  },
  actions: {
    async GET_PRODUCTS_API({ commit }) {
      try {
        const res = await axios.get('https://fakestoreapi.com/products')
        commit('SET_PRODUCTS', res.data)
        return res.data
      } catch (error) {
        console.log(error)
        return error
      }
    },
    ADD_TO_CART({ commit }, product) {
      commit('SET_CART', product)
    },
    DELETE_FROM_CART({ commit }, id) {
      commit('REMOVE_ITEM_CART', id)
    },
    INCREMENT_CART_ITEM({ commit }, id) {
      commit('INCREMENT', id)
    },
    DECREMENT_CART_ITEM({ commit }, id) {
      commit('DECREMENT', id)
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    },
    CART(state) {
      return state.cart
    }
  }
})

export default store