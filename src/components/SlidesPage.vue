<template>
  <Slides v-model:selected="selected" autoPlay>
    <SlidesItem>
      <div class="box">0</div>
    </SlidesItem>
    <SlidesItem>
      <div class="box">1</div>
    </SlidesItem>
    <SlidesItem>
      <div class="box">2</div>
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
  height: 350px;
  background: pink;
  border: 1px solid black;
  box-sizing: border-box;
}
</style>