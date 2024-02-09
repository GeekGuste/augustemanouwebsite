<template>
  <nav class="navbar navbar-expand-lg static">
    <div class="container">
      <a class="logo icon-img-100" href="#">
        <img src="/assets/imgs/logo-light.png" alt="logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="icon-bar"><i class="fas fa-bars"></i></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link"
              href="#0"
              data-scroll-nav="0"
              @click="scrollToSection"
              ><span class="rolling-text">Accueil</span></a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#0"
              data-scroll-nav="1"
              @click="scrollToSection"
              ><span class="rolling-text">A propos de moi</span></a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#0"
              data-scroll-nav="2"
              @click="scrollToSection"
              ><span class="rolling-text">Services</span></a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#0"
              data-scroll-nav="6"
              @click="scrollToSection"
              ><span class="rolling-text">Contact</span></a
            >
          </li>
        </ul>
      </div>

      <div class="md-hide">
        <div class="butn-presv">
          <a href="#0" class="butn butn-sm butn-bg bg-white radius-5 skew">
            <span class="text-dark">Me Contacter !</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

function handleScroll() {
  let navbar = document.querySelector(".navbar");
  if (window.scrollY > 350) navbar.classList.add("nav-scroll");
  else navbar.classList.remove("nav-scroll");
}

function scrollToSection(event) {
  event.preventDefault();
  let sectionIndex = event.currentTarget.getAttribute("data-scroll-nav");
  let section = document.querySelector(`[data-scroll-index="${sectionIndex}"]`);

  if (section) {
    setTimeout(() => {
      section.scrollIntoView();
    }, 500);
  }
}

onMounted(() => {
  let elements = document.querySelectorAll(".rolling-text");

  elements.forEach((element) => {
    let innerText = element.innerText;
    element.innerHTML = "";

    let textContainer = document.createElement("div");
    textContainer.classList.add("block");

    for (let letter of innerText) {
      let span = document.createElement("span");
      span.innerText = letter.trim() === "" ? "\xa0" : letter;
      span.classList.add("letter");
      textContainer.appendChild(span);
    }

    element.appendChild(textContainer);
    element.appendChild(textContainer.cloneNode(true));
  });

  elements.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.classList.remove("play");
    });
  });
});
</script>
