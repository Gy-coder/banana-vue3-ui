<template>
  {{ selected }}
  <Nav v-model:selected="selected">
    <NavItem name="home">首页</NavItem>
    <NavItem name="Vue">Vue</NavItem>
    <NavItem name="React">React</NavItem>
    <SubNav name="tech">
      <template v-slot:title>其他技术</template>
      <NavItem name="AntD">antD</NavItem>
      <NavItem name="Element">Element</NavItem>
      <SubNav name="css">
        <template v-slot:title>css技术</template>
        <NavItem name="scss">scss</NavItem>
        <NavItem name="less">less</NavItem>
      </SubNav>
    </SubNav>
  </Nav>
  <p>你好 我是中文 你好 我是中文 你好 我是中文 你好 我是中文</p>
</template>

<script lang="ts">
import Nav from '../lib/Nav/Nav.vue';
import NavItem from '../lib/Nav/NavItem.vue';
import {ref} from 'vue';
import SubNav from '../lib/Nav/SubNav.vue';

export default {
  components: {SubNav, NavItem, Nav},
  setup() {
    const selected = ref(['home']);
    return {selected};
  }
};
</script>