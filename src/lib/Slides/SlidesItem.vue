<template>
  <div class="g-slides-item" v-if="visible === index">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  props:{
    index: {
      type: Number,
      required: true
    },
    visible: {
      type: Number,
      required: true,
    }
  },
  setup(props,context){
    console.log(props.index);
  }
};
</script>

<style lang="scss">

</style>