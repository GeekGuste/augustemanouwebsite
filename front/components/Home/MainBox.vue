<template>
  <section class="box">
    <div class="container">
      <div class="row md-marg">
        <div class="col-lg-4">
          <Author />
        </div>
        <div class="col-lg-7 offset-lg-1">
          <About />
          <Resume />
          <Skills />
        </div>
      </div>
    </div>
  </section>
</template>
  
<script setup>
//= Components
import Author from './Author';
import About from './About';
import Resume from './Resume';
import Skills from './Skills';
</script>