<template>
  <div class="home">
    <header-view :months="month" :days="day"></header-view>

    <banner-view :banners="bannerData"></banner-view>

    <new-item :news="newData"></new-item>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  onBeforeMount,
  onMounted,
  computed,
} from 'vue'
import HeaderView from '@/components/HeaderView.vue'
import BannerView from '@/components/BannerView.vue'
import newItem from '@/components/newItem.vue'
import time from '@/utils/index'
import { getBannerList, getNewList } from '@/api/index'

export default defineComponent({
  name: 'HomeView',
  components: {
    HeaderView,
    BannerView,
    newItem,
  },

  setup() {
    const state = reactive({
      date: new Date(),
      bannerData: [],
      newData: [],
    })

    const day = computed(() => time.formtTime(state.date)[2])

    const month = computed(() => time.formtTime(state.date)[1])

    // bannerList
    const bannerListData = async () => {
      const res = await getBannerList()
      state.bannerData = res.data.data
      // console.log(res)
      // console.log(state.bannerData)
    }

    // newList

    const newListData = async () => {
      const res = await getNewList()
      state.newData = res.data.data
      // console.log(res)
      // console.log(state.newData)
    }

    onMounted(() => {
      bannerListData()
      newListData()
    })

    return {
      ...toRefs(state),
      day,
      month,
    }
  },
})
</script>
