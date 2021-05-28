<template>
  <div :style="{border: '1px solid red'}">
    <Row>
      <Col span="24"
           :narrow-pc="{span:8}"
           :pc="{span: 4}"
      >
        <div class="gutter-box"></div>
      </Col>
      <Col span="24"
           :narrow-pc="{span:8}"
           :pc="{span: 4}"
      >
        <div class="gutter-box"></div>
      </Col>
      <Col span="24"
           :narrow-pc="{span:8}"
           :pc="{span: 4}"
      >
        <div class="gutter-box"></div>
      </Col>
      <Col span="24"
           :narrow-pc="{span:8}"
           :pc="{span: 4}"
      >
        <div class="gutter-box"></div>
      </Col>
      <Col span="24"
           :narrow-pc="{span:8}"
           :pc="{span: 4}"
      >
        <div class="gutter-box"></div>
      </Col>
      <Col span="24"
           :narrow-pc="{span:8}"
           :pc="{span: 4}"
      >
        <div class="gutter-box"></div>
      </Col>
    </Row>
  </div>
  <div :style="{border: '1px solid blue'}">
    <Row>
      <Col span="12" offset="12" :pc="{span:11,offset:1}">
        <div class="gutter-box"></div>
      </Col>
      <Col span="12" offset="12" :pc="{span:11,offset:1}">
        <div class="gutter-box"></div>
      </Col>
    </Row>
  </div>
</template>

<script lang="ts">
import Row from '../lib/Row.vue';
import Col from '../lib/Col.vue';

export default {
  components: {Col, Row}
};
</script>

<style lang="scss" scoped>
.gutter-example > > > .ant-row > div {
  background: transparent;
  border: 0;
}

.gutter-box {
  background: #00a0e9;
  height: 66px;
  padding: 5px 0;
  border: 1px solid green;
}

.g-col {
}
</style>