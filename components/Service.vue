<template>
    <nuxt-link :to="getLink(item.link.post_name, 'services')">
        <ImageResponsive :url="item.image" />
        <h3><strong>{{ item.title }}</strong></h3>
    </nuxt-link>
</template>

<script>
    import Api from "~/api/index";

    export default {
        props: [
            'item'
        ],

        methods: {
            getLink(slug, path) {
                return Api.slugToUrl(slug, path);
            }
        }
    };
</script>
