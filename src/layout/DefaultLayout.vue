<template>
  <main class="layout">
    <h1 class="title">{{ title }}</h1>
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<style scoped>
.title {
  color: white;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
}
.layout {
  position: relative; /* add this */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(0, 0, 0, 0.9)
    ),
    url("/home-wallpaper.jpeg");
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}

@media (min-width: 730px) {
  .layout {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  }

  .layout::before {
    content: "";
    position: fixed;
    inset: 0;
    background: url("/home-wallpaper.jpeg");
    background-size: cover;
    background-position: center;
    filter: blur(4px) brightness(0.8);
    z-index: -1;
  }
}
</style>
