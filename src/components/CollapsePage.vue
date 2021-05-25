<template>
  <Collapse>
    <CollapseItem title="标题1">内容1</CollapseItem>
    <CollapseItem title="标题2">内容2</CollapseItem>
    <CollapseItem title="标题3">内容3</CollapseItem>
  </Collapse>
</template>
<script>
import Collapse from "../lib/Collapse.vue";
import CollapseItem from "../lib/CollapseItem.vue";
export default {
  components: {CollapseItem, Collapse}
}
</script>