<template>
    <div class="h-panel">
        <div class="h-panel-bar">综合知识试卷练习记录</div>
        <div class="h-panel-body">

            <div class="paper-list">
                <p class="text-center text-bold" v-if="records.length===0">暂无该类试卷！</p>
                <section class="item" v-for="record in records">
                    <div class="title">{{record.paper.title}}</div>
                    <div class="operater">
                        <Button :color="getBtnColor(record.status)" @click="btnClick(record)" :disabled="records===1">
                            {{getStatus(record.status)}}
                        </Button>
                    </div>
                </section>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ExamRecord",
        props: [
            'questionTypeName'
        ],
        data() {
            return {
                questionType:null,
                records:[
                    {
                        paper:{
                            title:'asd'
                        }
                    }
                ],

            }
        },
        methods: {
            getRecordList(){
                switch (this.questionTypeName) {
                    case 'choice':
                        this.questionType=1;
                        break;
                    case 'case':
                        this.questionType=2;
                        break;
                    default:this.$router.replace('/404');return;
                }
                axios.get('/paper/record/list',{
                        params:{
                            questionType:this.questionType
                        }
                    })
                    .then(response=>{
                        // console.log(response.data);
                        let datas=response.data;
                        for (let record of datas){
                            console.log("asdf");
                            record.paper=JSON.parse(record.paper);
                        }
                        this.records=datas;

                    })
                    .catch(error=>{
                        console.error(error)
                    })
            },
            getStatus(status){
                if (!status||status===0){
                    return '继续考试'
                }else if (status===1){
                    return '等待评卷'
                } else {
                    return '查看结果'
                }
            },
            getBtnColor(status){
                if (!status||status===0){
                    return 'yellow'
                }else if (status===1){
                    return ''
                } else {
                    return 'green'
                }
            },
            btnClick(record){
                if (record.status===2){
                    this.$router.push('/examResult/'+record.id);
                }else if (record.status===0){
                    this.$router.push('/exam/'+record.id)
                }

            }
        },
        mounted() {
            this.getRecordList();
        },
        created() {

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