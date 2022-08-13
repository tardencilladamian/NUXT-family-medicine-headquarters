<template>
    <div class="heroe">
        <div class="container">
            <div class="row justify-content-center">
                <div :class="`col-lg-${numColumn} text-center`">
                    <h1 v-if="title" :class="marginBottom"><strong>{{ title }}</strong></h1>
                    <p class="mb-0" v-if="content.content">{{ content.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['content', 'col'],

        data() {
            return {
                numColumn: '',
                marginBottom: 0,
                title: ''
            }
        },

        created() {
            this.numColumn = this.col ?? 12;
            this.marginBottom = (this.content.content) ? 'mb-20' : 'mb-0'
            this.title = this.content.title ?? ''
        }
    }
</script>
