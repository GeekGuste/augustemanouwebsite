<template>
  <section class="testim-crv" data-scroll-index="4">
    <div class="container">
      <div class="sec-head bord-thin-bottom pb-20 mb-80">
        <div class="row">
          <div class="col-md-6">
            <h4 class="sub-title fz-28">Testimonials</h4>
          </div>
          <div class="col-md-6">
            <div class="d-flex align-items-end justify-end-sm">
              <div class="swiper-controls testim-controls arrow-out d-flex mr-20 ml-auto">
                <div class="swiper-button-prev">
                  <span class="left">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z"
                        fill="currentColor"></path>
                    </svg>
                  </span>
                </div>
                <div class="swiper-button-next ml-50">
                  <span class="right">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z"
                        fill="currentColor"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="testim-swiper">
            <div id="content-carousel-container-unq-testim" class="swiper-container">
              <Swiper v-bind="swiperOptions">
                <SwiperSlide v-for="(item) in data.testimonials" :key="item.id">
                  <div class="item">
                    <div class="cont mb-30">
                      <div class="d-flex align-items-center">
                        <div>
                          <div class="img">
                            <img :src="item.picture" alt="" />
                          </div>
                        </div>
                        <div class="ml-30">
                          <div class="info">
                            <h6 class="main-color">{{ item.name }}</h6>
                            <span class="fz-13 mt-10 opacity-8">{{ item.position }}</span>
                          </div>
                        </div>
                      </div>
                      <p class="fw-200 fz-18 mt-40">{{ item.text }}</p>
                    </div>
                    <div class="d-flex align-items-center">
                      <div class="rate-stars fz-12">
                        <span class="rate main-color">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </span>
                        <span class="fz-12 opacity-7 ml-10">({{ item.reviews }} Reviews)</span>
                      </div>
                      <div class="ml-auto">
                        <div class="icon-img-40">
                          <img src="/assets/imgs/svg-assets/quote.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-color"></div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="clients-carso section-padding pb-0">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <div class="text-center mb-50">
              <h6 class="fz-12 text-u ls1">More than <span class="fw-600"> 200+ companies </span> trusted us worldwide
              </h6>
            </div>
          </div>
        </div>
        <div class="swiper5">
          <div id="content-carousel-container-unq-clients" class="swiper-container">
            <Swiper v-bind="brandsSwiperOptions">
              <SwiperSlide v-for="(brand) in data.brands" :key="brand">
                <div class="item">
                  <div class="img icon-img-100">
                    <a href="#0"><img :src="brand" alt="" /></a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
  
<script setup>
//= Modules
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';
//= Static Data
import data from '@/data/testimonials.json';

const swiperOptions = {
  modules: [Navigation, Pagination],
  spaceBetween: 30,
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.testim-controls .swiper-button-next',
    prevEl: '.testim-controls .swiper-button-prev'
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  }
}

const brandsSwiperOptions = {
  modules: [Pagination],
  loop: true,
  spaceBetween: 40,
  speed: 1000,
  slidesPerView: 5,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  }
}
</script>