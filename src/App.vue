<template>
  <div id="App">
    <v-app>
      <v-main>
        <Nav />
        <v-parallax
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        >
          <v-card>
            <v-card-title>NUR AKMAL JALIL</v-card-title
            ><v-card-subtitle>FULL STACK ENGINEER</v-card-subtitle></v-card
          ></v-parallax
        >
        <v-container fluid>
          <TransitionPage>
            <router-view></router-view>
          </TransitionPage>
          <Footer />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Nav from "@/components/shared/Nav";
import Footer from "@/components/shared/Footer";
import TransitionPage from "@/components/shared/TransitionPage";
export default {
  name: "App",
  components: {
    Nav,
    Footer,
    TransitionPage,
  },
  data: () => ({
    //
  }),
};
</script>
