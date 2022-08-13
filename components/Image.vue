<template lang="html">
  <div class="image-placeholder" v-lazy-container="{ selector: 'img' }">
    <img
      :data-src="url"
      :data-loading="url.placeholder"
      class="img-fluid"
      :alt="alt"
      :title="alt"
    />
  </div>
</template>

<script>
export default {
  props: {
    url: "",
    alt: "",
  },
};
</script>
