<template>
  <h1>Collapase 示例</h1>
  <Demo :component="CollapaseDemo1"/>
  <Demo :component="CollapaseDemo2"/>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import CollapaseDemo1 from './Collapase1.demo.vue'
import CollapaseDemo2 from './Collapase2.demo.vue'
export default {
  components: {
    Demo
  },
  setup() {
    return {
      CollapaseDemo1,CollapaseDemo2,Demo
    };
  }
};
</script>