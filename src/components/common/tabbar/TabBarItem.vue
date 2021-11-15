<script setup>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
const props = defineProps({
  path: String,
  activeColor: {
    type: String,
    default: "#FE6B87",
  },
});
const route = useRoute();
const router = useRouter();

const isActive = computed(() => route.path === props.path);
// const activeColor = computed(() =>
//   isActive ? { color: props.activeColor } : {}
// );
const itemClick = () => {
  router.push(props.path);
};
</script>

<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-show="!isActive">
      <slot name="img"></slot>
    </div>
    <div v-show="isActive">
      <slot name="active-img"></slot>
    </div>
    <!-- TODO:写一篇博文，解释计算属性activeColor -->
    <div :style="isActive ? { color: props.activeColor } : {}">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tab-bar-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 49px;
  font-size: 14px;
}
</style>
