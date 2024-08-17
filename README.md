# uni-use-router

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

UniApp 路由跳转补充，与 Vue Router 语法靠近

## 🚀 Install

```sh
pnpm add uni-use-router --save-dev
```

## ⚡️ Usage

```vue
<script setup lang="ts">
import { useRouter } from 'uni-use-router'

const router = useRouter({
	webview: '/pages/webview'
})
</script>

<template>
	<view class="box">
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
	</view>
</template>

<style scoped>
.box {
	display: flex;
	flex-direction: column;
	gap: 10rpx;
}
</style>
```

## License

[MIT](./LICENSE) License © 2024-PRESENT [Anthony Fu](https://github.com/Ares-Chang)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/uni-use-router?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/uni-use-router
[npm-downloads-src]: https://img.shields.io/npm/dm/uni-use-router?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/uni-use-router
[bundle-src]: https://img.shields.io/bundlephobia/minzip/uni-use-router?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=uni-use-router
[license-src]: https://img.shields.io/github/license/Ares-Chang/uni-use-router.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/Ares-Chang/uni-use-router/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/uni-use-router
