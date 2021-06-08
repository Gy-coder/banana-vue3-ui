<template>
  <div class="g-cascader-item" :style="{height: height}">
    <div class="left">
      <div v-for="item in items" class="label" @click="onClickLabel(item)">
        {{ item.label }}
        <icon class="icon" name="i-rightArrow" v-if="item.children"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <CascaderItems
          :items="rightItems"
          :height="height"
          :level="level + 1"
          :selected="selected"
          @update:selected="onUpdateSelected"
      ></CascaderItems>
    </div>
  </div>
</template>

<script lang="ts">
import {computed} from 'vue';
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
    height: String,
    selected:{
      type: Array,
      default:()=>{return []}
    },
    level:{
      type: Number,
      default:0
    }
  },
  setup(props, context) {
    const rightItems = computed(() => {
      let curSelected = props.selected[props.level]
      if (curSelected && curSelected.children) {
        return curSelected.children;
      } else {
        return null;
      }
    });
    const onClickLabel = (item)=> {
      let copy = JSON.parse(JSON.stringify(props.selected))
      copy[props.level] = item
      copy.splice(props.level + 1)
      context.emit('update:selected',copy)
    }
    const onUpdateSelected = (newSelected)=>{
      context.emit('update:selected',newSelected)
    }
    return {rightItems,onClickLabel,onUpdateSelected};
  }
};
</script>

<style lang="scss">
.g-cascader-item {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100px;
  overflow: scroll;
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
    justify-content: space-between;
    cursor: pointer;
    &:hover{
      background: #f5f7fa;
      color: #40a9ff;
      fill: #40a9ff;
    }
    .icon {
      margin-left: 1em;
      transform: scale(.7);
    }
  }
}
</style>