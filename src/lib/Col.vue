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
    phone: {
      type: Object,
      validator,
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
    const colStyle = computed(() => {
      return {
        paddingLeft: gutter / 2 + 'px',
        paddingRight: gutter / 2 + 'px'
      };
    });
    const colClasses = computed(() => {
      return [
        [span ? [`span-${span}`] : []],
        [offset ?[`offset-${offset}`] : []],
        [phone ? [`span-phone-${(phone as any).span}`] : []],
        [ipad ?`span-ipad-${(ipad as any).span}` : []],
        [narrowPc ?`span-narrow-pc-${(narrowPc as any).span}` : []],
        [pc ? `span-pc-${(pc as any).span}` : []],
        [widePc ? `span-wide-pc-${(widePc as any).span}` : []],
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
  @media (max-width: 576px) {
    @for $n from 1 through 24 {
      &.#{span-phone-}#{$n} {
        width: ($n / 24) * 100%
      }
    }
  }
  @media (min-width: 577px) and (max-width: 768px) {
    @for $n from 1 through 24 {
      &.#{span-ipad-}#{$n} {
        width: ($n / 24) * 100%
      }
    }
  }
  @media (min-width: 769px) and (max-width: 992px) {
    @for $n from 1 through 24 {
      &.#{span-narrow-pc-}#{$n} {
        width: ($n / 24) * 100%
      }
    }
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    @for $n from 1 through 24 {
      &.#{span-pc-}#{$n} {
        width: ($n / 24) * 100%
      }
    }
  }
  @media (min-width: 1201px) and (max-width: 1600px) {
    @for $n from 1 through 24 {
      &.#{span-wide-pc-}#{$n} {
        width: ($n / 24) * 100%
      }
    }
  }
}

</style>