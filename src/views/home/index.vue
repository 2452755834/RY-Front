<template>
  <div class="manageHomeWrapper">
    <div class="header">
      <el-autocomplete
        v-model="searchKeyword"
        placeholder="搜索菜单"
        clearable
        :fetch-suggestions="querySearchList"
      ></el-autocomplete>
    </div>
    <!-- 主体内容 -->
    <div class="mainBox">
      2
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    const menuList = store.state.menu.menuList
    // 菜单搜索输入框
    const searchKeyword = ref('')
    // 获取搜索的下拉菜单
    const querySearchList = (val: string) => {
      console.log(val)

      return []
    }

    return {
      searchKeyword,
      menuList,
      querySearchList
    }
  }
})
</script>
<style lang="scss" scoped>
.manageHomeWrapper {
  display: flex;
  flex-direction: column;
  .header {
    height: 40px;
    background-color: #fff;
  }
}
</style>
