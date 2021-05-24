<template>
  <Input />
  <Input disabled/>
  <Input readonly/>
  <Input error="姓名不能少于两个字"/>
</template>

<script lang="ts">
import Input from '../lib/Input.vue';
export default {
  components: {Input}
}
</script>