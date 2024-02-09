<template>
  <CommonLoader />
  <PreviewNavbar />
  <main>
    <PreviewMainBox />
  </main>
  <CommonFooter />
</template>

<script setup>
//= Page Metadata
definePageMeta({
  layout: "preview",
});
//= Page Head
useHead({
  titleTemplate: `%s - Développeur Web Full Stack C# / JS`,
});
</script>

<style>
body {
  background: #222;
}
</style>
