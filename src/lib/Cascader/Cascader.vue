<template>
  <div class="g-cascader">
    <div class="g-cascader-trigger">
      <slot></slot>
    </div>
    <div class="g-cascader-popover">
      <div v-for="data in dataSource">
        <CascaderX :source-item="data"></CascaderX>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CascaderItem from './CascaderItem.vue'
export default {
  components:{CascaderX: CascaderItem},
  props: {
    dataSource:{
      type: Array,
      required: true,
    }
  }
}
</script>

<style lang="scss">
.g-cascader{

}
</style>