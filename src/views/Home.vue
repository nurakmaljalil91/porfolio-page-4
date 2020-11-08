<template>
  <div class="home">
    <v-row v-resize="onResize" align="center" justify="center">
      <v-sheet
        :width="windowSize.x"
        :height="windowSize.y"
        class="teal accent-3 d-flex flex-column"
      >
        <v-card flat class="teal accent-3">
          <v-row align="center" justify="center">
            <v-img
              :src="require('@/assets/profile-cartoon-style.png')"
              width="200"
              height="200"
              contain
            ></v-img>
          </v-row>
        </v-card>

        <v-card flat class="teal accent-3">
          <v-row v-if="created" align="center" justify="center">
            <!-- <p class="yellow--text">{{ windowSize }}</p> -->
            <h2>Hi, I'm Akmal</h2>
            <span style="font-size:50px;">&#9995;</span>
          </v-row>
        </v-card>

        <v-card flat class="teal accent-3">
          <v-row align="center" justify="center">
            <h1><strong>I'm building things </strong></h1>
          </v-row>
        </v-card>

        <v-card flat class="teal accent-3">
          <v-row align="center" justify="center">
            <p>
              <strong
                >Full Stack Software Engineer and Game Developer from Malaysia
              </strong>
            </p>
          </v-row>
        </v-card>

        <v-card flat class="teal accent-3">
          <v-row align="center" justify="center">
            <v-btn to="/About">Hire Me!</v-btn>
          </v-row>
        </v-card>
      </v-sheet>
    </v-row>
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
