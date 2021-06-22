<template>
  {{ prevIndex }}{{ newIndex }}{{ newIndex > prevIndex }}
  <div class="g-slides">
    <div class="g-slides-window" ref="ref2">
      <div class="g-slides-wrapper">
        <component v-for="(child,index) in children"
                   :is="child"
                   :key="index"
                   :index="index+1"
        ></component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, provide, ref} from 'vue';

export default {
  props: {
    selected: {
      type: Number,
      default: 1,
    },
    autoPlay: {
      type: Boolean,
    }
  },
  setup(props, context) {
    const children = context.slots.default();
    let newIndex = ref(props.selected);
    let prevIndex = ref(newIndex.value);
    const playAutomatically = () => {
      const length = children.length;
      let run = () => {
        prevIndex.value = newIndex.value;
        newIndex.value++;
        if (newIndex.value === length + 1) {newIndex.value = 1;}
        if (newIndex.value === 0) {newIndex.value = length;}
        console.log('prev:', prevIndex.value, 'new:', newIndex.value);
        context.emit('update:selected', newIndex.value);
        setTimeout(run, 3000);
      };
      setTimeout(run, 3000);
    };
    const reverse = computed(() => {
      console.log('执行了');
      console.log(newIndex.value - prevIndex.value);
      console.log(newIndex.value > prevIndex.value);
      return !(newIndex.value - prevIndex.value > 0);
    });
    provide('visible', newIndex);
    provide('reverse', reverse);
    playAutomatically();
    return {children, playAutomatically, newIndex, prevIndex};
  },
};
</script>

<style lang="scss">
.g-slides {
  display: inline-block;

  &-window {

  }

  &-wrapper {
    position: relative;
    overflow: hidden;
  }
}
</style>