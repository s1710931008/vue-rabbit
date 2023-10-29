<script setup>
import HomeCategory from "./components/HomeCategory.vue";
import HomeBanner from "./components/HomeBanner.vue";
import HomeNew from "./components/HomeNew.vue";
import HomeHot from "./components/HomeHot.vue";
import homeProduct from "./components/HomeProduct.vue";
import HomePanel from "./components/HomePanel.vue"
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
  <!-- 測試面板組件 -->
  <HomePanel title="新鮮好物" subTitle="新鮮好物 好多品">
      <div>
          我是新鮮好物內容
      </div>
  </HomePanel>

  <HomePanel title="元氣推件" subTitle="新鮮好物 好多商品">
      <dir>
          元氣推件內容
      </dir>
  </HomePanel>

</template>