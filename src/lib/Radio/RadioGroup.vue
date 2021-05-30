<template>
  <div class="g-radio-group" :class="{[`g-input-group-${direction}`]:direction}">
    <component v-for="child in children" :is="child" v-model:value="value" />
  </div>
</template>

<script lang="ts">
import Radio from './Radio.vue';
import {nextTick, ref, watchEffect} from 'vue';

export default {
  props: {
    value: {
      type: [Number, String]
    },
    direction: {
      type: String,
      default: 'row',
      validator(value) {
        return ['row', 'column'].indexOf(value) >= 0;
      }
    }
  },
  setup(props, context) {
    const children = context.slots.default();
    for (let child of children) {
      if (child.type !== Radio) {
        throw new Error('RadioGroup的子节点必须是Radio');
      }
    }
    watchEffect(() => {
      context.emit('update:value', props.value);
    });
    return {children};
  }
};
</script>