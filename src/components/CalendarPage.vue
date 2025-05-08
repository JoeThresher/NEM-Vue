<template>
  <section class="calendar-section">
    <div class="container">
      <h1>Tournament Calendar</h1>
      <div class="calendar">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=86oup09opi66vbhshrftu4uijs%40group.calendar.google.com&ctz=America%2FNew_York"
          style="border: 0"
          width="1200"
          height="800"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.calendar {
  display: flex;
  justify-content: center;
  align-items: center;
}

iframe {
  border-radius: var(--pico-border-radius);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
