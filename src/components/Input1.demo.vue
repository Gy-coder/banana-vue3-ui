<demo>
常规使用
</demo>
<template>
  <div>
    <Input v-model:value="value" @input="inputChange"/>
    value:{{value}}
  </div>
</template>

<script lang="ts">

import Input from '../lib/Input/Input.vue';
import {ref} from 'vue';
export default {
  components: {
    Input
  },
  setup(){
    const value = ref('123')
    const inputChange = (e)=>{
      console.log(e.target.value);
    }
    return {inputChange,value}
  },
}
</script>