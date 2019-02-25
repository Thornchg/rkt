<template>
    <div class="container">
        <div class="exam-header">
            <h1 class="exam-title text-center">2018年下半年软件设计师真题模拟考试（上午）</h1>
            <div class="exam-meta text-center">
                <span>题型：选择题</span>
                <span>考试时间：150分钟</span>
                <span>题数：75</span>
                <span>总分：75</span>

            </div>
        </div>
        <div class="d-flex flex-space-between">
            <div class="exam-left">
                <div class="h-panel">
                    <div class="h-panel-body">
                        <div class="question-index">第<span>{{questionIndex}}</span>题：</div>
                        <div class="question">
                            <div class="question-topic">
                                {{paper.questions[questionIndex-1].topic}}
                            </div>
                            <div class="question-selects">

                                <div class="select"
                                     v-for="(select,index) in paper.questions[questionIndex-1].selects">
                                    <div class="select-index">问题{{index+1}}选项：</div>
                                    <Radio v-model="paper.questions[questionIndex-1].answer[index]"
                                           :datas="select" @change="exeSelect">
                                        <template slot="item" slot-scope="{item}">
                                            {{item.key+'. '+item.title}}
                                        </template>
                                    </Radio>

                                </div>
                            </div>
                        </div>
                        <div class="question-change-area d-flex">
                            <Button @click="previous" :disabled="questionIndex===1">
                                <i class="fa fa-arrow-left"></i> 上一题
                            </Button>
                            <Button @click="next" :disabled="questionIndex===paper.questions.length">
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
                                <span v-for="(question,index) in paper.questions" @click="change(index)"
                                :class="{has:question.has,mark:question.mark}">{{index+1}}</span>
                                <!--<span class="has mark">1</span>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Exam",
        data() {
            return {
                questionIndex: 1,
                data: {
                },
                timeScroll: true,
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
                                    A: '程序控制输入输出',
                                    B: '中断',
                                    C: 'DMA',
                                    D: '总线控制',
                                }
                            ],
                            answer:[],
                            mark:true,
                        }, {
                            topic: "在输入输出控制方法中，采用（ ）可以使得设备与主存间的数据块传送无需CPU干预。",
                            selects: [
                                {
                                    A: '程序控制输入输出',
                                    B: '中断',
                                    C: 'DMA',
                                    D: '总线控制',
                                }, {
                                    A: '程序控制输入输出',
                                    B: '中断',
                                    C: 'DMA',
                                    D: '总线控制',
                                }
                            ],
                            answer:[],
                        },{
                            topic: "在输入输出控制方法中，采用（ ）可以使得设备与主存间的数据块传送无需CPU干预。",
                            selects: [
                                {
                                    A: '程序控制输入输出',
                                    B: '中断',
                                    C: 'DMA',
                                    D: '总线控制',
                                }, {
                                    A: '程序控制输入输出',
                                    B: '中断',
                                    C: 'DMA',
                                    D: '总线控制',
                                }
                            ],
                            answer:[],
                        },{
                            topic: "在输入输出控制方法中，采用（ ）可以使得设备与主存间的数据块传送无需CPU干预。",
                            selects: [
                                {
                                    A: '程序控制输入输出',
                                    B: '中断',
                                    C: 'DMA',
                                    D: '总线控制',
                                }, {
                                    A: '程序控制输入输出',
                                    B: '中断',
                                    C: 'DMA',
                                    D: '总线控制',
                                }, {
                                    A: '程序控制输入输出',
                                    B: '中断',
                                    C: 'DMA',
                                    D: '总线控制',
                                }
                            ],
                            answer:[],
                        }
                    ]
                }
            }
        },
        methods: {
            previous() {
                if (this.questionIndex > 1) {
                    this.questionIndex--;
                }
            },
            next() {
                if (this.questionIndex < this.paper.questions.length) {
                    this.questionIndex++;
                }
            },
            timing() {
                setTimeout(() => {
                    this.usedTime++;
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
            exeSelect(data){
                // console.log(this.questionIndex);
                let question=this.paper.questions[this.questionIndex-1];
                let selectCount=question.selects.length;
                // console.log(question.answer.length,selectCount);
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
                question.has=false;


            }
        },
        computed: {
            time() {
                let lastTime = (this.paper.time*60)-this.usedTime;
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
            display: block;
        }

        .select {
            margin-bottom: 15px;

            .select-index {
                font-size: 12px;
                margin-bottom: 5px;
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

</style>