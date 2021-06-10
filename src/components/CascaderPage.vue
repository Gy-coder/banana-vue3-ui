<template>
  <p>1111111</p>
  <Cascader
      popover-height="200px"
      v-model:data-source="option"
      v-model:selected="selected"
      @update:selected="xxx"
      :load-data="loadData"
  />
  <p>2222222</p>
</template>
<script lang="ts">
import {onMounted, ref} from 'vue';
import Cascader from '../lib/Cascader/Cascader.vue';
import db from '../db.js';

function ajax(parentId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = (db as Array<any>).filter(item => item.parent_id === parentId).map(item => {return {...item, label: item.name};});
      resolve(result);
    }, 300);
  });
}

export default {
  components: {Cascader},
  setup(props, context) {
    const option = ref([]);
    const selected = ref([]);
    const loadData = (node,callback) => {
      let {name, id, parent_id} = node;
      ajax(id).then((result)=>{
        callback(result)
      })
    };
    const xxx = () => {
      ajax(selected.value[0].id).then((result) => {
        let lastLevel = option.value.filter(item => item.id === selected.value[0].id)[0];
        Object.assign(lastLevel, {children: result});
      });
    };
    ajax(0).then((result) => {
      option.value = result.map((item)=>{
        item.children = item.children || []
        return item
      })
    });
    return {option, selected, xxx, loadData};
  }
};
</script>

<style lang="scss" scoped>
.xxx {
  border: 1px solid red;
}
</style>