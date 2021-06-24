<template>
  <div class="g-slides">
    <div class="g-slides-window">
      <div class="g-slides-wrapper">
        <transition-group
          :name="`slide${isReverse ? '-reverse' : ''}`"
          mode="out-in"
        >
          <component
            v-for="(child, index) in children"
            :is="child"
            :key="index"
            :index="index"
            v-show="curIndex === index"
          ></component>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

export default {
  props: {
    selected: {
      type: Number,
      default: 0,
    },
    autoPlay: {
      type: Boolean,
    },
  },
  setup(props, context) {
    const children = context.slots.default();
    const { length } = children;
    const curIndex = ref(props.selected);
    const isReverse = ref(false);
    let id;
    const onPre = () => {
      isReverse.value = true;
      curIndex.value = (curIndex.value + length - 1) % length;
      context.emit("update:selected", curIndex.value);
    };
    const onNext = () => {
      isReverse.value = false;
      curIndex.value = (curIndex.value + length + 1) % length;
      context.emit("update:selected", curIndex.value);
    };
    const playAutomatically = () => (id = setInterval(onNext, 3000));
    onMounted(() => {
      if (props.autoPlay) playAutomatically();
    });
    onBeforeUnmount(() => {
      if (props.autoPlay) clearInterval(id);
    });
    return { children, curIndex, isReverse };
  },
};
</script>

<style lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: all 1s;
}
.slide-leave-active,
.slide-reverse-leave-active{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100% ;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0%);
}
.slide-leave-to {
  transform: translateX(-100%);
}

.slide-reverse-enter-active,
.slide-reverse-leave-active {
  transition: all 1s;
}
.slide-reverse-enter-from {
  transform: translateX(-100%);
}
.slide-reverse-enter-to,
.slide-reverse-leave-from {
  transform: translateX(0%);
}
.slide-reverse-leave-to {
  transform: translateX(100%);
}

.g-slides {
  &-window{
    min-width: 100px;
    min-height: 100px;
    overflow: hidden;
  }
  &-wrapper {
    position: relative;
  }
}
</style>