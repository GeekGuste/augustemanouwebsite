<template>
  <section class="preview section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="img">
            <div class="screen">
              <NuxtLink to="/home-main" target="_blank">
                <img src="/assets/imgs/demos/1.png" alt="" />
              </NuxtLink>
            </div>
            <div class="botm"></div>
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1 valign">
          <div class="info">
            <h2 class="fw-300">CV , Resume and Personal Portfolio One Page <span class="main-color">Vue Template</span>
            </h2>
            <div class="mt-50 text-center inline">
              <div class="butn-presv">
                <NuxtLink to="/home-main" class="butn butn-md butn-bord hover-color radius-5 skew" target="_blank">
                  <span>
                    Main Demo Preview <img src="/assets/imgs/svg-assets/arrow-right-top.svg" alt=""
                      class="icon-img ml-10" />
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-80 justify-content-center">
        <div v-for="item in data" class="col-lg-9" :key="item.id">
          <div class="demo-item text-center mt-50">
            <NuxtLink :to="item.link" target="_blank">
              <img :src="item.image" alt="" />
              <h6 class="fz-18 mt-30">{{ item.title }}</h6>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script setup>
//= Static Data
import data from '@/data/preview.json';
</script>