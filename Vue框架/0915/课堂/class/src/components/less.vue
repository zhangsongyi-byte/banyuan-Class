<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1 class="hhh1">{{ msg }}</h1>
    <p class="ppp">
      For a guide and recipes on how to configure / customize this project,
      <br />check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener" class="a1">
        vue-cli documentation
        <span>123456</span>
      </a>.
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
        class="a2"
      >vue-cli documentation</a>.
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
        class="a3"
      >vue-cli documentation</a>.
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
        class="a4"
      >vue-cli documentation</a>.
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
        class="a5"
      >vue-cli documentation</a>.
    </p>

    <div class="box">
      <h2>Title</h2>
      <div class="info1">
        <input type="text" />
        <p>input</p>
        <p class="font"></p>
      </div>
      <div class="info2">
        <img src="../assets/logo.png" alt />
      </div>
    </div>

    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
        >babel</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
        >eslint</a>
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a>
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a>
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
        >vue-devtools</a>
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a>
      </li>
    </ul>

<!-- 淘宝头部搜索框 -->
    <div class="search-center">
            <div class="search-up">
                <div class="search-up-selected" style="background-color: coral; color: white;">宝贝</div>
                <div class="search-up-selected">天猫</div>
                <div class="search-up-selected">店铺</div>
            </div>
            <div class="search-middle">
                <img src="./img/fdj.png" alt="" class="fdj-img">
                <input type="text" class="search-input" placeholder="亚瑟士amani405">
                <button class="search-button">搜索</button>
                <img src="./img/camera.png" alt="" class="camera-img">
            </div>
            <div class="search-down">
                连衣裙&nbsp;连体裤&nbsp;<span
                    style="color: tomato;">超短裙&nbsp;</span>大风衣&nbsp;打底裤&nbsp;丝袜&nbsp;老爹鞋&nbsp;眼影盘&nbsp;口红&nbsp;眼镜&nbsp;保温杯&nbsp;粉底液&nbsp;床上四件套&nbsp;手机&nbsp;手链&nbsp;电脑&nbsp;平板
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: "less",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import url('../style/style1.less');
</style>

