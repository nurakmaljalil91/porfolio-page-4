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
            <v-card  class="mx-auto rounded-pill yellow lighten-5" width="80vw" max-width="1000px">
              <v-row dense>
                <v-col cols="3" md="2" lg="2" >
                    <v-avatar color="teal" size="100" height="100" >
                      <v-img
                          :src="require('@/assets/some_image.jpg')"
                          width="100"
                          height="100"
                      ></v-img>
                    </v-avatar>
                </v-col>
                <v-col cols="9" md="10" lg="10">
                  <h3>Nur Akmal Jalil</h3>
                  <p>Akmal is a <strong>full stack developer</strong>
                    from Kuala Lumpur, Malaysia. A <strong>game developer</strong>
                    as hobbies. Akmal dream of having his own game studio.</p>
                </v-col>
              </v-row>
            </v-card>
          </v-row>
        </v-col>

        <v-col cols="12">
          <v-row align="center" justify="center">
            <v-card width="80vw" flat class="mx-auto yellow lighten-5" max-width="1000px">
              <v-card-title>Welcome to the official website of Nur Akmal Jalil</v-card-title>
              <v-divider></v-divider>
              <v-card-text class="text-h6 black--text">What do I do, and what's in for you?</v-card-text>
              <v-divider></v-divider>
              <v-card-text class="body-1 black--text">Hello everyone, my name is <strong>Nur Akmal Bin Jalil</strong>.
                I'm currently working in <a href="http://www.n2nconnect.com/"><strong class="blue--text">N2N Connect Sdn
                  Bhd</strong></a>, Kuala Lumpur, Malaysia as software engineer. My work in this company include develop
                a web API, Website, WebSocket, and some Dev Ops. I was a student in <a href="https://www.mmu.edu.my/">
                  <strong class="blue--text"> Multimedia University Cyberjaya Malaysia</strong></a> as computer
                science student. My major is in game development.

                <v-spacer class="mb-2"></v-spacer>
                Knowledge of computer science is the modern superpower and I would like to make world a better place by
                using it. I am especially interested in helping people with technological innovation, entrepreneurship
                and inspiring as many young students for computer science as possible.
                <v-spacer class="mb-2"></v-spacer>
                However, I am a person of thousand interests. My major interest is in graphic programming and AI. My
                hobby is to develop a game and design a website. I also enjoy playing game, listening to music and doing
                sports (mainly football and basketball).
                <v-spacer class="mb-2"></v-spacer>
                If you company looking for a full stack developer who ready to have any challenge.I'm a guy
                for you company.Hit me up then!
              </v-card-text>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>


  </div>
</template>
