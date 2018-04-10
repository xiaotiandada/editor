<template>
    <el-container>
        <el-header>
            <div class="logo fl">
                <i class="el-icon-edit"></i>
            </div>
            <div class="toogle ri">
                <el-button type="primary" @click="toogleShow" round>{{isA ? '显示' : '隐藏'}}</el-button>
            </div>
        </el-header>
        <el-container>
            <sidebar></sidebar>
            <e-main :isA="isA"></e-main>
        </el-container>
    </el-container>
</template>

<script>
import Sidebar from '@/views/layout/components/sidebar/index'
import EMain from '@/views/layout/components/main/index'
export default {
  name: "layout",
  components:{
      Sidebar,
      EMain
  },
  data() {
    return {
      isA: true
    };
  },
  methods: {
    toogleShow() {
      this.isA = !this.isA
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less">
.el-container {
  min-width: 970px;
  background: #fff;
}
.el-header {
  color: #333;
  text-align: center;
  line-height: 60px;
  border-bottom: 1px solid #dadada;
  background: #fff;
  .logo {
    i {
      font-size: 20px;
      color: #000;
    }
  }
}





.onloadCircleP{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: #ececec;
    margin: auto;
    z-index: 999;
    .onloadCircle{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    } 
}
</style>
