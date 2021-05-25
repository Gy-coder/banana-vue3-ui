<template>
  <Input v-model:value="value" @input="inputChange"/>
  value:{{value}}
  <Input disabled/>
  <Input readonly/>
  <Input error="姓名不能少于两个字"/>
</template>

<script lang="ts">
import Input from '../lib/Input.vue';
import {ref} from 'vue';
export default {
  setup(){
    const value = ref('123')
    const inputChange = (e)=>{
      console.log(e.target.value);
    }
    return {inputChange,value}
  },
  components: {Input}
}
</script>