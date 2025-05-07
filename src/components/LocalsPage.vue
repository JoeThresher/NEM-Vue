<script setup>
import TournamentCard from './TournamentCard.vue'
</script>

<template>
  <div class="container">
    <h1>Locals</h1>
    <p style="text-align: center">
      This page (and website) are a work-in-progress. More locals will be added with time.
    </p>
    <TournamentCard />
  </div>
</template>

<style scoped>
h1,
h2 {
  text-align: center;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.left img {
  border-radius: var(--pico-border-radius);
  border-color: var(--pico-secondary-border);
  border-style: solid;
  border-width: var(--pico-border-width);
}

a img {
  width: 1em;
  height: 1em;
}
</style>
