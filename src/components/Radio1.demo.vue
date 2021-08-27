<demo>
常规使用
</demo>
<template>
  <div>
    选中的值: {{radio}}
    <RadioGroup v-model:value="radio">
      <Radio label="饺子">吃饺子</Radio>
      <Radio label="汉堡">吃汉堡</Radio>
    </RadioGroup>
  </div>
</template>

<script lang="ts">
import Radio from '../lib/Radio/Radio.vue'
import RadioGroup from '../lib/Radio/RadioGroup.vue'
import {ref} from 'vue';
export default {
  components:{Radio,RadioGroup},
  setup(props, context) {
    const radio = ref('');
    return {radio};
  }
};

</script>

