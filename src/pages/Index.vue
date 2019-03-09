<template>
    <Row :space="10">
        <Col width="16">
            <div class="welcome my-3">
                <p class="welcome-label text-center my-2">欢迎来到软考通</p>
                <p class="text-bold text-center  my-1">您的目标科目是 中级 <span class="primary-color">软件设计师</span>，赶快去练习吧！</p>
            </div>
            <div class="h-panel">
                <div class="h-panel-bar">
                    科目知识点范围
                </div>
                <div class="h-panel-body">
                    <div class="level">
                        <label class="level-label text-bold">高级</label>
                        <p>
                            <a href="https://www.educity.cn/rk/1865416.html" target="_blank">系统分析师</a>
                            <a href="https://www.educity.cn/rk/1869932.html" target="_blank">信息系统项目管理师</a>
                            <a href="#" target="_blank">网络规划设计师</a>
                            <a href="#" target="_blank">系统架构设计师</a>
                            <a href="#" target="_blank">系统规划与管理师</a>
                        </p>
                    </div>
                    <div class="level">
                        <label class="level-label text-bold">中级</label>
                        <p>
                            <a href="https://www.educity.cn/rk/1869878.html" target="_blank">软件设计师</a>
                            <a href="#" target="_blank">网络工程师</a>
                            <a href="#" target="_blank">系统集成项目管理工程师</a>
                            <a href="#" target="_blank">信息系统监理师</a>
                            <a href="#" target="_blank">信息系统管理工程师</a>
                            <a href="#" target="_blank">电子商务设计师</a>
                            <a href="#" target="_blank">软件评测师</a>
                            <a href="#" target="_blank">信息安全工程师</a>
                            <a href="#" target="_blank">数据库系统工程师</a>
                            <a href="#" target="_blank">嵌入式系统设计师</a>
                        </p>
                    </div>
                    <div class="level">
                        <label class="level-label text-bold">初级</label>
                        <p>
                            <a href="#" target="_blank">信息管理员</a>
                            <a href="#" target="_blank">程序员</a>
                            <a href="#" target="_blank">信息处理技术员</a>
                            <a href="#" target="_blank">信息系统运行管理员</a>
                        </p>
                    </div>
                </div>
            </div>

        </Col>
        <Col width="8">
            <div class="h-panel remain-day">
                <div class="h-panel-body">
                    <p>距离
                        <time>{{examDateLocal}}</time>
                        考试还有
                    </p>
                    <p class="day-count">
                        <span v-for="i in remainDay.toString()">{{i}}</span>
                        <span>天</span>
                    </p>
                </div>
            </div>
        </Col>

    </Row>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                examDate: new Date(),
            }
        },
        methods: {
            setExamDate() {
                var now = new Date();
                var date = new Date();
                let month = 0;
                if (now.getMonth() < 4 || now.getMonth() === 11) {
                    month = 4;
                } else if (now.getMonth() > 4 && now.getMonth() < 10) {
                    month = 10;
                } else {
                    month = now.getMonth();
                }
                date.setFullYear(now.getFullYear(), month, 1);
                date.setDate(7 - date.getDay() + ((month === 4) ? 3 : 2) * 7);
                this.examDate = date;
            },
            datedifference(sDate1, sDate2) {    //sDate1和sDate2是2006-12-18格式
                let dateSpan,iDays;
                sDate1 = Date.parse(sDate1);
                sDate2 = Date.parse(sDate2);
                dateSpan = sDate2 - sDate1;
                dateSpan = Math.abs(dateSpan);
                iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
                return iDays
            }
        },
        computed: {
            remainDay() {
                return this.datedifference(new Date(),this.examDate);
            },
            examDateLocal(){
                return this.examDate.getFullYear()+'-'+(this.examDate.getMonth()+1)+'-'+this.examDate.getDate();
                // `${examDate.getFullYear()}-${examDate.getMonth()+1}-${examDate.getDate()}`
                // return this.examDate;
            }
        },
        mounted() {
            this.setExamDate();

        }
    }
</script>

<style scoped lang="less">
    .remain-day {
        p {
            text-align: center;
            font-weight: 800;
            font-size: 18px;
            margin: 8px 0;

            time {
                color: #c44a4a;
            }

        }

        .day-count {
            font-size: 20px;

            span {
                background: @primary-color;
                text-align: center;
                width: 30px;
                border-radius: 5px;
                color: #FFFFFF;
                display: inline-block;
                margin: 0 5px;
            }

        }
    }

    .welcome {
        .welcome-label {
            font-size: 24px;
            font-weight: 800;
        }
    }

    .level {
        border-bottom: 1px solid #dddfe2;
        margin-bottom: 15px;

        .level-label {
            color: #616770;
        }

        a {
            font-weight: 800;
            display: inline-block;
            margin-right: 10px;
        }
    }

</style>