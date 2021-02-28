<template lang="pug">
.wrapper
  h1 Sign Up
  form(@submit.prevent="register")
    .form-input
      input(v-model="user.email" placeholder="email")
    .form-input
      input(v-model="user.password" placeholder="password" type="password")
    button Sign Up
  <router-link :to="{ name: 'Login', params: {} }">Login</router-link>
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', this.user)
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
