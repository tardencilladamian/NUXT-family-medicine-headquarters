<template>
  <button type="button" class="btn btn-primary spinner" :class="{ 'w-100': isFullWidth }" disabled>
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    <span class="visually-hidden">Loading...</span>
  </button>
</template>
<script>
export default {
  props: ['type', 'isFullWidth']
}
</script>
