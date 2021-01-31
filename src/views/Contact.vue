<template>
  <div>
    <v-row align="center" justify="center">
      <v-sheet class="teal darken-4 d-flex flex-column">
        <v-card flat class="teal darken-4">
          <v-row align="center" justify="center">
            <h1 class="white--text">Connect With Me</h1>
          </v-row>
        </v-card>

        <v-card flat class="teal darken-4 mb-4">
          <div>
            <hr />
          </div>
        </v-card>

        <v-card flat class="teal darken-4 mb-4">
          <v-row align="center" justify="center">
            <v-btn rounded to="/">Home</v-btn>
          </v-row>
        </v-card>

           <v-card flat class="teal darken-4" max-width="500px">
          <v-row align="center" justify="center">
            <v-card width="80vw">
              <v-card-title class="teal lighten-1" >
                <h2 class="white--text">Nur Akmal Bin Jalil</h2>

              </v-card-title>
              <v-list>
                <v-list-item>
                  <v-list-item-action>
                    <v-icon color="teal darken-1">mdi-phone</v-icon>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>
                      +6019 785 ****
                    </v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-icon color="teal darken-1">mdi-message-text</v-icon>
                  </v-list-item-action>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item>
                  <v-list-item-action>
                    <v-icon color="teal darken-1">mdi-email</v-icon>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>nurakmaljalil91@gmail.com</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider inset></v-divider>

                <v-list-item>
                  <v-list-item-action>
                    <v-icon color="teal darken-1">mdi-map-marker</v-icon>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>Kuala Lumpur, Malaysia</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider inset></v-divider>

              </v-list>

              <v-img
                  :src="require('@/assets/some_image.jpg')"

                  height="200px"
                  width="100vw"
              >
                <div class="fill-height bottom-gradient"></div>
              </v-img>

            </v-card>
          </v-row>
        </v-card>
      </v-sheet>
    </v-row>
  </div>
</template>
