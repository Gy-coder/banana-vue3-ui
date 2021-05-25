<template>
  <div class="g-collapse">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss">
$grey: #ddd;
$border-radius: 4px;
.g-collapse{
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>