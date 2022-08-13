<template>
    <div class="page-wrapper">
        <nuxt />
        <Legal />
    </div>
</template>

<script>
    import Legal from "~/components/Legal";

    export default {
        components: {
            Legal
        }
    }
</script>
