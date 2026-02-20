<template>
  <RouterLink :to="to" class="nav-button">
    {{ label }}
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string;
  label: string;
}>();
</script>

<style scoped>
.nav-button {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 50px;
  background-color: white;
  border: 2px solid black;
  border-radius: 0.5rem;
  cursor: pointer;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 2em;
  box-shadow: 12px 6px 2px rgba(0, 0, 0, 1);
  transition: box-shadow 0.4s ease, background-color 0.4s ease;
}

.nav-button:hover {
  box-shadow: 0 0 10px 10px rgba(255, 223, 0, 0.7),
    12px 6px 2px rgba(0, 0, 0, 1);
}

@media (min-width: 730px) {
  .nav-button {
    width: 25%;
  }
}
</style>
