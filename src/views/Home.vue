<template>
  <div class="home">
    <v-row v-resize="onResize" align="center" justify="center">
      <v-sheet
        :width="windowSize.x"
        :height="windowSize.y"
        class="teal accent-3 d-flex align-content-center flex-wrap"
      >
        <v-row align="center" justify="center">
          <!-- <p class="yellow--text">{{ windowSize }}</p> -->
          <h1>Hi, I'm Akmal  </h1><span style='font-size:50px;'>&#9995;</span>
        </v-row>
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
