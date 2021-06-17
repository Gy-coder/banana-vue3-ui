<demo>
常规使用
</demo>

<template>
  <div>
    <Row>
      <Col class="demo" span="12">
        <div class="content">Col-12</div>
      </Col>
      <Col class="demo" span="12">
        <div class="content">Col-12</div>
      </Col>
    </Row>
    <Row>
      <Col class="demo" span="8">
        <div class="content">Col-8</div>
      </Col>
      <Col class="demo" span="8">
        <div class="content">Col-8</div>
      </Col>
      <Col class="demo" span="8">
        <div class="content">Col-8</div>
      </Col>
    </Row>
    <Row>
      <Col class="demo" span="6">
        <div class="content">Col-6</div>
      </Col>
      <Col class="demo" span="6">
        <div class="content">Col-6</div>
      </Col>
      <Col class="demo" span="6">
        <div class="content">Col-6</div>
      </Col>
      <Col class="demo" span="6">
        <div class="content">Col-6</div>
      </Col>
    </Row>
    <Row>
      <Col class="demo" span="4">
        <div class="content">Col-4</div>
      </Col>
      <Col class="demo" span="4">
        <div class="content">Col-4</div>
      </Col>
      <Col class="demo" span="4">
        <div class="content">Col-4</div>
      </Col>
      <Col class="demo" span="4">
        <div class="content">Col-4</div>
      </Col>
      <Col class="demo" span="4">
        <div class="content">Col-4</div>
      </Col>
      <Col class="demo" span="4">
        <div class="content">Col-4</div>
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
.demo {
  > .content {
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