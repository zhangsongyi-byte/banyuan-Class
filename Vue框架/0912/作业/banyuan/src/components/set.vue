<template>
  <div class="hello">
      <h6>这是设置</h6>
  </div>

</template>

<script>
export default {
  name: 'set',
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
    width: 80%;
    height: 30px;
    background-color: #ddd;
}
</style>
