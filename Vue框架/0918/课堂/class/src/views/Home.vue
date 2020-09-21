<template>
  <div class="home">
    <el-button :plain="true" @click="open2">成功</el-button>
    <el-button :plain="true" @click="open3">警告</el-button>
    <el-button :plain="true" @click="open1">消息</el-button>
    <el-button :plain="true" @click="open4">错误</el-button>
    <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

    <el-dialog title="公司简介" :visible.sync="dialogTableVisible">
  <div>
    <h1>半圆学社</h1>
    <h3>描述</h3>
  </div>
</el-dialog>
<div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期" @change="changeValue">
    </el-date-picker>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Moment from 'moment'
export default {
  name: "Home",
  data() {
    return {
      dialogTableVisible: false,
      value1: '',
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    open1() {
        this.$message('这是一条消息提示');
      },
      open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('错了哦，这是一条错误消息');
      },
      changeValue(value){
        console.log('e',Moment(value).format('YYYY-MM-DD'))
    }
  },
};
</script>

<style lang="scss">

  
  
</style>
