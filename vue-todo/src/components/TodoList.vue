<template>
  <div>
    <!-- name은 css 클래스(Transition class)와 관련이 있음 -->
    <transition-group name="list" tag="ul">
      <li
        v-for="(todoItem, index) in this.storedTodoItems"
        v-bind:key="todoItem.item"
        class="shadow"
      >
        <i
          class="fas fa-check checkBtn"
          v-bind:class="{ checkBtnCompleted: todoItem.completed }"
          v-on:click="toggleComplete({ todoItem, index })"
        ></i>
        <span v-bind:class="{ textCompleted: todoItem.completed }">
          {{ todoItem.item }}
        </span>
        <span class="removeBtn" v-on:click="removeTodo({ todoItem, index })">
          <i class="fas fa-trash"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  // props: ['propsdata'], v-for="(todoItem, index) in this.$store.state.todoItems로 변경되면서 삭제
  methods: {
    // removeTodo(todoItem, index) {
    // this.$emit('removeItem', todoItem, index);
    // this.$store.commit('removeOneItem', { todoItem, index });
    // },
    // toggleComplete(todoItem, index) {
    //   // this.$emit('toggleItem', todoItem, index);
    //   this.$store.commit('toggleOneItem', { todoItem, index });
    // },
    ...mapMutations({
      // map helper 함수는 함묵적으로 인자를 넘김
      // 실질적으로는 removeOneItem(todoItem, index) -> 단 인자 갯수는 맞춰야됨.
      // removeTodo(todoItem, index) => removeTodo({ todoItem, index })
      removeTodo: 'removeOneItem',
      toggleComplete: 'toggleOneItem',
    }),
  },
  computed: {
    // todoItems() {
    //   return this.$store.getters.storedTodoItems;
    // },

    // 배열로 하는 경우
    ...mapGetters(['storedTodoItems']),

    // 객체로 주입하는 경우
    // ...mapGetters({
    //   todoItems: 'storedTodoItems',
    // }),
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

/* 리스트 아이템 트렌지션 효과 */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
