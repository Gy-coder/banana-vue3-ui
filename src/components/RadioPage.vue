<template>
  <Demo :component="RadioDemo1"></Demo>
</template>


<script lang="ts">
import RadioDemo1 from './Radio1.demo.vue'
import Demo from './Demo.vue';
export default {
  components:{RadioDemo1,Demo},
  setup(){
    return {RadioDemo1}
  }
};
</script>