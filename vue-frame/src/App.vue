<template>
  <div id="app">
    <div class="content-wrap" ref="main">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-family:"微软雅黑";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 1600px;
    background: #EFF2F6;
  }
</style>
