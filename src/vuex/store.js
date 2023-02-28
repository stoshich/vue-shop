import axios from 'axios'
import { createStore } from 'vuex'


const store = createStore({
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products
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
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    }
  }
})

export default store