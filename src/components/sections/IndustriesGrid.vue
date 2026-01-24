<template>
  <div class="industries-grid">
    <div v-for="industry in industries" :key="industry.id" class="industry-card glass-card reveal">
      <div class="industry-icon">
        <i :class="industry.icon"></i>
      </div>
      <h3>{{ industry.title }}</h3>
      <p>{{ industry.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    industries: Array
  }
};
</script>