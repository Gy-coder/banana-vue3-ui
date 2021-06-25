<template>
  <div class="g-nav">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import EventBus from '../../util/eventbus.ts';
import {onMounted, provide} from 'vue';

export default {
  props: {
    selected: {
      type: Array,
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: false,
    }
  },
  setup(props, context) {
    const eventBus = new EventBus();
    provide('eventBus', eventBus);
    onMounted(() => {
      eventBus.emit('update:selected',props.selected)
      eventBus.on('add:selected', (name) => {
        if (props.multiple) {
          let copy = JSON.parse(JSON.stringify(props.selected));
          if (copy.indexOf(name) < 0) {
            copy.push(name);
            eventBus.emit('update:selected', copy);
            context.emit('update:selected', copy);
          } else {
            const index = copy.indexOf(name);
            console.log(index);
            copy.splice(index, 1);
            eventBus.emit('update:selected', copy);
            context.emit('update:selected', copy);
          }
        } else {
          eventBus.emit('update:selected', [name]);
          context.emit('update:selected', [name]);
        }
      });
    });
  }
};
</script>

<style lang="scss">
.g-nav {
  display: flex;
  border: 1px solid red;
}
</style>