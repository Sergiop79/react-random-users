(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{2:function(e,a,t){e.exports={User:"User_User__35MTJ",image:"User_image__1jhrL",body:"User_body__22ySx",name:"User_name__Om9ST",email:"User_email__34MYz"}},22:function(e,a,t){e.exports=t(59)},27:function(e,a,t){},48:function(e,a,t){},50:function(e,a,t){},52:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),c=t.n(l),i=(t(27),t(4)),s=t(14),o=t(15),m=t(20),u=t(16),d=t(21),f=t(17),v=t.n(f),p=(t(48),t(50),function(e){return r.a.createElement("h1",{className:"Header"},"Random Users")}),E=(t(52),function(e){return r.a.createElement("div",{className:"Spinner"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),h=t(2),g=t.n(h),_=function(e){var a=e.avatar,t=e.name,n=e.email;return r.a.createElement("div",{className:g.a.User},r.a.createElement("img",{src:a,alt:t,className:g.a.image}),r.a.createElement("div",{className:g.a.body},r.a.createElement("h2",{className:g.a.name},t),r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:".concat(n),className:g.a.email},n))))},w=function(e){return e.users.map(function(e){return r.a.createElement(_,{avatar:e.avatar,name:e.name,email:e.email,key:e.email})})},b=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={users:[],page:1,perPage:10,loading:!1},t.fetchUsers=function(){var e=t.state,a=e.page,n=e.perPage,r="https://randomuser.me/api/?inc=picture,name,email&page=".concat(a,"&results=").concat(n);t.setState({loading:!0}),v.a.get(r).then(function(e){var a=e.data.results.map(function(e){return{name:"".concat(e.name.first," ").concat(e.name.last),email:e.email,avatar:e.picture.large}});t.setState({users:[].concat(Object(i.a)(t.state.users),Object(i.a)(a))}),t.setState({loading:!1})})},t.handleScroll=function(e){if(!t.state.loading){var a=document.querySelector(".App > div:last-child").offsetTop;window.pageYOffset+window.innerHeight>a-20&&t.handleLoadMore()}},t.handleLoadMore=function(){t.setState({page:t.state.page+1},function(){t.fetchUsers()})},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.fetchUsers(),this.scrollListener=window.addEventListener("scroll",function(a){e.handleScroll(a)})}},{key:"render",value:function(){var e=r.a.createElement(w,{users:this.state.users});return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),e,this.state.loading?r.a.createElement(E,null):null)}}]),a}(n.Component),y=t(18),U=t.n(y),S=t(19),j=t.n(S);new U.a(j.a).injectStyles(),c.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[22,2,1]]]);
//# sourceMappingURL=main.4ec2c4fc.chunk.js.map