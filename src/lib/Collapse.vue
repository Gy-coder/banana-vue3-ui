<template>
  <div class="g-collapse">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import EventBus from '../util/eventbus';
import {onMounted, provide} from 'vue';

export default {
  props: {
    single: {
      type: Boolean,
      default: false,
    },
    selected:{
      type: String,
    }
  },
  setup(props, context) {
    const eventBus = new EventBus();
    provide('eventbus', eventBus);
    onMounted(()=>{
      eventBus.emit('update:selected',props.selected)
      eventBus.on('update:selected',(name)=>{
        context.emit('update:selected',name)
      })
    })
  }
};
</script>

<style lang="scss">
$grey: #ddd;
$border-radius: 4px;
.g-collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>