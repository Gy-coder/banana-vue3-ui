<template>
  <Collapse v-model:selected="selected">
    <CollapseItem title="标题1" name="1">内容1</CollapseItem>
    <CollapseItem title="标题2" name="2">内容2</CollapseItem>
    <CollapseItem title="标题3" name="3">内容3</CollapseItem>
  </Collapse>
  selected: {{selected}}
  <Collapse v-model:selected="selected2" singled>
    <CollapseItem title="标题1" name="1">内容1</CollapseItem>
    <CollapseItem title="标题2" name="2">内容2</CollapseItem>
    <CollapseItem title="标题3" name="3">内容3</CollapseItem>
  </Collapse>
  selected: {{selected2}}
</template>
<script>
import Collapse from "../lib/Collapse.vue";
import CollapseItem from "../lib/CollapseItem.vue";
import {ref} from "vue";
export default {
  components: {CollapseItem, Collapse},
  setup(){
    const selected = ref(['1'])
    const selected2 = ref(['1'])
    return {selected,selected2}
  }
}
</script>