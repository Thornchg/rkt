<template>
    <header class="header">
        <div class="container d-flex flex-space-between">
            <h3>软考通</h3>
            <div class="header-nav" v-if="isLogin">
                <Button class="header-link"  :text="true">
                    <!--<div class="av"></div>-->
                    <!--<span>郑晨光</span>-->
                    <Avatar :src="src" :width="26">
                        <div style="margin-left: -8px;padding-right: 4px">{{user.nickName}}</div>
                    </Avatar>
                </Button>
                <Button class="header-link" :text="true">
                    我的学习笔记
                </Button>
                <Button class="header-link" :text="true" @click="goIndex">
                    首页
                </Button>
                <Button class="header-link" :text="true" @click="logout">
                    安全退出
                </Button>

            </div>
            <div class="header-nav" v-if="!isLogin">
                <Button class="header-link" @click="wantLogin" :text="true">
                   登陆
                </Button>
                <Button class="header-link" @click="goRegister" :text="true">
                    我要注册
                </Button>
            </div>
        </div>
        <div id="login-modal" v-if="!isLogin">
            <Modal v-model="loginning" :closeOnMask="false" :middle="true">
                <Login @close="closeLoginLayout"></Login>
            </Modal>
        </div>
    </header>
</template>

<script>
    import Login from '@/components/Login'
    import { mapState } from 'vuex'

    export default {
        name: "Header",
        data() {
            return {
                loginning: false,
                src: '/1.png'
            }
        },
        methods: {
            wantLogin() {
                this.loginning = true;
            },
            closeLoginLayout() {
                this.loginning = false;
            },
            goRegister(){

            },
            logout(){
                this.$Confirm("确定退出账号？").then(()=>{
                    this.$store.commit("logout");
                }).catch(()=>{})
            },
            goIndex(){
                this.$router.push("/");
            }
        },
        components: {
            Login
        },
        computed: {
            isLogin() {
                return this.$store.state.user.isLogin;
            },
            ...mapState(
                {
                    user:state=>state.user.data

                }
            )
        }
    }
</script>

<style scoped lang="less">
    @header-height: 42px;
    .header {
        height: @header-height;
        line-height: @header-height;
        background-color: @primary-color;
        border-bottom: 1px solid #29487d;
        color: white;
        font-weight: 600;
    }

    a {
        color: white;

        &:hover {
            color: white;
        }
    }

    .header-link {
        display: inline-block;
        position: relative;
        background-color: transparent;
        line-height: 30px;
        /*color: #FFFFFF;*/
        border: 0;
        padding: 0 8px;
        border-radius: 3px;
        margin-right: 1px;
        font-weight: 600;
        font-size: inherit;

        &:hover {
            background-color: rgba(0, 0, 0, .1);
            color: #FFF;
        }

        &:first-child ~ .header-link:before {
            content: "";
            display: block;
            height: 18px;
            width: 1px;
            position: absolute;
            top: 6px;
            left: -1px;
            background-color: rgba(0, 0, 0, .1);
        }
    }

</style>