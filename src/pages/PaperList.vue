<template>
    <div class="h-panel">
        <div class="h-panel-bar">{{this.pageTitle}}</div>
        <div class="h-panel-body">

            <div class="paper-list">
                <p class="text-center text-bold" v-if="datas.length===0">暂无该类试卷！</p>
                <section class="item" v-for="paper in datas">
                    <div class="title">{{paper.title}}</div>
                    <div class="operater">
                        <Button color="green" @click="goExam(paper.id)">开始练习</Button>
                    </div>
                </section>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "PaperList",
        props: [
            'questionTypeName',
            'paperTypeName'
        ],
        data() {
            return {
                questionType:null,
                paperTypeId:null,
                pageTitle:null,
                datas:[
                    {
                        title:'2018年下半年软件设计师真题模拟考试（上午）'
                    },
                    {
                        title:'2018年下半年软件设计师真题模拟考试（下午）'
                    },
                    {
                        title:'2018年上半年软件设计师真题模拟考试（上午）'
                    },
                    {
                        title:'2018年上半年软件设计师真题模拟考试（下午）'
                    },
                ],

            }
        },
        methods: {
            resolvePage(){
                switch (this.questionTypeName) {
                    case 'choice':
                        this.questionType=1;
                        this.pageTitle='综合知识';
                        break;
                    case 'case':
                        this.questionType=2;
                        this.pageTitle='案例分析';
                        break;
                    default:this.$router.replace('/404');return;
                }
                switch (this.paperTypeName) {
                    case 'pastYears':
                        this.paperTypeId=3;
                        this.pageTitle+='历年真题';
                        break;
                    case 'simulation':
                        this.paperTypeId=2;
                        this.pageTitle+='全真模拟';
                        break;
                    case 'everyDay':
                        this.paperTypeId=1;
                        this.pageTitle+='每日一练';
                        break;
                    default:this.$router.replace('/404');return;
                }
                this.getPaperList();
            },
            getPaperList(){
                axios.get('/paper/list',{
                        params:{
                            questionType:this.questionType,
                            paperTypeId:this.paperTypeId
                        }
                    })
                    .then(response=>{
                        // console.log(response.data);
                        this.datas=response.data.records;
                    })
                    .catch(error=>{
                        console.error(error)
                    })
            },
            goExam(id){
                // this.$router.push('/exam/'+id);
                axios.post('/paper/createExamRecord',{id:id},{
                        headers: {'Content-Type': 'application/json'}
                    })
                    .then(response=>{
                        this.$router.push('/exam/'+response.data)
                        // console.log(response.data)
                    })
                    .catch(error=>{
                        console.error(error);
                        console.log(error.response)
                    })
            }
        },
        mounted() {

        },
        created() {
            this.resolvePage();
        },
        watch:{
            questionTypeName(){
                this.resolvePage();

            },
            paperTypeName(){
                // console.log("watch");
                this.resolvePage();
            }

        }
    }
</script>

<style scoped lang="less">
    .paper-list{
        font-weight: 800;
        .item{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 30px 0;
            border-bottom: 1px dashed #CCCCCC;
            .title{
                font-size: 20px;
            }
        }
    }

</style>