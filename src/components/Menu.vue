<template>
  <div class="menuWrapper">
    <el-menu router>
      <el-sub-menu
        :index="menuGroup.id"
        v-for="menuGroup in menuList"
        :key="menuGroup.id"
      >
        <template #title>
          {{menuGroup.name}}
        </template>
        <el-menu-item
          v-for="menuLi in menuGroup.children"
          :key="menuLi.id"
          :index="`/${menuGroup.alias}/${menuLi.alias}`"
        >{{menuLi.name}}</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onBeforeMount, onMounted } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Menu',
  setup() {
    const store = useStore()
    // 不能直接赋值 会导致初始化获取到的menuList不是最新的值
    const menuList = computed(() => store.state.menu.menuList)

    onMounted(() => {
      store.dispatch('menu/getMenuListAction')
    })
    return {
      menuList
    }
    // onBeforeMount(() => {
    //   store.dispatch('menu/getMenuListAction')
    // })
  }
})
</script>
<style lang="scss" scoped>
.menuWrapper {
  width: 200px;
  margin-right: 12px;
  background-color: #f5f5f5;
  .el-sub-menu,
  .el-menu-item {
    background-color: #f5f5f5;
    &:hover {
      background-color: #dfebfc;
    }
  }
  .el-sub-menu__title {
    &:hover {
      background-color: #f5f5f5;
    }
  }
  .el-menu-item.is-active {
    background: #409eff;
    color: #fff;
  }
}
</style>
