<template>
  <div class="features-grid">
    <div v-for="feature in features" :key="feature.id" class="feature-item glass-card reveal">
      <div class="feature-icon">
        <i :class="feature.icon"></i>
      </div>
      <h4>{{ feature.title }}</h4>
      <p>{{ feature.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    features: Array
  }
};
</script>