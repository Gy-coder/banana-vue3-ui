<template>
  <div class="g-pagination">
    <span
        v-for="page in pages"
        class="g-pagination-item"
        :class="{active: page === currentPage,separator: page === '···'}"
    >
      {{ page }}
    </span>
  </div>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
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
    const pages = computed(() => {
      let pageArr = unique([1, totalPage,
        currentPage, currentPage - 1, currentPage - 2,
        currentPage + 1, currentPage + 2]
          .sort((a, b) => a - b).filter(item => item > 0))
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
    console.log(pages.value);
    return {pages};
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
.g-pagination{
  &-item{
    font-size: 14px;
    border: 1px solid $grey;
    border-radius: $border-radius;
    padding: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 32px;
    height: 32px;
    margin: 0 4px;
    cursor: pointer;
    &.separator{
      border: none;
    }
    &.active,&:hover{
      border-color: $blue;
      color: $blue;
    }
    &.active{
      cursor: default;
    }
  }
}
</style>