webpackJsonp([3],{"56Zq":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("4YfN"),i=s.n(a),n=s("9rMa"),r={name:"UsersEdit",data:function(){return{links:[{name:"edit",title:"个人信息",icon:"list-alt"},{name:"edit_avatar",title:"修改头像",icon:"picture-o"},{name:"edit_password",title:"修改密码",icon:"lock"}],params:this.$route.params}},computed:i()({},Object(n.b)(["user"]))},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"users-show"},[s("div",{staticClass:"col-md-3 main-col"},[s("div",{staticClass:"box"},[s("div",{staticClass:"padding-md"},[s("div",{staticClass:"list-group text-center"},t._l(t.links,function(e){return s("router-link",{key:e.name,staticClass:"list-group-item",attrs:{to:"/users/"+t.user.userId+"/"+e.name}},[s("i",{class:"text-md fa fa-"+e.icon}),t._v("\n            "+t._s(e.title)+"\n          ")])}),1)])])]),t._v(" "),s("router-view")],1)},staticRenderFns:[]};var l=s("C7Lr")(r,c,!1,function(t){s("P3zJ")},"data-v-b5940272",null);e.default=l.exports},P3zJ:function(t,e){}});