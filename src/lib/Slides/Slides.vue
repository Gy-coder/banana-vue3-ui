<template>
  {{ selected }}
  <div class="g-slides">
    <div class="g-slides-window" ref="ref2">
      <div class="g-slides-wrapper">
        <component v-for="(child,index) in children"
                   :is="child"
                   :key="index"
                   :index="index+1"
                   :visible="selected"
        ></component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
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
    const playAutomatically = () => {
      const length = children.length
      const allIndex = Array.from({length}).map((v,k) => k + 1);
      let index = allIndex.indexOf(props.selected);
      let run = ()=>{
        if (index === allIndex.length) {index = 0;}
        context.emit('update:selected', allIndex[index + 1]);
        index++;
        setTimeout(run,3000)
      }
      setTimeout(run,3000)
    };
    playAutomatically();
    return {children, playAutomatically};
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
  }
}
</style>