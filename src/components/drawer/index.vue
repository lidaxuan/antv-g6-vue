<template>
  <div class="page">
    <el-button @click="componentsDrawer = true" style="z-index:2001">按asdasd钮</el-button>
    <el-drawer title="我是标题" :modal="false" :visible.sync="componentsDrawer" style="z-index:2001" :with-header="false">
      <div class="content">
        {{drawer}}
      </div>
    </el-drawer>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'Name', // Pascal命名
  components: {},
  props: ['drawer'],
  data() {
    return {
      componentsDrawer: true,
    };
  },
  computed: {},
  watch: {
    // 对象写法
    // temObj: {
    //   handler(newVal, oldVal) {
    //   },
    //   deep: true, // 深度
    //   immediate: true, // 立即执行
    // },
    // temStr(val) {

    // },
  },
  filters: {},
  beforeCreate() {},
  created() {},
  mounted() {
    this.initPage();
  },
  methods: {
    initPage() {},
  },
};
</script>
<style lang="scss" scoped>
// @import "@/assets/css/common.scss";
.content {
  height: 100%;
  background-color: pink;
  overflow-y: scroll;
  overflow: auto;
}
</style>
