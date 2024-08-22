<!-- eslint-disable no-console -->
<script setup lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app'

onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style>
.box {
  display: flex;
  flex-direction: column;
  gap: 10rpx;
}
</style>
