<template>
  <div class="hello">
    <h1><a v-on:click="goPage">点击我进行切换,并且点击我向news.vue传递数据</a></h1>
    <h1>这是apart页面的内容</h1>
  </div>
</template>

<script>
import Bus from '../bus'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your test'
    }
  },
  methods:{
    goPage:function(){
      console.log(Bus);
      this.$router.push('/news')
    }
  },
  //向news页面传数据
  destroyed() {
    Bus.$emit('todataa','这是apart传过来的数据'); // 使用$emit方法创建一个键值对
    },
  components:{
    Bus
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a{coloor:red;}

</style>
