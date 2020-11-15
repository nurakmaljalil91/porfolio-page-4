<template>
  <div class="home">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-sheet class="teal darken-4 d-flex flex-column">
          <v-card flat class="teal darken-4">
            <v-row align="center" justify="center">
              <v-img
                :src="require('@/assets/profile-cartoon-style.png')"
                width="200"
                height="200"
                contain
              ></v-img>
            </v-row>
          </v-card>

          <v-card flat class="teal darken-4">
            <v-row v-if="created" align="center" justify="center">
              <!-- <p class="yellow--text">{{ windowSize }}</p> -->
              <h2 class="yellow--text">Hi,</h2>
              <h2 class="white--text">I'm Akmal</h2>
              <span style="font-size: 50px">&#9995;</span>
            </v-row>
          </v-card>

          <v-card flat class="teal darken-4">
            <v-row align="center" justify="center">
              <h1 class="white--text text-sm-body-1">
                <strong># I'm building things #</strong>
              </h1>
            </v-row>
          </v-card>

          <v-card flat class="teal darken-4">
            <v-row align="center" justify="center" no-gutters>
              <p class="white--text mr-2">
                <strong>Full Stack Software Engineer and </strong>
              </p>
              <p class="yellow--text">
                <strong> Game Developer from Malaysia </strong>
              </p>
            </v-row>
          </v-card>

          <v-card flat class="teal darken-4 my-4">
            <v-row align="center" justify="center">
              <a href="https://www.instagram.com/nurakmaljalil/">
                <i class="fab fa-instagram fa-2x mr-4 white--text"> </i>
              </a>
              <a href="https://www.facebook.com/nour.arc.malt">
                <i class="fab fa-facebook fa-2x mr-4 white--text"> </i>
              </a>
              <a href="https://www.linkedin.com/in/nur-akmal-jalil-43a7b8174/">
                <i class="fab fa-linkedin fa-2x mr-4 white--text"> </i>
              </a>
              <a href="https://github.com/nurakmaljalil91">
                <i class="fab fa-github fa-2x mr-4 white--text"> </i>
              </a>
            </v-row>
          </v-card>

          <v-card flat class="teal darken-4">
            <v-row align="center" justify="center">
              <v-btn to="/About">Hire Me!</v-btn>
            </v-row>
          </v-card>
        </v-sheet>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import ProfileCard from "@/components/ProfileCard";
export default {
  name: "Home",
  // components: {
  //   ProfileCard,
  // },
  data() {
    return {
      windowSize: {
        x: 0,
        y: 0,
      },
      created: false,
    };
  },
  created() {
    setTimeout(() => {
      this.created = true;
    }, 1000);
  },
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    },
  },
};
</script>

<style scoped>
.hundred-height {
  height: 100%;
}
</style>
