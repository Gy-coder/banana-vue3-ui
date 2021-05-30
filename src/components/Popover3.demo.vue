<demo>
支持四个方向
</demo>
<template>
  <div>
    <Popover>
      <template v-slot:content>
        我是popover
      </template>
      <Button>click me</Button>
    </Popover>
    <Popover position="bottom">
      <template v-slot:content>
        我是popover
      </template>
      <Button>click me</Button>
    </Popover>
    <Popover position="left">
      <template v-slot:content>
        我是popover
      </template>
      <Button>click me</Button>
    </Popover>
    <Popover position="right">
      <template v-slot:content>
        我是popover
      </template>
      <Button>click me</Button>
    </Popover>
  </div>
</template>

<script lang="ts">
import Popover from '../lib/Popover/Popover.vue'
import Button from '../lib/Button/Button.vue'
export default {
  components:{Popover,Button}
};

</script>

<style lang="scss" scoped>
.g-popover{
  margin-left: 10px;
}
</style>

