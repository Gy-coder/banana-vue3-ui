<template>
  <Slides :selected="selected">
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
import {ref} from "vue";

export default {
  components: {SlidesItem, Slides},
  setup() {
    const selected = ref(1)
    let n = ref(1)
    setInterval(() => {
      n.value += 1
      if (n.value === 4) {
        n.value = 1
      }
      selected.value = n.value
    }, 3000)
    return {selected}
  }
}
</script>


<style lang="scss" scoped>
.box {
  width: 200px;
  height: 150px;
  background: #eee;
  border: 1px solid black;
  box-sizing: border-box;
}
</style>