<template>
  <section class="team-section">
    <div class="container">
      <div class="section-header reveal">
        <h2>Our Team</h2>
        <p>Meet the brilliant minds behind our success</p>
      </div>
      <div class="our_team_container">
        <div v-for="member in team" :key="member.id" class="team_member">
          <div class="team_img">
            <!-- Fixed: Use Vite's new URL for dynamic asset paths (no require!) -->
            <img :src="getImageUrl(member.image)" :alt="member.name" />
          </div>
          <div class="caption">
            <h4>{{ member.name }}</h4>
            <p>{{ member.position }}</p>
            <SocialLinks :links="member.social" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import SocialLinks from '@/components/common/SocialLinks.vue';

const props = defineProps({
  team: {
    type: Array,
    default: () => []
  }
});

// Fixed: Computed for dynamic image URLs (Vite/ESM friendly)
const getImageUrl = (imageName) => {
  return new URL(`../../assets/images/${imageName}`, import.meta.url).href;
};
</script>