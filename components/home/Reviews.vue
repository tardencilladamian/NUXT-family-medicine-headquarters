<template>
  <div class="home-review">
    <section>
      <div style="height: 80px; overflow: hidden">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style="height: 100%; width: 100%"
        >
          <path
            d="M-24.84,0.48 C111.17,98.18 271.49,-50.00 503.95,40.95 L500.00,0.00 L0.00,0.00 Z"
            style="stroke: none; fill: rgba(239, 245, 247, 1)"
          ></path>
        </svg>
      </div>
      <div class="container">
        <div class="row mb-50">
          <div class="col-12 text-center">
            <h2 class="text-white">
              <strong>Family Medical Headquarters</strong>
            </h2>
          </div>
        </div>
        <div class="row g-5 justify-content-center">
          <div class="col-lg-10 text-center">
            <h6 style="color: rgba(175, 217, 240, 0.8)">
              For friendly professional service for patients 0 to 100, choose
              Family Medicine Headquarters (La Clinica Central) as your primary
              care physician group.
            </h6>
            <nuxt-link to="/contact-us" class="btn btn-primary"
              >Make an Appointment</nuxt-link
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Video from "~/components/Video";

export default {
  props: ["page"],

  components: {
    Video,
  },
};
</script>
