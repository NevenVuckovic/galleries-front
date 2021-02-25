<template>
  <div class="mb-3" id="navbar">
    <h1>Gallery</h1>

    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand class="navbar-brand">All Galleries</b-navbar-brand>
      <b-navbar-brand class="navbar-brand">My Galleries</b-navbar-brand>
      <b-navbar-brand class="navbar-brand">Create New Gallery</b-navbar-brand>
      <b-navbar-brand class="navbar-brand">
        <router-link to="/register">Register</router-link>
      </b-navbar-brand>
      <b-navbar-brand class="navbar-brand">
        <router-link to="/login">Login</router-link>
      </b-navbar-brand>
      <b-navbar-brand class="navbar-brand">Logout</b-navbar-brand>
    </b-navbar>
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
  text-decoration: underline;
  color: rgb(255, 255, 255);
  background-color: rgb(23, 184, 117);
  margin: auto;
  text-align: center;
}
</style>