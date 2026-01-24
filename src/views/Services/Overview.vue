<template>
  <div>
    <section class="hero" style="min-height: 60vh;">
      <div class="container">
        <div class="hero-content">
          <h1>Our Services</h1>
          <p>Comprehensive technology solutions tailored to your business needs</p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <ServicesGrid :services="services" />
      </div>
    </section>
  </div>
</template>

<script>
import ServicesGrid from '@/components/sections/ServicesGrid.vue';

export default {
  components: { ServicesGrid },
  data() {
    return {
      services: [  // Pull from Home.vue data for consistency
        { id: 1, icon: 'fas fa-code', title: 'Web Development', description: 'Custom websites...', link: '/services/web-development' },
        // ... add the other 3 from Home.vue
      ]
    };
  }
};
</script>