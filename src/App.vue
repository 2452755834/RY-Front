<template>
  <div id="container">
    <template v-if="route.name&&route.meta.single">
      <router-view/>
    </template>
    <template v-if="route.name&&!route.meta.single">
      <!-- 公共头部 -->
      <div class="commonHeader">
        1
      </div>
      <Menu ></Menu>
      <div class="content">
        <router-view/>

      </div>

    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import Menu from './components/Menu.vue'
export default defineComponent({
  components: { Menu },
  setup() {
    const route = useRoute()
    const store = useStore()

    if (sessionStorage.getItem('storeState')) {
      store.replaceState(JSON.parse(sessionStorage.getItem('storeState') || ''))
    }
    window.onbeforeunload = () => {
      sessionStorage.setItem('storeState', JSON.stringify(store.state))
    }
    return {
      route
    }
  }
})
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

#container {
  // display: flex;
  height: 100%;
  width: 100%;

}
</style>
