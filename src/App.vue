<template>
  <div id="App">
    <v-app>
      <v-main>
        <Nav />
        <v-parallax
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        >
          <v-card>
            <v-row
              ><v-col cols="6"
                ><v-card-title>NUR AKMAL JALIL</v-card-title
                ><v-card-subtitle>FULL STACK ENGINEER</v-card-subtitle></v-col
              ></v-row
            ></v-card
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
