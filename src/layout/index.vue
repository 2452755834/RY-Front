<template>
  <div class="app-wrapper">
    <Sidebar></Sidebar>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Sidebar from './components/Sidebar/index.vue'
</script>

<style lang="scss" scoped>
.app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;

    &.mobile.openSidebar {
        position: fixed;
        top: 0;
    }
}
</style>
