<script setup>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";
</script>

<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template v-slot:img>
        <img src="~assets/img/tabbar/home.svg" alt="" />
      </template>
      <template v-slot:active-img>
        <img src="~assets/img/tabbar/home_active.svg" alt="" />
      </template>
      <template v-slot:text>首页</template>
    </tab-bar-item>

    <tab-bar-item path="/category">
      <template v-slot:img>
        <img src="~assets/img/tabbar/category.svg" alt="" />
      </template>
      <template v-slot:active-img>
        <img src="~assets/img/tabbar/category_active.svg" alt="" />
      </template>
      <template v-slot:text>分类</template>
    </tab-bar-item>

    <tab-bar-item path="/cart">
      <template v-slot:img>
        <img src="~assets/img/tabbar/shopcart.svg" alt="" />
      </template>
      <template v-slot:active-img>
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="" />
      </template>
      <template v-slot:text>购物车</template>
    </tab-bar-item>

    <tab-bar-item path="/profile">
      <template v-slot:img>
        <img src="~assets/img/tabbar/profile.svg" alt="" />
      </template>
      <template v-slot:active-img>
        <img src="~assets/img/tabbar/profile_active.svg" alt="" />
      </template>
      <template v-slot:text>我的</template>
    </tab-bar-item>
  </tab-bar>
</template>

<style scoped>
img {
  width: 24px;
  height: 24px;
  margin: 3px 0;
  vertical-align: middle;
}
</style>
