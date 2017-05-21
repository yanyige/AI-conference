<template>
  <div id="app">
    <v-header></v-header>
    <v-nav></v-nav>
    <v-content>

    </v-content>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Nav from './components/Nav'
import Content from './components/Content'
import Footer from './components/Footer'
export default {
  name: 'app',
  components: {
    'v-header': Header,
    'v-nav': Nav,
    'v-content': Content,
    'v-footer': Footer
  }
}
</script>

<style rel="stylesheet/stylus" lang="stylus">
  body
    background-color #535953;
  #app
    line-height 2
    width 1348px
    margin 0 auto
    font-family -apple-system,BlinkMacSystemFont,"Helvetica Neue",Arial,"PingFang SC","Hiragino Sans GB",STHeiti,"Microsoft YaHei","Microsoft JhengHei","Source Han Sans SC","Noto Sans CJK SC","Source Han Sans CN","Noto Sans SC","Source Han Sans TC","Noto Sans CJK TC","WenQuanYi Micro Hei",SimSun,sans-serif;
</style>
