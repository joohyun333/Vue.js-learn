<template>
    <form v-on:submit.prevent="submitForm">
      <div>
        <label for="username">id:</label>
        <input id="username" type="text" v-model="username">
      </div>
      <div>
        <label for="password">id:</label>
        <input id="password" type="password" v-model="password">
      </div>
      <button type="submit">login</button>
    </form>
</template>

<script>
import axios from 'axios';


// 컴포넌트 간의 데이터 공유X -> data에 function을 연결
export default {
  data: function(){
    return{
      username: '',
      password: ''
    }
  },
  methods:{
    submitForm: function(){
      // event.preventDefault(); //새로고침을 막음(일반 js, jquery에서 form을 지원하는 방식)
      // vue에서는 <form v-on:submit.prevent="submirForm"></form>
      console.log(this.username, this.password);
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data={
        username: this.username,
        password: this.password
      }
      
      axios.post(url, data)
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      })
    }
  }
}
</script>

<style>

</style>