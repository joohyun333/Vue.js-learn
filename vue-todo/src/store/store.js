import Vue from 'vue';
import Vuex from 'vuex';

// use는 vue의 플러그인 기능(global functionality 추가)
Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

// store라는 변수는 밖에서 사용이 가능
export const store = new Vuex.Store({
  state: {
    headerText: 'TODO it!',
    todoItems: storage.fetch(),
  },
  getters: {
    storedTodoItems(state) {
      return state.todoItems;
    },
  },
  mutations: {
    addOneItem(state, todoItem) {
      // 체크됐는지 진위값, text값
      const obj = { completed: false, item: todoItem };
      // // 저장하는 로직(text값, 자스 객체값 string으로 변환)
      // // 그냥 obj 기입시 [Object object]로 저장됨(값 확인 X)
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
      console.log('received');
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.todoItem.item);
      // array.splice(배열의 변경을 시작할 인덱스, 배열에서 제거할 요소의 수, 배열에 추가할 요소(없는 경우 요소 제거만))
      state.todoItems.splice(payload.index, 1);
    },

    toggleOneItem(state, payload) {
      state.todoItems[payload.index].completed =
        !state.todoItems[payload.index].completed;
      //로컬 스토리지의 데이터를 갱신(update문이 localStorage에 없으므로 없앴다가 다시 업로드해야됨.)
      // completed:true -> completed:false)
      // 특정 할일 체크, 미체크 html, localStrage에 업로드
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(
        payload.todoItem.item,
        JSON.stringify(payload.todoItem),
      );
    },

    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = [];
    },
  },
});
