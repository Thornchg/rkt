<template>
  <div id="app">
    <Header></Header>
    <div class="main">
    <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped lang="less">
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/

}
  .h-layout-content{
    margin-left: 12px;
  }
  .main{
    margin: 1rem 0;
  }
</style>
<script>
  import Header from 'components/Header'
  // import SideMenu from 'components/SideMenu'
  import Footer from 'components/Footer'
  export default {
    components:{
      Header,
      // SideMenu,
      Footer
    }
  }
</script>
