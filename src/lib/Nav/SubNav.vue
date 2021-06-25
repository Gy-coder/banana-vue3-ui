<template>
  <div class="g-sub-nav">
    <span @click="onClick">
      <slot name="title"></slot>
    </span>
    <div class="g-sub-nav-popover" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  setup() {
    const open = ref(false);
    const onClick = () => {
      open.value = !open.value;
    };
    return {open, onClick};
  }
};
</script>

<style lang="scss">
.g-sub-nav {
  position: relative;

  > span {
    padding: 16px;
    display: inline-block;
    vertical-align: top;
  }

  &-popover {
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid red;
    white-space: nowrap;
  }
}
</style>