<template>
  <DefaultLayout title="Mods">
    <div class="mods-container">
      <TextBox
        text="DKC2 (DK Only):"
        :percentage="75"
        backgroundImage="/dkc2-only-dk.png"
      />
      <TextBox
        text="Rockman & Forte:"
        :percentage="0"
        backgroundImage="/r&f.png"
      />
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "../../layout/DefaultLayout.vue";
import TextBox from "../../components/TextBox.vue";
</script>

<style scoped>
.mods-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding-bottom: 3.5rem;
}
</style>
