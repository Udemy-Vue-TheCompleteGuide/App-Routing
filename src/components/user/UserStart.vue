<template>
  <div id="user-start">
    <div class="row">
      <div class="col-md-12">
        <h2>User List</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <span v-if="users.length === 0">No data to display</span>
        <table v-else class="table table-striped table-bordered">
          <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="u in users" :key="u.id">
            <td>{{ u.id }}</td>
            <td>{{ u.name }}</td>
            <td>
              <button class="btn btn-info detail" @click="gotoUserDetail(u.id)">Detail</button>
              <button class="btn btn-primary edit" @click="gotoUserEdit(u.id)">Edit</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserStart",
  data() {
    return {
      users: this.$store.state.users
    }
  },
  methods: {
    gotoUserDetail(id) {
      this.$router.push({name: 'user-detail', params: {id: String(id)}});
    },
    gotoUserEdit(id) {
      this.$router.push({name: 'user-edit', params: {id}});
    }
  }
}
</script>

<style scoped>
.detail {
  margin-right: 5px;
}
</style>
