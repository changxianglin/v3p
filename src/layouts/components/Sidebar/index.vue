<template>
  <div class="side-bar">侧边栏</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Siderbar'
})
</script>

<style lang="scss" scoped>
  .side-bar {
    position: absolute;
    width: 60px;
    height: 100vh;
    background: oldlace;
  }
</style>