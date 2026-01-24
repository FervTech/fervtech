<template>
  <button class="back-to-top" :class="{ show: show }" @click="scrollToTop">
    <i class="fas fa-chevron-up"></i>
  </button>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>