<template>
  <div class="resume section-padding pt-0" data-scroll-index="1">
    <div class="sec-head bord-thin-bottom pb-20 mb-80">
      <h4 class="sub-title fz-28">Expérience professionnelle</h4>
    </div>
    <div
      v-for="(item, index) in data.resume"
      :class="`item d-flex align-items-center ${
        index !== data.resume.length - 1 ? 'mb-30' : ''
      }`"
      :key="item.id"
    >
      <div class="date mr-60">
        <p class="fz-13">{{ item.duration }}</p>
      </div>
      <div>
        <h6>
          <a href="#0">{{ item.company }}</a>
        </h6>
      </div>
      <div class="ml-auto">
        <div class="d-flex align-items-center">
          <div class="icon-img-40 mr-100">
            <img :src="item.logo" alt="" />
          </div>
          <div class="arrow">
            <a href="#">
              <svg
                class="arrow-right"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 34.2 32.3"
                xml:space="preserve"
                style="strokewidth: 2"
              >
                <line x1="0" y1="16" x2="33" y2="16"></line>
                <line x1="17.3" y1="0.7" x2="33.2" y2="16.5"></line>
                <line x1="17.3" y1="31.6" x2="33.5" y2="15.4"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//= Static Data
import data from "@/data/info.json";
</script>
