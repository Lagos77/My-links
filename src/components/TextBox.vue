<template>
  <div
    class="text-box"
    :style="
      backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
    "
  >
    <div class="text-content">
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
  backgroundImage?: string;
}>();
</script>

<style scoped>
.text-box {
  position: relative;
  overflow: hidden;
  z-index: 1;

  background-color: darkgray;
  border: 1px solid black;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  text-align: center;
  color: white;
  width: 50%;
  padding: 1.5rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;

  box-shadow: 12px 6px 2px rgba(0, 0, 0, 1);
}

.text-box::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 0;
}

.text-content {
  position: relative;
  z-index: 1;
}
</style>
