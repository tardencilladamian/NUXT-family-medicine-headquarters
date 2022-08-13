<template>
    <div class="legal">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-8">
                    <div class="copyright">
                        <span>© {{ year }}. <strong>{{ name }}.</strong></span> All Rights Reserved.
                    </div>
                </div>
                <div class="col-md-4">
                    <a href="//isning.com/" target="external">
                        <ImageResponsive
                            url="https://s3-us-west-1.amazonaws.com/isningwp/resources/images/designed-by-isning-gamez.png"
                            alt="Designed by Isning Gamez"
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                year: '',
                name: ''
            }
        },

        created: function () {
            let today = new Date();
            this.year = today.getFullYear();
            this.name = process.env.WP_WEBSITE_NAME;
        }
    }
</script>
