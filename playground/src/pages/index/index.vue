<script setup lang="ts">
import { useRouter } from '../../../../src/index'

const router = useRouter({
  webview: '/pages/webview',
})
</script>

<template>
  <view class="box">
    <button @click="router.push('/pages/test/test?a=1&b=2')">
      Go Test
    </button>
    <button
      @click="router.push({
        url: '/pages/test/test',
        query: {
          a: 1,
          b: '2',
          c: null,
        },
      })"
    >
      Go Test
    </button>
    <button @click="router.replace('/pages/test/test')">
      Go Replace
    </button>
    <button @click="router.push('https://www.baidu.com')">
      Go H5
    </button>
    <button @click="router.push('/pages/create/create')">
      Go CreateRouter
    </button>
    <button @click="router.push('/pages/config/config')">
      Go useConfig
    </button>
  </view>
</template>
