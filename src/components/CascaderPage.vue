<template>
  <p>1111111</p>
  <Cascader
      popover-height="200px"
      v-model:data-source="option"
      v-model:selected="selected"
      @update:selected="xxx"
      :load-data="loadData"
  />
  <p>11111111</p>
  <Cascader
      popover-height="200px"
      v-model:data-source="option2"
      v-model:selected="selected2"
  />
</template>
<script lang="ts">
import {ref} from 'vue';
import Cascader from '../lib/Cascader/Cascader.vue';
import db from '../db.js';

function ajax(parentId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = (db as Array<any>).filter(item => item.parent_id === parentId).map(item => {return {...item, label: item.name};});
      result.forEach(node=>{
        if((db as Array<any>).filter(item=>item.parent_id === node.id).length > 0){
          node.isLeaf = false
        }else{
          node.isLeaf = true
        }
      })
      resolve(result);
    }, 300);
  });
}

export default {
  components: {Cascader},
  setup(props, context) {
    const option = ref([]);
    const option2 = ref([{
      value: 'zhinan',
      label: '指南',
      children: [{
        value: 'shejiyuanze',
        label: '设计原则',
        children: [{
          value: 'yizhi',
          label: '一致',
        }, {
          value: 'fankui',
          label: '反馈'
        }, {
          value: 'xiaolv',
          label: '效率'
        }, {
          value: 'kekong',
          label: '可控'
        }]
      }, {
        value: 'daohang',
        label: '导航',
        children: [{
          value: 'cexiangdaohang',
          label: '侧向导航'
        }, {
          value: 'dingbudaohang',
          label: '顶部导航'
        }]
      }]
    }, {
      value: 'zujian',
      label: '组件',
      children: [{
        value: 'basic',
        label: 'Basic',
        children: [{
          value: 'layout',
          label: 'Layout 布局'
        }, {
          value: 'color',
          label: 'Color 色彩'
        }, {
          value: 'typography',
          label: 'Typography 字体'
        }, {
          value: 'icon',
          label: 'Icon 图标'
        }, {
          value: 'button',
          label: 'Button 按钮'
        }]
      }, {
        value: 'form',
        label: 'Form',
        children: [{
          value: 'radio',
          label: 'Radio 单选框'
        }, {
          value: 'checkbox',
          label: 'Checkbox 多选框'
        }, {
          value: 'input',
          label: 'Input 输入框'
        }, {
          value: 'input-number',
          label: 'InputNumber 计数器'
        }, {
          value: 'select',
          label: 'Select 选择器'
        }, {
          value: 'cascader',
          label: 'Cascader 级联选择器'
        }, {
          value: 'switch',
          label: 'Switch 开关'
        }, {
          value: 'slider',
          label: 'Slider 滑块'
        }, {
          value: 'time-picker',
          label: 'TimePicker 时间选择器'
        }, {
          value: 'date-picker',
          label: 'DatePicker 日期选择器'
        }, {
          value: 'datetime-picker',
          label: 'DateTimePicker 日期时间选择器'
        }, {
          value: 'upload',
          label: 'Upload 上传'
        }, {
          value: 'rate',
          label: 'Rate 评分'
        }, {
          value: 'form',
          label: 'Form 表单'
        }]
      }, {
        value: 'data',
        label: 'Data',
        children: [{
          value: 'table',
          label: 'Table 表格',
        }, {
          value: 'tag',
          label: 'Tag 标签'
        }, {
          value: 'progress',
          label: 'Progress 进度条'
        }, {
          value: 'tree',
          label: 'Tree 树形控件'
        }, {
          value: 'pagination',
          label: 'Pagination 分页'
        }, {
          value: 'badge',
          label: 'Badge 标记'
        }]
      }, {
        value: 'notice',
        label: 'Notice',
        children: [{
          value: 'alert',
          label: 'Alert 警告'
        }, {
          value: 'loading',
          label: 'Loading 加载'
        }, {
          value: 'message',
          label: 'Message 消息提示'
        }, {
          value: 'message-box',
          label: 'MessageBox 弹框'
        }, {
          value: 'notification',
          label: 'Notification 通知'
        }]
      }, {
        value: 'navigation',
        label: 'Navigation',
        children: [{
          value: 'menu',
          label: 'NavMenu 导航菜单'
        }, {
          value: 'tabs',
          label: 'Tabs 标签页'
        }, {
          value: 'breadcrumb',
          label: 'Breadcrumb 面包屑'
        }, {
          value: 'dropdown',
          label: 'Dropdown 下拉菜单'
        }, {
          value: 'steps',
          label: 'Steps 步骤条'
        }]
      }, {
        value: 'others',
        label: 'Others',
        children: [{
          value: 'dialog',
          label: 'Dialog 对话框'
        }, {
          value: 'tooltip',
          label: 'Tooltip 文字提示'
        }, {
          value: 'popover',
          label: 'Popover 弹出框'
        }, {
          value: 'card',
          label: 'Card 卡片'
        }, {
          value: 'carousel',
          label: 'Carousel 走马灯'
        }, {
          value: 'collapse',
          label: 'Collapse 折叠面板'
        }]
      }]
    }, {
      value: 'ziyuan',
      label: '资源',
      children: [{
        value: 'axure',
        label: 'Axure Components'
      }, {
        value: 'sketch',
        label: 'Sketch Templates'
      }, {
        value: 'jiaohu',
        label: '组件交互文档'
      }]
    }])
    const selected = ref([]);
    const selected2 = ref([])
    const loadData = (node,callback) => {
      let {id} = node;
      ajax(id).then((result)=>{
        callback(result)
      })
    };
    const xxx = () => {
      ajax(selected.value[0].id).then((result) => {
        let lastLevel = option.value.filter(item => item.id === selected.value[0].id)[0];
        Object.assign(lastLevel, {children: result});
      });
    };
    ajax(0).then((result) => {
      option.value = (result as any)
    });
    return {option, selected, xxx, loadData,option2,selected2};
  }
};
</script>

<style lang="scss" scoped>
.xxx {
  border: 1px solid red;
}
</style>