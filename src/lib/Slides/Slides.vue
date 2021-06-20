<template>
  {{selected}}
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
  props:{
    selected:{
      type:Number,
      default: 1,
    }
  },
  setup(props, context) {
    const children = context.slots.default();
    return {children};
  },
  mounted() {
  }
};
</script>

<style lang="scss">
.g-slides {
  display: inline-block;
  &-window {

  }
  &-wrapper{
    position: relative;
    border: 1px solid red;
  }
}
</style>