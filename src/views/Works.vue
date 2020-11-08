<template>
  <div>
    <v-row v-resize="onResize" align="center" justify="center">
      <v-sheet
        :width="windowSize.x"
        :height="windowSize.y"
        class="teal accent-3 d-flex flex-column"
      >
        <v-card flat class="teal accent-3">
          <v-row align="center" justify="center">
            <h1>This is works page</h1>
          </v-row>
        </v-card>

        <v-card flat class="teal accent-3">
          <v-row align="center" justify="center">
            <v-btn rounded color="primary" to="/">Home</v-btn>
          </v-row>
        </v-card>
      </v-sheet>
    </v-row>
  </div>
</template>

<script>
export default {
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
