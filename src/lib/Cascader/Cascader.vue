<template>
  <div class="g-cascader">
    <div class="g-cascader-trigger" @click="popVisible = !popVisible">
      <slot></slot>
    </div>
    <div class="g-cascader-popover" v-if="popVisible">
      <CascaderItems :items="dataSource"></CascaderItems>
    </div>
  </div>
</template>

<script lang="ts">
import CascaderItems from './CascaderItems.vue';
import {computed, Ref, ref, toRefs} from 'vue';

interface Props {
  label: string,
  value: [string, number]
  children?: Props[],
}

export default {
  components: {CascaderItems},
  props: {
    dataSource: {
      type: Array,
      required: true,
    }
  },
  setup(props, context) {
    const popVisible = ref(false);
    return {popVisible};
  }
};
</script>

<style lang="scss">
.g-cascader {
  &-trigger {
    border: 1px solid red;
    height: 32px;
    width: 100px;
  }

  &-popover {
    height: 200px;
    border: 1px solid green;
    display: flex;
    > .label {
      flex-wrap: nowrap;
    }
  }
}
</style>