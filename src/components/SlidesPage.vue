<template>
  {{ selected }}
  <Slides v-model:selected="selected" :autoPlay="true ">
    <SlidesItem>
      <div class="box">
        <img src="https://i02piccdn.sogoucdn.com/51d9e47d9c41fdc4" alt="">
      </div>
    </SlidesItem>
    <SlidesItem>
      <div class="box">
        <img src="https://p0.ssl.img.360kuai.com/bdr/640__/t01c2c26d0437f6caaf.jpg" alt="">
      </div>
    </SlidesItem>
    <SlidesItem>
      <div class="box">
        <img src="http://5b0988e595225.cdn.sohucs.com/images/20170719/c075af9858d949e6916c5228772842b6.jpeg" alt="">
      </div>
    </SlidesItem>
  </Slides>
</template>
<script>
import Slides from "../lib/Slides/Slides.vue";
import SlidesItem from "../lib/Slides/SlidesItem.vue";
import {ref} from "vue";

export default {
  components: {SlidesItem, Slides},
  setup() {
    const selected = ref(1);
    return {selected};
  },
};
</script>


<style lang="scss" scoped>
.box {
  width: 100%;
  height: 300px;
  background: pink;
  border: 1px solid black;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  > img{
    width: 100%;
    height: 100%;
  }
}
</style>