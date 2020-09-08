<template>
  <div id="user-detail">
    <h3>User Details</h3>
    <div class="row">
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <label for="userId">Id</label>
            <input type="text" class="form-control" id="userId" disabled :value="user.id">
          </div>
          <div class="form-group">
            <label for="userName">Password</label>
            <input type="text" class="form-control" id="userName" disabled :value="user.name">
          </div>
          <button type="button" class="btn btn-primary" @click="gotoUserStart">Back</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserDetail",
  props: {
    id: String
  },
  computed: {
    user() {
      switch (this.id) {
        case '1': return { id: 1, name: 'User 1'};
        case '2': return { id: 1, name: 'User 2'};
        case '3': return { id: 1, name: 'User 3'};
        default: return { id: 0, name: 'User 0'};
      }
    }
  },
  methods: {
    gotoUserStart() {
      this.$router.push('/user-complete');
    }
  }
}
</script>

<style scoped>

</style>
