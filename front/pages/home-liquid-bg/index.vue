<template>
  <CommonLoader />
  <CommonSettingsSwitch />
  <HomeLiquid />
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
  titleTemplate: `%s - Home Liquid Background`,
  bodyAttrs: {
    class: "liquid"
  }
})
</script>