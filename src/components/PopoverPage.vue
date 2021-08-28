<template>
  <h1>Popover 示例</h1>
  <Demo :component="Popover1Demo"></Demo>
  <Demo :component="Popover2Demo"></Demo>
  <Demo :component="Popover3Demo"></Demo>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Popover1Demo from '../components/Popover1.demo.vue'
import Popover2Demo from '../components/Popover2.demo.vue'
import Popover3Demo from '../components/Popover3.demo.vue'


export default {
  components: {Demo},
  setup() {
    return {Popover1Demo,Popover2Demo,Popover3Demo};
  }
};
</script>
