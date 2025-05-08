<script setup>
import tournaments from '../data/tournaments.json'

import prodigyImage from '../assets/prodigy.jpg'

const name = tournaments.locals[0].name
const image = getImage(name)
const description = tournaments.locals[0].description
const location = tournaments.locals[0].location
const time = tournaments.locals[0].time
const startgg = tournaments.locals[0].startgg
const googlemaps = tournaments.locals[0].googlemaps
const contact = tournaments.locals[0].contact

function getImage(tournamentName) {
  switch (tournamentName) {
    case 'Prodigy Smash Weekly':
      return prodigyImage
    default:
      return null
  }
}
</script>

<template>
  <article id="prodigy">
    <div class="grid">
      <div class="left">
        <img :src="image" alt="No image found" />
      </div>
      <div class="right">
        <h2>{{ name }}</h2>
        <p>
          {{ description }}
        </p>
        <div class="details">
          <p>
            <strong>Location:</strong> {{ location }}<br /><strong>Time:</strong>
            {{ time }}
          </p>
        </div>
        <div class="grid local-links">
          <a :href="startgg" class="outline secondary" role="button" target="_blank"
            ><img src="../assets/startgg.svg" alt="Start GG logo" /> Start.gg</a
          >
          <a :href="googlemaps" class="outline secondary" role="button" target="_blank"
            ><img src="../assets/googlemaps.svg" alt="Google Maps logo" /> Location</a
          >
          <a :href="contact" class="outline secondary" role="button" target="_blank"
            ><img src="../assets/envelope.svg" alt="Envelope logo" /> Contact</a
          >
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
h2 {
  text-align: center;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.left {
  display: flex;
  justify-content: center;
  align-items: center;
}

.left img {
  border-radius: var(--pico-border-radius);
  border-color: var(--pico-secondary-border);
  border-style: solid;
  border-width: var(--pico-border-width);
  line-height: 300px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

a img {
  width: 1em;
  height: 1em;
}
</style>
