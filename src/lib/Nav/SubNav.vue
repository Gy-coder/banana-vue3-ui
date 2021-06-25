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
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
$grey: #ddd;
$color-light: #666;
.g-sub-nav {
  position: relative;

  > span {
    padding: 16px;
    display: block;
  }

  &-popover {
    position: absolute;
    top: 100%;
    left: 0;
    white-space: nowrap;
    margin-top: 4px;
    background: white;
    box-shadow: 0 0 3px fade-out(black,.8);
    border-radius: 4px;
    font-size: 12px;
    color: $color-light;
    min-width: 8em;
  }
}
.g-sub-nav .g-sub-nav .g-sub-nav-popover{
  top: 0;
  left: 100%;
  margin-left: 8px;
}

.g-sub-nav .g-nav-item{
  &.selected{
    background: $grey;
    color: $color;
    &:after{
      display: none;
    }
  }
}
</style>