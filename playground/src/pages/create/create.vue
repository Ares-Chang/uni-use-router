<script setup lang="ts">
import { router } from '../../composables/useRouter'
</script>

<template>
  <div class="box">
    <button @click="router.push('/pages/test/test?a=1&b=2')">Go Test</button>
    <button @click="router.push({
      url: '/pages/test/test',
      query: {
        a: 1,
        b: '2',
        c: null
      }
    })">Go Test</button>
    <button @click="router.replace('/pages/test/test')">Go Replace</button>
    <button @click="router.push('https://www.baidu.com')">Go H5</button>
    <button @click="router.back()">Go Back</button>
  </div>
</template>
