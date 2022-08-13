<template>
  <div>
    <Header :optionsPage="optionsPage" />
    <Heroe :content="page.heroe" />
    <section>
      <div class="container">
        <div class="row g-5 text-center justify-content-center">
          <div
            class="col-md-3 col-sm-6 col-6 team"
            v-for="team in page.our_team"
          >
            <ImageResponsive :url="team.image" />
            <h3 class="mb-0">{{ team.name }}</h3>
            <small v-html="team.title"></small>
          </div>
        </div>
      </div>
    </section>
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

export default {
  components: {
    Header,
    Heroe,
    ImageLeftContentRightAboutUs,
    OnlyContent,
    Footer,
  },

  async asyncData({ error, params }) {
    const [page, menuQuickLinks, menuServices, optionsPage] = await Promise.all(
      [
        Api.ApiGetPage(45),
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
