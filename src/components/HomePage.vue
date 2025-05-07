<script></script>

<template>
  <section id="hero">
    <div class="container hero-content">
      <div class="grid">
        <img src="/src/assets/NEM.jpg" alt="New England Melee Logo" />
      </div>
      <div class="grid">
        <h1>New England Melee</h1>
      </div>
      <div class="grid button-container">
        <a href="https://discord.gg/PjCrsMwz82" role="button" target="_blank">Join the Discord!</a>
        <a
          href="https://www.start.gg/hub/new-england-melee"
          role="button"
          class="secondary"
          target="_blank"
          >Find Tournaments</a
        >
      </div>
    </div>
  </section>

  <section id="about">
    <div class="container">
      <div class="grid">
        <div class="about-image">
          <img
            src="../assets/grouppic1.jpg"
            alt="A group picture of many New England Melee players and organizers"
          />
        </div>
        <div class="about-text">
          <h2>About</h2>
          <p>
            New England Melee is a community of Super Smash Bros. Melee players in the New England
            area. We host tournaments, events, and provide resources for players of all skill
            levels. This text was auto generated and is a placeholder.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section>
    <h1>More stuff will go down here...</h1>
  </section>
</template>

<style scoped>
.hero-content img {
  /* max-width: 25%; */
  width: clamp(20%, 30%, 300px);
  height: auto;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: var(--pico-typography-spacing-vertical);
}

.hero-content h1 {
  text-align: center;
  margin-bottom: var(--pico-typography-spacing-vertical);
}

.hero-content {
  margin-top: 3rem;
  margin-bottom: 6rem;
}

.about-text h2 {
  text-align: center;
  margin-bottom: var(--pico-typography-spacing-vertical);
}

.button-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
}

.about-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-image img {
  width: auto;
  height: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: var(--pico-border-radius);
}
</style>
