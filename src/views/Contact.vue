<template>
  <div>
    <HeroSection title="Get in Touch" description="Ready to transform your business? Let's discuss how we can help you achieve your goals." custom-style="min-height: 60vh;" />

    <section class="contact-section">
      <div class="container">
        <div class="contact-container">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { initScrollAnimations } from '@/assets/js/scroll-animations.js';  // Add this
import HeroSection from '@/components/sections/HeroSection.vue';
import ContactInfo from '@/components/sections/ContactInfo.vue';
import ContactForm from '@/components/forms/ContactForm.vue';

export default {
  components: { HeroSection, ContactInfo, ContactForm },
  mounted() {
    this.$nextTick(() => {
      initScrollAnimations();  // Direct call—no $root!
    });
  }
};
</script>