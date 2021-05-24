<template>
  <div class="g-layout" :class="{[`g-layout-has-sider`]:hasSider}">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {onMounted, ref} from 'vue';
import Sider from './Sider.vue'

export default {
  setup(props,context){
    const hasSider = ref(false)
    const children = context.slots.default()
    children.forEach(child=>{
      if(child.type === Sider){
        hasSider.value = true
      }
    })
    return {hasSider}
  }
};
</script>

<style lang="scss">
.g-layout{
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  border: 1px solid red;
  &-has-sider{
    flex-direction: row;
  }
}
</style>