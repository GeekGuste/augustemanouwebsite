<template>
  <section class="portfolio section-padding pt-0" data-scroll-index="3">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="sec-head bord-thin-bottom pb-20 mb-30">
            <h4 class="sub-title fz-28">Protfolio</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(item) in topTwo" class="col-lg-6" :key="item.id">
          <div class="item mt-50">
            <div class="img">
              <NuxtLink to="/project-details">
                <img :src="item.image" alt="" class="radius-5" />
              </NuxtLink>
            </div>
            <div class="cont mt-30 d-flex align-items-center">
              <div>
                <span class="tag">{{ item.tag }}</span>
                <h6 class="line-height-1">
                  <NuxtLink to="/project-details">{{ item.title }}</NuxtLink>
                </h6>
              </div>
              <div class="ml-auto">
                <div class="arrow">
                  <NuxtLink to="/project-details">
                    <svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px" y="0px" viewBox="0 0 34.2 32.3" xml:space="preserve" style="strokeWidth: 2">
                      <line x1="0" y1="16" x2="33" y2="16"></line>
                      <line x1="17.3" y1="0.7" x2="33.2" y2="16.5"></line>
                      <line x1="17.3" y1="31.6" x2="33.5" y2="15.4"></line>
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4" v-for="(item) in rest" :key="item.id">
          <div class="item mt-50">
            <div class="img">
              <NuxtLink to="/project-details">
                <img :src="item.image" alt="" class="radius-5" />
              </NuxtLink>
            </div>
            <div class="cont mt-30 d-flex align-items-center">
              <div>
                <span class="tag">{{ item.tag }}</span>
                <h6 class="line-height-1">
                  <NuxtLink to="/project-details">{{ item.title }}</NuxtLink>
                </h6>
              </div>
              <div class="ml-auto">
                <div class="arrow">
                  <NuxtLink to="/project-details">
                    <svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px" y="0px" viewBox="0 0 34.2 32.3" xml:xpace="preserve" style="strokeWidth: 2">
                      <line x1="0" y1="16" x2="33" y2="16"></line>
                      <line x1="17.3" y1="0.7" x2="33.2" y2="16.5"></line>
                      <line x1="17.3" y1="31.6" x2="33.5" y2="15.4"></line>
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
  
<script setup>
//= Static Data
import data from '@/data/portfolio.json';

const topTwo = data.slice(0, 2);
const rest = data.slice(2);
</script>