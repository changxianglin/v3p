<template>
  <div>面包屑导航</div>
</template>

<script lang="ts">
import { defineComponent, ref, compile, onMounted, watch, } from "vue";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: 'BreadCrumb',
  setup() {
    const levelList = ref(null)
    const router: any = useRouter()
    const route: any = useRoute()

    // 解析路由匹配数组
    const getBreadcrumb = () => {
      // 留下只有 title 路由
      let matched: any = route.matched.filter((item: any) => item.meta && item.meta.title)

      // 首页判断
      const first = matched[0]
      if (first.path !== '/') {
        matched = [{path: '/home', meta: {title: '首页'}}].concat(matched)
      }

      // 拼出跳转数据
      levelList.value = matched.filter(
        (item: any) => item.meta && item.meta.title && item.meta.breadcrumb !== false
      )
    }

    // 手动解析 path 中可能存在的参数 可能会有问题
    const pathCompile = (path: any) => {
      var toPath: any = compile(path)
      return toPath(route.params)
    }

    // 跳转
    const handleLink = (item: any) => {
      const {redirect, path} = item
      if(redirect) {
        router.push(redirect)
        return
      }
      router.push(pathCompile(path))
    }

    return {
      route,
      getBreadcrumb,
    }
  },
})
</script>

<style>

</style>