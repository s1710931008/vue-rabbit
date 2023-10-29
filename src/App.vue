<script setup>

</script>

<template>
  <!-- 一級路由 -->
  <RouterView />
  <div class="test">
    test
  </div>
</template>

<style scoped lang="scss">
//不用引入共用avr.scss
.test{
  color: $priceColor;
}

</style>
