<template>
  <h2 class="home-body-social-links">Cash</h2>
  <div class="cash-container">
    <CashBox image="/revolut-logo.svg" text="@misterhousecat" />
    <CashBox image="/paypal-logo.svg" text="@misterhousecat" />
  </div>
</template>

<script setup lang="ts">
import CashBox from "../../components/CashBox.vue";
</script>

<style scoped>
.home-body-social-links {
  color: white;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
}

.cash-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
}
</style>
