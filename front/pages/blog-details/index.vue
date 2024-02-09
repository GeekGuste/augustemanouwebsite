<template>
  <CommonLoader />
  <CommonSettingsSwitch />
  <HomeNoise />
  <ProjectNavbar />
  <main>
    <BlogMainPost />
    <BlogRelatedPosts />
  </main>
  <CommonFooter />
</template>

<script setup>
//= Page Head
useHead({
  titleTemplate: `%s - Blog Details`,
  bodyAttrs: {
    class: "main-bg"
  }
})
</script>