<template>
    <el-container>
        <el-header>
            <div class="logo fl">
                <i class="el-icon-edit"></i>
            </div>
            <div class="toogle ri">
                <el-button type="primary" @click="toogle" round>{{isA ? '显示' : '隐藏'}}</el-button>
            </div>
        </el-header>
        <el-container>
            <el-aside width="450px" id="test">
                <div class="sidebar_tit">
                    <el-collapse v-model="activeNames" @change="handleChange">
                        <el-collapse-item title="一致性 Consistency" name="1">
                            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                        </el-collapse-item>
                        <el-collapse-item title="反馈 Feedback" name="2">
                            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                        </el-collapse-item>
                        <el-collapse-item title="效率 Efficiency" name="3">
                            <div>简化流程：设计简洁直观的操作流程；</div>
                            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                        </el-collapse-item>
                        <el-collapse-item title="可控 Controllability" name="4">
                            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                        </el-collapse-item>
                        <el-collapse-item title="可控 Controllability" name="5">
                            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                        </el-collapse-item>
                        <el-collapse-item title="可控 Controllability" name="6">
                            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                        </el-collapse-item>
                        <el-collapse-item title="可控 Controllability" name="7">
                            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
                <div class="sidebar_bottom">
                    <div class="run">
                        <el-button>运行</el-button>
                    </div>
                    <div class="detail">
                        <div class="d_child d_child_add">
                            <i class="el-icon-plus"></i>
                        </div>
                        <div class="d_child"></div>
                        <div class="d_child"></div>
                        <div class="d_child"></div>
                        <div class="d_child"></div>
                        <div class="d_child"></div>
                        <div class="d_child"></div>
                        <div class="d_child"></div>
                        <div class="d_child"></div>
                        <div class="d_child"></div>
                    </div>
                </div>
            </el-aside>
            <el-main>
                <div class="content fl" :class="{'toggleshow0' : isA,'togglehide0': !isA}">
                    content
                </div>
                <div class="browser fl" :class="{'toggleshow1' : isA,'togglehide1': !isA}">
                    browser
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
  name: "layout",
  data() {
    return {
      isA: true,
      activeNames: ['1']
    };
  },
  methods: {
    toogle() {
      this.isA = !this.isA
    },
    handleChange(val) {
        console.log(val)
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less">
.el-container {
  min-width: 970px;
}
.el-header {
  color: #333;
  text-align: center;
  line-height: 60px;
  border-bottom: 1px solid #dadada;
  .logo {
    i {
      font-size: 20px;
      color: #000;
    }
  }
}

.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100%;
  min-width: 300px;
  max-width: 600px;
  overflow: hidden;
  .sidebar_tit {
    height: 70%;
    background: #fff;
  }
  .sidebar_bottom {
    height: 30%;
    background: #fff;
    position: relative;
    line-height: 1;
    .run {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 50px;
      line-height: 50px;
      background: #dedede;
      text-align: right;
      button {
          margin-right: 10px;
      }
    }

    .detail {
      position: absolute;
      top: 50px;
      left: 0;
      right: 0;
      bottom: 0;
      background: #c1c1c1;
      overflow: auto;
      .d_child{
          width: 80px;
          height: 80px;
          background: #909090;
          border-radius: 3px;
          float: left;
          text-align: center;
          margin: 10px 5px;
          cursor: pointer;
      }
      .d_child_add{
          .el-icon-plus{
              font-size: 50px;
              line-height: 80px;
          }
      }
    }
  }
}

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
