<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{say}}</h2>
    <h1>这是test页面</h1>
    <button v-on:click="convey">点击这个传数据</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your test',
      todata:'这是子组件的数据'
    }
  },
  props:['say'],
  methods:{
    convey:function(){
      //console.log(this.todata);
      this.$emit('myChild',this.todata)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
