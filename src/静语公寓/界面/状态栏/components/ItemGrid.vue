<template>
  <div class="item-grid">
    <div class="item-cell">
      <span class="item-label">日常装扮</span>
      <span class="item-value">{{ items.日常装扮 }}</span>
    </div>
    <div class="item-cell">
      <span class="item-label">胸部</span>
      <span class="item-value">{{ items.胸部 }}</span>
    </div>
    <div class="item-cell">
      <span class="item-label">后庭</span>
      <span class="item-value">{{ items.后庭 }}</span>
    </div>
    <div class="item-cell">
      <span class="item-label">裆部/生殖器</span>
      <span class="item-value">{{ items.裆部生殖器 }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: {
    日常装扮: string;
    胸部: string;
    后庭: string;
    裆部生殖器: string;
  };
}>();
</script>

<style lang="scss" scoped>
.item-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;
}

.item-cell {
  border: 1.5px solid var(--c-border);
  background: var(--c-surface);
  padding: 6px 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.item-label {
  font-size: 0.7rem;
  color: var(--c-text-muted);
}

.item-value {
  font-size: 0.82rem;
  font-weight: bold;
}

@media (max-width: 600px) {
  .item-grid {
    grid-template-columns: 1fr;
  }
}
</style>
