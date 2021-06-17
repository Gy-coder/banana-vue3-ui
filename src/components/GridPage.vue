<template>
  <Demo :component="Grid1Demo" />
  <Demo :component="Grid2Demo" />
  <Demo :component="Grid5Demo" />
  <Demo :component="Grid3Demo" />
  <Demo :component="Grid4Demo" />
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Grid1Demo from './Grid1.demo.vue'
import Grid2Demo from './Grid2.demo.vue'
import Grid3Demo from './Grid3.demo.vue'
import Grid4Demo from './Grid4.demo.vue'
import Grid5Demo from './Grid5.demo.vue'

export default {
  components: {Demo,Grid1Demo,Grid2Demo,Grid3Demo,Grid4Demo,Grid5Demo},
  setup(){
    return {Demo,Grid1Demo,Grid2Demo,Grid3Demo,Grid4Demo,Grid5Demo}
  }
};
</script>

<style lang="scss" scoped>
.gutter-example > > > .ant-row > div {
  background: transparent;
  border: 0;
}

.gutter-box {
  background: #00a0e9;
  height: 66px;
  padding: 5px 0;
  border: 1px solid green;
}

.g-col {
}
</style>