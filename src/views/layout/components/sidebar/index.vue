<template>
    <el-aside width="450px" id="test">   
        <sidebar-tit></sidebar-tit>
        <div class="sidebar_bottom">
            <div class="run">
                <el-button>运行</el-button>
            </div>
            <div class="detail">
                <div class="d_child d_child_add" @click="dAdd">
                    <i class="el-icon-plus"></i>
                </div>
            </div>
        </div>
    </el-aside>
</template>

<script>
    import SidebarTit from './SidebarTit'
    export default {
        components: {
            SidebarTit
        },
        data() {
            return {
                num: 1
            }
        },
        methods:{
            dAdd(){
                $('.d_child:last-child').after('<div class="d_child">'+this.num+'</div>')
                this.num++
            }
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
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
                .d_child {
                    width: 80px;
                    height: 80px;
                    background: #909090;
                    border-radius: 3px;
                    float: left;
                    text-align: center;
                    margin: 10px 5px;
                    cursor: pointer;
                    line-height: 80px;                    
                }
                .d_child_add {
                    .el-icon-plus {
                        font-size: 50px;
                        line-height: 80px;
                    }
                }
            }
        }
    }
</style>
