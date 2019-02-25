<template>
    <div class="loginLayout" v-padding="20">
        <Button noBorder class="login-close" @click="close"><i class="h-icon-close"></i></Button>
        <h2>登陆软考通</h2>
        <div class="errorMsg text-center" v-if="hasError"><i class="h-icon-info"></i>{{errorMsg}}</div>
        <Form ref="loginForm" :label-width="90" mode="block" :rules="rules" :model="data">
            <FormItem label="邮箱地址" prop="email">
                <input type="text" v-model="data.email" placeholder="请输入邮箱地址"/>
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
    export default {
        name: "Login",
        data(){
            return{
                hasError:false,
                errorMsg:'用户名或密码错误！',
                isLoading:false,
                data:{
                    email:'thornchg@163.com',
                    password:'password'
                },
                rules: {
                    required: ['email','password'],
                }
            }
        },
        methods:{
            submit(){
                let validResult = this.$refs.loginForm.valid();
                if (validResult.result) {
                    this.isLoading = true;
                    let that=this;
                    axios.post('http://192.168.101.44:8080/login', this.data)
                        .then(function (response) {
                                that.$Message.success("登陆成功");
                                that.isLoading=false;
                                that.$store.commit('loginSuccess',response.data);
                        })
                        .catch(function (error) {
                            that.hasError=true;
                            that.errorMsg="邮箱地址或密码错误！";
                            console.log(error);
                            that.isLoading=false;
                        });
                } else {
                    this.$Message.error(`还有${validResult.messages.length}个错误未通过验证。`);
                }
            },
            reset(){

            },
            close(){
                console.log("close")
                this.$emit("close");
            }
        }
    }
</script>

<style scoped>
    .loginLayout{

    }
    h2{
        margin-bottom: 20px;
        text-align: center;
    }
    .login-close{
        position: absolute;
        top: 0;
        right: 0;
        font-weight: 800;
    }
    .login-close:hover{
        background: #c43d3d;
        border-radius: 0;
        color: white;
    }
    .errorMsg{
        color: red;
    }

</style>