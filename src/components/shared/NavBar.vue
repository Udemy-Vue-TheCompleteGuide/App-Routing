<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Vue Router</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link to="/" tag="li" class="nav-item" exact-active-class="active">
          <a class="nav-link">Home</a>
        </router-link>
        <router-link to="/user" tag="li" class="nav-item" active-class="active">
          <a class="nav-link">User</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>
