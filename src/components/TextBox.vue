<template>
  <div
    class="text-box"
    :style="
      backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
    "
  >
    <div class="text-content">
      {{ text }}
      <span
        v-if="percentage !== undefined"
        :style="{ color: percentageColor }"
        class="percentage"
      >
        {{ percentage }}%
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{
  text: string;
  percentage?: number;
  backgroundImage?: string;
}>();

const percentageColor = computed(() => {
  const p = props.percentage;
  if (p === undefined) return "white";
  if (p === 100) return "limegreen";
  if (p === 0) return "lightgray";
  if (p < 50) return "deepskyblue";
  if (p < 99) return "yellow";
  return "white";
});
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

.percentage {
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
}

.text-box::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 0;
}

.text-content {
  position: relative;
  z-index: 1;
}

@media (min-width: 730px) {
  .text-box {
    width: 25%;
  }
}
</style>
