<template>
    <div id="myElement">
      <p></p>
    </div>
</template>

<script>
export default {
  name: "SeparateDom",
  props: {
    text: String,
    separatedText : []
  },
  watch:{
    text(){
      this.separate()
    }
  },
  methods:{
    separate: function (){
      // DOM에서 특정 ID를 가진 요소를 선택
      let imageElement = document.getElementById('myImage');
      let elements = imageElement.tagName.toLowerCase()
      if (elements === 'img'){
        
      }else if (elements === 'p'){

      }else if (elements === 'a') {

      }
    }
  }
}
</script>

<style scoped>

</style>