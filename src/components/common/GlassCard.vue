<template>
  <div class="glass-card" v-bind="$attrs">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'GlassCard'
};
</script>