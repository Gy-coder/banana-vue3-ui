<template>
  <div class="g-nav-item" :class="{selected: choice}" @click="onClickItem">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {inject, ref} from 'vue';

export default {
  props: {
    name: {
      type: String,
      required: true,
    }
  },
  setup(props,context){
    const choice = ref(false)
    const eventBus = inject('eventBus')
    const onClickItem = ()=>{
      eventBus.emit('add:selected',props.name)
    }
    eventBus.on('update:selected',(selected:Array<string>)=>{
      if(selected.indexOf(props.name) >= 0){
        choice.value = true
      }else{
        choice.value = false
      }
    })
    return {onClickItem,choice}
  }
}
</script>

<style lang="scss">
.g-nav-item{
  padding: 16px;
  &.selected{
    background: slateblue;
  }
}
</style>