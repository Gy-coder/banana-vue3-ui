<demo>
Sider在右边
</demo>
<template>
  <div>
    <Layout style="height: 100vh">
      <Header class="demo">header</Header>
      <Layout>
        <Content class="demo">content</Content>
        <Sider class="demo">Sider</Sider>
      </Layout>
      <Footer class="demo">footer</Footer>
    </Layout>
  </div>
</template>

<script lang="ts">
import Layout from '../lib/Layout/Layout.vue';
import Header from '../lib/Layout/Header.vue';
import Content from '../lib/Layout/Content.vue';
import Footer from '../lib/Layout/Footer.vue';
import Sider from '../lib/Layout/Sider.vue';

export default {
  components: {Sider, Footer, Content, Header, Layout}
};

</script>

<style lang="scss">
.demo{
  min-height: 100px;
}
.g-layout-sider{
  background: #41a2e6;
  width: 200px;
}
.g-layout-header{
  background: #80bde8;
}
.g-layout-footer{
  background: #80bde8;
}
.g-layout-content{
  background: #1f90e6;
}
</style>