<template>
  <Pagination
      :total-page="10"
      :current-page="5"
  />
  <Pagination
      :total-page="5"
      :current-page="1"
  />
</template>


<script lang="ts">
import Pagination from '../lib/Pagination.vue';

export default {
  components: {Pagination}
};
</script>