"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[351],{8351:function(e,s,t){t.r(s),t.d(s,{default:function(){return d}});var a=function(){var e=this,s=e._self._c;return s("div",{staticClass:"main-l"},[s("div",{staticClass:"login"},[s("div",{staticClass:"login-main"},[s("div",{staticClass:"login-top"},[s("h1",[e._v("洁山口腔")]),s("el-form",{ref:"admin",attrs:{model:e.admin,rules:e.rules}},[s("el-form-item",{attrs:{prop:"username"}},[s("el-input",{attrs:{size:"normal",type:"text",placeholder:"请输入管理员名","prefix-icon":"el-icon-search"},model:{value:e.admin.username,callback:function(s){e.$set(e.admin,"username",s)},expression:"admin.username"}})],1),s("el-form-item",{attrs:{prop:"password"}},[s("el-input",{attrs:{size:"normal",type:"password",placeholder:"请输入密码","prefix-icon":"el-icon-search"},model:{value:e.admin.password,callback:function(s){e.$set(e.admin,"password",s)},expression:"admin.password"}})],1),s("br"),s("el-button",{attrs:{type:"primary",size:"normal"},on:{click:function(s){return e.login()}}},[e._v("登录")]),s("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"danger",size:"normal"}},[e._v("重置")])],1)],1)])])])},r=[],i=(t(560),t(4471)),n={name:"LoginView",data(){return{admin:{},rules:{username:[{required:!0,message:"请输入管理员名",trigger:blur}],password:[{required:!0,message:"请选择密码",trigger:blur}]}}},created(){},methods:{login(){this.$refs.admin.validate((e=>{e&&i.Z.post("/admin",this.admin).then((e=>{0===e.state?(this.$message({message:"登录成功",type:"success"}),localStorage.setItem("admin",JSON.stringify(e.data)),this.$router.push("/")):this.$message.error("管理员名或密码有误！")}))}))}}},l=n,o=t(1001),m=(0,o.Z)(l,a,r,!1,null,"d70e0cbc",null),d=m.exports}}]);
//# sourceMappingURL=351.761131cb.js.map