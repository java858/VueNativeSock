<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="show">show</button>
    <button @click="mySend">mySend</button>
    
  </div>
</template>

<script>

var mytype = {"type":10090};
var typeString = JSON.stringify(mytype);

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'i am HelloWorld2',
      ws: this.$socket,
      evt: this.$store.state.evt,
    }
  },
  methods: {
    show: function () {
      console.log(this.$socket);
      console.log(this.ws);
      console.log(this.evt);
      console.log(this.$store.state.evt);
    },
    mySend: function () {
       this.$socket.send(typeString)
      console.log("HelloWorld2's mysend")
    }
  },
  created: function () {
    this.ws = this.$socket
    var _this = this
    this.$socket.onmessage = function (evt) {
      _this.evt = evt
      _this.$store.dispatch('setEvt', evt);
      console.log('onmessage triggered in HelloWorld2.vue!')
      console.log(evt)
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
