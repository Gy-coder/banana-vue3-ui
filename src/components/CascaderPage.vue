<template>
  <p>1111111</p>
  <Cascader popover-height="200px" :data-source="option" v-model:selected="selected"/>
  <p>2222222</p>
</template>
<script lang="ts">
import {reactive, ref} from 'vue';
import Cascader from "../lib/Cascader/Cascader.vue";
import db from '../db.js'


function ajax(parentId = 0){
  return db.filter(item=>item.parent_id === parentId).map(item=>{return {label: item.name}})
}

console.log(ajax())
export default {
  components: {Cascader},
  setup(){
    const option = ref(ajax())
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