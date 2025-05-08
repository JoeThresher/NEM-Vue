<script setup>
import { RouterLink } from 'vue-router'
let storedTheme =
  localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
if (storedTheme) document.documentElement.setAttribute('data-theme', storedTheme)

function toggleTheme() {
  let currentTheme = document.documentElement.getAttribute('data-theme')
  let targetTheme = 'light'

  if (currentTheme === 'light') {
    targetTheme = 'dark'
  }

  document.documentElement.setAttribute('data-theme', targetTheme)
  localStorage.setItem('theme', targetTheme)
}
</script>

<template>
  <div class="bar">
    <header class="container">
      <nav>
        <ul>
          <li>
            <RouterLink to="/" class="contrast"
              ><img src="/src/assets/NEM.jpg" class="header-logo" alt="Logo"
            /></RouterLink>
          </li>
        </ul>
        <ul>
          <li>
            <details class="dropdown">
              <summary>Tournaments</summary>
              <ul dir="rtl">
                <li>
                  <RouterLink to="/calendar">Calendar</RouterLink>
                </li>
                <li>
                  <RouterLink to="/locals">Locals</RouterLink>
                </li>
                <li>
                  <RouterLink to="/regionals">Regionals</RouterLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <button
              @click="toggleTheme"
              class="theme-toggle outline contrast"
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
  </div>
</template>

<style scoped>
.bar {
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
  background-color: var(--pico-background-color);
}
</style>
