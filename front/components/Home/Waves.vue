<template>
  <div id="home_wave"></div>
</template>
  
<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  loadAnimations();
});

async function loadAnimations() {
  const startWavesAnimations = (await import('@/common/waves')).default;
  startWavesAnimations();
}
</script>