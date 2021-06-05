<template>
  <div class="g-slides-item" v-if="visible">
    <slot></slot>
  </div>
</template>

<script lang="ts">

import {ref} from 'vue';

export default {
  name: '123',
  setup(props,context){
    const visible = ref(true)
    return {visible}
  }
};
</script>

<style lang="scss">

</style>