<template>
  <Cascader :data-source="option"/>
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