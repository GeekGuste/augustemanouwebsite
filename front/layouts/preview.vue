<template>
  <CommonLoadingScreen />
  <CommonCursor />
  <CommonProgressScroll />
  <slot />
</template>

<script setup>
useHead({
  link: [
    { rel: 'stylesheet', href: '/assets/css/preview.css' },
  ]
});
</script>
