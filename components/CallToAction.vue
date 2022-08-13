<template>
    <div class="call-to-action">
        <div class="container">
            <div class="row justify-content-center">
                <div :class="`col-lg-${col} text-center`">
                    <ImageResponsive
                        :url="content.icon"
                        :alt="content.title"
                        v-if="content.icon"
                        class="mb-25"
                    />
                    <h2 v-if="content.title"><strong>{{ content.title }}</strong></h2>
                    <p class="mb-40" v-if="content.body">{{ content.body }}</p>
                    <nuxt-link :to="content.link.post_name" v-if="content.link.post_name" class="btn btn-primary">{{ content.button }}</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['content', 'col']
    }
</script>
