<template>
  <div class="g-cascader-item">
    <div class="left">
      <div v-for="item in items" class="label" @click="leftSelected = item">
        {{ item.label }}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <CascaderItems :items="rightItems"></CascaderItems>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, ref} from 'vue';

interface Props {
  label: string,
  value: [string, number]
  children?: Props[],
}

export default {
  props: {
    items: {
      type: Array
    }
  },
  setup(props, context) {
    const leftSelected = ref<Props | null>(null);
    const rightItems = computed(() => {
      if (leftSelected.value && leftSelected.value.children) {
        return leftSelected.value.children;
      } else {
        return null;
      }
    });
    return {leftSelected, rightItems};
  }
};
</script>

<style lang="scss">
.g-cascader-item {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .left{
    border: 1px solid red;
  }
  .right{
    margin-top: -1px;
  }
}
</style>