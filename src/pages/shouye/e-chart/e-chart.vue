<template>
    <div id="eChart" class="flex-column">
        
        <div class="common-box">
            <div class="common-item">
                <el-radio-group v-model="labelPosition" size="small">
                <el-radio-button label="left">左对齐</el-radio-button>
                <el-radio-button label="right">右对齐</el-radio-button>
                <el-radio-button label="top">顶部对齐</el-radio-button>
                </el-radio-group>
                <div style="margin: 20px;"></div>
                <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-form-item label="名称">
                    <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-input v-model="formLabelAlign.region"></el-input>
                </el-form-item>
                <el-form-item label="活动形式">
                    <el-input v-model="formLabelAlign.type"></el-input>
                </el-form-item>
                </el-form>
            </div>
            <div class="common-item">
                <el-radio-group v-model="labelPosition" size="small">
                <el-radio-button label="left">左对齐</el-radio-button>
                <el-radio-button label="right">右对齐</el-radio-button>
                <el-radio-button label="top">顶部对齐</el-radio-button>
                </el-radio-group>
                <div style="margin: 20px;"></div>
                <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-form-item label="名称">
                    <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-input v-model="formLabelAlign.region"></el-input>
                </el-form-item>
                <el-form-item label="活动形式">
                    <el-input v-model="formLabelAlign.type"></el-input>
                </el-form-item>
                </el-form>
            </div>
        </div>


        <div class="common-box">
            <div class="common-item">
                <div class="date-class">时间日期：{{datetime}}</div>
                <div ref="lineChart" class="echart-class"></div>
            </div>
            <div class="common-item">
                <div class="date-class">{{app.title}}</div>
                <div ref="lineChart1" class="echart-class"></div>
            </div>
        </div>
    </div>
</template>
<style src="./e-chart.scss" lang="scss" scoped></style>
