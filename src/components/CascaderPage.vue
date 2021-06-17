<template>
  <Demo :component="CascaderDemo2" />
</template>
<script lang="ts">
import Demo from './Demo.vue';
import CascaderDemo2 from './Cascader2.demo.vue'


export default {
  components: {Demo,CascaderDemo2},
  setup(){
    return {Demo,CascaderDemo2}
  }
};
</script>
