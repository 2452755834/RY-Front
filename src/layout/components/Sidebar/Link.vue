<template>
  <component :is="type" v-bind="linkProps()">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { isExternal } from '@/utils/validate';
import { computed } from 'vue';

const props = defineProps({
  to: {
    type: [String, Object],
    required: true
  }
});
// 判断是否是外链
const isExt = computed(() => {
  return isExternal(props.to);
});

// 如果是外链 使用a标签 否则使用router-link
const type = computed(() => {
  if (isExt.value) {
    return 'a';
  }
  return 'router-link';
});
// 如果是router-link 直接传递to属性 外链传递href target等
function linkProps() {
  if (isExt.value) {
    return {
      href: props.to,
      target: '_blank',
      rel: 'noopener'
    };
  }
  return {
    to: props.to
  };
}
</script>
