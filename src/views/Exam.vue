<template>
    <div class="container">
        <div class="exam-header">
            <h1 class="exam-title text-center">{{data.paper.title}}</h1>
            <div class="exam-meta text-center">
                <span>题型：选择题</span>
                <span>考试时间：{{data.paper.time}}分钟</span>
                <span>题数：{{data.paper.count}}</span>
                <span>总分：{{data.paper.total}}</span>

            </div>
        </div>
        <div class="d-flex flex-space-between">
            <div class="exam-left">
                <div class="h-panel">
                    <div class="h-panel-body">
                        <div class="question-index">第<span>{{questionIndex}}</span>题：</div>
                        <div class="question">
                            <div class="question-topic" v-html="data.paper.questions[questionIndex-1].topic">
                            </div>
                            <div class="question-selects">
                                <div class="select"
                                     v-for="(select,index) in data.paper.questions[questionIndex-1].selects">
                                    <div class="select-index">问题{{index+1}}选项：</div>
                                    <!--<Radio v-model="paper.questions[questionIndex-1].answer[index]"
                                           :datas="select" @change="exeSelect">
                                        <template slot="item" slot-scope="{item}">
                                            {{item.key+'. '+item.title}}
                                        </template>
                                    </Radio>-->
                                    <Radio value='A' v-model="select.answer" @change="exeSelect">A. {{select.choiceA}}</Radio>
                                    <Radio value='B' v-model="select.answer" @change="exeSelect">B. {{select.choiceB}}</Radio>
                                    <Radio value='C' v-model="select.answer" @change="exeSelect">C. {{select.choiceC}}</Radio>
                                    <Radio value='D' v-model="select.answer" @change="exeSelect">D. {{select.choiceD}}</Radio>
                                </div>
                            </div>
                            <div class="question-operate text-right my-3">
                                <Button icon="h-icon-star-on" noBorder
                                        :text-color="data.paper.questions[questionIndex-1].mark?'yellow':'gray'"
                                @click="toggleMark">
                                    {{data.paper.questions[questionIndex-1].mark?'取消标记':'标记'}}
                                </Button>
                                <!--<Button icon="h-icon-star-on" noBorder text-color="gray">收藏</Button>-->
                            </div>
                        </div>
                        <div class="question-change-area d-flex">
                            <Button @click="previous" :disabled="questionIndex===1">
                                <i class="fa fa-arrow-left"></i> 上一题
                            </Button>
                            <Button @click="next" :disabled="questionIndex===data.paper.questions.length">
                                下一题 <i class="fa fa-arrow-right"></i></Button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="exam-right">
                <div class="h-panel">
                    <!--<div class="h-panel-bar">
                        <span class="h-panel-title">标题</span>
                        <span class="h-panel-right"><a>More</a></span>
                    </div>-->
                    <div class="h-panel-body">
                        <div class="exam-time">
                            <i class="fa fa-clock-o"></i>
                            <time>{{time}}</time>
                        </div>
                        <div class="answer-sheet-label text-center">
                            答题卡
                        </div>
                        <p class="text-bold">选择题</p>
                        <div class="answer-sheet-body">
                            <div class="answer-sheet-items">
                                <span v-for="(question,index) in data.paper.questions" @click="change(index)"
                                :class="{has:question.has,mark:question.mark}">{{index+1}}</span>
                                <!--<span class="has mark">1</span>-->
                            </div>
                        </div>
                        <div class="sheet-style-mean answer-sheet-items text-bold text-right">
                            <span>1</span>未做
                            <span class="has">1</span>已做
                            <span class="mark">1</span>标记


                        </div>
                        <p><Button :block="true" size="l" color="primary" @click="submitPaper">交卷</Button></p>
                        <p><Button :block="true" size="l" color="yellow">下次再做</Button></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Exam",
        props:['id'],
        data() {
            return {
                questionIndex: 1,
                data: {
                    id:this.id,
                    usedTime: 0,
                    paper: {
                        title: '2018年下半年软件设计师真题模拟考试（上午）',
                        totle: 75,
                        count: 75,
                        time: 150,
                        questions: [
                            {
                                topic: "在输入输出控制方法中，采用（ ）可以使得设备与主存间的数据块传送无需CPU干预。",
                                selects: [
                                    {
                                        choiceA: '程序控制输入输出',
                                        choiceB: '中断',
                                        choiceC: 'DMA',
                                        choiceD: '总线控制',
                                    }
                                ],
                                answer:[],
                                mark:true,
                            }, {
                                topic: "在输入输出控制方法中，采用（ ）可以使得设备与主存间的数据块传送无需CPU干预。",
                                selects: [
                                    {
                                        choiceA: '程序控制输入输出',
                                        choiceB: '中断',
                                        choiceC: 'DMA',
                                        choiceD: '总线控制',
                                    }, {
                                        choiceA: '程序控制输入输出',
                                        choiceB: '中断',
                                        choiceC: 'DMA',
                                        choiceD: '总线控制',
                                    }
                                ],
                                answer:[],
                            },{
                                topic: "在输入输出控制方法中，采用（ ）可以使得设备与主存间的数据块传送无需CPU干预。",
                                selects: [
                                    {
                                        choiceA: '程序控制输入输出',
                                        choiceB: '中断',
                                        choiceC: 'DMA',
                                        choiceD: '总线控制',
                                    }, {
                                        choiceA: '程序控制输入输出',
                                        choiceB: '中断',
                                        choiceC: 'DMA',
                                        choiceD: '总线控制',
                                    }
                                ],
                                answer:[],
                            },{
                                topic: "在输入输出控制方法中，采用（ ）可以使得设备与主存间的数据块传送无需CPU干预。",
                                selects: [
                                    {
                                        choiceA: '程序控制输入输出',
                                        choiceB: '中断',
                                        choiceC: 'DMA',
                                        choiceD: '总线控制',
                                    }, {
                                        choiceA: '程序控制输入输出',
                                        choiceB: '中断',
                                        choiceC: 'DMA',
                                        choiceD: '总线控制',
                                    }, {
                                        choiceA: '程序控制输入输出',
                                        choiceB: '中断',
                                        choiceC: 'DMA',
                                        choiceD: '总线控制',
                                    }
                                ],
                                answer:[],
                            }
                        ]
                    }
                },
                timeScroll: true,


            }
        },
        methods: {
            previous() {
                if (this.questionIndex > 1) {
                    this.questionIndex--;
                }
            },
            next() {
                if (this.questionIndex < this.data.paper.questions.length) {
                    this.questionIndex++;
                }
            },
            timing() {
                setTimeout(() => {
                    this.data.usedTime++;
                    if (this.timeScroll)
                        this.timing();
                }, 1000);
            },
            prefixZero(num, n) {
                return (Array(n).join(0) + num).slice(-n);
            },
            change(index){
                this.questionIndex=index+1;
            },
            toggleMark(){
                let question=this.data.paper.questions[this.questionIndex-1];
                question.mark=!question.mark;
            },
            exeSelect(data){
                console.log("exeSelect")
                // console.log(this.questionIndex);
                let question=this.data.paper.questions[this.questionIndex-1];

                for (let select of question.selects){
                    console.log(select.answer);
                    if (!select.answer||select.answer===''){
                        question.has=false;
                        return;
                    }
                }
                question.has=true;


                /*let selectCount=question.selects.length;
                console.log(question.answer.length,selectCount);
                if (question.answer.length===selectCount){
                    for (let temp of question.answer){
                        if (!temp){
                            question.has=false;
                            return;
                        }
                    }
                    question.has=true;
                    return;
                }
                question.has=false;*/
            },
            getPaper(){
                if (this.id){
                    console.log(this.id);
                    axios.post('/paper/getPaperByRecord',this.id,{
                            headers: {'Content-Type': 'application/json'}
                        })
                        .then(response=>{
                            let paper=response.data;
                            paper.questions=JSON.parse(paper.questions);

                            if (paper.questionType===1){
                                for (let question of paper.questions){
                                    question.has=false;
                                    question.mark=false;
                                    // question.selects=JSON.parse(question.selects);
                                    for (let select of question.selects) {
                                        select.answer=null;
                                    }
                                }
                            }
                            this.data.paper=paper;
                        })
                        .catch(error=>{
                            console.error(error)
                        })

                } else {
                    this.$router.replace('/404');
                }
            },
            submitPaper(){
                axios.post('/paper/submitPaper',JSON.stringify(this.data),
                    {headers:{'Content-Type':'application/json'}})
                    .then(response=>{
                        console.log(response.data);
                        if (this.data.paper.questionType===1){
                            this.$router.push('/examResult/'+this.id);
                        } else {
                            this.$Message.success('成功提交答卷，请等待人工评卷！');
                            this.$router.push('/examRecord')

                        }
                    })
                    .catch(error=>{
                        console.error(error);
                    })
            }
        },
        computed: {
            time() {
                let lastTime = (this.data.paper.time*60)-this.data.usedTime;
                let minute=parseInt(lastTime/60);
                let second=lastTime-minute*60;
                return minute+':'+this.prefixZero(second,2);
            },
            ishas(){
                return function (question,index) {
                    /*console.log("sdf")
                    for(let select of question.selects){
                        if (select.answer===''||select.answer===undefined){
                            return false;
                        }
                    }
                    return true;*/
                    /*console.log("sdf")
                    let count=question.selects.length;
                    let answer=this.data.answers['answer'+(index+1)];
                    if (answer.length===count){
                        for (let i=0;i<count;i++){
                            if (answer[i]===undefined||answer[i]==='')
                                return false;
                        }
                        return true;
                    }
                    return false;*/

                }
            }
        },
        mounted() {
            this.timing();
        },
        created() {
            this.getPaper();
        }
    }
</script>

<style scoped lang="less">
    .exam-header {
        margin: 3rem 0;

        .exam-title {

        }

        .exam-meta {
            span {
                display: inline-block;

                &:first-child ~ span {
                    margin-left: 1rem;
                }
            }
        }

    }

    .exam-left {
        flex-basis: 70%;
    }

    .exam-right {
        flex-basis: 28%;
    }

    .question-index {
        font-weight: 800;
        color: #36608c;
    }

    .question-selects {
        margin: 20px 0 0 60px;

        /deep/ .h-radio {
            label{
                display: block;
            }
        }

        .select {
            margin-bottom: 15px;

            .select-index {
                font-size: 12px;
                margin-bottom: 5px;
                font-weight: 800;
                color: @red-color;
            }
            .h-radio{
                display: block;
            }
        }
    }

    .question-change-area {
        border-top: 1px solid #dddfe2;
        margin: 0 -20px -20px;

        .h-btn {
            border: 0;
            flex-grow: 1;
            border-radius: 0;
            font-size: 1rem;
            padding: 16px 0;
            font-weight: 800;

            &:not([disabled]):hover {
                background: @primary-color;
                color: white;
            }

            + .h-btn {
                margin: 0;
            }
        }
    }

    .exam-time {
        color: #888888;
        font-size: 30px;
        font-weight: 600;

        time {
            display: inline-block;
            margin-left: 10px;
        }
    }
    .answer-sheet-label{
        margin: 0 -20px;
        background: #DDDDDD;
        font-size: 18px;
        font-weight: 800;
        padding: 8px 0;
    }
    .answer-sheet-body{
        margin-bottom: 40px;
    }
    .answer-sheet-items{
        span{
            display: inline-block;
            position: relative;
            padding: 3px 5px;
            font-weight: 500;
            color: #666666;
            line-height: 1;
            border: 1px solid #CCCCCC;
            margin-right: 6px;
            margin-bottom: 6px;
            cursor: pointer;

        }
        span.has{
            background: #CCCCCC;
        }
        span.mark:before{
            content: '';
            position: absolute;
            top:0;
            left: 0;
            display: block;
            width: 0;
            height: 0;
            border: 5px solid #e5a14e;
            border-right-color: transparent;
            border-bottom-color: transparent;
        }
    }
    .sheet-style-mean{
        span{
            margin-left: 5px;
        }
    }

</style>