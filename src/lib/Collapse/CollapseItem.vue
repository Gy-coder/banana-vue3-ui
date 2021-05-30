<template>
  <div class="g-collapse-item">
    <div class="g-collapse-item-title" @click="toggle">
      {{ title }}
    </div>
    <div class="g-collapse-item-content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {getCurrentInstance, inject, onMounted, ref} from 'vue';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    }
  },
  setup(props, context) {
    const open = ref(false);
    const instance = getCurrentInstance();
    const eventBus = inject('eventbus');
    onMounted(() => {
      eventBus.on('update:selected',(names)=>{
        if(names.indexOf(props.name) >= 0){
          open.value = true
        }else{
          open.value = false
        }
      })
    });
    const toggle = () => {
      if (open.value === true) {
        eventBus.emit('remove:selected',props.name)
      } else {
        eventBus.emit('add:selected',props.name)
      }
    };
    const close = () => {
      open.value = false;
    };
    const show = ()=>{
      open.value = true;
    }
    return {open, toggle};
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
    cursor: pointer;
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
