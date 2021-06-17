<demo>
响应式支持offset
</demo>

<template>
  <div>
    <Row>
      <Col class="demo"
           span="12"
           offset="12"
           :pc="{span:11,offset:1}"
      >
        <div class="content">Col</div>
      </Col>
      <Col class="demo"
           span="12"
           offset="12"
           :pc="{span:11,offset:1}"
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