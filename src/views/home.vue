<template>
  <div>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <p>
      <button @click="reduce">-</button>
      <span style="display: inline-block;width: 30px;">{{count}}</span>
      <button @click="add">+</button>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import HelloWorld from 'comps/HelloWorld.vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const store = useStore()

    function add() {
      store.commit('add')
    }

    function reduce() {
      store.commit('reduce')
    }

    const count = computed(() => store.state.count)

    return {
      count,
      add, 
      reduce,
    }
  }
})
</script>

<style>

</style>