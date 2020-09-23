<template>
  <div class="login">
      <div class="login-box">
        <div class="login-icon">
          <img src="~assets/logo.png" alt="">
        </div>
     <el-form ref="form" :model="login" label-width="80px" label-position='top'>
          <el-form-item>
        <el-input v-model="login.username" placeholder="请输入内容" prefix-icon='iconfont icon-zhanghao'></el-input>
       </el-form-item>
         <el-form-item>
           <el-input v-model="login.passworld" placeholder="请输入内容" prefix-icon='iconfont icon-mima'></el-input>
         </el-form-item>
     </el-form>
     <div class="login-btn">
     <el-button type="primary">登陆</el-button>
     <el-button type="info">重置</el-button>
     </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"Login",
    data(){
      return {
        login:{
          username:'',
          passworld:''
        }
      }
    }

}
</script>

<style lang='less' scoped>
.login{
  width: 100%;
  height: 100%;
  background: #44c089;
}
.login-box{
  width: 450px;
  height: 300px;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%);
  padding: 0 40px;
  box-sizing: border-box;
  
}
.login-icon{
  position: absolute;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 130px;
  height: 130px;
  border: 1px solid #ccc;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 75px;
  padding: 8px;
  background: #fff;
  box-shadow: 1px 5px 20px #ccc;
}
.login-icon img{
  width: 100%;
  height: 100%;
   background: #eee;
  border-radius: 75px;
}
.el-form{
  margin-top: 100px;
}
.login-btn{
  float: right;
}
</style>