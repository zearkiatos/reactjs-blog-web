(this["webpackJsonpreactjs-blog-web"]=this["webpackJsonpreactjs-blog-web"]||[]).push([[0],{241:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(44),a=c.n(s),i=c(28),o=c(7),r=c(9),O=c(26),j=c(27),l=c(30),b=c(29),d=c(6),u=c(63),_=c(98),p=c.n(_),E={FETCH_POSTS:"FETCH_POSTS"};c(131).config();var h="develop"===Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_REDUXBLOG_API_BASE_URL:"",REACT_APP_REDUXBLOG_API_KEY:""}).ENVIRONMENT,P={ENVIRONMENT:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_REDUXBLOG_API_BASE_URL:"",REACT_APP_REDUXBLOG_API_KEY:""}).ENVIRONMENT,DEVELOP:h,REDUXBLOG_API_BASE_URL:"",REDUXBLOG_API_KEY:""},S={fetchPosts:function(){var e=p.a.get("".concat(P.REDUXBLOG_API_BASE_URL,"/api/posts?key=").concat(P.REDUXBLOG_API_KEY));return{type:E.FETCH_POSTS,payload:e}}},m=c(2),f=function(e){Object(l.a)(c,e);var t=Object(b.a)(c);function c(){return Object(O.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"componentWillMount",value:function(){this.props.fetchPosts()}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"ui one column grid",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"sixteen wide column",children:Object(m.jsx)(u.a,{to:"/posts/new",className:"ui right floated primary button",children:"Add a Post"})})})}),"List of blog posts."]})}}]),c}(n.Component);var v=Object(i.b)(null,(function(e){return Object(d.b)({fetchPosts:S.fetchPosts},e)}))(f),x=c(24),T=c(242),R=function(e){Object(l.a)(c,e);var t=Object(b.a)(c);function c(){return Object(O.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){var e=this.props,t=e.fields,c=t.title,n=t.categories,s=t.content,a=e.handleSubmit;return Object(m.jsxs)("form",{className:"ui form",onSubmit:a,children:[Object(m.jsx)("h3",{children:"Create a New Post"}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{children:"Title"}),Object(m.jsx)("input",Object(x.a)({type:"text",name:"title"},c))]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{children:"Categories"}),Object(m.jsx)("input",Object(x.a)({type:"text",name:"categories"},n))]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{children:"Content"}),Object(m.jsx)("textarea",Object(x.a)({name:"content"},s))]}),Object(m.jsx)("button",{type:"submit",className:"ui primary button",children:"Submit"})]})}}]),c}(n.Component),A=Object(T.a)({form:"PostsNewForm",fields:["title","categories","content"]})(R),N=Object(r.a)(),C=function(){return Object(m.jsxs)(o.b,{history:N,children:[Object(m.jsx)(o.a,{path:"/",component:v,exact:!0}),Object(m.jsx)(o.a,{path:"/posts/new",component:A,exact:!0})]})},y=c(103),L=c.n(y),D=c(243),U={all:[],post:null},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.FETCH_POSTS:return Object(x.a)(Object(x.a)({},e),{},{all:t.payload.data});default:return e}},g=Object(d.c)({posts:B,form:D.a}),I=Object(d.a)(L.a)(d.d)(g),w=function(e){Object(l.a)(c,e);var t=Object(b.a)(c);function c(){return Object(O.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"ui container",children:this.props.children})}}]),c}(n.Component);a.a.render(Object(m.jsx)(i.a,{store:I,children:Object(m.jsx)(w,{children:Object(m.jsx)(C,{})})}),document.querySelector("#root"))}},[[241,1,2]]]);
//# sourceMappingURL=main.69594e6c.chunk.js.map