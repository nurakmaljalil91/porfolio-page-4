<template>
  <div class="home">
    <v-container fluid>
      <v-slide-y-transition>
        <h1 v-show="created">Nur Akmal Jalil</h1>
      </v-slide-y-transition>
    </v-container>
  </div>
</template>

<script>
//import ProfileCard from "@/components/ProfileCard";
export default {
  name: "Home",
  data() {
    return {
      created: false,
    };
  },
  created() {
    setTimeout(() => {
        this.created = true
      }, 1000);
  }};
</script>
