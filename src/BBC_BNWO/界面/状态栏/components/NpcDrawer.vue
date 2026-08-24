<template>
  <details class="npc-drawer" :open="open" @toggle="open = ($event.target as HTMLDetailsElement).open">
    <summary>
      <i class="fa-solid fa-chevron-right caret"></i>
      NPC 档案
      <span class="count">{{ names.length }}</span>
    </summary>
    <div class="npc-list">
      <div v-if="names.length === 0" class="empty">暂无已记录的NPC</div>
      <div v-for="name in names" :key="name" class="npc-row">
        <div class="npc-head">
          <span class="npc-name">{{ name }}</span>
          <span class="npc-id">{{ npcs[name].身份 }}</span>
        </div>
        <div class="npc-meta">
          <span class="tag">{{ npcs[name].关系阶段 }}</span>
          <div class="bar">
            <div class="fill" :style="{ width: npcs[name].信任度 + '%' }"></div>
          </div>
          <span class="num">{{ npcs[name].信任度 }}</span>
        </div>
      </div>
    </div>
  </details>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{
  npcs: Record<string, { 身份: string; 关系阶段: string; 信任度: number; 备注: string }>;
}>();

const open = ref(false);
const names = computed(() => Object.keys(props.npcs ?? {}));
</script>

<style lang="scss" scoped>
.npc-drawer {
  border-top: 1px dashed var(--c-track);
  padding-top: 8px;
}
summary {
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: var(--c-primary-deep);
  user-select: none;
}
summary::-webkit-details-marker {
  display: none;
}
.caret {
  font-size: 9px;
  transition: transform 0.2s ease;
}
.npc-drawer[open] .caret {
  transform: rotate(90deg);
}
.count {
  font-size: 10px;
  color: var(--c-text-muted);
  background: var(--c-track);
  border-radius: 8px;
  padding: 0 6px;
}
.npc-list {
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.empty {
  font-size: 11px;
  color: var(--c-text-muted);
}
.npc-row {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 6px 8px;
  background: var(--c-background);
  border: 1px dashed var(--c-track);
  border-radius: 6px;
}
.npc-head {
  display: flex;
  align-items: baseline;
  gap: 6px;
}
.npc-name {
  font-weight: 700;
  font-size: 12px;
  color: var(--c-border);
}
.npc-id {
  font-size: 10px;
  color: var(--c-text-muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.npc-meta {
  display: flex;
  align-items: center;
  gap: 6px;
}
.tag {
  font-size: 10px;
  color: var(--c-primary-deep);
  background: var(--c-track);
  border-radius: 8px;
  padding: 1px 6px;
  flex-shrink: 0;
}
.bar {
  flex: 1;
  height: 5px;
  border-radius: 3px;
  background: var(--c-track);
  overflow: hidden;
}
.fill {
  height: 100%;
  background: var(--c-primary);
  transition: width 0.5s ease;
}
.num {
  width: 20px;
  text-align: right;
  font-size: 10px;
  color: var(--c-text-muted);
  flex-shrink: 0;
}
</style>
