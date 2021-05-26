<template>
  <div :style="{border: '1px solid black'}">
    <Row gutter="20">
      <Col>1</Col>
      <Col>2</Col>
    </Row>
    <Row gutter="20">
      <Col>1</Col>
      <Col>2</Col>
      <Col>3</Col>
    </Row>
    <Row gutter="20">
      <Col>1</Col>
      <Col>2</Col>
      <Col>3</Col>
      <Col>4</Col>
    </Row>
    <Row gutter="20">
      <Col span="2">1</Col>
      <Col span="22">2</Col>
    </Row>
    <Row gutter="20">
      <Col span="3">1</Col>
      <Col span="18" offset="3">2</Col>
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