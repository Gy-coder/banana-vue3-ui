<template>
  <div class="g-slides">
    <div class="g-slides-window" ref="ref2">
      <component v-for="(child,index) in children"
                 :is="child"
                 :key="index"
                 :index="index+1"
                 :visible="visible"
      ></component>
    </div>
  </div>
</template>

<script lang="ts">

import {ref} from 'vue';

export default {
  setup(props, context) {
    const children = context.slots.default();
    const visible = ref(1)
    setTimeout(()=>{
      visible.value += 1
    },5000)
    return {children,visible};
  },
  mounted() {
  }
};
</script>

<style lang="scss">
.g-slides {
  &-window {

  }
}
</style>