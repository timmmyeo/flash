(this.webpackJsonpflash=this.webpackJsonpflash||[]).push([[0],{60:function(e,t,a){e.exports=a(69)},69:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(9),r=a.n(i),c=a(10),o=a(112),u=a(99),s=a(103),m=a(70),d=function(){return l.a.createElement(u.a,{position:"static"},l.a.createElement(s.a,null,l.a.createElement(m.a,{variant:"h4",component:"h1"},"Flash")))},b=a(109),f=a(110),h=a(111),E=a(107),v=a(113),p=a(51),x=a.n(p),S=a(108),g=a(117),C=a(104),y=a(105),j=a(115),O=a(106);var k=function(e){var t=l.a.useState(e.flashcard.content),a=Object(c.a)(t,2),n=a[0],i=a[1],r=l.a.useState(e.flashcard.title),o=Object(c.a)(r,2),u=o[0],s=o[1],m=l.a.useState(e.flashcard.subtitle),d=Object(c.a)(m,2),b=d[0],f=d[1];return l.a.createElement(g.a,{open:e.open,onClose:e.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t,e.flashcard.id,{title:u,subtitle:b,content:n})}},l.a.createElement(C.a,{id:"alert-dialog-title"},e.dialogTitle),l.a.createElement(y.a,null,l.a.createElement(j.a,{autoFocus:!0,value:u,label:"Title",variant:"outlined",id:"title",fullWidth:!0,onChange:function(e){return s(e.target.value)}})),l.a.createElement(y.a,null,l.a.createElement(j.a,{autoFocus:!0,value:b,label:"Subtitle",variant:"outlined",id:"subtitle",fullWidth:!0,onChange:function(e){return f(e.target.value)}})),l.a.createElement(y.a,null,l.a.createElement(j.a,{autoFocus:!0,value:n,label:"Content",variant:"outlined",id:"content",fullWidth:!0,onChange:function(e){return i(e.target.value)}})),l.a.createElement(O.a,null,l.a.createElement(E.a,{onClick:function(){e.handleClose(),i(e.flashcard.content)},color:"primary"},"Cancel"),l.a.createElement(E.a,{type:"submit",color:"primary",autoFocus:!0},"Save"))))},D=Object(S.a)({root:{minWidth:275},title:{fontSize:14},pos:{marginBottom:12}});var F=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),i=a[0],r=a[1],u=function(){r(!1)},s=D();return l.a.createElement("div",null,l.a.createElement(b.a,{className:s.root},l.a.createElement(f.a,null,l.a.createElement(m.a,{variant:"h5",component:"h2"},e.flashcard.title),l.a.createElement("br",null),l.a.createElement(m.a,{className:s.pos,color:"textSecondary"},e.flashcard.subtitle),l.a.createElement(m.a,{variant:"body2",component:"p"},e.flashcard.content)),l.a.createElement(h.a,null,l.a.createElement(o.a,{container:!0},l.a.createElement(o.a,{item:!0,xs:2,md:2,align:"center"},l.a.createElement(E.a,{variant:"outlined",color:"primary",size:"small",onClick:function(){r(!0)}},"Edit")),l.a.createElement(o.a,{item:!0,xs:8,md:8}),l.a.createElement(o.a,{item:!0,xs:2,md:2,align:"center"},l.a.createElement(v.a,{variant:"contained",color:"secondary","aria-label":"delete",onClick:function(){return e.handleDelete(e.flashcard.id)}},l.a.createElement(x.a,null)))))),l.a.createElement(k,{dialogTitle:"Edit",open:i,handleClose:u,onSubmit:function(t,a,n){return function(t,a,n){t.preventDefault(),e.onSubmit(a,n),u()}(t,a,n)},flashcard:e.flashcard}))};var T=function(e){var t=e.flashcards.map((function(t){return l.a.createElement(o.a,{item:!0,xs:12,md:6,lg:4},l.a.createElement(F,{flashcard:t,onSubmit:function(t,a){return e.handleSubmit(t,a)},handleDelete:function(t){return e.handleDelete(t)}}))}));return l.a.createElement(o.a,{container:!0,spacing:2},t)},W=a(114),w=a(52),N=a.n(w);function z(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),i=a[0],r=a[1],u=function(){r(!1)};return l.a.createElement("div",null,l.a.createElement(o.a,{container:!0},l.a.createElement(o.a,{item:!0,xs:10,md:11}),l.a.createElement(o.a,{item:!0,xs:1},l.a.createElement(W.a,{color:"primary","aria-label":"add",onClick:function(){r(!0)}},l.a.createElement(N.a,null))),l.a.createElement(o.a,{item:!0,xs:1,md:0})),l.a.createElement(k,{dialogTitle:"New Card",open:i,handleClose:u,onSubmit:function(t,a,n){return function(t,a,n){t.preventDefault(),e.onSubmit(a,n),u()}(t,a,n)},flashcard:{id:1e3,title:"",subtitle:"",content:""}}))}var B=function(){var e=l.a.useState([{id:1,title:"title",subtitle:"subtitle1",content:"this is some text"},{id:2,title:"title2",subtitle:"subtitle2",content:"this is some more text"},{id:3,title:"title3",subtitle:"3",content:"no3"},{id:4,title:"yay",subtitle:"more4",content:"this is  more text4"},{id:5,title:"5thing",subtitle:"subtitle5",content:"this is some more tex5"},{id:6,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"},{id:7,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"},{id:8,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"},{id:9,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"},{id:10,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"},{id:11,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"},{id:12,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"},{id:13,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"},{id:14,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"},{id:15,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"}]),t=Object(c.a)(e,2),a=t[0],n=t[1],i=function(e,t){n((function(a){return a.map((function(a){return a.id===e&&(a.content=t.content,a.subtitle=t.subtitle,a.title=t.title),a}))}))};return l.a.createElement("div",null,l.a.createElement(o.a,{container:!0,direction:"column"},l.a.createElement(o.a,{item:!0},l.a.createElement(d,null)),l.a.createElement(o.a,{item:!0,container:!0},l.a.createElement(o.a,{item:!0,xs:1}),l.a.createElement(o.a,{item:!0,xs:10},l.a.createElement(T,{flashcards:a,handleSubmit:function(e,t){return i(e,t)},handleDelete:function(e){return function(e){n((function(t){return t.filter((function(t){return t.id!==e}))}))}(e)}})),l.a.createElement(o.a,{item:!0,xs:1}))),l.a.createElement("br",null),l.a.createElement(z,{handleSubmit:function(e,t){return i(e,t)}}),l.a.createElement("br",null))};r.a.render(l.a.createElement(B,null),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.bbd89499.chunk.js.map