<template>
  <div>
    <Header :optionsPage="optionsPage" />

    <Slider />

    <section class="only-content bg-gray">
      <div class="container-fluid">
        <div class="row">
          <div
            class="col-lg-6 d-flex align-items-center justify-content-center only-img-block"
            :style="`background: url('${page.about_us.image}') no-repeat center;background-size: cover`"
          ></div>

          <div class="col-lg-6">
            <div class="space-block">
              <h2>
                <strong>{{ page.about_us.title }}</strong>
              </h2>
              <div
                class="mb-30"
                v-if="page.about_us.body"
                v-html="page.about_us.body"
              ></div>
              <nuxt-link
                :to="page.about_us.link.post_name"
                v-if="page.about_us.link.post_name"
                class="btn btn-primary"
                >{{ page.about_us.button }}</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row mb-40 justify-content-center">
          <div class="col-md-9 text-center">
            <h2><strong>Our Services</strong></h2>
            <p>
              We want to be your family doctor - the person you see for regular
              checkups and when you have a specific complaint. The Family
              Medicine Headquarters offer comprehensive services for you and
              your family.
            </p>
          </div>
        </div>
        <div class="row mb-50 g-5 services text-center">
          <div class="col-md-4 service" v-for="item in page.services">
            <Service :item="item" />
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <p>
              Call us for all your health needs! In-person & Telehealth visits
              available!
            </p>
            <nuxt-link to="/services" class="btn btn-primary"
              >All our services</nuxt-link
            >
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray">
      <div class="container">
        <div class="row justify-content-center g-5">
          <div class="col-md-6">
            <nuxt-link to="/about-dr-borbor">
              <ImageResponsive
                url="https://family-medicine-headquarters.s3-us-west-1.amazonaws.com/home2/wzebziteclient3/administration.website-client-3.com/wp-content/uploads/2022/08/FMHQ-10-1.jpg"
              />
            </nuxt-link>
          </div>
          <div class="col-md-6">
            <h2 class="mb-0"><strong>Meet Shariar Borbor, M.D.</strong></h2>
            <h6 class="d-block mb-40">Family Medicine Specialist</h6>
            <p>
              <strong
                >Our motto and common purpose at the Family Medical
                Headquarters: To better every life we touch through the way we
                care.</strong
              >
            </p>
            <p>
              For more than 13 years, Dr. Borbor has been serving Azusa and
              surrounding communities. He knows the neighborhood and the needs
              we have here. His goal at HMHQ is to treat patients of all ages
              with a focus on preventive care and patient education.
            </p>
            <nuxt-link to="/about-dr-borbor" class="btn btn-primary"
              >Read more</nuxt-link
            >
          </div>
        </div>
      </div>
    </section>

    <Testimonials :page="page.videos" />
    <Reviews :page="page.reviews" />
    <OurLocation :page="page.our_location" />
    <Footer
      :page="page.call_to_action"
      :optionsPage="optionsPage"
      :menuQuickLinks="menuQuickLinks"
      :menuServices="menuServices"
    />
  </div>
</template>

<script>
import Api from "~/api/index";
import Header from "~/components/Header";
import AboutUs from "~/components/home/AboutUs";
import Testimonials from "~/components/home/Testimonials";
import Reviews from "~/components/home/Reviews";
import OurLocation from "~/components/home/OurLocation";
import Footer from "~/components/Footer";
import Legal from "~/components/Legal";
import ImageLeftContentRight from "~/components/ImageLeftContentRight";
import Service from "~/components/Service";
import Slider from "~/components/Slider";

export default {
  components: {
    Header,
    AboutUs,
    Testimonials,
    Reviews,
    OurLocation,
    Legal,
    Footer,
    ImageLeftContentRight,
    Service,
    Slider,
  },

  async asyncData({ error }) {
    const [page, menuQuickLinks, menuServices, optionsPage] = await Promise.all(
      [
        Api.ApiGetPage(9),
        Api.ApiGetMenu(3),
        Api.ApiGetMenu(2),
        Api.ApiGetOption(),
      ]
    );
    return {
      seo: page.data,
      page: page.data.acf,
      menuQuickLinks: menuQuickLinks.data.items,
      menuServices: menuServices.data.items,
      optionsPage: optionsPage.data.acf,
    };
  },

  head() {
    return {
      title: Api.getPageTitle(this.seo),
      meta: [
        {
          name: "author",
          content: "Damian Tardencilla - damian@tardencilla.com",
        },
        {
          hid: "description",
          name: "description",
          property: "og:description",
          content: Api.getPageDescription(this.seo),
        },
        {
          hid: "og:description",
          name: "og:description",
          property: "og:description",
          content: Api.getPageDescription(this.seo),
        },
        {
          hid: "og:title",
          property: "og:title",
          content: Api.getPageTitle(this.seo),
        },
        { property: "og:image", content: Api.getImageSeo(this.seo) },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: Api.getPageTitle(this.seo),
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: Api.getPageDescription(this.seo),
        },
        { name: "twitter:image", content: Api.getImageSeo(this.seo) },
      ],
    };
  },
};
</script>
