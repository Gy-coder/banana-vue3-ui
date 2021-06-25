<template>
  <div class="g-nav-item" :class="{selected: choice}" @click="onClickItem">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {inject, onMounted, ref} from 'vue';

export default {
  props: {
    name: {
      type: String,
      required: true,
    }
  },
  setup(props, context) {
    const choice = ref(false);
    const eventBus = inject('eventBus');
    const onClickItem = () => {
      eventBus.emit('add:selected', props.name);
    };
    onMounted(() => {
      eventBus.on('update:selected', (selected: Array<string>) => {
        choice.value = selected.indexOf(props.name) >= 0;
      });
    });
    return {onClickItem, choice};
  }
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.g-nav-item {
  padding: 16px;
  position: relative;
  &.selected {
    &::after{
      content:'';
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 3px solid #40a9ff;
      width: 100%;
    }
  }
}
</style>