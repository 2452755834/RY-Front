<template>
  <div class="app-wrapper">
    <Sidebar class="sidebar-container" ></Sidebar>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Sidebar from './components/Sidebar/index.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin.scss';
@import '@/assets/styles/variables.module.scss';

.app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;

    &.mobile.openSidebar {
        position: fixed;
        top: 0;
    }
}

.drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
}

.fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$base-sidebar-width});
    transition: width 0.28s;
}

.hideSidebar .fixed-header {
    width: calc(100% - 54px);
}

.sidebarHide .fixed-header {
    width: 100%;
}

.mobile .fixed-header {
    width: 100%;
}
</style>
