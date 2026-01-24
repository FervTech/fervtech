<template>
  <button class="mobile-menu-btn" @click="$emit('toggle')">
    <i :class="mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
  </button>
</template>

<script>
export default {
  props: {
    mobileMenuOpen: Boolean
  }
};
</script>