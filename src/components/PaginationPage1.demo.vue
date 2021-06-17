<demo>
常规使用
</demo>

<template>
  <Pagination
      :total-page="10"
      v-model:current-page="n"
  />
  当前页面:{{n}}
</template>


<script lang="ts">
import Pagination from '../lib/Pagination/Pagination.vue';
import {ref} from 'vue';

export default {
  components: {Pagination},
  setup(){
    const n = ref(5)
    return {n}
  }
};
</script>