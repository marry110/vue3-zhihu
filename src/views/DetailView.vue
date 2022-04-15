<template>
  <div class="detailBox">
    <!-- //nav -->

    <van-nav-bar
      left-text="返回"
      left-arrow
      @click-left="$router.push('/')"
      @click-right="showShare = true"
    >
      <template #right>
        <van-icon name="arrow" size="18" />
      </template>
    </van-nav-bar>

    <!-- 分享面板 -->
    <van-share-sheet
      v-model:show="showShare"
      title="立即分享给好友"
      :options="options"
    />
    <!-- 文章内容 -->
    <div class="headBox">
      <h3>{{ title }}</h3>
      <span>{{ author }}</span>
    </div>
    <div class="content" v-html="body"></div>
    <!-- 结尾  -->
    <van-button type="primary">进入[知乎]查看相关讨论</van-button>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, watch, ref, beforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getNewsDetail } from '@/api/index'
export default {
  setup() {
    const id = ref()
    const route = useRoute()
    const router = useRouter()
    // console.log(router.currentRoute.value.query)
    // console.log(router.currentRoute.value.params)
    const state = reactive({
      showShare: false,
      options: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],
      detailData: [],
      title: '',
      author: '',
      body: '',
    })
    // const detailListData = async () => {
    //   const res = await getNewsDetail(id)
    //   let id = route.params.id
    //   console.log(route)
    //   console.log(route.params.id)
    //   state.detailData = res.data.data
    //   console.log(res)
    //   console.log(state.detailData)
    // }
    watch(id, async () => {
      const res = await getNewsDetail(id.value)
      console.log(res)
    })
    onMounted(async () => {
      let id = route.params.id
      console.log(route)
      console.log(route.params.id)
      let result = await getNewsDetail(id)
      state.detailData = result.data.data
      console.log(state.detailData)
      console.log(result)
      console.log(result.data.data)
      // console.log(result.data.data[0].title)
      let { title, author, body } = result.data.data[id - 1]
      // state.title = result.data.data.title
      // console.log(state.title)

      state.title = title
      console.log(title)
      state.author = author
      console.log(author)
      state.body = body
      console.log(body)
    })
    // beforeMount(async () => {
    //   let id = route.query.id
    //   let { id } = route.query.id
    //   this.id = id
    // })
    return {
      id,
      // detailListData,
      ...toRefs(state),
    }
  },
}
</script>

<style lang="scss" scoped>
.detailBox {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 0 0.5rem;
  .headBox {
    // border: 1px solid red;
    box-sizing: border-box;
    padding: 0.2rem;
    width: 100%;
    background: linear-gradient(
      0,
      rgba(55, 86, 103, 0.5),
      rgba(55, 86, 103, 0)
    );
    color: #fff;
    line-height: 1.4rem;

    h3 {
      font-size: 1rem;
    }

    span {
      display: block;
      font-size: 0.4rem;
      text-align: right;
    }
  }
  .content {
    width: 97%;
    margin: 0 auto;
  }
}
</style>
