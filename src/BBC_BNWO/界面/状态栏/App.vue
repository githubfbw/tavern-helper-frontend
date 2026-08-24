<template>
  <div class="card">
    <TitleBar
      :name="user.姓名"
      :location="user.当前地点"
      :gender="user.性别"
      :corruption="user.色情值"
      :stage="user.色情值阶段"
      :expanded="expanded"
      @toggle="expanded = !expanded"
    />

    <div v-if="expanded" class="content-area">
      <SocialStatus :disguise="user.伪装完整度" :approval="user.组织认可度" :chain="user.连锁堕进度" />

      <FemalePanel
        v-if="user.性别 === '女'"
        :stage="user.女性专属.堕落链阶段"
        :marriage="user.女性专属.婚恋状态"
        :pregnancy="user.女性专属.妊娠状态"
        :tattoo="user.女性专属.黑桃纹身进度"
      />
      <MalePanel
        v-else
        :potential="user.男性专属.潜力判定"
        :routing="user.男性专属.分流判定"
        :path="user.男性专属.最终路径"
        :lock="user.男性专属.贞操锁状态"
        :collar_stage="user.男性专属.绿帽奴阶段"
        :cocoon="user.男性专属.作茧仪式阶段"
      />

      <NpcDrawer :npcs="npcs" />
    </div>

    <CeremonyOverlay v-if="ceremony" :title="ceremony.title" :subtitle="ceremony.subtitle" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import CeremonyOverlay from './components/CeremonyOverlay.vue';
import FemalePanel from './components/FemalePanel.vue';
import MalePanel from './components/MalePanel.vue';
import NpcDrawer from './components/NpcDrawer.vue';
import SocialStatus from './components/SocialStatus.vue';
import TitleBar from './components/TitleBar.vue';
import { useDataStore } from './store';

const store = useDataStore();
const user = computed(() => store.data.主角);
const npcs = computed(() => store.data.NPC ?? {});

const expanded = useLocalStorage<boolean>('bbc_bnwo_status_bar:expanded', false);

const ceremony = computed(() => {
  if (user.value.性别 === '女' && user.value.女性专属.堕落链阶段 === '黑桃皇后') {
    return { title: '黑桃皇后加冕', subtitle: '新秩序下女性所能达到的最高层级' };
  }
  if (
    user.value.性别 === '男' &&
    user.value.男性专属.最终路径 === '黑蜜蝶' &&
    user.value.男性专属.作茧仪式阶段 === '已完成'
  ) {
    return { title: '鎏色定形', subtitle: '一只新的黑蜜蝶，正式蜕变' };
  }
  return null;
});
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  max-width: 680px;
  background-color: var(--c-background);
  border: 2px solid var(--c-primary);
  border-radius: 10px;
  box-shadow: 4px 4px 0 rgba(74, 54, 38, 0.12);
  font-family: var(--font-body);
  color: var(--c-border);
  overflow: hidden;
}
.content-area {
  padding: 10px 14px 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-top: 1px dashed var(--c-track);
}
</style>
