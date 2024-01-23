<template>
  <div class="hello">
    <SeparateDom :text="value"></SeparateDom>
    <textarea v-model="value"></textarea>
    <TypingTest :text="value"></TypingTest>
  </div>
</template>

<script>
import TypingTest from './TypingTest'
import SeparateDom from './SeparateDom'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    TypingTest, SeparateDom
  },
  data(){
    return{
      value : ''
    }
  }
}
</script>

<style scoped>
</style>
