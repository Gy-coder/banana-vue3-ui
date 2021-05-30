<template>
  <div class="g-layout" :class="{[`g-layout-has-sider`]:hasSider}">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue';
import Layout from './Layout.vue';
import Header from './Header.vue';
import Content from './Content.vue';
import Footer from './Footer.vue';
import Sider from './Sider.vue';

export default {
  setup(props,context){
    const hasSider = ref(false)
    const children = context.slots.default()
    children.forEach(child=>{
      if([Layout,Header,Content,Footer,Sider].indexOf(child.type) === -1){
        throw new Error('Layout内必须是Layout,Header,Content,Footer,Sider中的一个')
      }
    })
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
  &-has-sider{
    flex-direction: row;
  }
}
</style>