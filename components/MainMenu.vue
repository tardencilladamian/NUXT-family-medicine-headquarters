<template>
  <div class="main-menu">
    <div class="rcontainer">
      <div class="row">
        <div class="col-12 text-right align-content-end float-right">
          <nav class="wsmenu clearfix">
            <ul class="wsmenu-list">
              <li v-link-active aria-haspopup="true">
                <nuxt-link to="/">Home</nuxt-link>
              </li>
              <li v-link-active aria-haspopup="true">
                <nuxt-link to="/about-us"
                  >About Us
                  <span
                    ><svg viewBox="0 0 16 16">
                      <path
                        d="M7.247 11.14l-4.796-5.482c-.566-.645-.106-1.658.753-1.658h9.592l-1.33229e-08 1.1422e-11c.552285-.000473527 1.00038.446858 1.00086.999142 .000208129.242745-.0878878.477279-.247857.659858l-4.796 5.48 1.32994e-08-1.52191e-08c-.363415.41587-.99515.458394-1.41102.0949795 -.0337527-.0294953-.0654841-.0612267-.0949795-.0949795Z"
                        fill="#000"
                      ></path></svg></span
                ></nuxt-link>
                <ul class="sub-menu">
                  <li
                    v-link-active
                    aria-haspopup="true"
                    class="mobile-item-menu"
                  >
                    <nuxt-link to="/about-us">About Us</nuxt-link>
                  </li>
                  <li v-link-active aria-haspopup="true">
                    <nuxt-link to="/about-dr-borbor"
                      >About Dr. Borbor</nuxt-link
                    >
                  </li>
                  <li v-link-active aria-haspopup="true">
                    <nuxt-link to="/our-team">Our Team</nuxt-link>
                  </li>
                  <li v-link-active aria-haspopup="true">
                    <nuxt-link v-link to="/testimonials"
                      >Testimonials</nuxt-link
                    >
                  </li>
                </ul>
              </li>
              <li v-link-active aria-haspopup="true">
                <nuxt-link to="/services"
                  >Services
                  <span
                    ><svg viewBox="0 0 16 16">
                      <path
                        d="M7.247 11.14l-4.796-5.482c-.566-.645-.106-1.658.753-1.658h9.592l-1.33229e-08 1.1422e-11c.552285-.000473527 1.00038.446858 1.00086.999142 .000208129.242745-.0878878.477279-.247857.659858l-4.796 5.48 1.32994e-08-1.52191e-08c-.363415.41587-.99515.458394-1.41102.0949795 -.0337527-.0294953-.0654841-.0612267-.0949795-.0949795Z"
                        fill="#000"
                      ></path></svg></span
                ></nuxt-link>
                <div class="wsmegamenu clearfix">
                  <div class="container-fluid">
                    <div class="row">
                      <ul class="col-lg-6 col-md-12 link-list">
                        <li class="mobile-item-menu">
                          <nuxt-link to="/services">Services</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/services/colonoscopies"
                            >Colonoscopies</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link to="/services/diabetes-care"
                            >Diabetes Care</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link
                            to="/services/family-health-care-for-adults-and-children"
                            >Family Health Care for Adults and
                            Children</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link to="/services/family-planning-services"
                            >Family Planning Services</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link to="/services/geriatric-care"
                            >Geriatric Care</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link to="/services/hearing-and-vision-testing"
                            >Hearing and Vision Testing</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link to="/services/hypertension-monitoring"
                            >Hypertension Monitoring</nuxt-link
                          >
                        </li>
                      </ul>
                      <ul class="col-lg-6 col-md-12 link-list">
                        <li>
                          <nuxt-link to="/services/lab-services"
                            >Lab Services</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link to="/services/mental-health-referrals"
                            >Mental Health Referrals</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link
                            to="/services/treatment-for-stds-and-stis-including-hiv"
                            >Treatment for STDs and STIs, Including
                            HIV</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link to="/services/vaccines"
                            >Vaccines</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link to="/services/weight-loss-program"
                            >Weight Loss Program</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link to="/services/womens-health-services"
                            >Women’s Health Services</nuxt-link
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li aria-haspopup="true" class="special">
                <nuxt-link to="/contact-us">Contact Us</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "~/api/index";

export default {
  methods: {
    getLink(slug, path) {
      return Api.slugToUrl(slug, path);
    },
  },
};
</script>
