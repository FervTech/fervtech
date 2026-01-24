<template>
  <div>
    <HeroSection title="Our Products" description="Discover our range of innovative software solutions designed to solve business challenges and drive efficiency." custom-style="min-height: 60vh;" />

    <section class="products-section">
      <div class="container">
        <ProductsGrid :products="products" />
      </div>
    </section>
  </div>
</template>

<script>
import { initScrollAnimations } from '@/assets/js/scroll-animations.js';  // Add this
import HeroSection from '@/components/sections/HeroSection.vue';
import ProductsGrid from '@/components/sections/ProductsGrid.vue';

export default {
  components: { HeroSection, ProductsGrid },
  data() {
    return {
      products: [
        // Full array from original Home.vue featuredProducts, plus additional from original ProductsPage
        { id: 1, icon: 'fas fa-chart-line', name: 'Business Analytics Suite', tagline: 'Data-Driven Decision Making', description: '...', features: ['Unified multi-cloud management console'], price: 'Starting at $499/month' },
        { id: 2, icon: 'fas fa-cogs', name: 'Process Automator Pro', tagline: 'Intelligent Automation Platform', description: '...', features: ['Unified multi-cloud management console'], price: 'Starting at $799/month' },
        { id: 3, icon: 'fas fa-shopping-cart', name: 'E-Commerce Platform', tagline: 'Complete Online Store Solution', description: 'Full-featured online store solution with inventory management, payment processing, and customer relationship management tools.', features: ['Advanced inventory management', 'Integration with major payment gateways', 'Built-in CRM with customer segmentation', 'Email marketing automation', 'Mobile-responsive design templates', 'SEO optimization tools', 'Abandoned cart recovery', 'Multi-channel selling capabilities'], price: 'Starting at $299/month' },
        { id: 4, icon: 'fas fa-cloud', name: 'Cloud Management Suite', tagline: 'Simplified Cloud Operations', description: 'Centralized platform to manage multiple cloud services, optimize costs, and ensure security compliance across your cloud infrastructure.', features: ['Unified multi-cloud management console', 'Cost optimization recommendations', 'Security compliance monitoring', 'Automated backup and disaster recovery', 'Performance monitoring and alerts', 'Resource utilization analytics', 'Automated provisioning', 'Compliance reporting for regulations'], price: 'Starting at $599/month' }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      initScrollAnimations();  // Direct call—no $root!
    });
  }
};
</script>