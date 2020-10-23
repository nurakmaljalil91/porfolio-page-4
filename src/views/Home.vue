<template>
  <div class="home">
    <v-container fluid>
      <v-expand-transition>
        <h1 v-show="created">NUR AKMAL JALIL</h1>
      </v-expand-transition>

      <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item
          v-for="(item, i) in items"
          :key="i"
          :color="item.color"
          :icon="item.icon"
          fill-dot
        >
          <v-card :color="item.color" dark>
            <v-card-title class="title">
              N2N Connect Sdn Bhd
            </v-card-title>
            <v-card-text class="white text--primary">
              <p>
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando
                voluptatibus, vix an salutandi sententiae.
              </p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
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
};
</script>
