webpackJsonp([9],{o8vE:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});e("Kkag");var s={name:"EditAvatar",data:function(){return{imageUrl:""}},methods:{handleAvatarSuccess:function(a,t){this.imageUrl=URL.createObjectURL(t.raw)},beforeAvatarUpload:function(a){var t="image/jpeg"===a.type,e=a.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),e||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&e}}},r={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"col-md-9 left-col"},[t("div",{staticClass:"panel panel-default padding-md"},[t("el-upload",{staticClass:"avatar-uploader",attrs:{name:"imageUrl",action:"/api/user/"+this.$route.params.id+"/uploadPic","show-file-list":!1,"on-success":this.handleAvatarSuccess,"before-upload":this.beforeAvatarUpload}},[this.imageUrl?t("img",{staticClass:"avatar",attrs:{src:this.imageUrl}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),this._v(" "),t("el-button",{attrs:{size:"small",type:"primary"},on:{click:this.uploadPic}},[this._v("点击上传")])],1)])},staticRenderFns:[]};var i=e("C7Lr")(s,r,!1,function(a){e("xte8")},"data-v-4075405c",null);t.default=i.exports},xte8:function(a,t){}});