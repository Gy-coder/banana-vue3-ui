<template>
  {{ selected }}
  <Nav v-model:selected="selected">
    <NavItem name="home">首页</NavItem>
    <NavItem name="Vue">Vue</NavItem>
    <NavItem name="React">React</NavItem>
  </Nav>
</template>

<script lang="ts">
import Nav from '../lib/Nav/Nav.vue';
import NavItem from '../lib/Nav/NavItem.vue';
import {ref} from 'vue';
export default {
  components: {NavItem, Nav},
  setup(){
    const selected = ref(['home'])
    return {selected}
  }
}
</script>