<template>
  <article id="prodigy">
    <div class="grid">
      <div class="left">
        <img src="../assets/prodigy.jpg" alt="Image of the Prodigy venue" />
      </div>
      <div class="right">
        <h2>Prodigy Smash Weekly</h2>
        <p>
          Prodigy Smash Weekly is a weekly tournament in western Massachusetts every Friday nights.
          Also features Smash Ultimate and Rivals of Aether 2 brackets.
        </p>
        <div class="details">
          <p>
            <strong>Location:</strong> 116 Pleasant St, Easthampton, MA 01027<br /><strong
              >Time:</strong
            >
            Friday nights, doors 6:00pm, bracket 7:00pm
          </p>
        </div>
        <div class="grid local-links">
          <a
            href="https://start.gg/ProdigySmash"
            class="outline secondary"
            role="button"
            target="_blank"
            ><img src="../assets/startgg.svg" alt="Start GG logo" /> Start.gg</a
          >
          <a
            href="https://maps.app.goo.gl/rXsv7r5SBdKJyKme8"
            class="outline secondary"
            role="button"
            target="_blank"
            ><img src="../assets/googlemaps.svg" alt="Google Maps logo" /> Location</a
          >
          <a
            href="https://discord.gg/CAdcxP5sH3"
            class="outline secondary"
            role="button"
            target="_blank"
            ><img src="../assets/envelope.svg" alt="Envelope logo" /> Contact</a
          >
        </div>
      </div>
    </div>
  </article>
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
