<template>
  <div id="user-detail">
    <h3>User Details</h3>
    <div class="row">
      <div class="col-md-6">
        <form v-if="user">
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
  data() {
    return {
      user: null,
      users: this.$store.state.users
    }
  },
  computed: {
  },
  methods: {
    gotoUserStart() {
      this.$router.push('/user-complete');
    }
  },
  created() {
    const user = this.users.find(e => {
      return e.id === Number(this.id)
    });
    if (!user) {
      this.$router.push({name: 'error', params: {title: 'User not found', errorMessage: 'The user was not found.'}});
    }
    this.user = user;
  }
}
</script>

<style scoped>

</style>
