<template>
    <el-main>
        <div class="content fl" :class="{'toggleshow0' : isA,'togglehide0': !isA}">
            content
        </div>
        <div class="browser fl" :class="{'toggleshow1' : isA,'togglehide1': !isA}">
            browser
        </div>
    </el-main>
</template>

<script>
    export default {
        props:{
            isA: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  padding: 0;
  .content {
    width: 50%;
    height: 100%;
    transition: width 0.3s;
    overflow: hidden;
    background: #717171;
    color: #fff;
  }

  .browser {
    width: 50%;
    height: 100%;
    transition: width 0.3s;
    overflow: hidden;
  }
}

.toggleshow1 {
  width: 50% !important;
}

.togglehide1 {
  width: 0 !important;
}

.toggleshow0 {
  width: 50% !important;
}

.togglehide0 {
  width: 100% !important;
}
</style>
