"use strict";(self.webpackChunksoc=self.webpackChunksoc||[]).push([[924],{1883:function(t,s,e){e.d(s,{D:function(){return f}});var n=e(1413),r=e(5671),i=e(3144),o=e(136),u=e(516),a=e(2791),p=e(8687),c=e(7689),l=e(7781),h=e(184),d=function(t){return{isAuth:t.auth.isAuth}},f=function(t){var s=function(s){(0,o.Z)(a,s);var e=(0,u.Z)(a);function a(){return(0,r.Z)(this,a),e.apply(this,arguments)}return(0,i.Z)(a,[{key:"render",value:function(){return this.props.isAuth?(0,h.jsx)(t,(0,n.Z)({},this.props)):(this.props.isAuth||this.props.router)&&(this.props.isAuth||this.props.router.params.userId)?!this.props.isAuth&&this.props.router.params.userId?(0,h.jsx)(t,(0,n.Z)({},this.props)):void 0:(0,h.jsx)(c.Fg,{to:"/login"})}}]),a}(a.Component);return(0,l.qC)((0,p.$j)(d,{}))(s)}},8924:function(t,s,e){e.r(s),e.d(s,{ProfileContainer:function(){return M},default:function(){return U}});var n=e(1413),r=e(5671),i=e(3144),o=e(136),u=e(516),a=e(2791),p="ProfileInfo_descriptionBlock__nueRN",c="ProfileInfo_imgg__FILhk",l=e(8414),h=e(9439),d=e(184),f=function(t){var s=(0,a.useState)(!1),e=(0,h.Z)(s,2),n=e[0],r=e[1],i=(0,a.useState)(t.status),o=(0,h.Z)(i,2),u=o[0],p=o[1],c=(0,a.useState)(0),l=(0,h.Z)(c,2),f=l[0],x=l[1];(0,a.useEffect)((function(){p(t.status)}),[t.status]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{children:[!n&&(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{onDoubleClick:function(){r(!0)},children:t.status||"---------"}),(0,d.jsxs)("h1",{children:["TEST count ",f]}),(0,d.jsx)("button",{onClick:function(){x(f+1)},children:"  CLICK + "}),(0,d.jsx)("button",{onClick:function(){x(f-1)},children:" CLICK - "})]}),n&&(0,d.jsx)("div",{children:(0,d.jsx)("input",{onChange:function(t){p(t.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),t.updateStatus(u),alert(u)},value:u})})]})})},x=function(t){var s=t.profile,e=t.status,n=t.updateStatus;return s?(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{children:(0,d.jsx)("img",{className:c,src:"https://s1.1zoom.ru/big3/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400.jpg",alt:"gg"})}),(0,d.jsxs)("div",{className:p,children:[(0,d.jsx)("img",{src:s.photos.large,alt:"img"}),"Ava + discription",(0,d.jsx)(f,{status:e,updateStatus:n})]})]}):(0,d.jsx)(l.Z,{})},j=e(8128),m="MyPosts_postsBlock__+A3el",v="MyPosts_posts__i6A7C",g="Posts_item__Fbahu",_=function(t){return(0,d.jsx)("div",{children:(0,d.jsxs)("div",{className:g,children:[(0,d.jsx)("img",{src:"https://w7.pngwing.com/pngs/948/148/png-transparent-computer-icons-user-avatar-avatar-heroes-monochrome-silhouette.png",alt:"e"}),t.message,(0,d.jsxs)("div",{style:{color:"lightblue"},children:[(0,d.jsx)("span",{style:{color:"pink"},children:"like"})," ",t.likeCount]})]})})},k=e(6139),C=e(704),Z=e(1074),P=e(6550),S=(0,P.DT)(10),y=(0,P.oQ)(3),b=(0,C.Z)({form:"profile-add-post"})((function(t){return(0,d.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,d.jsx)("div",{children:(0,d.jsx)(k.Z,{child:"input",component:Z.N,validate:[P.C1,S,y],name:"newPostText",placeholder:"Enter",type:"text"})}),(0,d.jsx)("div",{children:(0,d.jsx)("button",{children:"Add Post"})})]})})),A=(0,a.memo)((function(t){var s=t.posts.map((function(t){return(0,d.jsx)(_,{message:t.message,likeCount:t.likeCount},t.id)}));return(0,d.jsxs)("div",{className:m,children:[(0,d.jsx)("h3",{style:{color:"yellow"},children:"My Posts"}),(0,d.jsx)(b,{onSubmit:function(s){t.addPost(s.newPostText),alert(s.newPostText)}}),(0,d.jsx)("div",{className:v,children:s})]})})),I=e(8687),w=(0,I.$j)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(s){t((0,j.Wl)(s))}}}))(A),N=function(t){return(0,d.jsxs)("div",{children:[(0,d.jsx)(x,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,d.jsx)(w,{})]})},T=e(7689),F=e(1883),D=e(7781),M=function(t){(0,o.Z)(e,t);var s=(0,u.Z)(e);function e(){return(0,r.Z)(this,e),s.apply(this,arguments)}return(0,i.Z)(e,[{key:"componentDidMount",value:function(){var t=this.props.router.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return(0,d.jsx)(N,(0,n.Z)((0,n.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(a.Component);var U=(0,D.qC)((0,I.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:j.et,getStatus:j.lR,updateStatus:j.Nf}),(function(t){return function(s){var e=(0,T.TH)(),r=(0,T.s0)(),i=(0,T.UO)();return(0,d.jsx)(t,(0,n.Z)((0,n.Z)({},s),{},{router:{location:e,navigate:r,params:i}}))}}),F.D)(M)}}]);
//# sourceMappingURL=924.d53596d1.chunk.js.map