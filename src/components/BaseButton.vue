<template>
  <a :href="url" class="base-button" target="_blank" rel="noopener">
    <img :src="image" alt="" class="button-image" />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  image: string;
  url: string;
}>();
</script>

<style scoped>
.base-button {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 50px;
  background-color: white;
  border: 2px solid black;
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0;
  box-shadow: 12px 6px 2px rgba(0, 0, 0, 1);
  transition: box-shadow 0.4s ease, background-color 0.4s ease;

  overflow: hidden;
}
.base-button:hover {
  box-shadow: 0 0 10px 10px rgba(255, 223, 0, 0.7),
    12px 6px 2px rgba(0, 0, 0, 1);
}

.button-image {
  width: 70%;
  height: 70%;
  object-fit: contain;
  display: block;
  padding: 0.5rem;
}
</style>
