<demo>
支持disabled
</demo>
<template>
  <div>
    <Input error="姓名不能少于两个字"/>
  </div>
</template>

<script lang="ts">

import Input from '../lib/Input/Input.vue';
export default {
  components: {
    Input
  },
}
</script>