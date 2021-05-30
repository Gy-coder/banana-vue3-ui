<template>
  <div class="g-pagination">
    <span
        class="g-pagination-nav prev"
        :class="{'disabled': currentPage === 1}"
        @click="onClickPage(currentPage - 1)"
    >
      <Icon name="i-left"/>
    </span>
    <template v-for="page in pages">
      <span
          class="g-pagination-item active"
          v-if="page === currentPage"
      >
        {{ page }}
      </span>
      <span
          class="g-pagination-separator"
          v-else-if="page === '···'"
      >
        <Icon name="i-dot"/>
      </span>
      <span
          class="g-pagination-item"
          @click="onClickPage(page)"
          v-else
      >
        {{ page }}
      </span>
    </template>
    <span
        class="g-pagination-nav next"
        :class="{'disabled': currentPage === totalPage}"
        @click="onClickPage(currentPage + 1)"
    >
      <Icon name="i-right"/>
    </span>
  </div>
</template>

<script lang="ts">
import {computed} from 'vue';
import Icon from '../lib/Icon.vue';

export default {
  components: {Icon},
  props: {
    totalPage: {
      type: Number,
      require: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    hideIfOnePage: {
      type: Boolean,
      default: true,
    }
  },
  setup(props, context) {
    const {totalPage, currentPage} = props;
    let pages = computed(() => {
      let pageArr = unique([1, totalPage,
        currentPage, currentPage - 1, currentPage - 2,
        currentPage + 1, currentPage + 2]
          .sort((a, b) => a - b)
          .filter(item => item >= 1 && item <= totalPage))
          .reduce((prev, cur, index, arr) => {
            if (arr[index + 1] && arr[index + 1] - arr[index] > 1) {
              prev.push(cur);
              prev.push('···');
            } else {
              prev.push(cur);
            }
            return prev;
          }, []);
      return pageArr;
    });
    const onClickPage = (n) => {
      if (n >= 1 && n <= totalPage) {
        context.emit('update:currentPage', n);
      }
    };
    return {pages, onClickPage};
  }
};

function unique(nums) {
  let obj = {};
  for (let num of nums) {
    obj[num] = true;
  }
  return Object.keys(obj).map(s => parseInt(s));
}
</script>


<style lang="scss">
$grey: #eee;
$border-radius: 4px;
$blue: #40a9ff;
$width: 32px;
$height: 32px;
$font-size: 14px;
.g-pagination {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &-separator {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: $font-size;
    margin: 0 4px;
  }

  &-item {
    font-size: $font-size;
    border: 1px solid #e1e1e1;
    border-radius: $border-radius;
    padding: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: $width;
    height: $height;
    margin: 0 4px;
    cursor: pointer;

    &.active, &:hover {
      border-color: $blue;
      color: $blue;
    }

    &.active {
      cursor: default;
    }
  }

  &-nav {
    background: $grey;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: $border-radius;
    width: $height;
    height: $height;
    margin: 0 4px;
    font-size: $font-size;

    &.disabled {
      background: darken($grey, 20%);
    }
  }
}
</style>