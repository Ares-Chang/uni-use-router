<script setup lang="ts">
import { useRouter, useRoute } from 'uni-use-router'

const router = useRouter()
const route = useRoute()

console.log(route, 'route')
</script>

<template>
  <div>
    <div class="query">{{ route.query }}</div>
    
    <button @click="router.back()">back</button>
    <button @click="router.replace('/pages/index/index')">index</button>
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