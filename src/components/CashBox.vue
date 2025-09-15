<template>
  <div class="cash-box">
    <img :src="image" alt="" class="box-image" />
    <span class="box-text">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string;
  text: string;
}>();
</script>
<style scoped>
.cash-box {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 50px;
  background-color: white;
  border: 2px solid black;
  border-radius: 0.5rem;
  box-shadow: 12px 6px 2px rgba(0, 0, 0, 1);
  transition: box-shadow 0.4s ease, background-color 0.4s ease;
  overflow: hidden;
}

.box-image {
  height: 30%;
  display: block;
  padding: 0.2rem;
  object-fit: fill;
  margin-right: 0.2rem;
}

.box-text {
  font-size: 0.8rem;
  font-weight: bold;
  color: black;
}
</style>
