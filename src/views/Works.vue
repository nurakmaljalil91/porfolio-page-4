<template>
  <div>
    <v-row align="center" justify="center">
      <v-sheet class="teal darken-4 d-flex flex-column">
        <v-card flat class="teal darken-4">
          <v-row align="center" justify="center">
            <h1 class="white--text">Check Out My Works</h1>
          </v-row>
        </v-card>

        <v-card flat class="teal darken-4 ">
          <div>
            <hr/>
          </div>
        </v-card>
      </v-sheet>
    </v-row>

    <v-container fluid>
      <v-row>
        <v-col
            v-for="n in 9"
            :key="n"
            class="d-flex child-flex"
            xl="3"
            lg="4"
            md="6"
            sm="12"
            xs="12"
            cols="12"
        >
          <v-img
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
              aspect-ratio="1"
              class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-container>

    <v-card flat class="teal darken-4 mb-16">
      <v-row align="center" justify="center">
        <v-btn rounded to="/">Home</v-btn>
      </v-row>
    </v-card>
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
    }
  },
  created() {
    setTimeout(() => {
      this.created = true;
    }, 1000)
  },
  mounted() {
    this.onResize()
  },
  methods: {
    onResize() {
      this.windowSize = {x: window.innerWidth, y: window.innerHeight}
    }
  }
}
</script>
