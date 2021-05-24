<template>
  <h1>Button 示例</h1>
  <Demo :component="Icon1Demo"/>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Icon1Demo from './Icon.demo.vue'

export default {
  components: {Demo},
  setup() {
    return {
      Icon1Demo
    };
  }
};
</script>