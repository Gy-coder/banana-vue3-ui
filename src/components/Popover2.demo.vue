<demo>
Hover方式
</demo>
<template>
  <div>
    <Popover trigger="hover">
      <template v-slot:content>
        我是popover
      </template>
      <Button>click me</Button>
    </Popover>
  </div>
</template>

<script lang="ts">
import Popover from '../lib/Popover.vue'
import Button from '../lib/Button.vue'
export default {
  components:{Popover,Button}
};

</script>

