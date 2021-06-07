<template>
  <div class="g-cascader-item" :style="{height: height}">
    <div class="left">
      <div v-for="item in items" class="label" @click="leftSelected = item">
        {{ item.label }}
        <icon class="icon" name="i-rightArrow" v-if="item.children"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <CascaderItems :items="rightItems" :height="height"></CascaderItems>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, ref} from 'vue';
import Icon from '../Icon/Icon.vue';

interface Props {
  label: string,
  value: [string, number]
  children?: Props[],
}

export default {
  components: {Icon},
  props: {
    items: {
      type: Array
    },
    height: String
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
  height: 100px;
  .left{
    height: 100%;
    padding: .3em 0;
  }
  .right{
    height: 100%;
    border-left: 1px solid lighten(#999,30%);
  }
  .label{
    padding: .3em 1em;
    display: flex;
    align-items: center;
    .icon {
      margin-left: 1em;
      transform: scale(.7);
    }
  }
}
</style>