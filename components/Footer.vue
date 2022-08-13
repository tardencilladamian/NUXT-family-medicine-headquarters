<template>
    <div class="footer">

        <template v-if="page">
            <CallToAction :content="page" :col="column" />
            <div style="height: 80px; overflow: hidden;" >
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
                    <path d="M0.00,108.05 C150.00,150.00 316.03,14.30 503.95,114.97 L500.00,150.00 L0.00,150.00 Z" style="stroke: none;"></path>
                </svg>
            </div>
        </template>

        <section>
            <div class="container">
                <div class="row g-4">
                    <div class="col-xl-4 col-lg-6 col-md-6 about-us">
                        <div class="mb-40 logo-f">
                            <ImageResponsive :url="optionsPage.logo_white" />
                        </div>
                        <div class="box-block">
                            <div class="icon-box">
                                <ImageResponsive
                                    url="/images/map.png"
                                />
                            </div>
                            <span class="d-block">Visit today</span>
                            <strong style="color: #fff" v-html="optionsPage.address_business_details" />
                        </div>
                        <div class="box-block">
                            <div class="icon-box">
                                <ImageResponsive
                                    url="/images/phone.png"
                                />
                            </div>
                            <span>Call us</span>
                            <h6 class="mb-0">
                                <a :href="'tel:' + optionsPage.phone_link_business_details">{{ optionsPage.phone_business_details }}</a>
                            </h6>
                        </div>

                        <div class="pt-30">
                            <ul class="social">
                                <li v-if="optionsPage.facebook">
                                    <a :href="optionsPage.facebook" target="_blank">
                                        <ImageResponsive
                                            url="/images/facebook.png"
                                            v-if="optionsPage.facebook"
                                        />
                                    </a>
                                </li>
                                <li v-if="optionsPage.twitter">
                                    <a :href="optionsPage.twitter" target="_blank">
                                        <ImageResponsive
                                            url="/images/twitter.png"
                                            v-if="optionsPage.twitter"
                                        />
                                    </a>
                                </li>
                                <li v-if="optionsPage.yelp">
                                    <a :href="optionsPage.yelp" target="_blank">
                                        <ImageResponsive
                                            url="/images/yelp.png"
                                            v-if="optionsPage.yelp"
                                        />
                                    </a>
                                </li>
                                <li v-if="optionsPage.youtube">
                                    <a :href="optionsPage.youtube" target="_blank">
                                        <ImageResponsive
                                            url="/images/youtube.png"
                                            v-if="optionsPage.youtube"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <h4><strong>Quick links</strong></h4>
                        <MenuItems :items="menuQuickLinks" :home="true" cssClass="custom"/>
                    </div>
                    <div class="col-xl-5 col-lg-12 col-md-12">
                        <h4><strong>Services</strong></h4>
                        <MenuItems path="services" :items="menuServices" :divide="true" cssClass="custom" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import MenuItems from "~/components/MenuItems";
    import CallToAction from "~/components/CallToAction";

    export default {
        props: ['page', 'menuQuickLinks', 'menuServices', 'optionsPage', 'col'],

        components: {
            MenuItems,
            CallToAction
        },

        data() {
            return {
                column: ''
            }
        },

        created() {
            this.column = this.col ?? 8
        }
    }
</script>
