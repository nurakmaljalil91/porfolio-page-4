<template>
  <div>
    <v-row align="center" justify="center">
      <v-sheet class="teal darken-4 d-flex flex-column">
        <v-card flat class="teal darken-4">
          <v-row align="center" justify="center">
            <h1 class="white--text">Check Out My Works</h1>
          </v-row>
        </v-card>

        <v-card flat class="teal darken-4 mb-4">
          <div>
            <hr />
          </div>
        </v-card>

        <v-card flat class="teal darken-4">
          <v-row align="center" justify="center">
            <v-btn rounded to="/">Home</v-btn>
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
