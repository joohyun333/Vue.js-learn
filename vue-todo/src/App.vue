<template>
  <div id="app">
    <todo-header></todo-header>
    <!-- 이벤트 emit >v-on:하위 컴포넌트 발생 이벤트 이름="현재 컴포넌트 메서드명" -->
    <todo-input v-on:addTodoItem="addOneItem"></todo-input>
    <todo-list
      v-bind:propsdata="todoItems"
      v-on:removeItem="removeOneItem"
      v-on:toggleItem="toggleOneItem"
    ></todo-list>
    <todo-footer v-on:clearAll="clearAllItems"></todo-footer>
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
    //CRUD 로직 -> 컨테이너 컴포넌트 로직의 역할 수행
    // TodoInput, TodoList,vue..etc 이런 컴포넌트는 프레젠테이션 컴포넌트
    // ┗-> 관심사의 분리, 끝단에 있는 컴포넌트들은 UI적으로 표현만 실행
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

    removeOneItem: function (todoItem, index) {
      // 키값을 넘겨줌
      localStorage.removeItem(todoItem.item);
      // array.splice(배열의 변경을 시작할 인덱스, 배열에서 제거할 요소의 수, 배열에 추가할 요소(없는 경우 요소 제거만))
      this.todoItems.splice(index, 1);
    },

    toggleOneItem: function (todoItem, index) {
      console.log(index);
      // todoItem.completed = !todoItem.completed; 컴포넌트간의 경계를 명확화하기 위해 아래 코드로
      this.todoItems[index].completed = !this.todoItems[index].completed;
      //로컬 스토리지의 데이터를 갱신(update문이 localStorage에 없으므로 없앴다가 다시 업로드해야됨.)
      // completed:true -> completed:false)
      // 특정 할일 체크, 미체크 html, localStrage에 업로드
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },

    clearAllItems: function () {
      localStorage.clear();
      this.todoItems = [];
    },
  },
  // 인스턴스가 생성되자마자 호출되는 라이프 사이클 훅(조회)
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
