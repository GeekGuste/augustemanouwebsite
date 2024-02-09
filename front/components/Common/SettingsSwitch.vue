<template>
  <div class="setting-switch">
    <div class="mb-80">
      <h6 class="sub-title mb-30">Colors</h6>
      <ul class="switch-color">
        <li data-color="#55e6a5" class="active" @click="colorSwitch"></li>
        <li data-color="#e8fe51" @click="colorSwitch"></li>
        <li data-color="#f08f74" @click="colorSwitch"></li>
        <li data-color="#d1d1d1" @click="colorSwitch"></li>
        <li data-color="#55a3e6" @click="colorSwitch"></li>
        <li data-color="#e69955" @click="colorSwitch"></li>
      </ul>
    </div>
    <div>
      <h6 class="sub-title mb-30">Background Effect</h6>
      <ul class="switch-effect">
        <li :class="pathname === '/home-main' ? 'active' : ''">
          <NuxtLink to="/home-main">Noise</NuxtLink>
        </li>
        <li :class="pathname === '/home-dots-waves' ? 'active' : ''">
          <NuxtLink to="/home-dots-waves">Dots</NuxtLink>
        </li>
        <li :class="pathname === '/home-liquid-bg' ? 'active' : ''">
          <NuxtLink to="/home-liquid-bg">Liquid</NuxtLink>
        </li>
        <li :class="pathname === '/home-bg-img' ? 'active' : ''">
          <NuxtLink to="/home-bg-img">Image</NuxtLink>
        </li>
        <li :class="pathname === '/home-solid' ? 'active' : ''">
          <NuxtLink to="/home-solid">Solid Color</NuxtLink>
        </li>
      </ul>
    </div>
    <span class="icon pe-7s-config" @click="toggleConfig"></span>
  </div>
</template>
  
<script setup>
const pathname = useRoute().path;

function toggleConfig() {
  let switcher = document.querySelector('.setting-switch');
  switcher.classList.toggle('open');
}

function colorSwitch(event) {
  document.querySelectorAll('.switch-color li').forEach(el => el.classList.remove('active'));
  event.currentTarget.classList.add('active');

  const color = event.currentTarget.getAttribute('data-color');
  document.documentElement.style.cssText = `--maincolor: ${color};`;
}
</script>