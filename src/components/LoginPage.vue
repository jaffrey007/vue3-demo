<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 登录图标区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- 登录表单区域 -->
      <!-- :rules="rules"为表单祖组件定义验证规则，这是rules设置的区域 -->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
        label-width="0px"
        class="login_form"
      >
        <!-- 用户名 -->
        <!-- 为item指定验证子规则 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" label="用户名"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            label="密码"
            type="password"
          ></el-input>
        </el-form-item>
        <!-- 按钮区 -->
        <el-form-item class="btns">
          <!-- 单击登录前预验证数据 -->
          <el-button type="primary" @click="loginValidate">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: "",
        password: "",
      },
      loginFormRules: {
        username: [
          { required: true, message: "请输入test名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" },
        ],

        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 15, message: "长度在6到 15个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    // 点击重置按钮行为函数
    resetLoginForm() {
      // this指向当前登录组件的实例对象
      // console.log(this);
      // call resetFields  to reset the exact form(loginFormRef)
      // 重置思路:为表单添加引用属性的值，然后通过this来调用指定的表单，然后再调用重置方法，
      this.$refs.loginFormRef.resetFields();
    },
    loginValidate() {
      // 如果输入不合法，则return，不向后端api发起请求。
      // this.$http.post('login',this.loginForm)这句话的意思向login这个url提交this的loginForm中的数据，亦即是vue实例中的数据对象。
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return;
        const {data: res }=await this.$http.post("/api/public/v1/login", this.loginForm);
        // 实现登录弹框实现
        if (res.meta.status !==404) return this.$message.error('登录失败！');

        this.$message.success('登录成功！');
        // 将服务器生成的session token保存到浏览器中,完成登录成功后的逻辑

        // Window.sessionStorage.setItem("token",res.data.token);
        // window.sessionStorage.setItem("token", res.data.token);
        // this.$router.push("/home");


      });
      // this.$refs.loginFormRef.
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.login_container {
  background-color: #26466b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background: #fff;
  border-radius: 3px;
  // 将登录盒子居中样式
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  // less的语法嵌套，嵌套在.login_box里面
  .avatar_box {
    height: 130px;
    width: 130px;
    // 为logo图片设置边框
    border: 1px solid #eee;
    // 设置圆边框
    border-radius: 50%;
    // 设置边框与img的边距
    padding: 10px;
    // 给avatar_box设置发散阴影
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    // 这些定位用的百分数都是根据父元素百分比来确定的
    transform: translate(-50%, -50%);
    // 给box设置白色背景
    background-color: #ddd;
    //  设置logo图片本身的样式
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.login_form {
  position: absolute;
  bottom: 40px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns {
  padding: 0 20px;
  box-sizing: border-box;
  position: absolute;
  right: 0%;
  bottom: -40px;
}
</style>

<!--  -->


