<template>
  <div id="app">
    <header>
      <div class="row">
        <div class="logo col s2">
          <img src="./assets/logo.png">
        </div>
        <div class="col s10">
          <h4 class="text-left">
            Testes Automatizados em Front-end
          </h4>
        </div>
    </div>
    </header>
    <router-view/>
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo {
    width: 120px;
    height: 60px;
    text-align: center;
}
.logo img{
    max-width: 100%;
    max-height: 100%;
}
header {
  text-align: left;
    text-align: left;
    padding-top: 20px;
    border-bottom: solid 1px #dedede;
}
header h4{
  margin: 0;
  line-height: 67px;
}
</style>
