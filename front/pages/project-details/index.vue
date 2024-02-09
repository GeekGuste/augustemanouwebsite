<template>
  <CommonLoader />
  <CommonSettingsSwitch />
  <HomeNoise />
  <ProjectNavbar />
  <main>
    <ProjectDetails />
  </main>
  <CommonFooter />
</template>

<script setup>
//= Page Head
useHead({
  titleTemplate: `%s - Project Details`,
  bodyAttrs: {
    class: "main-bg"
  }
})
</script>