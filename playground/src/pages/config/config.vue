<script setup lang="ts">
import { useRouter, useRouterConfig } from '../../../../src/index'

useRouterConfig({
  webview: '/pages/webview',
})

const router = useRouter()
</script>

<template>
  <div class="box">
    <button @click="router.push('https://www.baidu.com')">
      Go H5
    </button>
    <button @click="router.back()">
      Go Back
    </button>
  </div>
</template>
