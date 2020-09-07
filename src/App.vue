<template>
  <div id="App">
    <v-app>
      <v-main>
        <v-container fluid>
          <router-view></router-view>
          <Footer />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Footer from '@/components/shared/Footer'
export default {
  name: "App",
  components: {
    Footer
  },
  data: () => ({
    //
  }),
};
</script>
