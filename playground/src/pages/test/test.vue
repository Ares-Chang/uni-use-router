<script setup lang="ts">
import { useRoute, useRouter } from '../../../../src/index'

const router = useRouter()
const route = useRoute()

// eslint-disable-next-line no-console
console.log(route, 'route')
</script>

<template>
  <div>
    <div class="query">
      {{ route.query }}
    </div>

    <button @click="router.back()">
      back
    </button>
    <button @click="router.replace('/pages/index/index')">
      index
    </button>
  </div>
</template>

<style scoped>
.query {
  height: 200rpx;
  background: #eee;
  margin-bottom: 10rpx;
  padding: 10rpx;
  overflow: auto;
}
</style>
