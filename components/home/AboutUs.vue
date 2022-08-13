<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-6">

                </div>
                <div class="col-md-6">
                    <h2 v-if="page.title"><strong>{{ page.title }}</strong></h2>
                    <div class="mb-40" v-if="page.body" v-html="page.body" />
                    <nuxt-link :to="page.link.post_name" v-if="page.link.post_name" class="btn btn-primary">{{ page.button }}</nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['page'],
    }
</script>
