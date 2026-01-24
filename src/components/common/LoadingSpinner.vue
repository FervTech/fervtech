<template>
  <div class="loading" :class="{ hidden: !loading }">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: true
    }
  }
};
</script>