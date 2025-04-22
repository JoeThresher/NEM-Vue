<script setup>
// import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="container">
    <nav>
      <ul>
        <li>
          <a href="/NEM-Mockup" class="contrast"
            ><img src="/src/assets/NEM.jpg" class="header-logo" alt="Logo"
          /></a>
        </li>
      </ul>
      <ul>
        <li>
          <details class="dropdown">
            <summary>Tournaments</summary>
            <ul dir="rtl">
              <li>
                <a
                  href="https://calendar.google.com/calendar/u/0/embed?src=86oup09opi66vbhshrftu4uijs@group.calendar.google.com&ctz=America/New_York"
                  target="_blank"
                  >Calendar</a
                >
              </li>
              <li>
                <a href="src/pages/locals.html">Locals</a>
              </li>
              <li>
                <a href="src/pages/regionals.html">Regionals</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <button
            class="theme-toggle"
            id="theme-toggle"
            type="button"
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width="1em"
              height="1em"
              fill="currentColor"
              class="theme-toggle__expand"
              viewBox="0 0 32 32"
            >
              <clipPath id="theme-toggle__expand__cutout">
                <path d="M0-11h25a1 1 0 0017 13v30H0Z" />
              </clipPath>
              <g clip-path="url(#theme-toggle__expand__cutout)">
                <circle cx="16" cy="16" r="8.4" />
                <path
                  d="M18.3 3.2c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3S14.7.9 16 .9s2.3 1 2.3 2.3zm-4.6 25.6c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3-1 2.3-2.3 2.3-2.3-1-2.3-2.3zm15.1-10.5c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zM3.2 13.7c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3S.9 17.3.9 16s1-2.3 2.3-2.3zm5.8-7C9 7.9 7.9 9 6.7 9S4.4 8 4.4 6.7s1-2.3 2.3-2.3S9 5.4 9 6.7zm16.3 21c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zm2.4-21c0 1.3-1 2.3-2.3 2.3S23 7.9 23 6.7s1-2.3 2.3-2.3 2.4 1 2.4 2.3zM6.7 23C8 23 9 24 9 25.3s-1 2.3-2.3 2.3-2.3-1-2.3-2.3 1-2.3 2.3-2.3z"
                />
              </g>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  </header>

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
header {
  z-index: 2;
  position: sticky;
  top: 0;
  background-color: var(--pico-background-color);
}

.header-logo {
  width: 60px;
  height: auto;
  border-radius: 50%;
  will-change: filter;
  transition: filter 300ms;
}

.header-logo:hover {
  filter: drop-shadow(0 0 0.5em var(--pico-color-yellow-100));
}

#theme-toggle {
  color: var(--pico-contrast);
}

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
