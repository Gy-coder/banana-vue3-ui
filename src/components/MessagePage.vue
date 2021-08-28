<template>
  <Demo :component="MessageDemo1"></Demo>
</template>
<script lang="ts">
import Demo from './Demo.vue';
import MessageDemo1 from './Message1.demo.vue'

export default {
  components: {Demo},
  setup() {
    return {MessageDemo1};
  }
};
</script>

<style lang="scss" scoped>
</style>