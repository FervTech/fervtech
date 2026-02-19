<template>
  <div class="process-grid">
    <div v-for="step in steps" :key="step.id" class="process-card glass-card reveal">
      <div class="process-step-number">{{ step.step }}</div>
      <h3>{{ step.title }}</h3>
      <p>{{ step.description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  steps: {
    type: Array,
    required: true,
    default: () => []
  }
});
</script>

<style scoped>

</style>