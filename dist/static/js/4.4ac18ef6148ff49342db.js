webpackJsonp([4],{"3Jfp":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Kkag"),r=a("oFuF"),i={name:"Login",data:function(){return{username:"",password:""}},methods:{login:function(t){var e=this;this.$nextTick(function(){("submit"===t.target.type?t.target:t.target.parentElement).canSubmit&&e.submit()})},submit:function(){var t=this;s.a.get("/api/login",{params:{account:this.username,password:this.password}}).then(function(e){Object(r.c)("token",e.headers.token),t.$store.dispatch("login",e.data)})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 col-md-offset-4 floating-box"},[a("div",{staticClass:"panel panel-default"},[t._m(0),t._v(" "),a("div",{staticClass:"panel-body",attrs:{"data-validator-form":""}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label"},[t._v("用户名")]),a("span",{staticStyle:{color:"red"}},[t._v(" * ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.username,expression:"username",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{title:"用户名"},expression:"{ title: '用户名' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"用户名/邮箱"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label"},[t._v("密码")]),a("span",{staticStyle:{color:"red"}},[t._v(" * ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{title:"密码"},expression:"{ title: '密码' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{id:"password",type:"password",placeholder:"请填写密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"btn btn-lg btn-success btn-block",attrs:{type:"submit"},on:{click:t.login}},[a("i",{staticClass:"fa fa-btn fa-sign-in"}),t._v(" 登录\n        ")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel-heading"},[e("h3",{staticClass:"panel-title"},[this._v("请登录")])])}]};var o=a("C7Lr")(i,n,!1,function(t){a("rHjm")},"data-v-b0fdcbe4",null);e.default=o.exports},rHjm:function(t,e){}});