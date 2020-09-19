<template>
  <div class="home">
    <v-container fluid>
      <v-row>
        <v-col lg="6" cols="12">
          <v-img
            :src="require('@/assets/profile-cartoon-style.png')"
            aspect-ratio="1.7"
            contain
          ></v-img>
          <div class="text-center">
            <h1 class="teal--text">Full Stack Engineer</h1>
            <p class="teal--text">Game Developer, Programmer, Web Developer & Entrepreneur</p>
          </div>
        </v-col>
        <v-col lg="6" cols="12">
          <div class="text-center">
            <v-row>
              <v-col cols="12">
                <v-btn width="108" outlined rounded color="teal" dark to="/About"
                  >About</v-btn
                ></v-col
              >
              <v-col cols="12"
                ><v-btn width="108" outlined rounded color="teal" dark to="/Works"
                  >Works</v-btn
                ></v-col
              >
              <v-col cols="12">
                <v-btn width="108" outlined rounded color="teal" dark to="/Contact"
                  >Contact</v-btn
                ></v-col
              >
            </v-row>
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
