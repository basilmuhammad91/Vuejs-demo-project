import { createStore } from 'vuex'
import axios from 'axios'
const store = createStore({
  state: {
    items: [],
    authUser: null
  },
  mutations: {
    setItems(state, payload) {
      state.items = payload
    },
    setUser(state) {
      state.authUser = {
        name: 'Joh Doe',
        address: 'Chatakpur-3, Dhangadhi Kailali',
        phone: '+977 9955221114',
        email: 'john@exmaple.com',
        designation: 'Web Developer'
      }
    },
    logOut(state) {
      state.authUser = null
      state.posts = null
    }
  },
  actions: {
    fetchItems({ commit }) {
      axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
          commit('setItems', response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    login({commit}){
      commit("setUser")
    },
    logOut({ commit }) {
      commit('logOut')
    }
  },
  getters: {
    isAuthenticated: state => !!state.authUser,
  }
})

export default store
