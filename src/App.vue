<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import HeaderBar from './components/HeaderBar.vue'
</script>

<template>
  <HeaderBar />

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

  <main>
    <section id="about">
      <div class="container">
        <div class="grid">
          <div class="about-image">
            <p>(an image will go here)</p>
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
  </main>

  <!-- <RouterView /> -->
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
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
