<template>
  <a
    class="text-box"
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    :style="
      backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
    "
  >
    <div class="text-content">
      {{ text }}
    </div>
    <img v-if="icon" :src="icon" alt="icon" class="text-icon" />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
  url: string;
  backgroundImage?: string;
  icon?: string;
}>();
</script>

<style scoped>
.text-box {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  background-size: cover;
  background-position: center 29%;
  background-repeat: no-repeat;

  width: 50%;
  height: 50px;
  border: 2px solid black;
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: 12px 6px 2px rgba(0, 0, 0, 1);
  text-decoration: none;
  color: white;

  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
  transition: box-shadow 0.4s ease, background-color 0.4s ease;
}

.text-box:hover {
  box-shadow: 0 0 10px 10px rgba(255, 223, 0, 0.7),
    12px 6px 2px rgba(0, 0, 0, 1);
}

.text-icon {
  padding: 0.5rem;
  width: 22px;
  height: 22px;
}

.text-box {
  position: relative;
  overflow: hidden;
}

.text-box::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.6);
  z-index: 0;
}

.text-content,
.text-icon {
  position: relative;
  z-index: 1;
}

@media (min-width: 730px) {
  .text-box {
    width: 25%;
  }
}

</style>
