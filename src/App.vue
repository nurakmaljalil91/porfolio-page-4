<template>
  <div id="App">
    <v-app>
      <v-main class="teal darken-4">
        <Nav />
        <TransitionPage>
          <router-view></router-view>
        </TransitionPage>
        <Footer />
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
  data: () => ({}),
};
</script>
