<template>
  <svg class="g-icon">
    <use :xlink:href="name"></use>
  </svg>
</template>

<script lang="ts">
  import {computed} from 'vue';

  export default {
    props: {
      name: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const name = computed(() => {
        return `#${props.name}`;
      });
      return {name};
    }
  };
</script>

<style>
  .g-icon{
    width: 1.2em;
    height: 1.2em;
  }
</style>