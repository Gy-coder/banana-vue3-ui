<template>
  <div class="g-input-wrapper">
    <input type="text"
           class="g-input"
           :class="{'error':error}"
           :value="value"
           :disabled="disabled"
           :readonly="readonly"
    >
    <template v-if="error">
      <Icon name="i-info"
            v-if="error"
            class="icon-error"
      ></Icon>
      <span class="error-message">{{ error }}</span>
    </template>
  </div>
</template>

<script lang="ts">
import Icon from './Icon.vue';

export default {
  components: {Icon},
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    }
  }
};
</script>

<style lang="scss">
$height: 32px;
$border-color: #999;
$border-hover-color: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, .5);
$red: #fa415d;
.g-input-wrapper {
  display: inline-flex;font-size: $font-size;align-items: center;

  > :not(:last-child) {margin-right: .5em;}

  > .g-input {height: $height;border: 1px solid $border-color;border-radius: $border-radius;padding: 0 8px;outline: none;

    &:hover {border-color: $border-hover-color;}

    &:focus {box-shadow: inset 0 1px 3px $box-shadow-color;}

    &[disabled], &[readonly] {border-color: #aaa;color: #aaa;cursor: not-allowed;}

    &.error {border-color: $red;}
  }

  .icon-error {fill: $red;}

  .error-message {color: $red;}
}
</style>