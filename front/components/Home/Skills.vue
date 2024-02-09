<template>
  <div class="skills section-padding pt-0" data-scroll-index="1">
    <div class="sec-head bord-thin-bottom pb-20 mb-80">
      <h4 class="sub-title fz-28">Skills</h4>
    </div>
    <div class="row">
      <div v-for="(item, index) in data.skills" class="col-md-6" :key="item.id">
        <div :class="`item ${index !== data.skills.length - 1 ? 'mb-30' : ''}`">
          <div class="d-flex align-items-center mb-30">
            <div class="mr-30">
              <div class="img icon-img-40">
                <img :src="item.logo" alt="" />
              </div>
            </div>
            <div>
              <h6 class="fz-18">{{ item.title }}</h6>
            </div>
          </div>
          <div class="skill-progress">
            <span class="progres" data-value={{item.percent}}></span>
          </div>
          <span class="value">{{ item.percent }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { onMounted } from 'vue';
//= Scripts
import isInView from '@/common/isInView';
//= Static Data
import data from '@/data/info.json';

onMounted(() => {
  isInView({
    selector: '.progres',
    isElements: true,
    callback: (element) => {
      element.style.width = element.dataset.value;
    },
    whenOutOfView: (element) => {
      element.style.width = 0;
    }
  });
});
</script>