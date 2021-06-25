<template>
  <div class="g-cascader-item" :style="{ height: height }">
    <div class="left">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="label"
        @click="onClickLabel(item)"
      >
        <span class="name">{{ item.label }}</span>
        <span class="icons">
          <template v-if="item.label === loadingItem.label">
            <icon class="icon loading" name="i-loading"></icon>
          </template>
          <template v-else>
            <icon
              class="icon next"
              name="i-rightArrow"
              v-if="loadData ? !item.isLeaf : item.children"
            ></icon>
          </template>
        </span>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <CascaderItems
        :items="rightItems"
        :height="height"
        :level="level + 1"
        :selected="selected"
        @update:selected="onUpdateSelected"
        :load-data="loadData"
        :loading-item="loadingItem"
      ></CascaderItems>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import Icon from "../Icon/Icon.vue";

interface Props {
  label: string;
  value: [string, number];
  children?: Props[];
}

export default {
  components: { Icon },
  props: {
    items: {
      type: Array,
    },
    height: String,
    selected: {
      type: Array,
      default: () => {
        return [];
      },
    },
    level: {
      type: Number,
      default: 0,
    },
    loadData: {
      type: Function,
    },
    loadingItem: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, context) {
    const rightItems = computed(() => {
      if (props.selected && props.selected[props.level]) {
        let item = props.items.filter(
          // @ts-ignore
          (item) => item.label === props.selected[props.level].label
        );
        if (
          item &&
          (item as any)[0].children &&
          (item as any)[0].children.length > 0
        ) {
          return (item as any)[0].children;
        }
      }
    });
    const onClickLabel = (item) => {
      let copy = JSON.parse(JSON.stringify(props.selected));
      copy[props.level] = item;
      copy.splice(props.level + 1);
      context.emit("update:selected", copy);
    };
    const onUpdateSelected = (newSelected) => {
      context.emit("update:selected", newSelected);
    };
    return { rightItems, onClickLabel, onUpdateSelected };
  },
};
</script>

<style lang="scss">
.g-cascader-item {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100px;

  .left {
    height: 100%;
    padding: 0.3em 0;
    overflow: scroll;
  }

  .right {
    height: 100%;
    border-left: 1px solid lighten(#999, 30%);
  }

  .label {
    padding: 0.5em 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
      background: #f5f7fa;
      color: #40a9ff;
      fill: #40a9ff;
    }

    > .name {
      margin-right: 1em;
    }

    .icons {
      margin-left: auto;
      .next {
        transform: scale(0.7);
      }
      .loading {
        animation: g-spin 2s infinite linear;
      }
    }
  }
}

@keyframes g-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
