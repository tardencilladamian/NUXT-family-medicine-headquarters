<template>
    <section class="only-content" :class="css">
        <div class="container-fluid">
            <div class="row">

                <div
                    :class="`col-lg-${numColumnsImage} d-flex align-items-center justify-content-center only-img-block`"
                    :style="`background: url('${content.image}') no-repeat center;background-size: cover`">
                </div>

                <div :class="`col-lg-${numColumnsText}`">
                    <div class="space-block" v-if="content.content" v-html="content.content"></div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['content', 'columnsText', 'columnsImage', 'css'],

        data() {
            return {
                numColumnsImage: '',
                numColumnsText: ''
            }
        },

        created() {
            this.numColumnsImage = this.columnsImage ?? 6;
            this.numColumnsText = this.columnsText ?? 6;
        }
    }
</script>
