<template>
    <div>
        <Header :optionsPage="optionsPage" />
        <Heroe :content="page.heroe" col="10" />
        <ImageLeftContentRight v-if="page.image_left_content_right" :content="page.image_left_content_right" />
        <OnlyContent v-if="page.only_content" :content="page.only_content" css="bg-gray" />
        <Footer :page="page.call_to_action" :optionsPage="optionsPage" :menuQuickLinks="menuQuickLinks" :menuServices="menuServices" col="10" />
    </div>
</template>

<script>
    import Api from '~/api/index';
    import Header from "~/components/Header";
    import Heroe from "~/components/Heroe";
    import ImageLeftContentRight from "~/components/ImageLeftContentRight";
    import OnlyContent from "~/components/OnlyContent";
    import Footer from "~/components/Footer";

    export default {
        components: {
            Header,
            Heroe,
            ImageLeftContentRight,
            OnlyContent,
            Footer
        },

        async asyncData({ error, params }) {
            const [page, menuQuickLinks, menuServices, optionsPage] = await Promise.all([
                Api.ApiGetPage(39),
                Api.ApiGetMenu(3),
                Api.ApiGetMenu(2),
                Api.ApiGetOption()
            ])
            return {
                seo: page.data,
                page: page.data.acf,
                menuQuickLinks: menuQuickLinks.data.items,
                menuServices: menuServices.data.items,
                optionsPage: optionsPage.data.acf
            }
        },

        head () {
            return {
                title: Api.getPageTitle(this.seo),
                meta: [
                    { name: "author", content: "Damian Tardencilla - damian@tardencilla.com" },
                    { hid: "description", name: "description", property: "og:description", content: Api.getPageDescription(this.seo) },
                    { hid: "og:description", name: "og:description", property: "og:description", content: Api.getPageDescription(this.seo) },
                    { hid: "og:title", property: "og:title", content: Api.getPageTitle(this.seo) },
                    { property: "og:image", content: Api.getImageSeo(this.seo) },
                    { hid: "twitter:title", property: "twitter:title", content: Api.getPageTitle(this.seo) },
                    { hid: "twitter:description", name: "twitter:description", content: Api.getPageDescription(this.seo) },
                    { name: "twitter:image", content: Api.getImageSeo(this.seo) }
                ]
            };
        }
    }
</script>
