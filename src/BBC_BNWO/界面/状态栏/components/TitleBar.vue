<template>
  <div class="title-bar" @click="emit('toggle')">
    <div class="identity">
      <i class="gender-icon fa-solid" :class="gender === '女' ? 'fa-venus' : 'fa-mars'"></i>
      <div class="name-block">
        <div class="name">{{ name }}</div>
        <div class="sub">{{ location }}</div>
      </div>
    </div>

    <CorruptionRing :value="corruption" :stage="stage" />

    <i class="chevron fa-solid" :class="expanded ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
  </div>
</template>

<script setup lang="ts">
import CorruptionRing from './CorruptionRing.vue';

defineProps<{
  name: string;
  location: string;
  gender: '男' | '女';
  corruption: number;
  stage: string;
  expanded: boolean;
}>();
defineEmits<{ toggle: [] }>();
</script>

<style lang="scss" scoped>
.title-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  cursor: pointer;
  user-select: none;
}
.identity {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}
.gender-icon {
  color: var(--c-primary-deep);
  font-size: 14px;
  flex-shrink: 0;
}
.name-block {
  min-width: 0;
}
.name {
  font-weight: 700;
  font-size: 14px;
  color: var(--c-border);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.sub {
  font-size: 10px;
  color: var(--c-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bond {
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  flex-shrink: 0;
}
.bond-dots {
  display: flex;
  gap: 3px;
}
.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--c-track);
  transition: background 0.4s ease;
}
.dot.active {
  background: var(--c-primary);
}
.bond-label {
  font-size: 9px;
  color: var(--c-text-muted);
  white-space: nowrap;
}
.chevron {
  color: var(--c-text-muted);
  font-size: 12px;
  flex-shrink: 0;
}
</style>
