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
    const {dataSource} = toRefs(props);
    const popVisible = ref(false);
    const level1Selected: Ref<Props> = ref({});
    const level2Selected: Ref<Props> = ref({});
    const level2Items = computed(() => {
      if (level1Selected) {
        return level1Selected.value.children;
      }else{
        return []
      }
    });
    const level3Items = computed(() => {
      if (level2Selected) {
        return level2Selected.value.children;
      }else{
        return []
      }
    });
    return {popVisible, level1Selected, level2Selected, level2Items, level3Items};
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