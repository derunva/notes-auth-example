import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    notes: []
  },
  getters: {
    isLoggedIn (state) {
      return state.user
    }
  },
  mutations: {
    AUTH (state, payload) {
      state.user = payload
    }
  },
  actions: {
    loadNotes (store) {
      console.log(store)
      axios.get('http://localhost:3000/notes', {
        headers: {
          Authorization: 'jwt ' + store.state.user.token
        }
      })
        .then(response => {
          store.notes = response.data
        })
    },
    register (store, payload) {
      console.log('register', store)
      axios.post('http://localhost:3000/users/register', payload)
    },
    login ({ commit }, payload) {
      console.log('login')
      axios.post('http://localhost:3000/users/auth', payload)
        .then(response => {
          commit('AUTH', response.data)
        })
    }
  },
  modules: {
  }
})
