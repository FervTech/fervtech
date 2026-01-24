<template>
  <div class="reveal" ref="revealEl">
    <slot />
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { initScrollAnimations } from '@/assets/js/scroll-animations.js';

export default {
  name: 'RevealAnimation',
  setup() {
    onMounted(() => {
      initScrollAnimations();
    });
  }
};
</script>