<template>
  <Slides>
    <SlidesItem>
      <div class="box">1</div>
    </SlidesItem>
    <SlidesItem>
      <div class="box">2</div>
    </SlidesItem>
    <SlidesItem>
      <div class="box">3</div>
    </SlidesItem>
  </Slides>
</template>
<script>
import Slides from "../lib/Slides/Slides.vue";
import SlidesItem from "../lib/Slides/SlidesItem.vue";

export default {
  components: {SlidesItem, Slides},
}
</script>


<style lang="scss" scoped>
.box{
  width: 200px;
  height: 150px;
  background: #eee;
  border: 1px solid black;
  box-sizing: border-box;
}
</style>