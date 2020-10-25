<template>
  <div id="App">
    <v-app>
      <v-main>
        <TransitionPage>
          <router-view></router-view>
        </TransitionPage>
        <Footer />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Footer from "@/components/shared/Footer";
import TransitionPage from "@/components/shared/TransitionPage";
export default {
  name: "App",
  components: {
    Footer,
    TransitionPage,
  },
  data: () => ({
    
  })
};
</script>
