<template>
  <div class="stats-grid">
    <div v-for="stat in statsArray" :key="stat.key" class="stat-item glass-card reveal">
      <h3>{{ stat.value }}{{ stat.suffix }}</h3>
      <p>{{ stat.label }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  stats: {
    type: Object,
    default: () => ({
      projects: 250,
      satisfaction: 98,
      clients: 50,
      experience: 8
    })
  }
});

// Computed to transform flat object into array of stat objects
const statsArray = computed(() => [
  {
    key: 'projects',
    value: props.stats.projects,
    suffix: '+',
    label: 'Projects Delivered'
  },
  {
    key: 'satisfaction',
    value: props.stats.satisfaction,
    suffix: '%',
    label: 'Client Satisfaction'
  },
  {
    key: 'clients',
    value: props.stats.clients,
    suffix: '+',
    label: 'Enterprise Clients'
  },
  {
    key: 'experience',
    value: props.stats.experience,
    suffix: '+',
    label: 'Years Experience'
  }
]);
</script>