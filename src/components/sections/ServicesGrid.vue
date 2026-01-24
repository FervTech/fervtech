<template>
  <div class="services-grid">
    <GlassCard v-for="service in services" :key="service.id" class="service-card reveal">
      <div class="service-icon">
        <i :class="service.icon"></i>
      </div>
      <h3>{{ service.title }}</h3>
      <p>{{ service.description }}</p>
      <router-link :to="service.link" class="learn-more">
        Learn More <i class="fas fa-arrow-right"></i>
      </router-link>
    </GlassCard>
  </div>
</template>

<script>
import GlassCard from '@/components/common/GlassCard.vue';

export default {
  components: { GlassCard },
  props: {
    services: Array
  }
};
</script>