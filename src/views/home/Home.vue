<script setup>
import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import Swiper from "components/common/swiper/Swiper.vue";
import { getHomeMultidata } from "api/home";
import { reactive, toRaw, onMounted } from "vue";

const homeData = reactive({
  banner: [],
  dKeyword: [],
  keywords: [],
  recommend: [],
});

onMounted(async () => {
  const { data } = await getHomeMultidata();
  for (const item in data) {
    homeData[item] = data[item].list;
  }
});
</script>

<template>
  <div class="home">
    <NavBar class="home-nav-bar">
      <template v-slot:center> 购物街 </template>
    </NavBar>
    <Scroll :probeType="3" :pullUpLoad="true">
      <Swiper :swiperList="toRaw(homeData.banner)"></Swiper>
    </Scroll>
  </div>
</template>

<style lang="scss" scoped>
.home-nav-bar {
  background: var(--color-tint);
  color: #ffffff;
}
</style>
