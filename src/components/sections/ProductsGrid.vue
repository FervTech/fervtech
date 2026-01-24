<template>
  <div class="products-grid">
    <div v-for="product in products" :key="product.id" class="product-card glass-card reveal">
      <div class="product-header">
        <div class="product-icon">
          <i :class="product.icon"></i>
        </div>
        <h2>{{ product.name }}</h2>
        <p>{{ product.tagline }}</p>
      </div>
      <div class="product-body">
        <p>{{ product.description }}</p>
        <div class="product-features">
          <h4>Key Features</h4>
          <ul>
            <li v-for="feature in product.features" :key="feature">{{ feature }}</li>
          </ul>
        </div>
        <div class="product-price">
          <h3>{{ product.price }}</h3>
          <router-link to="/contact" class="cta-btn">Request Demo</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: Array
  }
};
</script>