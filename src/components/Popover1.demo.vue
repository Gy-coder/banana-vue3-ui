<demo>
Click方式
</demo>
<template>
  <div>
    <Popover>
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

