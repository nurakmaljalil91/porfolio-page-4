<template>
  <div>
    <v-card class="mx-auto rounded-lg" width="500" elevation="4">
      <v-responsive :aspect-ratio="16 / 9">
        <v-img
          :src="require('@/assets/profile-cartoon-style.png')"
          aspect-ratio="1.7"
          contain
        ></v-img>
        <v-card-title
          ><h1 class="teal--text">Full Stack Engineer</h1>
          <p class="teal--text">
            Game Developer, Programmer, Web Developer & Entrepreneur
          </p></v-card-title
        >
      </v-responsive>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
};
</script>
