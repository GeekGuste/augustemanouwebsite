<template>
  <CommonLoader />
  <CommonSettingsSwitch />
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
  titleTemplate: `%s - Home Solid`,
  bodyAttrs: {
    class: "solid"
  }
})
</script>