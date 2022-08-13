<template>
  <div>
    <Header :optionsPage="optionsPage" />
    <Heroe :content="page.heroe" />

    <section class="only-content">
      <div class="container-fluid">
        <div class="row">
          <div
            class="col-lg-6 d-flex align-items-center justify-content-center only-img-block bg-office"
          ></div>
          <div class="col-lg-6">
            <div class="space-block">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="map-our-location">
      <Iframe url="https://snazzymaps.com/embed/259480" />
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
import Form from "~/components/contact/Form";
import Footer from "~/components/Footer";
import Iframe from "~/components/Iframe";

export default {
  components: {
    Header,
    Heroe,
    Form,
    Footer,
    Iframe,
  },

  async asyncData({ error, params }) {
    const [page, menuQuickLinks, menuServices, optionsPage] = await Promise.all(
      [
        Api.ApiGetPage(41),
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
