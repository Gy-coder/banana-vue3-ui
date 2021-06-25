<template>
  {{ selected }}
  <Nav v-model:selected="selected">
    <NavItem name="home">首页</NavItem>
    <NavItem name="Vue">Vue</NavItem>
    <NavItem name="React">React</NavItem>
    <SubNav>
      <template v-slot:title>其他技术</template>
      <NavItem name="AntD">antD</NavItem>
      <NavItem name="Element">Element</NavItem>
      <SubNav>
        <template v-slot:title>css技术</template>
        <NavItem name="scss">scss</NavItem>
        <NavItem name="less">less</NavItem>
      </SubNav>
    </SubNav>
  </Nav>
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