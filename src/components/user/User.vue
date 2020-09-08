<template>
  <div id="user">
    <h1>The User Page</h1>

    <hr>

    <h3>Navigate from code</h3>
    <p>Navigate from code using $.router methods.</p>
    <button class="btn btn-primary" @click="navigateToHome">Go Home</button>

    <hr>

    <h3>Getting parameter value from route</h3>
    <p>Using this.$route parameter property. Udemy uses watch to be able to see changes between
    urls that use the same component.</p>
    <p>To me it works just fine without the watch. Provably is the version.</p>
    <label>User Id: {{ this.$route.params.id }}</label>
    <br>
    <router-link to="/user/1">User 1</router-link>
    <span style="margin-left: 5px; margin-right: 5px">/</span>
    <router-link to="/user/2">User 2</router-link>
  </div>
</template>

<script>
export default {
  name: "User",
  methods: {
    navigateToHome() {
      // https://router.vuejs.org/guide/essentials/navigation.html
      // 1) this.$router.push('/');
      // 2) using object
      this.$router.push({name: 'home'});
    }
  }
}
</script>

<style scoped>

</style>
