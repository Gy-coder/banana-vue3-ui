<template>
  <div class="g-slides-item">
    <slot></slot>
  </div>
</template>

<script lang="ts">

export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  setup(props, context) {},
};
</script>

<style lang="scss">
.g-slides-item {
}
</style>