<template>
  <div class="g-slides" @mouseenter="onMouseEnter" @mouseleave="onMouseMove">
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
          v-for="(_,index) in children"
          :key="index"
          :class="{active: curIndex === index}"
          @click="onSelect(index)"
      >
        {{ index }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import {onBeforeUnmount, onMounted, ref} from 'vue';

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
    const {length} = children;
    const curIndex = ref(props.selected);
    const isReverse = ref(false);
    let id;
    const onPre = () => {
      isReverse.value = true;
      curIndex.value = (curIndex.value + length - 1) % length;
      context.emit('update:selected', curIndex.value);
    };
    const onNext = () => {
      isReverse.value = false;
      curIndex.value = (curIndex.value + length + 1) % length;
      context.emit('update:selected', curIndex.value);
    };
    const onSelect = (index) => {
      isReverse.value = curIndex.value > index;
      curIndex.value = index;
      context.emit('update:selected', curIndex.value);
    };
    const playAutomatically = () => {
      id = setInterval(onNext, 3000)
    };
    const onMouseEnter = ()=>{
      window.clearInterval(id)
      id = undefined
    }
    const onMouseMove = ()=>{
      if(id) return
      playAutomatically()
    }
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
      onPre,
      onNext,
    };
  },
};
</script>

<style lang="scss">
.g-slides {
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
    > span {
      display: inline-flex;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #ddd;
      justify-content: center;
      align-items: center;
      margin: 0 8px;
      &:hover{
        cursor: pointer;
      }
      &.active{
        background: black;
        color: white;
        &:hover{
          cursor: default;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: all .5s;
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
  transition: all .5s;
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