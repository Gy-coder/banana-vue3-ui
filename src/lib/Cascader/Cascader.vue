<template>
  <div class="g-cascader" ref="wrapper">
    <div class="g-cascader-trigger" @click="toggle">
      {{ result || '&nbsp;' }}
    </div>
    <div class="g-cascader-popover-wrapper" v-if="popVisible">
      <CascaderItems
          :items="dataSource"
          :height="popoverHeight"
          :selected="selected"
          @update:selected="onUpdate"
          :load-data="loadData"
          :loading-item="loadingItem"
      ></CascaderItems>
    </div>
  </div>
</template>

<script lang="ts">
import CascaderItems from './CascaderItems.vue';
import {computed,ref} from 'vue';

export default {
  components: {CascaderItems},
  props: {
    dataSource: {
      type: Array,
      required: true,
    },
    popoverHeight: String,
    selected: {
      type: Array,
      default: () => {return [];}
    },
    loadData: {
      type: Function,
    }
  },
  setup(props, context) {
    const popVisible = ref(false);
    const loadingItem = ref({})
    const wrapper = ref<HTMLDivElement | null>(null);
    const onUpdate = (newSelected) => {
      context.emit('update:selected', newSelected);
      const lastItem = newSelected[newSelected.length - 1];
      let simple = (children, id) => {
        return children.filter(item => item.id === id)[0];
      };
      let complex = (children, id) => {
        let noChildren = [];
        let hasChildren = [];
        children.forEach((item) => {
          if (item.children) {
            hasChildren.push(item);
          } else {
            noChildren.push(item);
          }
        });
        let found = simple(noChildren, id);
        if (found) {
          return found;
        } else {
          found = simple(hasChildren, id);
          if (found) {return found;} else {
            for (let i = 0; i < hasChildren.length; i++) {
              found = complex(hasChildren[i].children, id);
              if (found) {
                return found;
              }
            }
            return undefined;
          }
        }
      };
      const updateSource = (result) => {
        loadingItem.value = {}
        let copy = JSON.parse(JSON.stringify(props.dataSource));
        let toUpdate = complex(copy, lastItem.id);
        Object.assign(toUpdate, {children: result});
        context.emit('update:dataSource', copy);
      };
      if (!lastItem.isLeaf && props.loadData) {
        props.loadData(lastItem, updateSource);
        loadingItem.value = lastItem
      }
    };
    const result = computed(() => {
      return props.selected.map(item => item.label).join('/');
    });
    const open = () => {
      popVisible.value = true;
      setTimeout(() => {
        document.addEventListener('click', onClickDocument);
      });
    };
    const close = () => {
      popVisible.value = false;
      document.removeEventListener('click',onClickDocument)
    };
    const toggle = () => {
      if (popVisible.value === true) {
        close();
      } else {
        open();
      }
    };
    const onClickDocument = (e) => {
      if (wrapper.value && wrapper.value === e.target || wrapper.value.contains(e.target)) {
        return;
      } else {
        close();
      }
    };
    return {popVisible, onUpdate, result, toggle, wrapper,loadingItem};
  }
};
</script>

<style lang="scss">
.g-cascader {
  position: relative;
  display: inline-flex;

  &-trigger {
    border: 1px solid red;
    height: 32px;
    min-width: 10em;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 1em;
    border: 1px solid #eee;
    border-radius: 4px;
  }

  &-popover-wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    display: flex;
    box-shadow: 0 0 3px rgba(0, 0, 0, .25);
    z-index: 1;

    > .label {
      flex-wrap: nowrap;
    }
  }
}
</style>