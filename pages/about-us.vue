<template>
  <div>
    <Header :optionsPage="optionsPage" />

    <Heroe :content="page.heroe" />

    <div class="bg-gray">
      <ImageLeftContentRightAboutUs
        v-if="page.image_left_content_right"
        :content="page.image_left_content_right"
      />
    </div>

    <section>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div class="mb-5"><Video :video="video" /></div>
            <p>
              We are open every Monday - Friday from 9 am - 6 pm and we make it
              easy for you to make an appointment or ask a question online. Give
              us a call or set up an appointment right here.
            </p>
            <p>
              Our staff is ready to serve you with friendly, comprehensive care
              for the whole family. We can speak English, Spanish, and
              Mandarin/Cantonese. Coming soon! Our website will also be
              available in Spanish and Mandarin/Cantonese.
            </p>
          </div>
        </div>
      </div>
    </section>

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
          <div class="row justify-content-center">
            <div class="col-lg-10 text-center">
              <h2 class="text-white"><strong>Our Commitment to You</strong></h2>
              <p style="color: #fff">
                We are committed to serving patients of all ages and backgrounds
                with any health concern. Come see us! Bring your newborn baby,
                children, teenagers, parents, and grandparents!
              </p>
              <p style="color: #fff">
                As your neighborhood medical office, we are here to help educate
                and guide you in making the best decisions about your health.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

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
import Heroe from "~/components/Heroe";
import ImageLeftContentRightAboutUs from "~/components/ImageLeftContentRightAboutUs";
import OnlyContent from "~/components/OnlyContent";
import Footer from "~/components/Footer";
import Video from "~/components/Video";

export default {
  components: {
    Header,
    Heroe,
    ImageLeftContentRightAboutUs,
    OnlyContent,
    Footer,
    Video,
  },

  async asyncData({ error, params }) {
    const [page, menuQuickLinks, menuServices, optionsPage] = await Promise.all(
      [
        Api.ApiGetPage(11),
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
      video: {
        image:
          "https://family-medicine-headquarters.s3-us-west-1.amazonaws.com/home2/wzebziteclient3/administration.website-client-3.com/wp-content/uploads/2022/08/1463766831.jpeg",
        link: "https://vimeo.com/727104920",
      },
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
