<template>
  <div class="progress-row">
    <span class="progress-label">{{ label }}</span>
    <div class="progress-track">
      <div class="progress-fill" :class="{ deep: value >= 60 }" :style="{ width: value + '%' }"></div>
    </div>
    <span class="progress-value">{{ value }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  value: number;
}>();
</script>

<style lang="scss" scoped>
.progress-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.progress-label {
  font-size: 0.78rem;
  min-width: 72px;
  flex-shrink: 0;
}

.progress-track {
  flex: 1;
  height: 8px;
  border: 1.5px solid var(--c-border);
  background: var(--c-track);
  position: relative;
  overflow: hidden;
}

.progress-fill {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: var(--c-primary);
  transition:
    width 0.3s ease,
    background-color 0.3s ease;
}

.progress-fill.deep {
  background: var(--c-primary-deep);
}

.progress-value {
  font-size: 0.78rem;
  font-weight: bold;
  min-width: 26px;
  text-align: right;
}
</style>
