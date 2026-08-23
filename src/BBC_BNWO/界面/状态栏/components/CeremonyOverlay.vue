<template>
  <div class="overlay">
    <div class="content">
      <div class="glyph">♠</div>
      <div class="title">{{ title }}</div>
      <div class="subtitle">{{ subtitle }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; subtitle: string }>();
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: radial-gradient(circle at center, var(--c-accent-deep) 0%, #000000 120%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  animation: fade-in 0.8s ease;
}
.content {
  text-align: center;
  color: var(--c-gold);
}
.glyph {
  font-size: 64px;
  animation: pulse 2s ease-in-out infinite;
}
.title {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 4px;
  margin-top: 12px;
}
.subtitle {
  font-size: 13px;
  color: #d8c79a;
  margin-top: 6px;
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.85;
  }
  50% {
    transform: scale(1.15);
    opacity: 1;
  }
}
</style>
