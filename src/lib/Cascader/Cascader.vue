<template>
  <div class="g-cascader">
    <div class="g-cascader-trigger" @click="popVisible = !popVisible">
      <slot></slot>
    </div>
    <div class="g-cascader-popover-wrapper" v-if="popVisible">
      <CascaderItems
          :items="dataSource"
          :height="popoverHeight"
          :selected="selected"
          @update:selected="onUpdate"
      ></CascaderItems>
    </div>
  </div>
</template>

<script lang="ts">
import CascaderItems from './CascaderItems.vue';
import {ref} from 'vue';
export default {
  components: {CascaderItems},
  props: {
    dataSource: {
      type: Array,
      required: true,
    },
    popoverHeight: String,
    selected:{
      type: Array,
      default:()=>{return []}
    }
  },
  setup(props, context) {
    const popVisible = ref(false);
    const onUpdate = (newSelected)=>{
      context.emit('update:selected',newSelected)
    }
    return {popVisible,onUpdate};
  }
};
</script>

<style lang="scss">
.g-cascader {
  position: relative;
  &-trigger {
    border: 1px solid red;
    height: 32px;
    width: 100px;
  }

  &-popover-wrapper {
    position:absolute;
    top: 100%;
    left: 0;
    background: white;
    display: flex;
    box-shadow: 0 0 3px rgba(0,0,0,.25);
    > .label {
      flex-wrap: nowrap;
    }
  }
}
</style>