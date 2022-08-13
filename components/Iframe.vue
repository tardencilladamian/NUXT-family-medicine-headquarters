<template lang="html">
    <lazy-component tag="div" >
        <iframe :src="url" width="100%" :height="height"></iframe>
        </lazy-component>
</template>

<script>
    export default {
        props: ['url', 'height'],
    }
</script>
