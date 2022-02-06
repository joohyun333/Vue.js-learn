<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>

    <Model :show.sync="showModal">
      <!--
      you can use custom content here to overwrite
      default content(너가 재정의 할 수있어.)
    -->
      <h3 slot="header">
        경고!
        <i class="closeModelBtn fas fa-times" @click="showModal = false"></i>
      </h3>
      <div slot="body">내용을 입력하세요.</div>
      <!-- <div slot="footer">푸터</div> -->
    </Model>
  </div>
</template>

<script>
import Model from './common/Model.vue';

export default {
  data: function () {
    return {
      newTodoItem: '',
      showModal: false,
    };
  },
  methods: {
    addTodo: function () {
      //값이 있을때만
      if (this.newTodoItem !== '') {
        // emit event(이벤트 이름, 인자1, 인자2....)
        this.$emit('addTodoItem', this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput: function () {
      this.newTodoItem = '';
    },
  },
  components: {
    Model: Model,
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModelBtn {
  color: #42b983;
}
</style>
