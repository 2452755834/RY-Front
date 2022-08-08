<template>
  1
</template>
<script lang="ts">
import { defineComponent, onBeforeMount, onMounted } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Menu',
  setup() {
    const store = useStore()
    onBeforeMount(() => {
      store.dispatch('menu/getMenuListAction')
    })
  }
})
</script>
