<template>
  <div id="user">
    <h1>The User Page</h1>

    <hr>

    <h3>Navigate from code</h3>
    <p>Navigate from code using $.router methods.</p>
    <button class="btn btn-primary" @click="navigateToHome">Go Home</button>
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
      this.$router.push({ name: 'home' });
    }
  }
}
</script>

<style scoped>

</style>
