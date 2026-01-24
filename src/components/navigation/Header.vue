<template>
  <header :class="{ scrolled: scrolled }">
    <div class="container">
      <nav>
        <router-link to="/" class="logo" @click="closeMobileMenu">
          <img :src="logoSrc" alt="Fervtech Logo"  style="height: 40px; width: auto; margin-right: 8px;"/>
        </router-link>
        <MobileMenu @toggle="toggleMobileMenu" />
        <ul class="nav-links" :class="{ active: mobileMenuOpen }">
          <li><router-link to="/" @click="closeMobileMenu">Home</router-link></li>
          <li class="dropdown" :class="{ active: servicesDropdownOpen }">
            <a href="#" @click.prevent="toggleServicesDropdown">
              Services <i class="fas fa-chevron-down" style="font-size: 12px; margin-left: 5px;"></i>
            </a>
            <div class="dropdown-content">
              <router-link to="/services/web-development" @click="closeMobileMenu">Web Development</router-link>
              <router-link to="/services/app-development" @click="closeMobileMenu">App Development</router-link>
              <router-link to="/services/rpa-solutions" @click="closeMobileMenu">RPA Solutions</router-link>
              <router-link to="/services/graphic-design" @click="closeMobileMenu">Graphic Design</router-link>
            </div>
          </li>
          <li><router-link to="/products" @click="closeMobileMenu">Products</router-link></li>
          <li><router-link to="/about" @click="closeMobileMenu">About Us</router-link></li>
          <li><router-link to="/contact" class="cta-btn" @click="closeMobileMenu">Get Started</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import MobileMenu from './MobileMenu.vue';

export default {
  components: { MobileMenu },
  props: {
    scrolled: Boolean,
    mobileMenuOpen: Boolean,
    servicesDropdownOpen: Boolean
  },
  methods: {
    toggleMobileMenu() {
      this.$emit('toggle-menu');
    },
    closeMobileMenu() {
      this.$emit('close-menu');
    },
    toggleServicesDropdown() {
      this.$emit('toggle-dropdown');
    }
  },
  computed: {
    logoSrc() {
      return new URL('../../assets/images/footer-logo.png', import.meta.url).href;  // Vite resolves at build
    }
  }
};
</script>