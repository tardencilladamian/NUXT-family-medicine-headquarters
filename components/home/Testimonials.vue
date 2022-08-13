<template>
    <section>
        <div class="container">
            <div class="row mb-40">
                <div class="col-12 text-center">
                    <h2><strong>Testimonials</strong></h2>
                </div>
            </div>
            <div class="row g-5">
                <div class="col-md-6" v-for="video in page">
                    <Video :video="video" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Video from "~/components/Video";

    export default {
        props: ['page'],

        components: {
            Video
        },
    }
</script>
