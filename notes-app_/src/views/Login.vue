<template lang="pug">
  .wrapper
    h1 Sign In
    form(@submit.prevent="login")
      .form-input
        input(v-model="user.email" placeholder="email")
      .form-input
        input(v-model="user.password" placeholder="password" type="password")
      button Sign In
    <router-link :to="{ name: 'Registration', params: {} }">Registration</router-link>
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
    login () {
      this.$store.dispatch('login', this.user)
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
