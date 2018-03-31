<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="logo fl">
          <i class="el-icon-edit"></i>
        </div>
        <div class="toogle ri">
          <el-button type="primary" @click="toogle" round>显示和隐藏</el-button>
        </div>
      </el-header>
      <el-container>
        <el-aside width="450px">
          <div class="tit"></div>
          <div class="run">
             <el-button type="primary" round>主要按钮</el-button>
          </div>
          <div class="detail"></div>
        </el-aside>
        <el-main>
          <div class="content fl" :class="{'toggleshow0' : isA,'togglehide0': !isA}">
            content
          </div>
          <div class="browser ri" :class="{'toggleshow1' : isA,'togglehide1': !isA}">
            browser
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import 'normalize.css'
  export default {
    name: 'App',
    data () {
      return {
        isA : true
      }
    },
    methods:{
      toogle(){
        this.isA = !this.isA
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  html,
  body {
    height: 100%;
  }
  #app,
  .el-aside,
  .el-container,
  .el-main {
    height: 100%;
  }
  
  .fl {
    float: left;
  }
  
  .ri {
    float: right;
  }
  
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  .el-header,
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-header{
    background-color: transparent;
    border-bottom: 1px solid #dadada;
  }  
  
  .el-aside {
    background-color: #e6e6e6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 100%;
    min-width: 300px;
    max-width: 600px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    padding: 0;
  }
  
  body>.el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  
  .logo {
    i {
      font-size: 20px;
      color: #000;
    }
  }
  
  .toogle {}

  .el-aside .tit{
    height: 70%;
    background: ghostwhite;
  }
  .el-aside .run{
    height: 10%;
    background: rgb(27, 27, 126);
    position: relative;
    button{
      position: absolute;
      transform: translateY(50%);
      right: 10%;
    }
  }
  .el-aside .detail{
    height: 20%;
    background: rgb(231, 255, 10);
    overflow: auto;
  }
  .content {
    width: 50%;
    height: 100%;
    background: #000;
    transition: width .3s;
    overflow: hidden;
  }
  
  .browser {
    width: 50%;
    height: 100%;
    background: rgb(201, 10, 10);
    transition: width .3s;    
    overflow: hidden;
  }
  .toggleshow1{
    width: 50%;
  }
  .togglehide1{
    width: 0;
  }

  .toggleshow0{
    width: 50%;
  }
  .togglehide0{
    width: 100%;
  }
</style>
