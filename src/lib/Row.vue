<template>
  <div
      class="g-row"
      :style="{marginLeft: -gutter / 2 + 'px',marginRight: -gutter / 2 + 'px'}"
      :class="rowClass"
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
    },
    align: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'center', 'right'].indexOf(value) >= 0;
      }
    }
  },
  setup(props, context) {
    const {gutter, align} = props;
    provide('gutter', props.gutter);
    const rowStyle = computed(() => {
      return {
        marginLeft: -gutter / 2 + 'px',
        marginRight: -gutter / 2 + 'px'
      };
    });
    const rowClass = computed(() => {
      return {[`align-${align}`]: align};
    });
    return {rowStyle, rowClass};
  }
};
</script>

<style lang="scss">
.g-row {
  display: flex;

  &.align-left {
    justify-content: flex-start;
  }

  &.align-center {
    justify-content: center;
  }

  &.align-right {
    justify-content: flex-end;
  }
}
</style>