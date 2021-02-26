<template>
  <div id="nav-bar">
    <h1>Galleries Project</h1>
    <nav class="navbar navbar-expand-lg">
      <router-link to="/" class="navbar-brand">All Galleries</router-link>
      <div class="layout-item" v-if="isAuthenticated">
        <div>
          <router-link to="/galleries">My Galleries</router-link>|
          <router-link to="/create">Create New Gallery</router-link>
        </div>
      </div>
      <div class="nav-box ml-auto">
        <template v-if="!isAuthenticated">
          <router-link to="/register">Register</router-link>|
          <router-link to="/login">Login</router-link>
        </template>
        <template v-else>
          <a class="button" @click="logout">Logout</a>
        </template>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "navbar",
  computed: {
    ...mapGetters("auth", ["isAuthenticated"])
  },
  methods: {
    ...mapActions("auth", ["logout"])
  }
};
</script>

<style scoped>
h1 {
  color: rgb(255, 255, 255);
  background-color: rgba(1, 172, 100, 0.795);
  margin: auto;
  text-align: center;
}
body {
  text-align: right;
}
#layout {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgb(52, 125, 189);
  margin-bottom: 50px;
}
#layout a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
.layout-item {
  align-self: center;
}

#nav-bar div {
  justify-content: space-between;
}
nav {
  background-color: teal;
}

.button {
  background-color: darkslategrey; /* Green */

  color: white;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
}
</style>