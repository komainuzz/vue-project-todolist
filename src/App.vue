<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div id="app">
    <todo todo_title="MY TODO LIST"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// モジュール名をtodoではなくTodoList
import TodoList from './components/ToDo.vue'

export default {
  name: 'App',
  components: {
   'todo': TodoList // 'todo'の部分は省略できる。省略するとモジュール名がコンポーネントを使う際のタグになる
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
