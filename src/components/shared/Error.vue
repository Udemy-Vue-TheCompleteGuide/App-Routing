<template>
  <div id="error-not-found">
    <h1>{{title}}</h1>
    <p>{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
name: "ErrorNotFound",
  props: {
    title: String,
    errorMessage: String
  }
}
</script>

<style scoped>

</style>
