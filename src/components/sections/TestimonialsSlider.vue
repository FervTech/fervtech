<template>
  <div class="testimonial-slider">
    <div class="testimonial-track" :style="{ transform: `translateX(-${current * 100}%)` }">
      <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-card">
        <div class="testimonial-content glass-card">
          <p class="testimonial-text">{{ testimonial.text }}</p>
          <div class="testimonial-author">
            <div class="author-avatar">
              <i class="fas fa-user"></i>
            </div>
            <div class="author-info">
              <h4>{{ testimonial.name }}</h4>
              <p>{{ testimonial.position }}, {{ testimonial.company }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="testimonial-nav">
      <div v-for="(testimonial, index) in testimonials" :key="index" class="nav-dot" :class="{ active: current === index }" @click="current = index"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    testimonials: Array
  },
  data() {
    return {
      current: 0
    };
  },
  mounted() {
    this.testimonialInterval = setInterval(() => {
      this.current = (this.current + 1) % this.testimonials.length;
    }, 5000);
  },
  beforeUnmount() {
    if (this.testimonialInterval) clearInterval(this.testimonialInterval);
  }
};
</script>