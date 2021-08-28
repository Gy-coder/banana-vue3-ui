<template>
  <h1>Slides 示例</h1>
  <Demo :component="Slides1Demo"></Demo>
  <Demo :component="Slides2Demo"></Demo>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Slides1Demo from './Slides1.demo.vue'
import Slides2Demo from './Slides2.demo.vue'


export default {
  components: {Demo},
  setup() {
    return {Slides1Demo,Slides2Demo};
  }
};
</script>
