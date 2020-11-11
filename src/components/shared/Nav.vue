<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      absolute
      temporary
      class="teal darken-4"
      dark
    >
      <v-list>
        <v-list-item>
          <router-link to="/" class="white--text"><strong>NUR AKMAL JALIL</strong> </router-link>
        </v-list-item>
        <v-list-item>
          <router-link to="/About" class="white--text">About</router-link>
        </v-list-item>
        <v-list-item>
          <router-link to="/Works" class="white--text">Works</router-link>
        </v-list-item>
        <v-list-item>
          <router-link to="/Contact" class="white--text"><strong>Contact</strong> </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar dark flat class="teal darken-4">
      <v-btn text to="/" class="teal darken-4 white--text">
        <strong>NUR AKMAL JALIL</strong>
      </v-btn>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        class="hidden-md-and-up mx-auto"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <div class="hidden-sm-and-down">
        <v-btn text to="/About" class="mx-6 teal darken-4 white--text"
          ><strong> About</strong></v-btn
        >
        <v-btn text to="/Works" class="mx-6 teal darken-4 white--text"
          ><strong>Works</strong>
        </v-btn>
        <v-btn text to="/Contact" class="mx-6 teal darken-4 white--text">
          <strong>Contact</strong>
        </v-btn>
      </div>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
