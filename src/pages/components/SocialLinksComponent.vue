<template>
  <h2 class="home-body-social-links">Follow me</h2>
  <div class="button-container">
    <BaseButton
      image="/tiktok-logo.svg"
      url="https://www.tiktok.com/@real.vivalacat?_t=8dhFpH178Sx&_r=1"
    />
    <BaseButton
      image="/youtube-logo.svg"
      url="https://www.youtube.com/@VLC-Games"
    />
    <BaseButton
      image="/twitch-logo.svg"
      url="https://www.twitch.tv/real_vivalacat?sr=a"
    />
  </div>
</template>

<script setup lang="ts">
import BaseButton from "../../components/BaseButton.vue";
</script>

<style scoped>
.home-body-social-links {
  color: white;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
}

.button-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

@media (min-width: 730px) {
  .button-container {
    width: 50%;
  }
}
</style>
