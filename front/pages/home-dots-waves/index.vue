<template>
  <CommonLoader />
  <CommonSettingsSwitch />
  <HomeWaves />
  <HomeNavbar />
  <main>
    <HomeMainBox />
    <HomeServices />
    <HomePortfolio />
    <HomeTestimonials />
    <HomeBlog />
    <HomeContact />
  </main>
  <CommonFooter />
</template>

<script setup>
//= Page Head
useHead({
  titleTemplate: `%s - Home Dots Waves`,
  bodyAttrs: {
    class: "dots-waves"
  }
})
</script>