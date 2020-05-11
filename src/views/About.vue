<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    李大玄---{{num}}--
    <el-button @click="add" type="primary">加</el-button>
    {{input}}
    <el-button @click="del" type="primary">减</el-button>
    {{sample}}
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data() {
    return {
      input: 0,
      num:'',
      sample:'',
    }
  },
  created() {
    this.num = this.$loadStorage('num')
    this.sample = this.$loadStorage('sample')
    this.$api.post('asd').then(res => {

    }).catch(err => {
      
    })
  },
  methods: {
    add() {
      this.input += 1;
      this.$store.dispatch('setNum', this.input)
      this.$store.dispatch('develop/setSample', this.input)
    },
    del() {
      this.input -= 1;
      this.$store.dispatch('setNum', this.input)
      this.$store.dispatch('develop/setSample', this.input)
    },
  },
}
</script>
