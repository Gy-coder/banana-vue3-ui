<template>
  <div class="g-slides">
    <div class="g-slides-window" ref="ref2">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: '345',
  setup(props,context) {
    const children = context.slots.default()
    console.log('before:',children[0].type.setup().visible.value);
    children[0].type.setup().visible.value = false
    console.log('after:',children[0].type.setup().visible.value)
    return {children}
  },
  mounted() {
    console.log(this.$options.name);
  }
};
</script>

<style lang="scss">
.g-slides {
  &-window {

  }
}
</style>