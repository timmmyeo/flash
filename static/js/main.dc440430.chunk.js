(this.webpackJsonpflash=this.webpackJsonpflash||[]).push([[0],{71:function(e,t,a){e.exports=a(82)},82:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(9),r=a.n(i),c=a(12),o=a(128),u=a(115),s=a(119),m=a(83),d=function(){return l.a.createElement(u.a,{position:"static"},l.a.createElement(s.a,null,l.a.createElement(m.a,{variant:"h4",component:"h1"},"Flash")))},b=a(19),E=a(125),h=a(126),f=a(127),v=a(123),p=a(129),x=a(57),S=a.n(x),g=a(124),y=a(136),C=a(120),j=a(121),O=a(133),F=a(122);var k=function(e){var t=l.a.useState(e.flashcard.content),a=Object(c.a)(t,2),n=a[0],i=a[1],r=l.a.useState(e.flashcard.title),o=Object(c.a)(r,2),u=o[0],s=o[1],m=l.a.useState(e.flashcard.subtitle),d=Object(c.a)(m,2),b=d[0],E=d[1];return l.a.createElement(y.a,{open:e.open,onClose:e.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t,e.flashcard.id,{title:u,subtitle:b,content:n})}},l.a.createElement(C.a,{id:"alert-dialog-title"},e.dialogTitle),l.a.createElement(j.a,null,l.a.createElement(O.a,{autoFocus:!0,value:u,label:"Title",variant:"outlined",id:"title",fullWidth:!0,onChange:function(e){return s(e.target.value)}})),l.a.createElement(j.a,null,l.a.createElement(O.a,{autoFocus:!0,value:b,label:"Subtitle",variant:"outlined",id:"subtitle",fullWidth:!0,onChange:function(e){return E(e.target.value)}})),l.a.createElement(j.a,null,l.a.createElement(O.a,{autoFocus:!0,value:n,label:"Content",variant:"outlined",id:"content",fullWidth:!0,onChange:function(e){return i(e.target.value)}})),l.a.createElement(F.a,null,l.a.createElement(v.a,{onClick:function(){e.handleClose(),i(e.flashcard.content),s(e.flashcard.title),E(e.flashcard.subtitle)},color:"primary"},"Cancel"),l.a.createElement(v.a,{type:"submit",color:"primary",autoFocus:!0},"Save"))))},D=Object(g.a)({root:{minWidth:275},title:{fontSize:14},pos:{marginBottom:12}});var W=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),i=a[0],r=a[1],u=function(){r(!1)},s=D();return l.a.createElement("div",null,l.a.createElement(E.a,{className:s.root},l.a.createElement(h.a,null,l.a.createElement(m.a,{variant:"h5",component:"h2"},e.flashcard.title),l.a.createElement("br",null),l.a.createElement(m.a,{className:s.pos,color:"textSecondary"},e.flashcard.subtitle),l.a.createElement(m.a,{variant:"body2",component:"p"},e.flashcard.content)),l.a.createElement(f.a,null,l.a.createElement(o.a,{container:!0},l.a.createElement(o.a,{item:!0,xs:2,md:2,align:"center"},l.a.createElement(v.a,{variant:"outlined",color:"primary",size:"small",onClick:function(){r(!0)}},"Edit")),l.a.createElement(o.a,{item:!0,xs:8,md:8}),l.a.createElement(o.a,{item:!0,xs:2,md:2,align:"center"},l.a.createElement(p.a,{variant:"contained",color:"secondary","aria-label":"delete",onClick:function(){return e.handleDelete(e.flashcard.id)}},l.a.createElement(S.a,null)))))),l.a.createElement(k,{dialogTitle:"Edit",open:i,handleClose:u,onSubmit:function(t,a,n){return function(t,a,n){t.preventDefault(),e.onSubmit(a,n),u()}(t,a,n)},flashcard:e.flashcard}))};var w=function(e){var t=e.flashcards.map((function(t){return l.a.createElement(o.a,{item:!0,xs:12,md:6,lg:4,key:t.id},l.a.createElement(W,{flashcard:t,onSubmit:function(t,a){return e.handleSubmit(t,a)},handleDelete:function(t){return e.handleDelete(t)}}))}));return l.a.createElement(o.a,{container:!0,spacing:2},t)},N=a(130),T=a(58),z=a.n(T);function B(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),i=a[0],r=a[1],u=function(){r(!1)};return l.a.createElement("div",null,l.a.createElement(o.a,{container:!0},l.a.createElement(o.a,{item:!0,xs:10,md:11}),l.a.createElement(o.a,{item:!0,xs:1},l.a.createElement(N.a,{color:"primary","aria-label":"add",onClick:function(){r(!0)}},l.a.createElement(z.a,null))),l.a.createElement(o.a,{item:!0,xs:1,md:!1})),l.a.createElement(k,{dialogTitle:"New Card",open:i,handleClose:u,onSubmit:function(t,a,n){return function(t,a,n){t.preventDefault(),e.onSubmit(a,n),u()}(t,a,n)},flashcard:{id:1e3,title:"",subtitle:"",content:""}}))}var J=a(135);function H(e){var t=function(t,a){e.setFlashcards((function(e){var n=!1,l=e.map((function(e){return e.id===t&&(n=!0,e.content=a.content,e.subtitle=a.subtitle,e.title=a.title),e}));return n||(l=[].concat(Object(b.a)(e),[{id:Object(J.a)(),title:a.title,subtitle:a.subtitle,content:a.content}])),l}))};return l.a.createElement(o.a,{container:!0,direction:"column"},l.a.createElement(o.a,{item:!0,container:!0},l.a.createElement(o.a,{item:!0,xs:1}),l.a.createElement(o.a,{item:!0,xs:10},l.a.createElement(w,{flashcards:e.flashcards,handleSubmit:function(e,a){return t(e,a)},handleDelete:function(t){return function(t){e.setFlashcards((function(e){return e.filter((function(e){return e.id!==t}))}))}(t)}})),l.a.createElement(o.a,{item:!0,xs:1})),l.a.createElement(o.a,{item:!0},l.a.createElement("br",null),l.a.createElement(B,{onSubmit:function(e,a){return t(e,a)}}),l.a.createElement("br",null)))}function I(e){return l.a.createElement("div",null,l.a.createElement("h1",null,"Hello World!"))}var L=a(59),R=a(10),q=a(131),A=a(132),G=a(60),K=a.n(G),M=a(61),P=a.n(M),Q=a(62),U=a.n(Q);var V=function(){var e=l.a.useState([{id:1,title:"title",subtitle:"subtitle1",content:"this is some text"},{id:2,title:"title2",subtitle:"subtitle2",content:"this is some more text"},{id:3,title:"title3",subtitle:"3",content:"no3"},{id:4,title:"yay",subtitle:"more4",content:"this is  more text4"},{id:5,title:"5thing",subtitle:"subtitle5",content:"this is some more tex5"},{id:6,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"},{id:7,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"},{id:8,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"},{id:9,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"},{id:10,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"},{id:11,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"},{id:12,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"},{id:13,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"},{id:14,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"},{id:15,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"}]),t=Object(c.a)(e,2),a=t[0],n=t[1];return l.a.createElement("div",null,l.a.createElement(o.a,{container:!0,direction:"column"},l.a.createElement(o.a,{item:!0},l.a.createElement(d,null)),l.a.createElement(o.a,{item:!0},l.a.createElement(L.a,null,l.a.createElement(R.a,{exact:!0,path:"/edit"},l.a.createElement(H,{flashcards:a,setFlashcards:n})),l.a.createElement(R.a,{exact:!0,path:"/"},l.a.createElement(I,{flashcards:a})))),l.a.createElement(o.a,{item:!0},l.a.createElement(q.a,{value:2,showLabels:!0},l.a.createElement(A.a,{label:"Recents",icon:l.a.createElement(K.a,null)}),l.a.createElement(A.a,{label:"Favorites",icon:l.a.createElement(P.a,null)}),l.a.createElement(A.a,{label:"Nearby",icon:l.a.createElement(U.a,null)})))))};r.a.render(l.a.createElement(V,null),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.dc440430.chunk.js.map