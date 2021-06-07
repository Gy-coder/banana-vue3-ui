<template>
  <p>1111111</p>
  <Cascader popover-height="200px" :data-source="option" popover-class-name="xxx"/>
  <p>2222222</p>
</template>
<script lang="ts">
import {reactive} from 'vue'
import Cascader from "../lib/Cascader/Cascader.vue";
export default {
  components: {Cascader},
  setup(){
    const option = reactive([
      {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
          {
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [
              {
                value: 'xihu',
                label: 'West Lake',
              },
            ],
          },
        ],
      },
      {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
          {
            value: 'nanjing',
            label: 'Nanjing',
            children: [
              {
                value: 'zhonghuamen',
                label: 'Zhong Hua Men',
              },
            ],
          },
        ],
      },
    ],)
    return {option}
  }
}
</script>

<style lang="scss" scoped>
.xxx{
  border: 1px solid red;
}
</style>