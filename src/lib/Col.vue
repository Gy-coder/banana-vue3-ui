<template>
  <div class="g-col"
       :class="colClasses"
       :style="colStyle"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {computed, inject} from 'vue';

export default {
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [String, Number]
    },
  },
  setup(props, context) {
    const {span, offset} = props;
    const gutter = inject('gutter');
    const colStyle = computed(() => {
      return {
        paddingLeft: -gutter / 2,
        paddingRight: -gutter / 2
      };
    });
    const colClasses = computed(() => {
      return {
        [`span-${span}`]: span,
        [`offset-${offset}`]: offset
      };
    });
    return {gutter, colStyle, colClasses};
  }
};
</script>

<style lang="scss">
.g-col {
  height: 100px;
  //background: grey;
  width: 50%;
  //border: 1px solid red;
  padding: 0 10px;
  @for $n from 1 through 24 {
    &.#{span-}#{$n} {
      width: ($n / 24) * 100%
    }
  }
  @for $n from 1 through 24 {
    &.#{offset-}#{$n} {
      margin-left: ($n / 24) * 100%
    }
  }
}
</style>