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

const validator = (value) => {
  let valid = true;
  const keys = Object.keys(value);
  keys.forEach(key => {
    if (['span', 'offset'].indexOf(key) === -1) valid = false;
  });
  return valid;
};
export default {
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [String, Number]
    },
    ipad: {
      type: Object,
      validator,
    },
    narrowPc: {
      type: Object,
      validator,
    },
    pc: {
      type: Object,
      validator,
    },
    widePc: {
      type: Object,
      validator,
    },
  },
  setup(props, context) {
    const {span, offset, phone, ipad, narrowPc, pc, widePc} = props;
    const gutter = inject('gutter');
    let createClasses = (obj, str = '') => {
      if (!obj) return [];
      let array = [];
      if (obj.span) {
        array.push([`span-${str}${obj.span}`]);
      }
      if (obj.offset) {
        array.push([`offset-${str}${obj.offset}`]);
      }
      return array;
    };
    const colStyle = computed(() => {
      return {
        paddingLeft: gutter / 2 + 'px',
        paddingRight: gutter / 2 + 'px'
      };
    });
    const colClasses = computed(() => {
      return [
        ...createClasses({span, offset}),
        ...createClasses(ipad, 'ipad-'),
        ...createClasses(narrowPc, 'narrow-pc-'),
        ...createClasses(pc, 'pc-'),
        ...createClasses(widePc, 'wide-pc-'),
      ];
    });
    return {gutter, colStyle, colClasses};
  }
};
</script>

<style lang="scss">
.g-col {
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
  @media (min-width: 577px) {
    $class-prefix: span-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%
      }
    }
  }
  @media (min-width: 769px) {
    $class-prefix: span-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%
      }
    }
    $class-prefix: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%
      }
    }
  }
  @media (min-width: 993px) {
    $class-prefix: span-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%
      }
    }
  }
  @media (min-width: 1201px) {
    $class-prefix: span-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%
      }
    }
    $class-prefix: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%
      }
    }
  }
}

</style>