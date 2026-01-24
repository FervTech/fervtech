<template>
  <section class="hero" :style="customStyle">
    <div class="container">
      <div class="hero-content">
        <h1>{{ title }} <span :style="spanStyle">{{ highlight }}</span></h1>
        <p>{{ description }}</p>
        <div class="hero-buttons">
          <slot name="buttons" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    highlight: String,
    description: String,
    customStyle: {
      type: String,
      default: ''
    }
  },
  computed: {
    spanStyle() {
      return { color: 'var(--primary-light)' };
    }
  }
};
</script>