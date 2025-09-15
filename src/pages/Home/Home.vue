<template>
  <main class="home">
    <h1 class="title">Welcome</h1>
    <CircleImage src="/dksonicx.png" />
    <h2 class="home-body-social-links">Cash</h2>
    <div class="cash-container">
      <CashBox image="/revolut-logo.svg" text="@misterhousecat"/>
      <CashBox image="/paypal-logo.svg" text="@misterhousecat"/>
    </div>

    <h2 class="home-body-social-links">Community</h2>
    <CommunityButton
      text="Mega Fans"
      backgroundImage="/mega-man.webp"
      url="https://chat.whatsapp.com/FyD0OoS9StoCOdmjmP96Fp"
      icon="/whatsapp-icon.webp"
    />
    <h2 class="home-body-social-links">Follow me</h2>
    <div class="button-container">
      <BaseButton image="/tiktok-logo.svg" url="https://www.tiktok.com/@real.vivalacat?_t=8dhFpH178Sx&_r=1" />
      <BaseButton image="/youtube-logo.svg" url="https://www.youtube.com/@VLC-Games" />
      <BaseButton image="/twitch-logo.svg" url="https://www.twitch.tv/real_vivalacat?sr=a" />
    </div>
    <h2 class="home-body-news">News</h2>
    <div class="news-container">
      <TextBox text="DKC2 (DK Only): TBA" backgroundImage="/dk2-cover.jpg"/>
    </div>
  </main>
</template>

<script setup lang="ts">
import CircleImage from "../../components/CircleImage.vue";
import CommunityButton from "../../components/CommunityButton.vue";
import BaseButton from "../../components/BaseButton.vue";
import TextBox from "../../components/TextBox.vue";
import CashBox from "../../components/CashBox.vue";
</script>

<style scoped>
.title {
  color: white;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
}
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  background: 
  linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.9)),
  url("/home-wallpaper.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

.cash-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
}

.home-body-social-links {
  color: white;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
}

.button-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.home-body-news {
  color: white;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
}

.news-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding-bottom: 3.5rem;
}
</style>
