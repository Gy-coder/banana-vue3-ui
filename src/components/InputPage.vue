<template>
  <h1>Input 示例</h1>
  <Demo :component="InputDemo1"/>
  <Demo :component="InputDemo2"/>
  <Demo :component="InputDemo3"/>
  <Demo :component="InputDemo4"/>
</template>

<script lang="ts">
import InputDemo1 from './Input1.demo.vue'
import InputDemo2 from './Input2.demo.vue'
import InputDemo3 from './Input3.demo.vue'
import InputDemo4 from './Input4.demo.vue'
import Demo from './Demo.vue'
export default {
  setup(){
    return {InputDemo1,InputDemo2,InputDemo3,InputDemo4,Demo}
  },
  components: {InputDemo1,InputDemo2,InputDemo3,InputDemo4,Demo}
}
</script>