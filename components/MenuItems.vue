<template>
    <ul :class="`${isDivide} ${classCss}`">
        <li v-if="home">
            <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li v-for="item in items" :key="item.id">
            <nuxt-link :to="getLink(item.object_slug, path)">{{ item.title }}</nuxt-link>
        </li>
    </ul>
</template>

<script>
    import Api from "~/api/index";

    export default {
        props: [
            'path',
            'items',
            'divide',
            'cssClass',
            'home'
        ],

        methods: {
            getLink(slug, path) {
                return Api.slugToUrl(slug, path);
            }
        },

        data() {
            return {
                classCss: ''
            }
        },

        created() {
            this.classCss = this.cssClass ?? ''
        },

        computed: {
            isDivide() {
                return (this.divide) ? 'divide' : '';
            }
        }
    };
</script>
