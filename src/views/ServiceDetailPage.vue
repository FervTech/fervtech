<template>
  <div>
    <HeroSection :title="serviceData.title" :description="serviceData.fullDescription" custom-style="min-height: 60vh;">
      <template #buttons>
        <router-link to="/contact" class="cta-btn">Get Started</router-link>
        <button class="btn-secondary" @click="scrollToSection('features')">
          <i class="fas fa-info-circle"></i> Learn More
        </button>
      </template>
    </HeroSection>

    <section class="section" id="features" ref="features">
      <div class="container">
        <div class="section-header reveal">
          <h2>Our {{ serviceData.title }} Services</h2>
          <p>Comprehensive solutions tailored to your specific needs</p>
        </div>
        <ServicesGrid :services="serviceData.features" />
      </div>
    </section>

    <section class="section" style="background: rgba(99, 102, 241, 0.03);">
      <div class="container">
        <div class="section-header reveal">
          <h2>Our Process</h2>
          <p>A structured approach to delivering exceptional results</p>
        </div>
        <ProcessGrid :steps="serviceData.process" />
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <h2>Benefits</h2>
          <p>Why choose our {{ serviceData.title }} services</p>
        </div>
        <div class="stats-grid">
          <div v-for="benefit in serviceData.benefits" :key="benefit.id" class="stat-item glass-card reveal">
            <div class="feature-icon" style="font-size: 2.5rem; margin-bottom: 20px;">
              <i :class="benefit.icon"></i>
            </div>
            <h3 style="font-size: 1.5rem;">{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background: var(--dark);">
      <div class="container">
        <div class="section-header reveal" style="color: white;">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today to discuss your {{ serviceData.title }} project</p>
        </div>
        <div style="text-align: center;">
          <router-link to="/contact" class="cta-btn" style="background: white; color: var(--primary);">Start Your Project <i class="fas fa-arrow-right"></i></router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { initScrollAnimations } from '@/assets/js/scroll-animations.js';  // Add this
import HeroSection from '@/components/sections/HeroSection.vue';
import ServicesGrid from '@/components/sections/ServicesGrid.vue';
import WhyChooseGrid from '@/components/sections/WhyChooseGrid.vue';
import ProcessGrid from '@/components/sections/ProcessGrid.vue';

export default {
  components: { HeroSection, ServicesGrid, WhyChooseGrid, ProcessGrid },
  props: ['serviceType'],
  data() {
    const services = {
      'web-development': {
        title: 'Web Development',
        fullDescription: 'We create responsive, high-performance websites and web applications using the latest technologies. From simple business websites to complex web applications, we deliver solutions that drive results.',
        features: [
          { id: 1, icon: 'fas fa-laptop-code', title: 'Custom Website Development', description: 'Tailored websites built with modern technologies for optimal performance and user experience.' },
          { id: 2, icon: 'fas fa-shopping-cart', title: 'E-commerce Solutions', description: 'Online stores with secure payment processing, inventory management, and customer portals.' },
          { id: 3, icon: 'fas fa-cogs', title: 'Content Management Systems', description: 'Easy-to-use CMS platforms like WordPress for seamless content updates.' },
          { id: 4, icon: 'fas fa-mobile-alt', title: 'Responsive Design', description: 'Websites that work perfectly on all devices from desktop to mobile.' },
          {
            id: 5,
            icon: 'fas fa-rocket',
            title: 'Web Applications',
            description: 'Complex web-based applications for business processes and operations.'
          },
          {
            id: 6,
            icon: 'fas fa-shield-alt',
            title: 'Security Implementation',
            description: 'SSL certificates, firewalls, and security measures to protect your website.'
          },
          {
            id: 7,
            icon: 'fas fa-bolt',
            title: 'Performance Optimization',
            description: 'Fast loading websites with optimized code and efficient resources.'
          },
          {
            id: 8,
            icon: 'fas fa-search',
            title: 'SEO Optimization',
            description: 'Built with best practices for search engine visibility and ranking.'
          },
          {
            id: 9,
            icon: 'fas fa-tools',
            title: 'Maintenance & Support',
            description: 'Ongoing updates, security patches, and technical support.'
          }],
        process: [
          {  id: 1,
        step: '1',
        title: 'Discovery & Planning',
        description: 'We begin by understanding your business goals, target audience, and project requirements.'
  },
    {
      id: 2,
      step: '2',
        title: 'Design & Prototyping',
        description: 'Our designers create wireframes and prototypes to visualize the user experience.'
    },
    {
      id: 3,
          step: '3',
        title: 'Development',
        description: 'Our developers build your website using modern frameworks and technologies.'
    },
    {
      id: 4,
          step: '4',
        title: 'Testing & QA',
        description: 'Rigorous testing across different devices and browsers for optimal performance.'
    },
    {
      id: 5,
          step: '5',
        title: 'Deployment & Launch',
        description: 'We handle the deployment process and launch your website smoothly.'
    },
    {
      id: 6,
          step: '6',
        title: 'Maintenance & Support',
        description: 'We provide ongoing support to keep your website secure and up-to-date.'
    } ],
        benefits: [
          { id: 1, icon: 'fas fa-check-circle', title: 'Responsive Design', description: 'Websites that work perfectly on all devices from desktop to mobile.' },
          { id: 2, icon: 'fas fa-bolt', title: 'Fast Performance', description: 'Optimized for speed and quick load times to reduce bounce rates.' },
          { id: 3, icon: 'fas fa-search', title: 'SEO Friendly', description: 'Built with best practices for search engine visibility and ranking.' },
          { id: 4, icon: 'fas fa-shield-alt', title: 'Secure', description: 'Implemented with the latest security measures to protect your data.' },
          {
            id: 5,
            icon: 'fas fa-expand',
            title: 'Scalable',
            description: 'Can grow with your business needs and handle increased traffic.'
          },
          {
            id: 6,
            icon: 'fas fa-user-friends',
            title: 'User-Friendly',
            description: 'Intuitive navigation and user experience for better engagement.'
          },
          {
            id: 7,
            icon: 'fas fa-cogs',
            title: 'Custom Solutions',
            description: 'Tailored to your specific business requirements and objectives.'
          },
          {
            id: 8,
            icon: 'fas fa-headset',
            title: 'Ongoing Support',
            description: 'Regular updates and maintenance to ensure long-term success.'
          }
        ]
      },

      'app-development': {
            title: 'App Development',
            fullDescription: 'Our mobile app development services cover both iOS and Android platforms. We build native and cross-platform applications that provide seamless user experiences and meet business objectives.',
            features: [
              { id: 1, icon: 'fab fa-apple', title: 'iOS App Development', description: 'Native iOS applications built with Swift and Objective-C for optimal performance.' },
              { id: 2, icon: 'fab fa-android', title: 'Android App Development', description: 'Native Android applications using Kotlin and Java for seamless Android experience.' },
              { id: 3, icon: 'fas fa-mobile', title: 'Cross-Platform Apps', description: 'React Native and Flutter apps that work on both iOS and Android.' },
              { id: 4, icon: 'fas fa-paint-brush', title: 'UI/UX Design', description: 'Beautiful, intuitive interfaces designed for optimal user experience.'},

                  {
                    id: 5,
                    icon: 'fas fa-vial',
                    title: 'App Testing',
                    description: 'Comprehensive testing including functional, usability, and performance testing.'
                  },
                  {
                    id: 6,
                    icon: 'fas fa-store',
                    title: 'App Store Deployment',
                    description: 'Submission and deployment to Apple App Store and Google Play Store.'
                  },
                  {
                    id: 7,
                    icon: 'fas fa-chart-line',
                    title: 'App Analytics',
                    description: 'Integration of analytics tools to track user behavior and app performance.'
                  },
                  {
                    id: 8,
                    icon: 'fas fa-sync-alt',
                    title: 'Maintenance & Updates',
                    description: 'Regular updates to keep your app current with OS changes and new features.'
                  },
                  {
                    id: 9,
                    icon: 'fas fa-server',
                    title: 'Backend Development',
                    description: 'Custom backend APIs and server infrastructure for your mobile app.'
                  }

            ],
            process: [
              {
                id: 1,
                step: '1',
                title: 'Concept & Strategy',
                description: 'We help refine your app idea and create a strategic development plan.'
              },
              {
                id: 2,
                step: '2',
                title: 'Design & Prototyping',
                description: 'Creating user flows, wireframes, and interactive prototypes.'
              },
              {
                id: 3,
                step: '3',
                title: 'Development',
                description: 'Building your app using appropriate technologies and clean architecture.'
              },
              {
                id: 4,
                step: '4',
                title: 'Testing & QA',
                description: 'Thorough testing including functional, usability, and security testing.'
              },
              {
                id: 5,
                step: '5',
                title: 'Deployment & Launch',
                description: 'App store submission and launch strategy for maximum visibility.'
              },
              {
                id: 6,
                step: '6',
                title: 'Post-Launch Support',
                description: 'Ongoing maintenance, updates, and feature enhancements.'
              }
            ],
            benefits: [
              { id: 1, icon: 'fas fa-bolt', title: 'Native Performance', description: 'Smooth, fast apps optimized for each platform with native capabilities.' },
              { id: 2, icon: 'fas fa-money-bill-wave', title: 'Cost Efficiency', description: 'Save time and cost with cross-platform solutions using shared codebase.' },
              { id: 3, icon: 'fas fa-user-check', title: 'User-Centered Design', description: 'Intuitive interfaces that users love, designed with UX best practices.' },
              { id: 4, icon: 'fas fa-expand', title: 'Scalable Architecture', description: 'Apps that can grow with your user base and feature requirements.' },
              {
                id: 5,
                icon: 'fas fa-shield-alt',
                title: 'Security First',
                description: 'Implementation of best security practices and data protection.'
              },
              {
                id: 6,
                icon: 'fas fa-sync-alt',
                title: 'Regular Updates',
                description: 'Keep your app current with OS updates and new device capabilities.'
              },
              {
                id: 7,
                icon: 'fas fa-chart-bar',
                title: 'Analytics Integration',
                description: 'Track user behavior, engagement, and app performance metrics.'
              },
              {
                id: 8,
                icon: 'fas fa-dollar-sign',
                title: 'Monetization Strategies',
                description: 'Implement effective revenue models like subscriptions or in-app purchases.'
              }
            ]
          },

      'rpa-solutions': {
        title: 'RPA Solutions',
        fullDescription: 'We implement Robotic Process Automation to automate repetitive, rule-based tasks, freeing up your team to focus on higher-value work and improving operational efficiency.',
        features: [
          { id: 1, icon: 'fas fa-chart-bar', title: 'Process Analysis', description: 'Comprehensive analysis of business processes to identify automation opportunities.' },
          { id: 2, icon: 'fas fa-robot', title: 'RPA Bot Development', description: 'Custom RPA bots designed to automate your specific business processes.' },
          { id: 3, icon: 'fas fa-exchange-alt', title: 'Legacy System Integration', description: 'Connect RPA bots with existing legacy systems and databases.' },
          { id: 4, icon: 'fas fa-project-diagram', title: 'Workflow Automation', description: 'Automate complex workflows across multiple systems and departments.' },
          {
            id: 5,
            icon: 'fas fa-database',
            title: 'Data Extraction',
            description: 'Automated data extraction from documents, emails, and various sources.'
          },
          {
            id: 6,
            icon: 'fas fa-exclamation-triangle',
            title: 'Error Handling',
            description: 'Intelligent error detection and handling mechanisms.'
          },
          {
            id: 7,
            icon: 'fas fa-tachometer-alt',
            title: 'Performance Monitoring',
            description: 'Real-time monitoring and analytics of RPA bot performance.'
          },
          {
            id: 8,
            icon: 'fas fa-expand',
            title: 'Scalability Planning',
            description: 'Design RPA solutions that can scale with your business growth.'
          },
          {
            id: 9,
            icon: 'fas fa-graduation-cap',
            title: 'RPA Training',
            description: 'Comprehensive training for your team on RPA tools and maintenance.'
          }],
        process: [
          {
            id: 1,
            step: '1',
            title: 'Process Discovery',
            description: 'Analyze business processes to identify automation opportunities and calculate ROI.'
          },
          {
            id: 2,
            step: '2',
            title: 'Design & Planning',
            description: 'Design automation workflows and create detailed implementation plans.'
          },
          {
            id: 3,
            step: '3',
            title: 'Development',
            description: 'Build, test, and configure automation bots for your specific processes.'
          },
          {
            id: 4,
            step: '4',
            title: 'Testing & Validation',
            description: 'Rigorously test automation workflows to ensure accuracy and compliance.'
          },
          {
            id: 5,
            step: '5',
            title: 'Deployment',
            description: 'Deploy RPA bots into production environment with minimal disruption.'
          },
          {
            id: 6,
            step: '6',
            title: 'Monitoring & Optimization',
            description: 'Ongoing monitoring, maintenance, and optimization of RPA implementation.'
          }],
        benefits: [
          { id: 1, icon: 'fas fa-bolt', title: 'Increased Efficiency', description: 'Process tasks up to 10x faster than manual execution.' },
          { id: 2, icon: 'fas fa-money-bill-wave', title: 'Cost Reduction', description: 'Reduce operational costs by 30-70% through automation.' },
          { id: 3, icon: 'fas fa-check-double', title: 'Accuracy', description: 'Eliminate human errors in repetitive, rule-based tasks.' },
          { id: 4, icon: 'fas fa-expand', title: 'Scalability', description: 'Easily scale operations without additional staff.' },
          {
            id: 5,
            icon: 'fas fa-clock',
            title: '24/7 Operations',
            description: 'Bots work around the clock without breaks or downtime.'
          },
          {
            id: 6,
            icon: 'fas fa-clipboard-check',
            title: 'Compliance',
            description: 'Ensure consistent adherence to regulations and standards.'
          },
          {
            id: 7,
            icon: 'fas fa-smile',
            title: 'Employee Satisfaction',
            description: 'Free staff from mundane tasks for higher-value work.'
          },
          {
            id: 8,
            icon: 'fas fa-chart-line',
            title: 'Quick ROI',
            description: 'Typically achieve return on investment in 6-12 months.'
          }
        ]
      },
      'graphic-design': {
        title: 'Graphic Design',
        fullDescription: 'Our creative design team delivers visually compelling designs that communicate your brand message effectively and create memorable experiences for your audience.',
        features: [
          { id: 1, icon: 'fas fa-palette', title: 'Logo Design', description: 'Unique, memorable logos that represent your brand identity.' },
          { id: 2, icon: 'fas fa-bullhorn', title: 'Marketing Collateral', description: 'Brochures, flyers, and promotional materials that convert.' },
          { id: 3, icon: 'fas fa-mobile-alt', title: 'UI/UX Design', description: 'User interfaces designed for optimal experience and engagement.' },
          { id: 4, icon: 'fab fa-instagram', title: 'Social Media Graphics', description: 'Eye-catching graphics for social media platforms and campaigns.' },
          {
            id: 5,
            icon: 'fas fa-presentation',
            title: 'Presentation Design',
            description: 'Professional PowerPoint and Keynote presentations.'
          },
          {
            id: 6,
            icon: 'fas fa-box',
            title: 'Packaging Design',
            description: 'Attractive packaging that stands out on shelves.'
          },
          {
            id: 7,
            icon: 'fas fa-print',
            title: 'Print Design',
            description: 'Business cards, letterheads, and other printed materials.'
          },
          {
            id: 8,
            icon: 'fas fa-book',
            title: 'Brand Style Guides',
            description: 'Comprehensive guidelines for consistent brand application.'
          },
          {
            id: 9,
            icon: 'fas fa-chart-pie',
            title: 'Infographic Design',
            description: 'Visual representations of data and information.'
          }],
        process: [
          {
            id: 1,
            step: '1',
            title: 'Discovery & Research',
            description: 'Learn about your brand, audience, competitors, and design requirements.'
          },
          {
            id: 2,
            step: '2',
            title: 'Concept Development',
            description: 'Create multiple design concepts and directions for your review.'
          },
          {
            id: 3,
            step: '3',
            title: 'Design Execution',
            description: 'Refine selected concept and execute across all required formats.'
          },
          {
            id: 4,
            step: '4',
            title: 'Review & Revision',
            description: 'Present designs for feedback and make revisions based on your input.'
          },
          {
            id: 5,
            step: '5',
            title: 'Finalization',
            description: 'Finalize all design elements and prepare files for various applications.'
          },
          {
            id: 6,
            step: '6',
            title: 'Delivery & Support',
            description: 'Deliver all design assets and provide implementation support.'
          } ],
        benefits: [
          { id: 1, icon: 'fas fa-award', title: 'Professional Quality', description: 'Polished, professional designs that impress and engage.' },
          { id: 2, icon: 'fas fa-brush', title: 'Brand Consistency', description: 'Cohesive visual identity across all brand touchpoints.' },
          { id: 3, icon: 'fas fa-user-check', title: 'User-Centered', description: 'Designs that prioritize user experience and engagement.' },
          { id: 4, icon: 'fas fa-lightbulb', title: 'Creative Innovation', description: 'Fresh, innovative concepts that stand out from competitors.' },
          {
            id: 5,
            icon: 'fas fa-chess',
            title: 'Strategic Approach',
            description: 'Design that supports business objectives and drives results.'
          },
          {
            id: 6,
            icon: 'fas fa-file-export',
            title: 'Technical Expertise',
            description: 'Proper file preparation for all applications and formats.'
          },
          {
            id: 7,
            icon: 'fas fa-clock',
            title: 'Quick Turnaround',
            description: 'Efficient processes without compromising on quality.'
          },
          {
            id: 8,
            icon: 'fas fa-headset',
            title: 'Ongoing Support',
            description: 'Design updates and extensions as your needs evolve.'
          }
        ]
      }
    };
    return {
      serviceData: services[this.serviceType] || services['web-development']
    };
  },
  mounted() {
    this.$nextTick(() => {
      initScrollAnimations();  // Direct call—no $root!
    });
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>