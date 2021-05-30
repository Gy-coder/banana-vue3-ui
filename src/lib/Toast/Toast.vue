<template>
  <Teleport to="body">
    <div class="g-toast"
         :class="{[`g-toast-${position}`]:position}"
         v-if="show"
         @click="handleClick"
         :style="style"
    >
      <slot/>
    </div>
  </Teleport>
</template>


<script lang="ts">
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    autoClose: {
      type: [Boolean, Number],
      default: 3,
    },
    clickClose: {
      type: Boolean,
      default: true
    },
    onMaskClick: {
      type: Function,
    },
    afterClose: {
      type: Function,
    },
    style: {
      type: Object,
    },
    position: {
      type: String,
      default: 'top',
      validator: (value: string) => {
        return ['top', 'middle', 'bottom'].indexOf(value) >= 0;
      }
    }
  },
  setup(props, context) {
    const close = () => {
      context.emit('update:show', false);
    };
    const handleClick = () => {
      if (props.onMaskClick) props.onMaskClick();
      if (props.clickClose) close();
      if (props.afterClose) props.afterClose();
    };


    return {close, handleClick};
  }
};
</script>

<style lang="scss">
$color: #333;
@keyframes Top {
  from {
    top: 5%
  }

  to {
    top: 10%
  }
}

@keyframes Bottom {
  from {
    top: 95%
  }

  to {
    top: 90%
  }
}

.g-toast {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: white;
  color: $color;
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 2px 4px rgb(0 0 0 / 12%), 0 0 6px rgb(0 0 0 / 4%);
  padding: 8px 18px;
  border-radius: 999px;
  animation: Top 100ms forwards;

  &.g-toast-bottom {
    top: 90%;
    animation: Bottom 100ms forwards;
  }

  &.g-toast-middle {
    top: 50%;
    transform: translateX(-50%);
    animation: none;
  }
}

</style>