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
    padding: 0;
    box-shadow: 12px 6px 2px rgba(0, 0, 0, 1);
    transition: box-shadow 0.4s ease, background-color 0.4s ease;
    overflow: hidden;
  }
  
  .box-image {
  width: 100%;
  height:55%;
  object-fit:fill;
  display: block;
  padding: 0rem;
  }

  .box-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  margin-right: 1rem;
}

  </style>