<template>
    <div class="side-menu">
        <div class="menu-block">
            <h4 class="menu-block-title">
                综合知识
            </h4>
            <div class="menu-block-body">
                <ul>
                    <li><router-link to="/paperList/choice/everyDay"> - 每日一练</router-link></li>
                    <li><router-link to="/paperList/choice/pastYears"> - 历年真题在线模考</router-link></li>
                    <li><a href=""> - 知识分类专项练习</a></li>
                    <li><router-link to="/paperList/choice/simulation"> - 全真模拟试卷模考</router-link></li>
                    <li><router-link to="/examRecord/choice"> - 练习记录</router-link></li>
                </ul>
            </div>
        </div>
        <div class="menu-block">
            <h4 class="menu-block-title">
                案例分析
            </h4>
            <div class="menu-block-body">
                <ul>
                    <li><router-link to="/paperList/case/everyDay"> - 每日一练</router-link></li>
                    <li><router-link to="/paperList/case/pastYears"> - 历年真题在线模考</router-link></li>
                    <li><router-link to=""> - 知识分类专项练习</router-link></li>
                    <li><router-link to="/paperList/case/simulation"> - 全真模拟试卷模考</router-link></li>
                    <li><router-link to="/examRecord/case"> - 练习记录</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SideMenu",
        data() {
            return {

            }
        }
    }
</script>

<style scoped lang="less">
    .menu-block{
        margin-bottom: 20px;
    }
    .menu-block-title{
        color: #616770;
        font-weight: 800;
    }
    .menu-block-body{
        a{
            display: block;
            color: #333333;
            font-weight: 800;
            line-height: 30px;
            border-radius: 2px;
            border: 1px solid transparent;
            padding: 0 10px;
            cursor: pointer;
            &:hover{
                background-color: #f5f6f7;
                border-color: #dddfe2;
            }
        }
    }


</style>