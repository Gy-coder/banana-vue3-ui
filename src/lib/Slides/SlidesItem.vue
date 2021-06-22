<template>
  reverse:{{reverse}}
  <Transition name="slide">
    <div class="g-slides-item" v-if="visible === index" :class="{reverse}">
      <slot></slot>
    </div>
  </Transition>
</template>

<script lang="ts">
import {inject} from 'vue';

export default {
  props: {
    index: {
      type: Number,
      required: true
    },
  },
  setup(props, context) {
    const visible = inject('visible')
    const reverse = inject('reverse')
    return {visible,reverse}
  }
};
</script>

<style lang="scss">
.g-slides-item{

}
.slide-leave-active{
  position: absolute;
  left: 0;
  top:0;
}
.slide-enter-active,.slide-leave-active {
  transition: all 1s;
}
.slide-enter{
  transform: translateX(100%);
}
.slide-leave-to{
  transform: translateX(-100%) scale(0.5);
}
.slide-enter.reverse{
  transform: translateX(-100%);
}
.slide-leave-to.reverse{
  transform: translateX(100%) scale(0.5);
}
</style>