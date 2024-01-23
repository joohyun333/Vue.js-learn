<template>
  <div>
    <div>this is real content</div>
    <div id="typing-container" v-html="typedText">

    </div>
  </div>
</template>

<script>
export default {
  name: "TypingTest",
  data(){
    return{
      typedText: "",
      typingSpeed: 50,
    }
  },
  props: {
    text: String,
  },
  mounted() {
    this.typeText();
  },
  watch:{
    text(){
      this.typedText = ''
      this.typeText();
    }
  },
  methods:{
    typeText() {
      let index = 0;

      const type = () => {
        this.typedText += this.text[index];
        index++;

        if (index < this.text.length) {
          setTimeout(type, this.typingSpeed);
        }
      };

      type();
    },
  }
}
</script>

<style scoped>
#typing-container {
  font-family: 'Courier New', Courier, monospace;
  font-size: 18px;
  white-space: pre-wrap;
  overflow: hidden;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 20px;
  max-width: 600px;
}
</style>