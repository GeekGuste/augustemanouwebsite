<template>
  <div class="comments-from">
    <div class="sec-head mb-60">
      <h5>Leave a comment</h5>
    </div>
    <form id="contact-form" method="post" action="contact.php">
      <div class="messages"></div>
      <div class="controls row">
        <div class="col-lg-6">
          <div class="form-group mb-30">
            <input id="form_name" type="text" name="name" placeholder="Name" required />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="form-group mb-30">
            <input id="form_email" type="email" name="email" placeholder="Email" required />
          </div>
        </div>
        <div class="col-12">
          <div class="form-group mb-30">
            <textarea id="form_message" name="message" placeholder="Message" rows="4" required></textarea>
          </div>
        </div>
        <div class="col-12 text-center mt-20">
          <button type="submit">
            <span class="text">Post comment</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
