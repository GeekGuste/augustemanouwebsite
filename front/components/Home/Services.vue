<template>
  <section class="services section-padding pt-40" data-scroll-index="2">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="sec-head bord-thin-bottom pb-20 mb-80">
            <h4 class="sub-title fz-28">Services</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(item, index) in data" class="col-lg-3 col-md-6" :key="item.id">
          <div :class="`item ${index !== data.length - 1 ? 'md-mb30' : ''}`">
            <h3 class="letr">{{ item.letter }}</h3>
            <h6>{{ item.title }}</h6>
            <p>{{ item.details }}</p>
            <div class="tags">
              <a href="#0" v-for="(tag) in item.tags" :key="tag">{{ tag }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script setup>
//= Static Data
import data from '@/data/services.json';
</script>