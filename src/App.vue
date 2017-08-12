<template>
  <div id="app">
    <router-view></router-view>
	<!--父传子是使用props属性-->

    <Test say="hello" v-on:myChild="toFatherSay"></Test>  <!--子传父-->
    <p style="color:red;">这是从子组件传过来的数据：{{nosay}}</p>
    <!--使用$emit将子组件的数据传到父组件上来，自定义事件，父组件这边自定义一个事件，例如my-Child，底下方法获取数据，子组件触发一个点击事件，第二个参数设置为子组件传过来的数据，使用$emit()函数触发my-Child事件，从而父组件就获取数据了-->

    <!--组件间的通信，eventBus,创建一个空的vue实例，bus.js，非父子组件即为apart.vue  news.vue-->

    <!--使用vuex通信，在store里面定义了state，子组件可以通过this.$store.state.xxx访问-->
    <button @click="changeDagger">点击进行vuex通信</button>
    <Dagger></Dagger>

    <ul>
      <li v-for="todo in todosComputed">{{todo.text}}</li>
    </ul>

    <p>这是之前的{{message1}}</p>
    <p>计算后的{{sortmessage}}</p>
    <p>{{now}}</p>
    <p>method方式{{reversemessage()}}</p>
     <p>firstName:<input v-model="firstName"></p>
    <p>lastName:<input v-model="lastName"></p>
    <p>fullName:{{fullName}}</p>
    <p>sum:<input v-model="sum"></p>
    <div id="watch-example">
      ask a question<input v-model="question">
      <p>{{answer}}</p>
    </div>
    <p v-bind:class="{active:isActive,'text-danger':hasError}" v-on:click="toggleclass">这是添加样式</p>
    <p v-bind:class="classObject">使用对象添加样式</p>
    <p v-bind:class="classObject2">绑定返回对象的计算属性</p>
    <p v-bind:class="[activeclass,dangerclass]">数组语法传递class</p>
    <p id="p1" v-if="type=='B'">Yes</p>
    <p v-else>No</p>
    <p v-if="loginType==true">name:<input type="text" placeholder="请输入姓名"></p>
    <p v-else>email:<input type="email" placeholder="请输入邮箱"></p>
    <button v-on:click="nechang">姓名和邮箱切换</button>
    <p v-show="showw">这是一段文字</p>
    <ul>
      <li v-for="item in items">
        <p>{{item}}</p>
        <p>{{item.name}}</p>
      </li>
    </ul>
    <ul>
      <li v-for="(item,i) in items" v-bind:key="item.id">
        <p>{{item.age}}</p>
        <p>{{i}}</p>
      </li>
    </ul>
    <ul>
      <li v-for="obj in object">
        {{obj}}
      </li>
    </ul>
    <ul>
      <li v-for="(value,key) in object">
        {{value}}{{key}}
      </li>
    </ul>
    <ul>
      <li v-for="(value,key,i) in object">
        {{value}}{{key}}{{i}}
      </li>
    </ul>
    <ul>
      <li v-for="n in 10">
        {{n}}
      </li>
    </ul>
    <button @click="arrchange">数组操作方法</button>
    <ul>
      <li v-for="num in newnum">
        {{num}}
      </li>
    </ul>
    <ul>
      <li v-for="num2 in even(number)">
        {{num2}}
      </li>
    </ul>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Test from './components/test'
import Dagger from './components/dagger'

export default {
  name: 'app',
  data(){
    return{
      message1:"hello",
      firstName:"A",
      lastName:"B",
      fullName:"AB",
      question:"",
      answer:"",
      isActive:true,
      hasError:false,
      classObject:{
        active:true,
        'text-danger':false
      },
      activeclass:'active',
      dangerclass:"text-danger",
      type:"A",
      loginType:true,
      showw:true,
      items:[
        {"id":1,"name":"zz","age":20},
        {"id":2,"name":"xx","age":22}
      ],
      object:{
        "name":"1",
        "age":20,
      },
      array:["a","b","c"],
      number:[1,2,3,4,5,6,7,8,9,10],
      nosay:''

    }
  },
  watch:{
    firstName:function(val){
      this.fullName=val+" "+this.lastName
    },
    lastName:function(val){
      this.fullName=this.firstName+" "+val
    },
    question:function(newQuestion){
      this.answer="Waiting for you to stop typing..."
      this.getAnswer()
    }
  },
  computed:{
    sortmessage:function(){
      return this.message1.split("").sort().join("")
    },
    now:function(){
      return Date()+'------'+Date.now()
    },
    sum:{
      get:function(){
          return this.firstName+" "+this.lastName
      },
      set:function(newValue){
        var names=newValue.split("")
        this.firstName=names[0]
        this.lastName=names[names.length-1]
      }
    },
    classObject2:function(){
      return {
        active:this.isActive,
        "text-danger":this.hasError
      }
    },
    newnum:function(){
        return this.number.filter(function(num1){
          return num1 % 2===0
        })
      },
    todosComputed:function(){
      return this.$store.getters.doneTodos;
    }
    
  },
  methods:{
    reversemessage:function(){
      return this.message1.split("").reverse().join("")
    },
    getAnswer:function(){
          if(this.question.indexOf('?')===-1){
            this.answer="Question usual contain a '?'"
            return
          }
          this.answer="thinking..."
        },
    toggleclass:function(){
      this.isActive=!this.isActive
    },
    nechang:function(){
        this.loginType=!this.loginType
        console.log(this.loginType)
        this.showw=!this.showw
    },
    arrchange:function(){
      /*this.array.push('d')*/
      this.newarr=this.array.concat('d')
      console.log(this.newarr)
      this.items.push('{"id":3,"name":"cc","age":23}')
    },
    even:function(numbers){
      return numbers.filter(function(num){
          return num % 2==0
      })
    },
    //从子组件中获取数据
    toFatherSay:function(todata){
      this.nosay=todata
    },
    //使用vuex
    changeDagger:function(){
        console.log(this.$store.getters.doneTodos);
        //console.log(this.$store.state.showdagger); //子组件可以通过这种形式访问store里面的数据
        this.$store.commit('daggerCtrl')  //我们可以在这里加上自己的参数过去，第二个参数
      }

  },
  components: {
    Hello,
    Test,
    Dagger
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
a{color:red;}
</style>
