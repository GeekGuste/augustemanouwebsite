<template>
  <section class="contact section-padding bord-thin-top" data-scroll-index="6">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="sec-head md-mb80">
            <h6 class="dot-titl mb-10">Prendre contact</h6>
            <h2 class="fz-50">Développons votre plateforme web!</h2>
            <p class="fz-15 mt-10">
              Si vous souhaitez travailler avec moi ou simplement prendre
              contact, je serai ravi de vous entendre !
            </p>
            <div class="phone fz-30 fw-600 mt-30 underline">
              <a href="mailto:manouauguste7@gmail.com" class="main-color"
                >manouauguste7@gmail.com</a
              >
            </div>
            <ul class="rest social-text d-flex mt-60">
              <li class="mr-30">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/augustemanou/"
                  class="hover-this"
                  ><span class="hover-anim">LinkedIn</span></a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 valign">
          <div class="full-width">
            <div class="messages"></div>
            <div class="controls row">
              <div class="col-lg-6">
                <div class="form-group mb-30">
                  <input
                    id="form_name"
                    type="text"
                    v-model.trim="name"
                    placeholder="Nom"
                    required
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-30">
                  <input
                    id="form_email"
                    type="email"
                    name="email"
                    v-model.trim="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group mb-30">
                  <input
                    id="form_subject"
                    type="text"
                    name="subject"
                    v-model.trim="subject"
                    placeholder="Objet"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <textarea
                    id="form_message"
                    name="message"
                    v-model="message"
                    placeholder="Message"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div class="mt-30">
                  <button @click="sendMessage">
                    <span class="text">Envoyer Un Message</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
const config = useRuntimeConfig()
const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");
const errorMessage = ref("");
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const sendMessage = async () => {
  if (
    name.value == "" ||
    email.value == "" ||
    subject.value == "" ||
    message.value == ""
  ) {
    errorMessage.value =
      "Veuillez remplir tous les champs vides avant d'envoyer votre message";
  } else if (!emailRegex.test(email.value)) {
    errorMessage.value = "L'email renseigné est valide";
  } else {
    errorMessage.value = "";
    // envoi de mail
    const data = await useFetch(`${config.public.apiUrl}/contact-auguste`, {
      method: "POST",
      body: {
        name,
        email,
        subject,
        message,
      },
    });
    console.log(data.Value);
  }
};
</script>
