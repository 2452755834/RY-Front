<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" :fill="color"></use>
  </svg>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
  // 图标的class
  iconClass: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  }
})

// 图标名字
const iconName = computed(() => `#icon-${props.iconClass}`)
const svgClass = computed(() => `svg-icon `)
</script>

<style lang="scss" scoped>
.sub-el-icon,
.nav-icon {
  display: inline-block;
  font-size: 15px;
  margin-right: 12px;
  position: relative;
}

.svg-icon {
  width: 1em;
  height: 1em;
  position: relative;
  fill: currentColor;
  vertical-align: -2px;
}
</style>
