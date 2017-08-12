<template>
  <div class="hello">
    <h2><a v-on:click="goPage">点击我进行切换</a></h2>
    <p style="color:green">{{todataa}}</p>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Bus from '../bus'
export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎来到news页面',
      todataa:''
    }
  },
  methods:{
    goPage:function(){
      this.$router.push('/')
    }
  },
  components:{
    Bus
  },
  //接收apart页面传来的数据
  created:function(){
    var _self = this; 
    Bus.$on('todataa',function(data){
      _self.todataa=data;
      console.log(_self.tadataa)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a{color:red;}
</style>
