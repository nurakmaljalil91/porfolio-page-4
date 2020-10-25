<template>
  <div class="home">
    <v-row v-resize="onResize" align="center" justify="center">
      <v-subheader>Window Size</v-subheader>
      {{ windowSize }}
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
      items: [
        {
          color: "red lighten-2",
          icon: "mdi-star",
        },
        {
          color: "purple darken-1",
          icon: "mdi-book-variant",
        },
        {
          color: "green lighten-1",
          icon: "mdi-airballoon",
        },
        {
          color: "indigo",
          icon: "mdi-buffer",
        },
      ],
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
