<template>
  <div class="home">
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-img
            :src="require('@/assets/profile-cartoon-style.png')"
            aspect-ratio="1.7"
            contain
          ></v-img>
        </v-col>
        <v-col cols="6">
          <div class="text-center">
            <v-btn rounded color="primary" dark to="{name: 'About'}"
              >About</v-btn
            >
            <v-btn rounded color="primary" dark to="{name: 'Works'}"
              >Works</v-btn
            >
            <v-btn rounded color="primary" dark to="{name: 'Contact'}"
              >Contact</v-btn
            >
          </div></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
