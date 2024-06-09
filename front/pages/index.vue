<template>
  <CommonLoader />
  <CommonSettingsSwitch />
  <HomeNoise />
  <HomeNavbar />
  <main>
    <HomeMainBox />
    <HomeServices />
    <!--HomePortfolio />
    <HomeTestimonials />
    <HomeBlog /-->
    <HomeContact />
  </main>
  <CommonFooter />
</template>

<script setup>
//= Page Head
useHead({
  titleTemplate: `%s - Home Main`,
  bodyAttrs: {
    class: "main-home",
  },
});
</script>
