<template>
  <div class="home">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <div class="text-center">
            <ProfileCard />
          </div>
        </v-col>
        <v-col cols="12">
          <div class="text-center">
            <v-row align="center" justify="center">
              <v-col lg="3" cols="12">
                <v-btn
                  width="108"
                  outlined
                  rounded
                  color="teal"
                  dark
                  to="/About"
                  >About</v-btn
                ></v-col
              >
              <v-col lg="3" cols="12"
                ><v-btn
                  width="108"
                  outlined
                  rounded
                  color="teal"
                  dark
                  to="/Works"
                  >Works</v-btn
                ></v-col
              >
              <v-col lg="3" cols="12">
                <v-btn
                  width="108"
                  outlined
                  rounded
                  color="teal"
                  dark
                  to="/Contact"
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
import ProfileCard from "@/components/ProfileCard";
export default {
  name: "Home",
  components: {
    ProfileCard,
  },
};
</script>
