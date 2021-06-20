<template>
  <Transition name="slide">
    <div class="g-slides-item" v-if="visible === index">
      <slot></slot>
    </div>
  </Transition>
</template>

<script lang="ts">
export default {
  props: {
    index: {
      type: Number,
      required: true
    },
    visible: {
      type: Number,
      required: true,
    }
  },
  setup(props, context) {
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
  transform: translateX(-100%);
}
</style>