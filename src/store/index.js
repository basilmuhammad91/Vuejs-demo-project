import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import axios from 'axios'

const store = createStore({
  state: {
    // Initial state for items and authentication user
    items: [],
    authUser: null
  },
  mutations: {
    // Mutation to set items in the state
    setItems(state, payload) {
      state.items = payload
    },
    // Mutation to set a mock user for authentication
    setUser(state) {
      state.authUser = {
        name: 'John Doe',
        address: 'Chatakpur-3, Dhangadhi Kailali',
        phone: '+977 9955221114',
        email: 'john@example.com',
        designation: 'Web Developer'
      }
    },
    // Mutation to log out and reset user and posts
    logOut(state) {
      state.authUser = null
      state.posts = null  
    }
  },
  actions: {
    // Action to fetch items from an API
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
    // Getter to check if the user is authenticated
    isAuthenticated: state => !!state.authUser,
  },
  plugins: [
    // Vuex persisted state plugin for state persistence
    createPersistedState({
      // Configuration options here (if needed)...
    }),
  ],
})

export default store
