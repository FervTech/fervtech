<template>
  <div class="contact-form glass-card reveal">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Full Name</label>
        <input type="text" id="name" class="form-control" placeholder="Enter your name" v-model="formData.name" required>
      </div>
      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" class="form-control" placeholder="Enter your email" v-model="formData.email" required>
      </div>
      <div class="form-group">
        <label for="subject">Subject</label>
        <input type="text" id="subject" class="form-control" placeholder="What is this regarding?" v-model="formData.subject" required>
      </div>
      <div class="form-group">
        <label for="service">Service Interest</label>
        <select id="service" class="form-control" v-model="formData.service" required>
          <option value="" disabled selected>Select a service</option>
          <option value="web">Web Development</option>
          <option value="app">App Development</option>
          <option value="rpa">RPA Solutions</option>
          <option value="design">Graphic Design</option>
          <option value="product">Product Inquiry</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" class="form-control" placeholder="Tell us about your project or inquiry..." v-model="formData.message" required></textarea>
      </div>
      <button type="submit" class="cta-btn" style="width: 100%;">
        <span v-if="!submitting">Send Message</span>
        <span v-if="submitting">Sending...</span>
      </button>
      <div v-if="submitted" class="success-message">
        <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
        Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        service: '',
        message: ''
      },
      submitting: false,
      submitted: false
    };
  },
  methods: {
    async submitForm() {
      this.submitting = true;
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', this.formData);
      this.submitting = false;
      this.submitted = true;
      this.formData = { name: '', email: '', subject: '', service: '', message: '' };
      setTimeout(() => { this.submitted = false; }, 5000);
    }
  }
};
</script>