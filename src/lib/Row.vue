<template>
  <div
      class="g-row"
      :style="rowStyle"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">

import {computed, provide} from 'vue';

export default {
  props: {
    gutter: {
      type: [Number, String]
    }
  },
  setup(props, context) {
    const {gutter} = props;
    provide('gutter', props.gutter);
    const rowStyle = computed(() => {
      return {marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px'};
    });
    return {rowStyle}
  }
};
</script>

<style lang="scss">
.g-row {
  display: flex;
}
</style>