<template>
  <div class="home">
    <v-container fluid>
      <v-expand-transition>
        <h1 v-show="created">Nur Akmal Jalil</h1>
      </v-expand-transition>
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
      this.created = true;
    }, 1000);
  },
};
</script>
