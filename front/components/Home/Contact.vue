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
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/auguste.7?utm_source=qr&igsh=MW8zOW52NnI2MDFxZw=="
                  class="hover-this"
                  ><span class="hover-anim">Instagram</span></a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 valign">
          <div class="full-width">
            <form id="contact-form" method="post" action="contact.php">
              <div class="messages"></div>
              <div class="controls row">
                <div class="col-lg-6">
                  <div class="form-group mb-30">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
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
                      placeholder="Objet"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Message"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <div class="mt-30">
                    <button type="submit">
                      <span class="text">Envoyer Un Message</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
