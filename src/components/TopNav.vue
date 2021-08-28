<template>
  <div class="topnav">
    <div class="logo">
      <router-link to="/">
        <icon name="i-banana" :style="{fill: '#f3a740',height: 32,width: 32}"></icon>
      </router-link>
    </div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <Icon name="i-menu" v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu"></Icon>
  </div>
</template>
<script lang="ts">
import {inject, Ref} from 'vue';
import Icon from '../lib/Icon/Icon.vue';

export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
  components: {Icon},
  setup() {
    const menuVisible = inject<Ref<boolean>>('getChildren');
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return {toggleMenu};
  }
};
</script>
<style lang="scss" scoped>
$color: #007974;
.topnav {
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  .toggleAside {
    display: none;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: fade-out(black,0.9);
  }

  @media (max-width: 500px) {
    > .menu {display: none}
    > .logo {margin: 0 auto}
    > .toggleAside {display: inline-block }
  }
}
</style>

