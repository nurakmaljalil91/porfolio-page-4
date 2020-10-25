<template>
  <div class="home">
    <v-row v-resize="onResize" align="center" justify="center">
      <v-sheet :width="windowSize.x" :height="windowSize.y" color="teal">
        <v-row align="center" justify="center"> 
          {{windowSize}}
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
