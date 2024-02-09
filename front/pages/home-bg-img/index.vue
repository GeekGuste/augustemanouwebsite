<template>
  <CommonLoader />
  <CommonSettingsSwitch />
  <HomeBgImage />
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
  titleTemplate: `%s - Home Background Image`
})
</script>