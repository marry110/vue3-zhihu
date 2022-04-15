<template>
  <div class="swipe-content">
    <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
      <van-swipe-item
        class="van-swipe-item"
        v-for="(item, index) in banners"
        :key="index"
      >
        <img :src="item.img" class="img" alt="" />
        <h5 style="position: absolute; bottom: 2rem; left: 2rem">
          {{ item.title }}
        </h5>
        <template #indicator="{ active, total }">
          <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
        </template>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  props: {
    banners: {
      type: Array,
    },
  },
  setup() {
    const state = reactive({})

    return {
      ...toRefs(state),
    }
  },
}
</script>

<style lang="scss" scoped>
.swipe-content {
  position: relative;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 1rem;
  line-height: 6rem;
  text-align: center;
  background-color: #fff;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
}
.swipe-content {
  margin-top: 6rem;
}
.indicator-color {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: red;
  border: 1px solid red;
}
</style>
