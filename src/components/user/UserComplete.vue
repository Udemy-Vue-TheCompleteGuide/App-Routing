<template>
  <div id="user">
    <transition mode="out-in"
                enter-active-class="animate__animated animate__fadeIn animate__faster"
                leave-active-class="animate__animated animate__fadeOut animate__faster"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "UserComplete",
}
</script>

<style scoped>

</style>
