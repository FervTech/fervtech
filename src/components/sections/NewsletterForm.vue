<template>
  <div class="footer-newsletter">
    <h4>Newsletter</h4>
    <p>Subscribe to our newsletter for updates</p>
    <form class="newsletter-form" @submit.prevent="subscribe">
      <input type="email" placeholder="Your email" v-model="email" required>
      <button type="submit">Subscribe</button>
    </form>
    <p class="newsletter-note">Receive informative weekly newsletter.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: ''
    };
  },
  methods: {
    subscribe() {
      if (this.email.trim()) {
        console.log('Newsletter subscribed:', this.email);
        alert('Thank you for subscribing to our newsletter!');
        this.email = '';
      }
    }
  }
};
</script>