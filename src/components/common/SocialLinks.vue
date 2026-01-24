<template>
  <div class="social-icons">
    <a v-for="link in links" :key="link.name" :href="link.url" target="_blank">
      <i :class="link.icon"></i>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
};
</script>