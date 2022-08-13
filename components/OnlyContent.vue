<template>
    <section class="only-content" :class="css">
        <div class="container">
            <div class="row justify-content-center">
                <div :class="`col-lg-${columnss}`">
                    <div class="mb-0" v-if="content.content" v-html="content.content"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['content', 'col', 'css', 'columns'],

        data() {
            return {
                columnss: ''
            }
        },

        created() {
            this.columnss = this.col ?? 12
        }
    }
</script>
