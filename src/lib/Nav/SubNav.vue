<template>
  <div class="g-sub-nav" :class="{active: x}" ref="wrapperRef">
    <span @click="onClick">
      <slot name="title"></slot>
    </span>
    <div class="g-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {inject, ref} from 'vue';
import NavItem from './NavItem.vue';

export default {
  props:{
    name: {
      type: String,
      required:true,
    }
  },
  setup(props, context) {
    const eventBus = inject('eventBus');
    const children = context.slots.default();
    const subNames = children.filter(child => child.type === NavItem).map(node => node.props.name);
    const open = ref(false);
    const x = ref(false);
    const wrapperRef = ref(null);
    const onClick = () => {
      open.value = !open.value;
      if(open.value === true){
        document.addEventListener('click',onClickDocument)
      }else{
        document.removeEventListener('click',onClickDocument)
      }
    };
    const onClickDocument = (e) => {
      if (wrapperRef.value && wrapperRef.value === e.target || wrapperRef.value.contains(e.target)) {
        return;
      } else {
        open.value = false
      }
    };
    return {open, onClick, wrapperRef, x};
  },
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

  &.active {
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 3px solid #40a9ff;
      width: 100%;
    }
  }

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
    box-shadow: 0 0 3px fade-out(black, .8);
    border-radius: 4px;
    font-size: 12px;
    color: $color-light;
    min-width: 8em;
  }
}

.g-sub-nav .g-sub-nav .g-sub-nav-popover {
  top: 0;
  left: 100%;
  margin-left: 8px;
}

.g-sub-nav .g-nav-item {
  &.selected {
    background: $grey;
    color: $color;

    &:after {
      display: none;
    }
  }
}
</style>