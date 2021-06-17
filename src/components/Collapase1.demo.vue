<demo>
支持多选
</demo>
<template>
  <div>
    <Collapse v-model:selected="selected">
      <CollapseItem title="标题1" name="1">内容1</CollapseItem>
      <CollapseItem title="标题2" name="2">内容2</CollapseItem>
      <CollapseItem title="标题3" name="3">内容3</CollapseItem>
    </Collapse>
    selected: {{selected}}
  </div>
</template>

<script lang="ts">
import Collapse from '../lib/Collapse/Collapse.vue';
import CollapseItem from '../lib/Collapse/CollapseItem.vue';
import {ref} from 'vue';

export default {
  setup(){
    const selected = ref(['1'])
    return {selected}
  },
  components: {CollapseItem, Collapse}
};
</script>