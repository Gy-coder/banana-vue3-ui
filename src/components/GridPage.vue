<template>
  <Row>
    <Col>1</Col>
    <Col>2</Col>
  </Row>
  <Row>
    <Col>1</Col>
    <Col>2</Col>
    <Col>3</Col>
  </Row>
  <Row>
    <Col>1</Col>
    <Col>2</Col>
    <Col>3</Col>
    <Col>4</Col>
  </Row>
  <Row>
    <Col span="2">1</Col>
    <Col span="22">2</Col>
  </Row>
</template>

<script lang="ts">
import Row from '../lib/Row.vue';
import Col from '../lib/Col.vue';
export default {
  components: {Col, Row}
}
</script>