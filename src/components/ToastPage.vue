<template>
  <h1>Toast实例</h1>
  <h2>一个例子</h2>
  <div>
    <Button @click="Toast.show({
      message: '你好 天龙八部',
      autoClose: 5,
      onMaskClick:()=> console.log('onMaskClick'),
      afterClose: ()=> console.log('afterClose'),
      clickClose,
    })">show toast 2
    </Button>
  </div>
</template>

<script lang="ts">
import ToastComponent from '../lib/Toast.vue';
import {Toast} from '../lib/toast.ts';
import Button from '../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {Button, ToastComponent},
  setup(){
    const show = ref(false)
    const handleClick = ()=>{
      show.value = true;
    }
    return {Toast,console,show,handleClick}
  }
};
</script>

