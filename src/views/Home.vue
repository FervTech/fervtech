<template>
  <div>
    <HeroSection title="Transform Your Business with" highlight="AI-Powered" description="We build powerful digital solutions that drive growth, enhance efficiency, and create exceptional user experiences. Partner with us to transform your digital presence.">
      <template #buttons>
        <router-link to="/contact" class="cta-btn">Start Your Project <i class="fas fa-arrow-right"></i></router-link>
        <router-link to="/services" class="btn-secondary"><i class="fas fa-play-circle"></i> Watch Demo</router-link>
      </template>
    </HeroSection>

    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <h2>Our Services</h2>
          <p>Comprehensive technology solutions tailored to your business needs</p>
        </div>
        <ServicesGrid :services="services" />
      </div>
    </section>

    <section class="stats-section">
      <div class="container">
        <StatsGrid :stats="stats" />
      </div>
    </section>

    <section class="industries-section">
      <div class="container">
        <div class="section-header reveal">
          <h2>Industries We Serve</h2>
          <p>We provide technology solutions across various industries</p>
        </div>
        <IndustriesGrid :industries="industries" />
      </div>
    </section>

    <section class="tech-stack section">
      <div class="container">
        <div class="section-header reveal">
          <h2>Technology Stack</h2>
          <p>We work with cutting-edge technologies to deliver exceptional results</p>
        </div>
        <TechStackMarquee :technologies="technologies" />
      </div>
    </section>

    <section class="products-section">
      <div class="container">
        <div class="section-header reveal">
          <h2>Our Products</h2>
          <p>Powerful software solutions to streamline your operations</p>
        </div>
        <ProductsGrid :products="featuredProducts" />
      </div>
    </section>

    <section class="why-choose-section">
      <div class="container">
        <div class="section-header reveal">
          <h2>Why Choose Fervtech</h2>
          <p>What sets us apart from the competition</p>
        </div>
        <div class="why-choose-content">
          <WhyChooseGrid :features="whyChooseFeatures" />
        </div>
      </div>
    </section>

    <section class="testimonials-section">
      <div class="container">
        <div class="section-header reveal">
          <h2>Client Testimonials</h2>
          <p>What our clients say about working with us</p>
        </div>
        <TestimonialsSlider :testimonials="testimonials" />
      </div>
    </section>
  </div>
</template>

<script>
import { initScrollAnimations } from '@/assets/js/scroll-animations.js';  // Add this
import HeroSection from '@/components/sections/HeroSection.vue';
import ServicesGrid from '@/components/sections/ServicesGrid.vue';
import StatsGrid from '@/components/sections/StatsGrid.vue';
import IndustriesGrid from '@/components/sections/IndustriesGrid.vue';
import TechStackMarquee from '@/components/sections/TechStackMarquee.vue';
import ProductsGrid from '@/components/sections/ProductsGrid.vue';
import WhyChooseGrid from '@/components/sections/WhyChooseGrid.vue';
import TestimonialsSlider from '@/components/sections/TestimonialsSlider.vue';

export default {
  components: {
    HeroSection,
    ServicesGrid,
    StatsGrid,
    IndustriesGrid,
    TechStackMarquee,
    ProductsGrid,
    WhyChooseGrid,
    TestimonialsSlider
  },
  data() {
    return {
      services: [
        { id: 1, icon: 'fas fa-code', title: 'Web Development', description: 'Custom websites and web applications built with modern technologies and best practices.', link: '/services/web-development' },
        { id: 2, icon: 'fas fa-mobile-alt', title: 'App Development', description: 'Native and cross-platform mobile applications for iOS and Android platforms.', link: '/services/app-development' },
        { id: 3, icon: 'fas fa-robot', title: 'RPA Solutions', description: 'Robotic Process Automation to streamline business processes and increase efficiency.', link: '/services/rpa-solutions' },
        { id: 4, icon: 'fas fa-paint-brush', title: 'Graphic Design', description: 'Creative design services including branding, UI/UX, and marketing materials.', link: '/services/graphic-design' }
      ],
      stats: { projects: '250', satisfaction: '98', clients: '50', experience: '8' },
      industries: [
        { id: 1, icon: 'fas fa-building', title: 'Finance & Banking', description: 'Secure digital banking solutions, fintech apps, and financial process automation.' },
        { id: 2, icon: 'fas fa-heartbeat', title: 'Healthcare', description: 'Healthtech solutions, patient portals, medical apps, and healthcare automation.' },
        { id: 3, icon: 'fas fa-shopping-cart', title: 'Retail & E-commerce', description: 'Online stores, inventory management, and customer engagement platforms.' },
        { id: 4, icon: 'fas fa-graduation-cap', title: 'Education', description: 'E-learning platforms, educational apps, and institutional management systems.' },
        { id: 5, icon: 'fas fa-industry', title: 'Manufacturing', description: 'Industrial automation, supply chain management, and production optimization.' },
        { id: 6, icon: 'fas fa-truck', title: 'Logistics', description: 'Fleet management, tracking systems, and logistics automation solutions.' }
      ],
      technologies: [
        { id: 1, icon: 'fab fa-vuejs', name: 'Vue.js' },
        { id: 2, icon: 'fab fa-react', name: 'React' },
        { id: 3, icon: 'fab fa-node-js', name: 'Node.js' },
        { id: 4, icon: 'fab fa-python', name: 'Python' },
        { id: 5, icon: 'fas fa-database', name: 'MongoDB' },
        { id: 6, icon: 'fab fa-aws', name: 'AWS' },
        { id: 7, icon: 'fab fa-docker', name: 'Docker' },
        { id: 8, icon: 'fab fa-figma', name: 'Figma' }
      ],
      featuredProducts: [
        {
          id: 1, icon: 'fas fa-chart-line', name: 'Business Analytics Suite', tagline: 'Data-Driven Decision Making',
          description: 'Comprehensive analytics platform to track business performance and make data-driven decisions with real-time insights and predictive analytics.',
          features: ['Real-time dashboards and reporting', 'Predictive analytics with machine learning', 'Custom report builder', 'Advanced data visualization'],
          price: 'Starting at $499/month'
        },
        {
          id: 2, icon: 'fas fa-cogs', name: 'Process Automator Pro', tagline: 'Intelligent Automation Platform',
          description: 'Advanced RPA tool to automate complex business processes across multiple systems with AI-powered decision making and analytics.',
          features: ['Drag-and-drop workflow builder', 'AI-powered decision engine', 'Multi-system integration', 'Compliance reporting'],
          price: 'Starting at $799/month'
        }
      ],
      whyChooseFeatures: [
        { id: 1, icon: 'fas fa-users', title: 'Expert Team', description: 'Our team comprises industry experts with years of experience in technology solutions.' },
        { id: 2, icon: 'fas fa-lightbulb', title: 'Innovative Solutions', description: 'We stay ahead of technology trends to deliver cutting-edge solutions.' },
        { id: 3, icon: 'fas fa-handshake', title: 'Client-Centric Approach', description: 'We work closely with clients to understand their unique needs and challenges.' },
        { id: 4, icon: 'fas fa-clock', title: 'Timely Delivery', description: 'We adhere to project timelines and deliver quality solutions on schedule.' },
        { id: 5, icon: 'fas fa-shield-alt', title: 'Quality Assurance', description: 'Rigorous testing ensures our solutions are reliable and perform optimally.' },
        { id: 6, icon: 'fas fa-headset', title: 'Ongoing Support', description: 'We provide comprehensive support and maintenance for all our solutions.' }
      ],
      testimonials: [
        { id: 1, name: 'Michael Rodriguez', position: 'CEO', company: 'TechFlow Solutions', text: "Fervtech transformed our outdated systems with their RPA solutions. We've seen a 40% increase in operational efficiency and saved countless hours of manual work. Their team was professional, knowledgeable, and delivered exactly what we needed." },
        { id: 2, name: 'Sarah Chen', position: 'Marketing Director', company: 'Global Retail Group', text: "The web development team at Fervtech created an exceptional e-commerce platform for us. The site is fast, user-friendly, and has significantly increased our online sales. Their attention to detail and understanding of our business needs was impressive." },
        { id: 3, name: 'David Wilson', position: 'Operations Manager', company: 'HealthFirst Medical', text: "Our mobile app developed by Fervtech has revolutionized how we interact with patients. The app is intuitive, secure, and has received excellent feedback from both patients and staff. Their post-launch support has been outstanding." }
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