<template>
  <p>1111111</p>
  {{selected}}
  <Cascader popover-height="200px" :data-source="option" :selected="selected" @update:selected="selected = $event"/>
  <p>2222222</p>
</template>
<script lang="ts">
import {reactive, ref} from 'vue';
import Cascader from "../lib/Cascader/Cascader.vue";
export default {
  components: {Cascader},
  setup(){
    const option = ref([
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
    const selected = ref([])

    return {option,selected}
  }
}
</script>

<style lang="scss" scoped>
.xxx{
  border: 1px solid red;
}
</style>