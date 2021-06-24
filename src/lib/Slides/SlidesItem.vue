<template>
  <div class="g-slides-item">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { inject } from "vue";

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
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 150px;
}
</style>