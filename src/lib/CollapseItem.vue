<template>
  <div class="g-collapse-item">
    <div class="g-collapse-item-title" @click="open = !open">
      {{ title }}
    </div>
    <div class="g-collapse-item-content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  setup() {
    const open = ref(false);
    return {open};
  }
};
</script>

<style lang="scss">
$grey: #ddd;
$border-radius: 4px;
.g-collapse-item {
  &-title {
    border: 1px solid $grey;
    margin: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  &:first-child {
    > .g-collapse-item-title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    > .g-collapse-item-title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }

  &-content {
    padding: 0 8px;
  }
}
</style>
