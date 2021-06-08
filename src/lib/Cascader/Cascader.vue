<template>
  <div class="g-cascader">
    <div class="g-cascader-trigger" @click="popVisible = !popVisible">
      {{result || '&nbsp;'}}
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
import {computed, ref} from 'vue';
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
    const result = computed(()=>{
      return props.selected.map(item => item.label).join('/')
    })
    return {popVisible,onUpdate,result};
  }
};
</script>

<style lang="scss">
.g-cascader {
  position: relative;
  &-trigger {
    border: 1px solid red;
    height: 32px;
    min-width: 10em;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 1em;
    border: 1px solid #eee;
    border-radius: 4px;
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