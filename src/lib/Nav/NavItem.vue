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
.g-nav-item {
  padding: 16px;

  &.selected {
    background: slateblue;
  }
}
</style>