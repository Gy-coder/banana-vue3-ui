<demo>
常规使用
</demo>
<template>
  <div>
    <Button @click="Message.show({
      message: '登陆成功',
      time: 10,
      messageType: 'success',
      afterClose: ()=> console.log('afterClose'),
    })">success
    </Button>
    <Button @click="Message.show({
      message: '登陆失败',
      time: 10,
      messageType: 'error',
      afterClose: ()=> console.log('afterClose'),
    })">error
    </Button>
    <Button @click="Message.show({
      message: '一个警告',
      time: 10,
      messageType: 'warning',
      afterClose: ()=> console.log('afterClose'),
    })">warning
    </Button>
  </div>
</template>

<script lang="ts">
import ToastComponent from '../lib/Message/Message.vue';
import {Message} from '../lib/Message/message.ts';
import Button from '../lib/Button/Button.vue';
import {ref} from 'vue';

export default {
  components: {Button, ToastComponent},
  setup(){
    const show = ref(false)
    const handleClick = ()=>{
      show.value = true;
    }
    return {Message,console,show,handleClick}
  }
};
</script>

