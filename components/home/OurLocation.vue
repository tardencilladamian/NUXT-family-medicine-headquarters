<template>
    <section>
        <div class="container-fluid">
            <div class="row g-0 align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="space">
                        <h2 v-if="page.title"><strong>{{ page.title }}</strong></h2>
                        <div class="mb-40" v-if="page.body" v-html="page.body" />
                        <nuxt-link :to="page.link.post_name" v-if="page.link.post_name" class="btn btn-primary">{{ page.button }}</nuxt-link>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 map-our-location">
                    <Iframe url="https://snazzymaps.com/embed/259480" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Iframe from '~/components/Iframe'

    export default {
        props: ['page'],

        components: {Iframe}
    }
</script>
