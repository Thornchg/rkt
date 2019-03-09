<template>
    <div class="loginLayout" v-padding="20">
        <Button noBorder class="login-close" @click="close"><i class="h-icon-close"></i></Button>
        <h2>登陆软考通</h2>
        <div class="errorMsg text-center" v-if="hasError"><i class="h-icon-info"></i>{{errorMsg}}</div>
        <Form ref="loginForm" :label-width="90" mode="block" :rules="rules" :model="data">
            <FormItem label="邮箱地址" prop="username">
                <input type="text" v-model="data.username" placeholder="请输入邮箱地址"/>
            </FormItem>
            <FormItem label="密码" prop="password">
                <input type="password" v-model="data.password" placeholder="请输入密码"/>
            </FormItem>
            <FormItem>
                <Button color="green" :loading="isLoading" :block="true" @click="submit">提交</Button>
            </FormItem>
            <FormItem class="text-center p-0">
                <Button noBorder text-color="primary">没有账号？去注册一个！</Button>
            </FormItem>
        </Form>
    </div>

</template>

<script>
    const querystring = require('querystring');
    export default {
        name: "Login",
        data() {
            return {
                hasError: false,
                errorMsg: '用户名或密码错误！',
                isLoading: false,
                data: {
                    username: 'thornchg@163.com',
                    password: 'password'
                },
                rules: {
                    required: ['username', 'password'],
                }
            }
        },
        methods: {
            submit() {
                let validResult = this.$refs.loginForm.valid();
                if (validResult.result) {
                    this.isLoading = true;
                    axios.post('/login',
                        querystring.stringify(this.data))
                        .then(response=> {
                            console.log(response.data);
                            this.$Message.success("登陆成功");
                            this.isLoading = false;
                            this.close();
                            this.$store.commit('loginSuccess', response.data);
                        })
                        .catch(error=> {
                            this.hasError = true;
                            this.errorMsg = "邮箱地址或密码错误！";
                            console.log(error);
                            this.isLoading = false;
                        });
                } else {
                    this.$Message.error(`还有${validResult.messages.length}个错误未通过验证。`);
                }
            },
            reset() {

            },
            close() {
                this.$emit("close");
            }
        }
    }
</script>

<style scoped>
    .loginLayout {

    }

    h2 {
        margin-bottom: 20px;
        text-align: center;
    }

    .login-close {
        position: absolute;
        top: 0;
        right: 0;
        font-weight: 800;
    }

    .login-close:hover {
        background: #c43d3d;
        border-radius: 0;
        color: white;
    }

    .errorMsg {
        color: red;
    }

</style>