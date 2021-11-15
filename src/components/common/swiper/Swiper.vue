<script setup>
import BScroll from "@better-scroll/core";
import Slide from "@better-scroll/slide";
import { ref, onBeforeUnmount } from "vue";

BScroll.use(Slide);

const props = defineProps({
  swiperList: {
    type: Array,
    required: true,
  },
});

const bScroll = ref(null);
const slide = ref(null);
const currentPageIndex = ref(0);

const _init = () => {
  const bsValue = (bScroll.value = new BScroll(slide.value, {
    scrollX: true,
    scrollY: false,
    slide: true,
    momentum: false,
    bounce: false,
    probeType: 3,
  }));

  bsValue.on("slideWillChange", (page) => {
    currentPageIndex.value = page.pageX;
  });
};

const goToPage = (index) => {
  console.log(props.swiperList);
  bScroll.value.goToPage(index, 0);
};

setTimeout(() => {
  _init();
}, 100);

onBeforeUnmount(() => {
  bScroll.value.destroy();
});
</script>

<template>
  <div class="container">
    <div class="wrapper" ref="slide">
      <div class="content">
        <div class="page" v-for="item in swiperList" :key="item.acm">
          <a :href="item.link">
            <img :src="item.image" alt="" />
          </a>
        </div>
      </div>
    </div>
    <div class="dots">
      <span
        class="dot"
        v-for="(item, index) in swiperList"
        :key="item.acm"
        :class="{ active: currentPageIndex === index }"
        @click="goToPage(index)"
      ></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  .wrapper {
    min-height: 1px;
    overflow: hidden;
    .content {
      white-space: nowrap;
      .page {
        display: inline-block;
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
  }
  .dots {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    .dot {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #eee;
      &.active {
        width: 20px;
        border-radius: 5px;
      }
    }
  }
}
</style>
