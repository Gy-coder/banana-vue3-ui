<demo>
支持响应式
</demo>

<template>
  <div>
    <Row>
      <Col span="24"
           :narrow-pc="{span:8}"
           :pc="{span: 4}"
           class="demo"
      >
        <div class="content">Col</div>
      </Col>
      <Col span="24"
           :narrow-pc="{span:8}"
           :pc="{span: 4}"
           class="demo"
      >
        <div class="content">Col</div>
      </Col>
      <Col span="24"
           :narrow-pc="{span:8}"
           :pc="{span: 4}"
           class="demo"
      >
        <div class="content">Col</div>
      </Col>
      <Col span="24"
           :narrow-pc="{span:8}"
           :pc="{span: 4}"
           class="demo"
      >
        <div class="content">Col</div>
      </Col>
      <Col span="24"
           :narrow-pc="{span:8}"
           :pc="{span: 4}"
           class="demo"
      >
        <div class="content">Col</div>
      </Col>
      <Col span="24"
           :narrow-pc="{span:8}"
           :pc="{span: 4}"
           class="demo"
      >
        <div class="content">Col</div>
      </Col>
    </Row>
  </div>
</template>


<script lang="ts">
import Col from '../lib/Grid/Col.vue';
import Row from '../lib/Grid/Row.vue';

export default {
  components: {Row, Col},

};
</script>

<style lang="scss" scoped>
.demo{
  > .content{
    width: 100%;
    height: 100%;
    border: 1px solid white;
    background: #40a9ff;
    outline: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>