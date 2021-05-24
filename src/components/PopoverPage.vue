<template>
    <Popover>
      <template v-slot:content>
        我是popover
      </template>
      <Button>click me</Button>
    </Popover>
  <br>
    <Popover position="bottom">
      <template v-slot:content>
        我是popover
      </template>
      <Button>click me</Button>
    </Popover>
  <br>
  <Popover position="left">
    <template v-slot:content>
      我是popover
    </template>
    <Button>click me</Button>
  </Popover>
  <br>
  <Popover position="right">
    <template v-slot:content>
      我是popover
    </template>
    <Button>click me</Button>
  </Popover>
  <br>
  <Popover trigger="hover">
    <template v-slot:content>
      我是popover
    </template>
    <Button>click me</Button>
  </Popover>
  <br>
  <Popover position="bottom" trigger="hover">
    <template v-slot:content>
      我是popover
    </template>
    <Button>click me</Button>
  </Popover>
  <br>
  <Popover position="left" trigger="hover">
    <template v-slot:content>
      我是popover
    </template>
    <Button>click me</Button>
  </Popover>
  <br>
  <Popover position="right" trigger="hover">
    <template v-slot:content>
      我是popover
    </template>
    <Button>click me</Button>
  </Popover>
  <br>
</template>

<script lang="ts">
import Popover from '../lib/Popover.vue';
import Button from '../lib/Button.vue';

export default {
  components: {Button, Popover},
  setup(){
    return {console}
  }
};
</script>