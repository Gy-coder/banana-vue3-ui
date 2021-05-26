<template>
  <div :style="{border: '1px solid red'}">
    <Row>
      <Col :span="12">
        <div class="gutter-box">
          col-6
        </div>
      </Col>
      <Col :span="10" offset="2">
        <div class="gutter-box">
          col-6
        </div>
      </Col>
    </Row>
    <Row>
      <Col :span="8">
        <div class="gutter-box">
          col-6
        </div>
      </Col>
      <Col :span="8">
        <div class="gutter-box">
          col-6
        </div>
      </Col>
      <Col :span="8">
        <div class="gutter-box">
          col-6
        </div>
      </Col>
    </Row>
    <Row>
      <Col :span="6">
        <div class="gutter-box">
          col-6
        </div>
      </Col>
      <Col :span="6">
        <div class="gutter-box">
          col-6
        </div>
      </Col>
      <Col :span="6">
        <div class="gutter-box">
          col-6
        </div>
      </Col>
      <Col :span="6">
        <div class="gutter-box">
          col-6
        </div>
      </Col>
    </Row>
  </div>
  <div class="gutter-example" :style="{  border: '1px solid red'}">
    <Row :gutter="16">
      <Col class="gutter-row" :span="6">
        <div class="gutter-box">
          col-6
        </div>
      </Col>
      <Col class="gutter-row" :span="6">
        <div class="gutter-box">
          col-6
        </div>
      </Col>
      <Col class="gutter-row" :span="6">
        <div class="gutter-box">
          col-6
        </div>
      </Col>
      <Col class="gutter-row" :span="6">
        <div class="gutter-box">
          col-6
        </div>
      </Col>
    </Row>
  </div>
  <div>
    <Row gutter="20">
      <Col span="12">
        <div class="gutter-box">
          <Row align="center">
            <Col>1</Col>
            <Col>2</Col>
            <Col>3</Col>
          </Row>
        </div>
      </Col>
      <Col span="12">
        <div class="gutter-box">
          1234
        </div>
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