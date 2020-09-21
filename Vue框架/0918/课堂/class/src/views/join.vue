<template>
    <div>
        <h1>加入我们</h1>
        <el-input
            placeholder="请输入内容"
            v-model="input"
            clearable>
        </el-input>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary" @click="dialogFormVisible = true">添加<i class="el-icon-upload el-icon--right"></i></el-button>

            <el-dialog title="添加信息" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="输入ID" :label-width="formLabelWidth">
                <el-input v-model="form.id" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="课程分类" :label-width="formLabelWidth">
                <el-select v-model="form.课程分类" placeholder="请选择专业">
                    <el-option label="第一专业" value="第一专业"></el-option>
                    <el-option label="第二专业" value="第二专业"></el-option>
                    <el-option label="第三专业" value="第三专业"></el-option>
                    <el-option label="第四专业" value="第四专业"></el-option>
                    <el-option label="第五专业" value="第五专业"></el-option>
                </el-select>
                </el-form-item>
                <el-form-item label="课程名称" :label-width="formLabelWidth">
                <el-select v-model="form.课程名称" placeholder="请选择课程名称">
                    <el-option label="Java" value="Java"></el-option>
                    <el-option label="js" value="js"></el-option>
                    <el-option label="ES6" value="ES6"></el-option>
                    <el-option label="web" value="web"></el-option>
                    <el-option label="vue" value="vue"></el-option>
                </el-select>
                </el-form-item>
                <el-form-item label="输入简介" :label-width="formLabelWidth">
                <el-input v-model="form.课程简介" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="add">确 定</el-button>
            </div>
            </el-dialog>

        <template>
            <el-table :data="tableData" style="width: 100%" max-height="500px">
                <el-table-column fixed prop="id" label="id" width="286">
                </el-table-column>
                <el-table-column fixed prop="课程分类" label="课程分类" width="286">
                </el-table-column>
                <el-table-column fixed prop="课程名称" label="课程名称" width="286">
                </el-table-column>
                <el-table-column fixed prop="课程简介" label="课程简介" width="286">
                </el-table-column>
            <el-table-column fixed="right" label="操作" width="286">
                <template slot-scope="scope">
                    <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="danger" size="mini">
                        删除
                    </el-button>
                </template>
                </el-table-column>
            </el-table>
        </template>
    </div>
</template>

<script>
export default {
    name:'join',
    methods: {
        deleteRow(index, rows) {
            rows.splice(index, 1);
    },
    add(){
        this.dialogFormVisible=false
        console.log(this.tableData)
        console.log(this.form)
        this.tableData.push(this.form)
    }
    },
    data() {
        return {
            input: '',
            dialogFormVisible: false,
            form: {
                id: '',
                '课程分类': '',
                '课程名称': '',
                '课程简介': ''
        },
            formLabelWidth: '120px',
            tableData: [
                {
            id: 1,
            '课程分类': '第一专业',
            '课程名称': 'web',
            '课程简介': '简介1'
            }, 
            {
            id: 2,
            '课程分类': '第五专业',
            '课程名称': 'Vue',
            '课程简介': '简介4'
            }, 
            {
            id: 3,
            '课程分类': '第四专业',
            '课程名称': 'ES6',
            '课程简介': '简介5'
            }, 
            {
            id: 4,
            '课程分类': '第三专业',
            '课程名称': 'js',
            '课程简介': '简介3'
        }, {
            id: 5,
            '课程分类': '第二专业',
            '课程名称': 'Java',
            '课程简介': '简介2'
        }]
    }
},

}
</script>

<style lang="scss">
    
</style>