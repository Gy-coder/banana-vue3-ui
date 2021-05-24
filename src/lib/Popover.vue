<template>
  <div class="g-popover"
       ref="popover"
  >
    <div class="g-popover-content"
         :class="{[`position-${position}`]:position}"
         v-if="visible"
         ref="contentWrapper"
    >
      <slot name="content"></slot>
    </div>
    <span class="g-popover-trigger"
          ref="triggerWrapper"
          style="display: inline-block"
    >
      <slot/>
    </span>
  </div>
</template>

<script lang="ts">
import {computed, onMounted, onUnmounted, ref, withDirectives} from 'vue';

export default {
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0;
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value): boolean {
        return ['click', 'hover'].indexOf(value) >= 0;
      }
    }
  },
  setup(props) {
    const visible = ref(false);
    const popover = ref<HTMLElement>(null)
    const contentWrapper = ref<HTMLElement>(null);
    const triggerWrapper = ref<HTMLElement>(null);
    onMounted(()=>{
      if(props.trigger === 'click'){
        popover.value.addEventListener('click',click)
      }else{
        popover.value.addEventListener('mouseenter',open)
        popover.value.addEventListener('mouseleave',close)
      }
    })
    onUnmounted(()=>{
      if(props.trigger === 'click'){
        popover.value.removeEventListener('click',click)
      }else{
        popover.value.removeEventListener('mouseenter',open)
        popover.value.removeEventListener('mouseleave',close)
      }
    })

    const positionContent = () => {
      document.body.appendChild(contentWrapper.value);
      let {height: height2} = contentWrapper.value.getBoundingClientRect();
      let {width, height, left, top} = triggerWrapper.value.getBoundingClientRect();
      let positions = {
        top: {
          top: window.scrollY + top,
          left: window.scrollX + left,
        },
        bottom: {
          top: window.scrollY + top + height,
          left: window.scrollX + left,
        },
        left: {
          top: window.scrollY + top + (height - height2) / 2,
          left: window.scrollX + left,
        },
        right: {
          top: window.scrollY + top + (height - height2) / 2,
          left: window.scrollX + left + width
        }
      };
      contentWrapper.value.style.top = positions[props.position].top + 'px';
      contentWrapper.value.style.left = positions[props.position].left + 'px';
    };
    const onClickDocument = (e2) => {
      if (contentWrapper && contentWrapper.value === e2.target || contentWrapper.value.contains(e2.target)) {
        return;
      } else {
        close();
      }
    };
    const open = () => {
      visible.value = true;
      setTimeout(() => {
        positionContent();
        document.addEventListener('click', onClickDocument);
      });
    };
    const close = () => {
      visible.value = false;
      document.removeEventListener('click', onClickDocument);
    };

    function click(e) {
      if (triggerWrapper.value.contains(e.target)) {
        if (visible.value === true) {
          close();
        } else {
          open();
        }
      }
    };
    return {
      visible,
      click,
      contentWrapper,
      triggerWrapper,
      popover,
    };
  }
};
</script>

<style lang="scss">
$border-color: #333;
$border-radius: 4px;
.g-popover {
  margin-top: 50px;
  display: inline-block;
  vertical-align: top;
  position: relative;
}

.g-popover-content {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, .5));
  background: white;
  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all;

  &::before, &::after {
    width: 0;
    height: 0;
    content: '';
    display: block;
    border: 10px solid transparent;
    position: absolute;
  }

  &.position-top {
    margin-top: -10px;
    transform: translateY(-100%);

    &::before, &::after {
      left: 10px;
    }

    &::before {
      border-top-color: black;
      border-bottom: none;
      top: 100%;
    }

    &::after {
      border-top-color: white;
      border-bottom: none;
      top: calc(100% - 1px);
    }
  }

  &.position-bottom {
    margin-top: 10px;

    &::before, &::after {
      left: 10px;
    }

    &::before {
      border-bottom-color: black;
      border-top: none;
      bottom: 100%;
    }

    &::after {
      border-bottom-color: white;
      border-top: none;
      bottom: calc(100% - 1px);
    }
  }

  &.position-left {
    margin-left: -10px;
    transform: translateX(-100%);

    &::before, &::after {
      transform: translateY(-50%);
      top: 50%;
    }

    &::before {
      border-left-color: black;
      border-right: none;
      left: 100%;
    }

    &::after {
      border-left-color: white;
      border-right: none;
      left: calc(100% - 1px);
    }
  }

  &.position-right {
    margin-left: 10px;

    &::before, &::after {
      transform: translateY(-50%);
      top: 50%;
    }

    &::before {
      border-right-color: black;
      border-left: none;
      right: 100%;
    }

    &::after {
      border-right-color: white;
      border-left: none;
      right: calc(100% - 1px);
    }
  }
}
</style>