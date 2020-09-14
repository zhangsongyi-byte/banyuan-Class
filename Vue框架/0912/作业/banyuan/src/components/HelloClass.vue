<template>
  <div class="hello">
    <h6>我的课程</h6>
    <div class="item">
        <h2>前端基础</h2>
        <p data-v-2e48ced7="">针对0基础学员，专业设计的基础课程，本阶段主要针对页面的绘制部分，为之后的学习打下夯实的基础。</p>
    </div>
    <h6>我的课程</h6>
    <div class="item">
        <h2>前端基础</h2>
        <p data-v-2e48ced7="">针对0基础学员，专业设计的基础课程，本阶段主要针对页面的绘制部分，为之后的学习打下夯实的基础。</p>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h6{
    font-size: 20px;
    font-weight: 400;
    color: #707070;
    line-height: 28px;
}
.item{
    box-shadow: 4px 2px 4px rgba(212,210,210,.27);
    width: 80%;
    height: 80px;
    padding: 20px 40px 40px 44px;
    border: 1px solid #e4e4e4;
}
</style>
