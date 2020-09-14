<template>
    <div class="hello">
        <h6>消息列表</h6>
        <table>
            <thead>
                <th>内容</th>
                <th>发布者</th>
                <th>日期</th>
            </thead>
        </table>
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

.info-header{
    width: 100%;
    height: 50px;
    background-color: #ddd;

}
</style>
