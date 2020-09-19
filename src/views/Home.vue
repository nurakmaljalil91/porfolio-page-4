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
        </v-col>
        <v-col lg="6" cols="12">
          <div class="d-flex align-center ">
            <v-row>
              <v-col  cols="12">
                <v-btn rounded color="primary" dark to="/About"
                  >About</v-btn
                ></v-col
              >
              <v-col cols="12"
                ><v-btn rounded color="primary" dark to="/Works"
                  >Works</v-btn
                ></v-col
              >
              <v-col cols="12">
                <v-btn rounded color="primary" dark to="/Contact"
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
