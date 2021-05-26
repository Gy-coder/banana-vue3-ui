<template>
  <div class="g-col" :class="{[`g-col-${span}`]:span}">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  props:{
    span:{
      type: [Number,String]
    }
  }
};
</script>

<style lang="scss">
$classPrefix: g-col-;
.g-col {
  height: 100px;
  background: grey;
  width: 50%;
  border: 1px solid red;
  @for $n from 1 through 24 {
    &.#{$classPrefix}#{$n} {
      width: ($n / 24) * 100%
    }
  }
}
</style>