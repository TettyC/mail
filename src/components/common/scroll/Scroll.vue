<script setup>
import { ref, onMounted } from "vue";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

BScroll.use(Pullup);

const props = defineProps({
  probeType: {
    type: Number,
    default: 0,
  },
  pullUpLoad: {
    type: Boolean,
    default: false,
  },
});

const bScroll = ref(null);
const wrapper = ref(null);

onMounted(() => {
  bScroll.value = new BScroll(wrapper.value, {
    click: true,
    probeType: props.probeType,
    pullUpLoad: props.pullUpLoad,
  });
});
</script>

<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  height: 100vh;
}
</style>
