<template>
  <div class="about">
    <h1>{{$store.state.count}}</h1>
    <h1>双倍的{{$store.getters.doubleCount}}</h1>
    <h1>显示都是true的{{$store.getters.finishList}}</h1>
  </div>
</template>
