<template>
  <div class="container">
    <Layout>
      <Sider><SideMenu></SideMenu></Sider>
      <Content class="ml-2">
        <Index></Index>
      </Content>
    </Layout>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from 'components/Header'
import SideMenu from 'components/SideMenu'
import Footer from 'components/Footer'
import Index from '@/pages/Index'
export default {
  name: 'home',
  components:{
    Header,
    SideMenu,
    Footer,
    Index
  }
}
</script>
<style>
</style>
