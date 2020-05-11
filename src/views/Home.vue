<template>
  <div class="home">
    <vue-process-editor mode="edit" />
  </div>
</template>

<script>
// @ is an alias to /src

import VueProcessEditor from "../components/VueProcessEditor";
export default {
  name: 'Home',
  components: {
    VueProcessEditor
  },
  data() {
    return {
      input: 0,
      num:'',
      sample:'',
    }
  },
  created() {
 
  },
  methods: {
    
  },
}
</script>
