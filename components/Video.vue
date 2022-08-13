<template>
  <div class="video-block hover06 column">
    <div>
      <a data-fancybox :href="video.link" target="_blank" class="playBut">
        <figure>
          <ImageResponsive :url="video.image" alt="" />
        </figure>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 213.7 213.7"
          enable-background="new 0 0 213.7 213.7"
          xml:space="preserve"
        >
          <polygon
            class="triangle"
            id="XMLID_18_"
            fill="none"
            stroke-width="9"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            points="73.5,62.5 148.5,105.8 73.5,149.1"
          />
          <circle
            class="circle"
            id="XMLID_17_"
            fill="none"
            stroke-width="9"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            cx="106.8"
            cy="106.8"
            r="103.3"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["video"],
};
</script>
