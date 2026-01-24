<template>
  <div id="app">
    <LoadingSpinner :loading="loading" />
    <div id="particles-js"></div>
    <div class="gradient-bg"></div>
    <Header
        :scrolled="scrolled"
        :mobile-menu-open="mobileMenuOpen"
        :services-dropdown-open="servicesDropdownOpen"
        @toggle-menu="toggleMobileMenu"
        @close-menu="closeMobileMenu"
        @toggle-dropdown="toggleServicesDropdown"
    />
    <main>
      <router-view />
    </main>
    <Footer @subscribe="subscribeNewsletter" />
    <BackToTopButton :show="showBackToTop" />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Header from '@/components/navigation/Header.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import BackToTopButton from '@/components/common/BackToTopButton.vue';
import Footer from '@/components/sections/Footer.vue';
import { initScrollAnimations } from '@/assets/js/scroll-animations.js';

// Refs & state
const loading = ref(true);
const scrolled = ref(false);
const mobileMenuOpen = ref(false);
const servicesDropdownOpen = ref(false);
const showBackToTop = ref(false);
const newsletterEmail = ref('');

// Methods
const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
  showBackToTop.value = window.scrollY > 300;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  servicesDropdownOpen.value = false;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  servicesDropdownOpen.value = false;
};

const toggleServicesDropdown = () => {
  servicesDropdownOpen.value = !servicesDropdownOpen.value;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const subscribeNewsletter = (email) => {
  if (email?.trim()) {
    console.log('Newsletter subscribed:', email);
    alert('Thank you for subscribing to our newsletter!');
    newsletterEmail.value = '';
  }
};

// Particles init (CDN fallback for reliability)
const initParticles = () => {
  if (typeof window !== 'undefined' && window.particlesJS && document.getElementById('particles-js')) {
    window.particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#6366f1" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#818cf8",
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" }
        }
      },
      retina_detect: true
    });
  }
};

const appInitScrollAnimations = () => {
  initScrollAnimations();
};

// Lifecycle
onMounted(() => {
  // Load particles via CDN script (avoids npm bundling issues)
  if (!document.querySelector('script[src*="particles.js"]')) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    script.onload = () => {
      setTimeout(initParticles, 100); // Init after load
    };
    document.head.appendChild(script);
  } else {
    setTimeout(initParticles, 100);
  }

  setTimeout(() => {
    loading.value = false;
  }, 1000);

  window.addEventListener('scroll', handleScroll);
  appInitScrollAnimations();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>