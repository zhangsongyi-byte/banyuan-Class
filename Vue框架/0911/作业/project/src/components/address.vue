<template>
  <div>
    <Header @list="getlist"></Header>
    <div class="all-count">{{ count }}位练习人</div>
    <div class="content-container" v-for="(item, index) in list" :key="'l' + index">
      <Content :item="item" :index="index" @remove="remove"></Content>
    </div>
  </div>
</template>

<script>
import Header from "./header";
import Content from "./content";

export default {
  name: "Address",
  data() {
    return {
      list: []
    };
  },
  components: {
    Header,
    Content
  },
  methods: {
    getlist(data) {
      this.list = data;
    },
    remove(data) {
        /* splice函数参数，第一位表示从几开始，第二位参数表示到哪一位结束 */
      this.list.splice(data, 1);
    }
  },
  computed: {
    count: function() {
      return this.list.length;
    }
  }
};
</script>

<style>
.all-count {
  width: 100%;
  height: 30px;
  background-color: #f3f3f3;
  line-height: 30px;
  font-size: 14px;
  color: #666;
  padding: 0 10px;
}
</style>
