<template>
  <h1>Layout 示例</h1>
  <Demo :component="Layout1Demo"></Demo>
  <Demo :component="Layout2Demo"></Demo>
  <Demo :component="Layout3Demo"></Demo>
  <Demo :component="Layout4Demo"></Demo>
</template>
<script lang="ts">
import Demo from './Demo.vue';
import Layout1Demo from './Layout1.demo.vue';
import Layout2Demo from './Layout2.demo.vue';
import Layout3Demo from './Layout3.demo.vue';
import Layout4Demo from './Layout4.demo.vue';

export default {
  components: {Demo},
  setup() {
    return {Layout1Demo, Layout2Demo, Layout3Demo, Layout4Demo};
  }
};
</script>

<style lang="scss" scoped>
.g-layout-sider {
  background: #41a2e6;
  width: 200px;
}

.g-layout-header {
  background: #80bde8;
}

.g-layout-footer {
  background: #80bde8;
}

.g-layout-content {
  background: #1f90e6;
}
</style>