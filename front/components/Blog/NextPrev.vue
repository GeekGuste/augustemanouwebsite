<template>
  <div class="next-prv-post flex mt-50">
    <div class="thumb-post bg-img" data-background="/assets/imgs/blog/1.jpg">
      <NuxtLink to="/blog-details">
        <span class="fz-12 text-u ls1 main-color mb-15"><i class="pe-7s-angle-left"></i>
          Prev Post</span>
        <h6 class="fw-500 fz-16">Ways to quickly traffic to <br /> your website.
        </h6>
      </NuxtLink>
    </div>
    <div class="thumb-post ml-auto text-right bg-img" data-background="/assets/imgs/blog/2.jpg">
      <NuxtLink to="/blog-details">
        <span class="fz-12 text-u ls1 main-color mb-15">Next Post <i class="pe-7s-angle-right"></i></span>
        <h6 class="fw-500 fz-16">How to Handle Your Good Employee.</h6>
      </NuxtLink>
    </div>
  </div>
</template>
