<template>
  <div>
    <HeroSection title="About Fervtech" description="Pioneering digital transformation since 2015. Our journey of innovation and excellence continues." custom-style="min-height: 60vh;" />

    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <h2>Our Story</h2>
          <P>Fervtech is a dynamic technology company with a passionate team of technology enthusiasts, developers, and creatives,
            we are driven by the relentless pursuit of innovation. Our core belief is that technology should be a force for positive change,
            empowering businesses to evolve and thrive in the dynamic digital landscape.</p>
          <br>
          <P> With a commitment to excellence and a focus on client success, we combine expertise, creativity,
            and cutting-edge solutions to craft remarkable digital experiences that transcend expectations.
            We help bloggers, companies, institutions, governments, agencies, startups to create a compelling online presence
            and efficiently reach their digital goals.</P>
          <br>
          <p> Welcome to FervTech, where the possibilities of technology are boundless,
            and every challenge is an opportunity to redefine what is possible.</P>
        </div>
        <div class="services-grid">
          <div class="service-card glass-card reveal">
            <div class="service-icon"><i class="fas fa-rocket"></i></div>
            <h3>Our Mission</h3>
            <p>Our Mission is to equip businesses with innovative technology solutions that drive efficiency and elevate user experiences. Through dedication and collaboration, we envision a future where technology propels our clients to unparalleled success.</p>
          </div>
          <div class="service-card glass-card reveal">
            <div class="service-icon"><i class="fas fa-eye"></i></div>
            <h3>Our Vision</h3>
            <p>Our vision is to revolutionize the digital landscape by empowering businesses with cutting-edge technology solutions. We aspire to be the driving force behind their growth, helping them navigate the complexities of the modern world with confidence and innovation.</p>
          </div>
          <div class="service-card glass-card reveal">
            <div class="service-icon"><i class="fas fa-star"></i></div>
            <h3>Our Values</h3>
            <p>Innovation, Excellence, Integrity, Collaboration, and Customer Success drive everything we do.</p>
          </div>
        </div>

        <TeamSection :team="team" />
      </div>
    </section>
  </div>
</template>

<script>
import { initScrollAnimations } from '@/assets/js/scroll-animations.js';  // Add this
import HeroSection from '@/components/sections/HeroSection.vue';
import TeamSection from '@/components/sections/TeamSection.vue';

export default {
  components: { HeroSection, TeamSection },
  data() {
    return {
      team: [
        { id: 1, name: 'Faisel Ali', position: 'CEO', image: 'Team4.jpg', social: [{ name: 'linkedin', icon: 'fa-brands fa-linkedin-in', url: 'https://www.linkedin.com/in/faisel-ali-34003b1a7/' }, { name: 'instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/faiselali77/' }, { name: 'twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/faisel35902' }] },
        { id: 2, name: 'M.Appiah', position: 'COO', image: 'Team4.jpg', social: [{ name: 'linkedin', icon: 'fa-brands fa-linkedin-in', url: 'https://www.linkedin.com/in/muhammad-mujtaba-appiah-91b4ba115/' }, { name: 'instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/delazycoder/' }, { name: 'twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/muj198' }] },
        { id: 3, name: 'A.Mohammed', position: 'CFO', image: 'Team4.jpg', social: [{ name: 'linkedin', icon: 'fa-brands fa-linkedin-in', url: 'https://gh.linkedin.com/in/adamsmoha' }, { name: 'instagram', icon: 'fab fa-instagram', url: 'https://instagram.com/adamskappiah?utm_source=qr&igshid=OGIxMTE0OTdkZA==' }, { name: 'twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/mo86937340?t=iA4dNZwmGO5Lq90gM7vt9g&s=09' }] },
        { id: 4, name: 'Nana Kwame', position: 'CMO', image: 'Team4.jpg', social: [{ name: 'instagram', icon: 'fab fa-instagram', url: 'https://instagram.com/logonyame?igshid=MzNlNGNkZWQ4Mg==' }, { name: 'twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/VAmenorpe?t=hxnl93pGVUGhg4kKmHSlDg&s=09' }] }
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