<template>
  <div class="about">
    <v-row align="center" justify="center">
      <v-sheet class="teal darken-4 d-flex flex-column">
        <v-card flat class="teal darken-4">
          <v-row align="center" justify="center">
            <h1 class="white--text">About Me</h1>
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
    <v-container fluid>
      <v-row class="mx-2">
        <v-col cols="12">
          <v-row align="center" justify="center">
            <v-card  class="mx-auto rounded-pill yellow lighten-5" width="80vw">
              <v-row dense>
                <v-col cols="3" md="2" lg="1">
                    <v-avatar color="teal" size="100" height="100">
                      <v-img
                          :src="require('@/assets/some_image.jpg')"
                          width="100"
                          height="100"
                      ></v-img>
                    </v-avatar>
                </v-col>
                <v-col cols="9" md="10" lg="11">
                  <h3>Nur Akmal Jalil</h3>
                  <p>Akmal is a <strong>full stack developer</strong>
                    from Kuala Lumpur, Malaysia. A <strong>game developer</strong>
                    as hobbies. Akmal dream of having his own game studio.</p>
                </v-col>
              </v-row>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
