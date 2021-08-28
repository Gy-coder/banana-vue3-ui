<template>
  <Teleport to="body">
    <div class="g-toast"
         v-if="show"
    >
      <Icon :name="`i-color-${messageType}`" class="message-icon" :class="`${messageType}`"/>
      <span class="message-hips">{{message}}</span>
    </div>
  </Teleport>
</template>


<script lang="ts">
import Icon from '../Icon/Icon.vue';
export default {
  components: {Icon},
  props: {
    message:{
      type: String,
      required: true
    },
    show: {
      type: Boolean,
      default: false,
    },
    time:{
      type: Number,
      default: 3
    },
    afterClose: {
      type: Function,
    },
    messageType:{
      type: String,
      default: 'success',
      validator(value){
        return ['success','error','waring'].indexOf(value) >= 0
      }
    }
  },
  setup(props, context) {
    const close = () => {
      context.emit('update:show', false);
      if (props.afterClose) props.afterClose();
    };


    return {close};
  }
};
</script>

<style lang="scss">
$color: #333;
@keyframes Top {
  from {
    top: 5%
  }

  to {
    top: 10%
  }
}

@keyframes Bottom {
  from {
    top: 95%
  }

  to {
    top: 90%
  }
}

.g-toast {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  color: $color;
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 2px 4px rgb(0 0 0 / 12%), 0 0 6px rgb(0 0 0 / 4%);
  padding: 8px 18px;
  border-radius: 4px;
  animation: Top 100ms forwards;
  > .message-icon{
    width: 1.2em;
    height: 1.2em;
    margin-right: 8px;
    &.warning{
      fill: #e5a147
    }
    &.success{
      fill: #6ac144;
    }
    &.error{
      fill: #f36d6f;
    }
  }

  > .message-hips{
    font-size: 14px;
  }
  &.g-toast-bottom {
    top: 90%;
    animation: Bottom 100ms forwards;
  }

  &.g-toast-middle {
    top: 50%;
    transform: translateX(-50%);
    animation: none;
  }
}
</style>