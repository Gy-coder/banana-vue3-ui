<template>
  <div class="x">
    {{ sourceItem.label }}
    <CascaderItem v-if="sourceItem.children"
               v-for="item in sourceItem.children"
               :sourceItem="item"></CascaderItem>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    sourceItem: {
      type: Object
    }
  },
}
</script>

<style>
.x{
  border: 1px solid red;
  margin: 10px;
}
</style>