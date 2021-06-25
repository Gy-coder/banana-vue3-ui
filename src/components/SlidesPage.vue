<template>
  {{ selected }}
  <Slides v-model:selected="selected" :autoPlay="true">
    <SlidesItem>
      <div class="box box1">0</div>
    </SlidesItem>
    <SlidesItem>
      <div class="box box2">1</div>
    </SlidesItem>
    <SlidesItem>
      <div class="box box3">2</div>
    </SlidesItem>
  </Slides>
</template>
<script>
import Slides from "../lib/Slides/Slides.vue";
import SlidesItem from "../lib/Slides/SlidesItem.vue";
import { ref } from "vue";

export default {
  components: { SlidesItem, Slides },
  setup() {
    const selected = ref(1);
    return { selected };
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 300px;
  background: #40a9ff;
  color: white;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  > img {
    width: 100%;
    height: 100%;
  }
}
</style>
