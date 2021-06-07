<template>
  <div class="g-cascader">
    <div class="g-cascader-trigger" @click="popVisible = !popVisible">
      <slot></slot>
    </div>
    <div class="g-cascader-popover-wrapper" v-if="popVisible">
      <CascaderItems :items="dataSource" :height="popoverHeight"></CascaderItems>
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
  },
  setup(props, context) {
    const popVisible = ref(false);
    return {popVisible};
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