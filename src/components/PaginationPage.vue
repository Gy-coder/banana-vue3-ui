<template>
  <h1>Pagination 示例</h1>
  <Demo :component="PaginationDemo1"/>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import PaginationDemo1 from './PaginationPage1.demo.vue'
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Demo,PaginationDemo1
    };
  }
};
</script>