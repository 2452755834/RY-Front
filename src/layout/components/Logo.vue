<template>
  <div class="sidebar-logo-container" :class="{collapse: collapse }">
    123
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'
defineProps({
  collapse: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #2b2f3a;
  text-align: center;
  overflow: hidden;
}
</style>
