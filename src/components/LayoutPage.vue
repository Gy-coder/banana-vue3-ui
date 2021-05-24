<template>
  <Layout style="height: 100vh">
    <Header class="demo">header</Header>
    <Layout>
      <Content class="demo">content</Content>
    </Layout>
    <Footer class="demo">footer</Footer>
  </Layout>
  <br>
  <Layout style="height: 100vh">
    <Header class="demo">header</Header>
    <Layout>
      <Sider class="demo">Sider</Sider>
      <Content class="demo">content</Content>
    </Layout>
    <Footer class="demo">footer</Footer>
  </Layout>
  <br>
  <Layout style="height: 100vh">
    <Header class="demo">header</Header>
    <Layout>
      <Content class="demo">content</Content>
      <Sider class="demo">Sider</Sider>
    </Layout>
    <Footer class="demo">footer</Footer>
  </Layout>
  <br>
  <Layout style="height: 100vh">
    <Sider class="demo">Sider</Sider>
    <Layout>
      <Header class="demo">header</Header>
      <Content class="demo">content</Content>
      <Footer class="demo">footer</Footer>
    </Layout>
  </Layout>
</template>
<script lang="ts">
import Layout from '../lib/Layout.vue';
import Header from '../lib/Header.vue';
import Content from '../lib/Content.vue';
import Footer from '../lib/Footer.vue';
import Sider from '../lib/Sider.vue';

export default {
  components: {Sider, Footer, Content, Header, Layout}
};
</script>

<style lang="scss" scoped>
.demo{
  min-height: 100px;
  color: white;
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