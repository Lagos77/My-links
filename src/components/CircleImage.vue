<template>
  <div class="circle-wrapper">
    <img :src="src" alt="" class="circle-image" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
    src: string;
}>();
</script>

<style scoped>
.circle-wrapper {
  width: 12rem;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid black;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 6px 6px 30px rgba(0, 0, 0, 1);
}

.circle-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
