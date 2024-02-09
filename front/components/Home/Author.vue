<template>
  <div
    class="author-profile pt-80 pb-80"
    id="sticky_item"
    style="position: sticky; top: 25px"
  >
    <div class="cont">
      <div class="img">
        <img :src="data.picture" alt="" />
      </div>
      <div class="info text-center mt-30">
        <h5>{{ data.name }}</h5>
        <p>
          <a href="#0">{{ data.username }}</a>
        </p>
      </div>
      <div class="social text-center mt-20">
        <a target="_blank" href="https://www.linkedin.com/in/augustemanou/"
          ><i class="fab fa-linkedin-in"></i
        ></a>
        <a href="#0"><i class="fab fa-dribbble"></i></a>
      </div>
    </div>
  </div>
</template>

<script setup>
//= Static Data
import data from "@/data/info.json";
</script>
