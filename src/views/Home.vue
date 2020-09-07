<template>
  <div class="home">
    
    <div class="text-center">
      <v-btn rounded color="primary" dark to="{name: 'About'}">About</v-btn>
      <v-btn rounded color="primary" dark to="{name: 'Works'}">Works</v-btn>
      <v-btn rounded color="primary" dark to="{name: 'Contact'}">Contact</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
