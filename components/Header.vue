<template>
  <div class="header">
    <div class="top">
      <div class="container">
        <div class="row g-0">
          <div class="col-md-8 col-sm-6 col-6">
            <ul class="address">
              <li>
                <ImageResponsive url="/images/map-white.png" />
                <span
                  style="color: #fff"
                  v-html="optionsPage.address_business_details"
                />
              </li>
              <li>
                <ImageResponsive url="/images/phone-white.png" />
                <a :href="'tel:' + optionsPage.phone_link_business_details">{{
                  optionsPage.phone_business_details
                }}</a>
              </li>
            </ul>
          </div>
          <div class="col-md-4 col-sm-6 col-6">
            <ul class="social">
              <li class="facebook" v-if="optionsPage.facebook">
                <a :href="optionsPage.facebook" target="_blank">
                  <ImageResponsive
                    url="/images/facebook-white.png"
                    v-if="optionsPage.facebook"
                  />
                </a>
              </li>
              <li class="twitter" v-if="optionsPage.twitter">
                <a :href="optionsPage.twitter" target="_blank">
                  <ImageResponsive
                    url="/images/twitter-white.png"
                    v-if="optionsPage.twitter"
                  />
                </a>
              </li>
              <li class="yelp" v-if="optionsPage.yelp">
                <a :href="optionsPage.yelp" target="_blank">
                  <ImageResponsive
                    url="/images/yelp-white.png"
                    v-if="optionsPage.yelp"
                  />
                </a>
              </li>
              <li class="youtube" v-if="optionsPage.youtube">
                <a :href="optionsPage.youtube" target="_blank">
                  <ImageResponsive
                    url="/images/youtube-white.png"
                    v-if="optionsPage.youtube"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="logo">
      <div class="container">
        <div class="row align-items-center g-0">
          <div class="col-lg-3">
            <nuxt-link to="/">
              <ImageResponsive :url="optionsPage.logo" />
            </nuxt-link>
          </div>
          <div class="col-lg-9">
            <MainMenu />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from "~/components/MainMenu";

export default {
  props: ["optionsPage"],

  components: {
    MainMenu,
  },
};
</script>
