<template>
  <div id="app" class="container">
    <NavBar></NavBar>
    <div class="row">
      <div class="col-md-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/shared/NavBar';

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>

</style>
