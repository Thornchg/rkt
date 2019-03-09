<template>
    <div class="container">
        <div class="title text-center">
            <h1>全国计算机技术与软件专业技术资格（水平）考试</h1>
            <h1>{{data.paper.title}}</h1>
        </div>
        <div class="exam-result d-flex flex-space-between">
            <div class="p-4">
                得分
                <p class="score">
                    {{data.score}}
                </p>
                <p>正确率：{{parseInt((data.score/data.paper.total).toFixed(2)*100)}}%</p>
            </div>
            <div class="flew-grow p-4">
                <Row>
                    <Col width="12">
                        题目总数：
                        <p>
                            <span>{{data.paper.count}}</span>道
                        </p>
                    </Col>

                    <Col width="12">
                        规定时间：
                        <p>
                            <span>{{data.paper.time}}</span>分钟
                        </p>
                    </Col>

                </Row>
                <Row>
                    <Col width="12">
                        总分数：
                        <p>
                            <span>{{data.paper.total}}</span>分
                        </p>
                    </Col>

                    <!--<Col width="8">
                        答对数：
                        <p>
                            <span></span>道
                        </p>
                    </Col>-->
                    <!--<Col width="8">
                        合格率：
                        <p>
                        <span>60</span>%
                        </p>
                    </Col>-->
                    <Col width="12">
                        答题用时：
                        <p>
                            <span>{{usedTime}}</span>分钟
                        </p>
                    </Col>

                </Row>
            </div>
            <div class="p-4">
                答题卡
                <p class="result-sheet">
                    <a v-for="(item,index) in sheet"
                       :href="'#'+item.id"
                       :class="{right:item.result,error:!item.result}">{{index+1}}</a>
                    <!--<span class="right">1</span>-->
                    <!--<span class="right">2</span>-->
                    <!--<span class="error">3</span>-->
                    <!--{{sheet}}-->
                </p>
            </div>
        </div>
        <div class="resolve">
            <h1 class="text-center my-3">{{data.paper.title}}解析</h1>
            <div class="questions">
                <div class="question" v-for="(question,index) in data.paper.questions" :id="question.id">
                    <div class="question-index">第<span>{{index+1}}</span>题：</div>
                    <div class="question-topic" v-html="question.topic">
                    </div>
                    <div class="question-selects">
                        <div class="select"
                             v-for="(select,index) in question.selects">
                            <div class="select-index">问题{{index+1}}选项：</div>
                            <!--<Radio v-model="paper.questions[questionIndex-1].answer[index]"
                                   :datas="select" @change="exeSelect">
                                <template slot="item" slot-scope="{item}">
                                    {{item.key+'. '+item.title}}
                                </template>
                            </Radio>-->
                            <Radio value='A' v-model="select.answer" :disabled="true"
                                   :class="radioClass(select,'A')">A. {{select.choiceA}}
                            </Radio>
                            <Radio value='B' v-model="select.answer" :disabled="true"
                                   :class="radioClass(select,'B')">B. {{select.choiceB}}
                            </Radio>
                            <Radio value='C' v-model="select.answer" :disabled="true"
                                   :class="radioClass(select,'C')">C. {{select.choiceC}}
                            </Radio>
                            <Radio value='D' v-model="select.answer" :disabled="true"
                                   :class="radioClass(select,'D')">D. {{select.choiceD}}
                            </Radio>
                            <div class="select-key">正确答案：<em>{{select.key}}</em></div>
                        </div>
                    </div>
                    <div class="question-operate text-right my-3">
                        <Button text-color="green" noBorder @click="question.showResolve=!question.showResolve">
                            {{question.showResolve?'隐藏解析':'查看解析'}}
                        </Button>
                        <!--<Button icon="h-icon-star-on" noBorder text-color="gray">收藏</Button>-->
                    </div>
                    <div class="question-resolve d-flex" v-if="question.showResolve">
                        <span class="text-bold">解析：</span>
                        <div v-html="question.resolve"></div>
                    </div>
                </div>
                <!--<div class="question-change-area d-flex">
                    <Button @click="previous" :disabled="questionIndex===1">
                        <i class="fa fa-arrow-left"></i> 上一题
                    </Button>
                    <Button @click="next" :disabled="questionIndex===data.paper.questions.length">
                        下一题 <i class="fa fa-arrow-right"></i></Button>
                </div>-->
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "ExamResult",
        props: ['id'],
        data() {
            return {
                data: {
                    paper: {
                        questions: [
                            {
                                topic: '问题1的题目',
                                selects: [
                                    {
                                        choiceA: '选项A',
                                        choiceB: '选项B',
                                        choiceC: '选项C',
                                        choiceD: '选项D',
                                        key: 'B',
                                        answer: 'C'
                                    },
                                    {
                                        choiceA: '选项A',
                                        choiceB: '选项B',
                                        choiceC: '选项C',
                                        choiceD: '选项D',
                                        key: 'C',
                                        answer: 'C'
                                    }
                                ],
                                showResolve: true
                            }, {
                                topic: '问题2的题目',
                                selects: [
                                    {
                                        choiceA: '选项A',
                                        choiceB: '选项B',
                                        choiceC: '选项C',
                                        choiceD: '选项D',
                                        key: 'C',
                                        answer: 'C'
                                    },
                                    {
                                        choiceA: '选项A',
                                        choiceB: '选项B',
                                        choiceC: '选项C',
                                        choiceD: '选项D',
                                        key: 'A',
                                        answer: 'B'
                                    }
                                ],
                                showResolve: false
                            }
                        ]

                    }
                }
            }
        },
        methods: {
            radioClass(select, radioValue) {
                if (select.answer === radioValue) {
                    if (select.answer === select.key) {
                        return 'right';
                    } else {
                        return 'error';
                    }
                }
            }
        },
        created() {
            axios.get('/paper/result/' + this.id)
                .then(response => {
                    // console.log(response.data)
                    let data = response.data;
                    data.paper = JSON.parse(data.paper);
                    for (let question of data.paper.questions) {
                        question.showResolve = false;
                    }
                    this.data = data;

                })
                .catch(error => {
                    console.error(error)
                })
        },
        computed: {
            sheet() {
                let sheet = [];
                for (let question of this.data.paper.questions) {
                    for (let select of question.selects) {
                        let item = {};
                        item.id = question.id;
                        item.result = select.result === 1;
                        sheet.push(item)
                    }
                }
                return sheet;
            },
            usedTime() {
                let a = this.data.usedTime % 60 > 0 ? 1 : 0;
                let b = parseInt((this.data.usedTime / 60).toFixed());
                return a+b;
            }
        }
    }
</script>

<style scoped lang="less">
    .title {
        margin: 30px 0;
    }

    .exam-result {
        border-top: 1px dashed #CCCCCC;
        border-bottom: 1px dashed #CCCCCC;
    }

    p {
        margin: 0;

    }

    .score {
        font-weight: 800;
        font-size: 80px;
        color: red;
        line-height: 1;

    }

    .result-sheet {
        width: 400px;

        a {
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

        a.right {
            background: #1bc521;
            color: #FFFFFF;
        }

        a.error {
            background: #e5161c;
            color: #FFFFFF;
        }
    }

    .exam-result {
        div:nth-child(1) {
            min-width: 180px;
        }

        div:nth-child(2) {
            p {
                margin: 0;
            }

            span {
                color: @primary-color;
                font-size: 30px;
            }

            /deep/ .h-row:nth-child(1) {
                border-bottom: 1px dashed #CCCCCC;
            }
        }
    }

    .resolve {
        margin: 30px 0;

        .question {
            margin-bottom: 15px;
            /*border-bottom: 1px solid #CCCCCC;*/
            background: #FFFFFF;
            padding: 15px;
            border: 1px solid #dddfe2;

            .question-resolve {
                border-top: 1px dashed #CCCCCC;
                padding: 8px 0;

                /deep/ p {
                    margin: 0;
                }
            }
        }

        .question-index {
            font-weight: 800;

            span {
                color: red;
            }
        }

        .question-selects {
            padding-left: 40px;

            .select {
                margin: 15px;

                .select-key {
                    font-weight: 800;

                    em {
                        color: green;
                    }
                }
            }

            .h-radio {
                display: block;

                /deep/ &.h-radio-disabled > label {
                    color: #333333;
                }

                /*/deep/ label.h-radio-checked {
                    color: green;
                }*/
            }

            /deep/ .h-radio {
                &.error label {
                    color: red;
                }

                &.right label {
                    color: green;
                }
            }
        }
    }

</style>