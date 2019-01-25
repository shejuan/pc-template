import Vue from 'src/pages/base'
import { Component, Watch } from 'vue-property-decorator'
import template from './e-chart.vue'

@Component({
    name: 'eChart',
    mixins: [template],
})
export default class EChart extends Vue {
    labelPosition = 'right'
    formLabelAlign = {
        name: '',
        region: '',
        type: ''
    }
    datetime="2017-12-12"

    option = {
        title: {
            text: '堆叠区域图'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'邮件营销',
                type:'line',
                stack: '总量',
                areaStyle: {},
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'line',
                stack: '总量',
                areaStyle: {},
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'line',
                stack: '总量',
                areaStyle: {},
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'直接访问',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'搜索引擎',
                type:'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: {normal: {}},
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    }

    app = {title:'世界人口总量 - 条形图'}

    option1 = {
        title: {
            text: '世界人口总量',
            subtext: '数据来自网络'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['2011年', '2012年']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
        },
        series: [
            {
                name: '2011年',
                type: 'bar',
                data: [18203, 23489, 29034, 104970, 131744, 630230]
            },
            {
                name: '2012年',
                type: 'bar',
                data: [19325, 23438, 31000, 121594, 134141, 681807]
            }
        ]
    }
    
    drawLine() {
        let myChart = this.$echarts.init(this.$refs.lineChart)
        myChart.setOption(this.option)
        window.addEventListener('resize',function(){
            myChart.resize()
        })
    }

    drawLine1() {
        let myChart1 = this.$echarts.init(this.$refs.lineChart1)
        myChart1.setOption(this.option1)
        window.addEventListener('resize',function(){
            myChart1.resize()
        })
    }

    @Watch('option', {
        deep:true,
        immediate: true // 是否在方法声明时先执行一次
    })
    changeMsg (val) {
        console.log(val,'监听事件')
    }

    mounted() {
        this.drawLine()
        this.drawLine1()
    }
    
    
}   
