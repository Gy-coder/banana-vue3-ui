<template>
  <div class="g-collapse">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import EventBus from '../util/eventbus';
import CollapseItem from './CollapseItem.vue'
import {onMounted, provide} from 'vue';

export default {
  props: {
    singled: {
      type: Boolean,
      default: false,
    },
    selected:{
      type: Array,
      required:true,
    }
  },
  setup(props, context) {
    const eventBus = new EventBus();
    provide('eventbus', eventBus);
    context.slots.default().forEach(item => {
      if(item.type !== CollapseItem){
        throw new Error('Collapse的子元素必须是CollapseItem')
      }
    })
    onMounted(()=>{
      eventBus.emit('update:selected',props.selected)
      eventBus.on('add:selected',(name)=>{
        let selectedCopy = JSON.parse(JSON.stringify(props.selected))
        console.log(selectedCopy);
        if(props.singled){
          selectedCopy = [name]
        }else{
          selectedCopy.push(name)
        }
        eventBus.emit('update:selected',selectedCopy)
        context.emit('update:selected',selectedCopy)
      })
      eventBus.on('remove:selected',(name)=>{
        let selectedCopy = JSON.parse(JSON.stringify(props.selected))
        let index = selectedCopy.indexOf(name)
        selectedCopy.splice(index,1)
        eventBus.emit('update:selected',selectedCopy)
        context.emit('update:selected',selectedCopy)
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