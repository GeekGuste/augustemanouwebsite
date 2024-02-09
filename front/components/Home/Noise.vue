<template>
  <div class="bg-img noise-bg" data-background="/assets/imgs/patterns/noise1.png"></div>
</template>
  
<script setup>
import { onMounted } from 'vue';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

onMounted(() => {
  loadBackgroudImages();
});
</script>