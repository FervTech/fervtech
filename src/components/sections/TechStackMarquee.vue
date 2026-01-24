<template>
  <div class="tech-grid">
    <div class="tech-track">
      <div v-for="tech in duplicatedTech" :key="tech.id" class="tech-item glass-card reveal">
        <i :class="tech.icon"></i>
        <p>{{ tech.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    technologies: Array
  },
  computed: {
    duplicatedTech() {
      return [...this.technologies, ...this.technologies];
    }
  }
};
</script>