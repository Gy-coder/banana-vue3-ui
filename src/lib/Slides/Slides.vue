<template>
  <div
    class="g-slides"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseMove"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
  >
    <div class="g-slides-window">
      <div class="g-slides-window-wrapper">
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
    <div class="g-slides-dot">
      <span
        v-for="(_, index) in children"
        :key="index"
        :class="{ active: curIndex === index }"
        @click="onSelect(index)"
      >
        <button>{{index+1}}</button>
      </span>
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
    time:{
      type: Number,
      default: 0
    }
  },
  setup(props, context) {
    const children = context.slots.default();
    const { length } = children;
    const curIndex = ref(props.selected);
    const isReverse = ref(false);
    const startTouch = ref(null);
    const endTouch = ref(null);
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
    const onSelect = (index) => {
      isReverse.value = curIndex.value > index;
      curIndex.value = index;
      context.emit("update:selected", curIndex.value);
    };
    const playAutomatically = () => {
      id = setInterval(onNext, props.time * 1000);
    };
    const parse = () => {
      window.clearInterval(id);
      id = undefined;
    };
    const onMouseEnter = () => {
      parse();
    };
    const onMouseMove = () => {
      if (id || props.autoPlay === false) return;
      playAutomatically();
    };
    const onTouchStart = (e) => {
      parse();
      if (e.touches.length > 1) return;
      startTouch.value = e.touches[0];
    };
    const onTouchMove = (e) => {};
    const onTouchEnd = (e) => {
      endTouch.value = e.changedTouches[0];
      const { clientX: x1, clientY: y1 } = startTouch.value;
      const { clientX: x2, clientY: y2 } = endTouch.value;
      const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      const deltaY = Math.abs(y2 - y1);
      const rate = distance / deltaY;
      if (rate > 2) {
        if (x2 > x1) {
          onNext();
        } else {
          onPre();
        }
      }
      if (props.autoPlay) playAutomatically();
    };
    onMounted(() => {
      if (props.autoPlay) playAutomatically();
    });
    onBeforeUnmount(() => {
      if (props.autoPlay) clearInterval(id);
    });
    return {
      children,
      curIndex,
      isReverse,
      onSelect,
      onMouseEnter,
      onMouseMove,
      onTouchStart,
      onTouchEnd,
      onTouchMove,
      onPre,
      onNext,
    };
  },
};
</script>

<style lang="scss">
.g-slides {
  position: relative;
  &-window {
    overflow: hidden;

    &-wrapper {
      position: relative;
    }
  }

  &-dot {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5%;
    > span {
      position: relative;
      display: inline-block;
      flex: 0 1 auto;
      box-sizing: content-box;
      width: 24px;
      height: 4px;
      margin: 0 6px;
      padding: 0;
      text-align: center;
      text-indent: -999px;
      vertical-align: top;
      transition: all .5s;
      > button{
        display: block;
        width: 100%;
        height: 4px;
        padding: 0;
        color: transparent;
        font-size: 0;
        background: #fff;
        border: 0;
        border-radius: 1px;
        outline: none;
        cursor: pointer;
        opacity: .3;
        transition: all .5s;
        &.active{
          background: #fff;
          opacity: 1;
        }
      }
      &:hover {
        cursor: pointer;
      }
      &.active{
        width: 30px;
        background: white;
      }
    }
  }
}
</style>

<style lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}

.slide-leave-active,
.slide-reverse-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  transition: all 0.5s;
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
</style>
