<demo>
常规使用
</demo>
<template>
  <div>
    <Cascader
        popover-height="200px"
        v-model:data-source="option"
        v-model:selected="selected"
        @update:selected="getChildren"
        :load-data="loadData"
    />
  </div>
</template>

<script lang="ts">
import db from '../db.js'
import {ref} from 'vue';
import Cascader from '../lib/Cascader/Cascader.vue';

function ajax(parentId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = (db as Array<any>).filter(item => item.parent_id === parentId).map(item => {return {...item, label: item.name};});
      result.forEach(node=>{
        if((db as Array<any>).filter(item=>item.parent_id === node.id).length > 0){
          node.isLeaf = false
        }else{
          node.isLeaf = true
        }
      })
      resolve(result);
    }, 300);
  });
}

export default {
  components: {
    Cascader
  },
  setup(){
    const option = ref([]);
    const selected = ref([])
    const loadData = (node,callback) => {
      let {id} = node;
      ajax(id).then((result)=>{
        callback(result)
      })
    };
    const getChildren = () => {
      ajax(selected.value[0].id).then((result) => {
        let lastLevel = option.value.filter(item => item.id === selected.value[0].id)[0];
        Object.assign(lastLevel, {children: result});
      });
    };
    ajax(0).then((result) => {
      option.value = (result as any)
    });
    return {selected,option,loadData,getChildren}
  }
}
</script>