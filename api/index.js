import Axios from "axios";

export default {

    slugToUrl(slug, path = null) {
        return (path) ? `/${path}/${slug}` : `/${slug}`;
    },

    ApiGetMenu(id) {
        return Axios.get(process.env.WP_API_MENU + id);
    },

    ApiGetOption() {
        return Axios.get(process.env.WP_API_ACF_OPTION);
    },

    ApiGetPage(id) {
        return Axios.get(process.env.WP_API_PAGE + id);
    },

    ApiGetPageBySlug(slug) {
        return Axios.get(process.env.WP_API_PAGE_BY_SLUG + slug);
    },

    getPageTitle(page) {
        return (page.yoast_title) ?? page.title.rendered + ' - ' + process.env.WP_WEBSITE_NAME
    },

    getPageDescription(page) {
        return page.yoast_meta[0].content ?? '444'
    },

    getImageSeo(page) {
        return page.acf.seo_image ?? ''
    }
}
