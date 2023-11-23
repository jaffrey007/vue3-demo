<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>
        <div>
          <button type="info" @click="logout">退出</button>
        </div></el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>



<script>
export default {
    name: "HomePage",
//   methods: {
//     logout() {
//       window.sessionStorage.clear();
//       // 用编程式路由导航重定向login
//       this.$router.push("./login");
//     },
//   },
};
</script>

<style lang="less" scoped>
</style>