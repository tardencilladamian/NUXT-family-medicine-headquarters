<template>
    <button type="button" class="btn spinner w-100" :class="'btn-' + type" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"/>
        <span class="sr-only">Loading...</span>
    </button>
</template>
<script>
    export default {
        props: ['type']
    }
</script>
