<template>
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-about">
          <div class="footer-logo">
            <router-link to="/">
              <img :src="logoSrc" alt="Fervtech Logo" style="height: 40px; width: auto; margin-right: 8px;" />
            </router-link>
          </div>
          <p>Providing innovative technology solutions to help businesses thrive in the digital world. We specialize in web development, app development, RPA, and graphic design.</p>
          <div class="footer-social">
            <h4>Follow Us</h4>
            <div class="social-icons">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div class="footer-links-column">
          <h4>Quick Links</h4>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/products">Products</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>
        <div class="footer-services-column">
          <h4>Our Services</h4>
          <ul>
            <li><router-link to="/services/web-development">Web Development</router-link></li>
            <li><router-link to="/services/app-development">App Development</router-link></li>
            <li><router-link to="/services/rpa-solutions">RPA Solutions</router-link></li>
            <li><router-link to="/services/graphic-design">Graphic Design</router-link></li>
          </ul>
        </div>
        <NewsletterForm @subscribe="subscribeNewsletter" />
      </div>
      <div class="copyright">
        <p>&copy; 2023 Fervtech. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';  // Import for <router-link> usage
import NewsletterForm from './NewsletterForm.vue';  // Reuse the newsletter
import { defineEmits } from 'vue';

const emit = defineEmits(['subscribe']);

const subscribeNewsletter = (email) => {
  emit('subscribe', email);  // Bubble up to App
};

// Computed for dynamic logo URL (Vite/ESM friendly)
const logoSrc = computed(() => {
  return new URL('../../assets/images/footer-logo.png', import.meta.url).href;
});
</script>