<template>
  <Pagination
      :total-page="10"
      v-model:current-page="n"
  />
  {{n}}
  <Pagination
      :total-page="5"
      :current-page="1"
  />
  <Pagination
      :total-page="15"
      :current-page="15"
  />
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