<template>
  <div id="app">
    <todo-header></todo-header>
    <!-- v-on:하위 컴포넌트 발생 이벤트 이름="현재 컴포넌트 메서드명" -->
    <todo-input v-on:addTodoItem="addOneItem"></todo-input>
    <todo-list v-bind:propsdata="todoItems"></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

// var my_cmp = {
// }

export default {
  data: function () {
    return {
      todoItems: [],
    };
  },
  methods: {
    addOneItem: function (todoItem) {
      // 체크됐는지 진위값, text값
      var obj = { completed: false, item: todoItem };
      // 저장하는 로직(text값, 자스 객체값 string으로 변환)
      // localStorage.setItem(this.newTodoItem, obj);
      // 그냥 obj 기입시 [Object object]로 저장됨(값 확인 X)
      localStorage.setItem(todoItem, JSON.stringify(obj));

      // 배열에 반영
      this.todoItems.push(obj);
    },
  },
  // 인스턴스가 생성되자마자 호출되는 라이프 사이클 훅
  created: function () {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i))),
          );
        }
      }
    }
  },
  components: {
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter,
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
