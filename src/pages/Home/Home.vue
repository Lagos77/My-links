<template>
  <DefaultLayout title="Welcome">
    <CircleImage src="/avatar.jpg" />

    <NavButton to="/mods" label="Mods" />

    <!--   <CashComponent /> -->

    <h2 class="home-body-social-links">Community</h2>
    <CommunityButton
      text="Mega Fans"
      backgroundImage="/mega-man.jpg"
      url="https://chat.whatsapp.com/FyD0OoS9StoCOdmjmP96Fp"
      icon="/whatsapp-icon.webp"
    />

    <SocialLinksComponent />
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "../../layout/DefaultLayout.vue";
import CircleImage from "../../components/CircleImage.vue";
import CommunityButton from "../../components/CommunityButton.vue";
import SocialLinksComponent from "../components/SocialLinksComponent.vue";
import NavButton from "../../components/NavButton.vue";
/* import CashComponent from "../components/CashComponent.vue"; */
</script>

<style scoped>
.home-body-social-links {
  color: white;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
}
</style>
