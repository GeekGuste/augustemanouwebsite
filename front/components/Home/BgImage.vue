<template>
  <div class="bg-img main-img-bg" data-background="/assets/imgs/bg.jpg"></div>
</template>
  
<script setup>
import { onMounted } from 'vue';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

onMounted(() => {
  loadBackgroudImages();
});
</script>