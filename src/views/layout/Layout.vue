<template>
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
            <el-aside width="450px" id="test">
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
                isA: true
            };
        },
        methods: {
            toogle() {
                this.isA = !this.isA
            }
        }
    };
</script>

<style lang="less" rel="stylesheet/less">
    .el-header{
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    
    .el-header {
        border-bottom: 1px solid #dadada;
    }
    
    .el-aside {
        background-color: #e6e6e6;
        color: #333;
        text-align: center;
        line-height: 200px;
        height: 100%;
        min-height: 500px;
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
    
    
    .logo {
        i {
            font-size: 20px;
            color: #000;
        }
    }
    
    .toogle {}

    .el-container{
        min-width: 970px;
    }
    
    .el-aside .tit {
        height: 70%;
        background: ghostwhite;
    }
    
    .el-aside .run {
        height: 10%;
        background: rgb(27, 27, 126);
        position: relative;
        button {
            position: absolute;
            transform: translateY(50%);
            transform: translateX(50%);
        }
    }
    
    .el-aside .detail {
        height: 20%;
        background: rgb(231, 255, 10);
        overflow: auto;
    }
    
    .content {
        width: 50%;
        height: 100%;
        transition: width .3s;
        overflow: hidden;
        background: #717171;
        color: #fff;
    }
    
    .browser {
        width: 50%;
        height: 100%;
        transition: width .3s;
        overflow: hidden;
    }
    
    .toggleshow1 {
        width: 50%;
    }
    
    .togglehide1 {
        width: 0;
    }
    
    .toggleshow0 {
        width: 50%;
    }
    
    .togglehide0 {
        width: 100%;
    }
</style>
