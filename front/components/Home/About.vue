<template>
  <div class="about section-padding" data-scroll-index="0">
    <div class="cont">
      <h1>
        Hello, Je suis <span class="main-color">Auguste MANOU</span>,
        Developpeur FullStack <span class="bord">.Net / JS <i></i></span>
      </h1>
    </div>
    <div class="stauts mt-80">
      <div class="d-flex align-items-center">
        <div class="mr-40">
          <div class="d-flex align-items-center">
            <h2>+{{ data.years_of_experance }}</h2>
            <p>
              Ans <br />
              d'Expérience
            </p>
          </div>
        </div>
        <div class="mr-40">
          <div class="d-flex align-items-center">
            <h2>+{{ data.projects }}</h2>
            <p>
              Projets <br />
              réalisés
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div class="d-flex align-items-center">
        <div class="mr-40">
          <div class="butn-presv">
            <a
              download
              href="/assets/pdf/CV-Auguste-MANOU.pdf"
              class="butn butn-md butn-bord radius-5 skew"
            >
              <span>C.V</span>
            </a>
          </div>
        </div>
        <div>
          <div class="butn-presv">
            <a
              download
              href="/assets/pdf/Dossier-de-compétences-Auguste-A-MANOU.pdf"
              class="butn butn-md butn-bord radius-5 skew"
            >
              <span>Dossier de compétences</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="text mt-80">
      <h6 class="sub-title mb-15">A propos de moi</h6>
      <p class="fz-20">{{ data.brief }}</p>
    </div>
  </div>
</template>

<script setup>
//= Static Data
import data from "@/data/info.json";
</script>
