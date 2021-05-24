<template>
  <label class="g-radio-wrapper"
         :class="{'checked': value === label,'disabled':disabled}"
         @click="()=> handleClick(label)">
    <span class="g-radio"></span>
    <span class="g-radio-content">
      <slot/>
    </span>
  </label>
</template>


<script lang="ts">

export default {
  props: {
    label: {
      type: [String, Number],
      required: true,
    },
    value: {
      type: [String, Number],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const handleClick = (label) => {
      if (props.disabled) return;
      context.emit('update:value', label);
    };
    return {handleClick};
  }
};
</script>

<style lang="scss">
$width: 14px;
$color: #333;
$checked: #40a9ff;
$border-color: lighten($color, .8);
$disabled: grey;
.g-radio-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;

  &.checked {
    > .g-radio {
      border-color: $checked;
      background: $checked;

      &::before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        content: '';
        width: $width / 3;
        height: $width / 3;
        border-radius: 50%;
        background: white;
      }
    }

    > .g-radio-content {
      color: $checked;
    }
  }

  &.disabled {
    cursor: not-allowed;

    > .g-radio {
      border-color: $disabled;
    }

    > .g-radio-content {
      color: $disabled;
    }
  }

  &.disabled.checked {
    > .g-radio {
      border-color: $disabled;
      background: $disabled;
      position: relative;
      &::before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        content: '';
        width: $width / 3;
        height: $width / 3;
        border-radius: 50%;
        background: white;
      }
    }
  }


  & + & {
    margin: 1em;
  }

  > .g-radio {
    width: $width;
    height: $width;
    border: 1px solid $border-color;
    border-radius: 50%;
    display: inline-block;
    position: relative;
  }

  > .g-radio-content {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin-left: .7em;
  }
}

</style>