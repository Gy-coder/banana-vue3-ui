<template>
  <RadioGroup v-model:value="radio2">
    <Radio label="饺子">吃饺子</Radio>
    <Radio label="汉堡">吃汉堡</Radio>
  </RadioGroup>
  <RadioGroup v-model:value="radio3">
    <Radio label="饺子" disabled>吃饺子</Radio>
    <Radio label="汉堡" disabled>吃汉堡</Radio>
  </RadioGroup>
  radio2:{{ radio2 }}
  <br>
  <Radio label="饺子" v-model:value="radio">吃饺子</Radio>
  <Radio label="汉堡" v-model:value="radio">吃汉堡</Radio>
</template>


<script lang="ts">
import Radio from '../lib/Radio.vue';
import RadioGroup from '../lib/RadioGroup.vue';
import {ref} from 'vue';

export default {
  components: {RadioGroup, Radio},
  setup(props, context) {
    const radio = ref('4');
    const radio2 = ref('饺子');
    const radio3 = ref('汉堡');
    const radio4 = ref('3');
    return {radio, radio2, radio3, radio4, console};
  }
};
</script>