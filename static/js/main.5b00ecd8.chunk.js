(this.webpackJsonpflash=this.webpackJsonpflash||[]).push([[0],{71:function(e,t,a){e.exports=a(82)},82:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(9),r=a.n(i),c=a(12),o=a(132),s=a(119),u=a(123),m=a(83),d=function(){return l.a.createElement(s.a,{position:"static"},l.a.createElement(u.a,null,l.a.createElement(m.a,{variant:"h4",component:"h1"},"Flash")))},E=a(18),b=a(129),h=a(130),f=a(131),v=a(127),p=a(133),x=a(60),g=a.n(x),S=a(128),C=a(139),y=a(124),j=a(125),O=a(136),k=a(126);var F=function(e){var t=l.a.useState(e.flashcard.content),a=Object(c.a)(t,2),n=a[0],i=a[1],r=l.a.useState(e.flashcard.title),o=Object(c.a)(r,2),s=o[0],u=o[1],m=l.a.useState(e.flashcard.subtitle),d=Object(c.a)(m,2),E=d[0],b=d[1];return l.a.createElement(C.a,{open:e.open,onClose:e.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t,e.flashcard.id,{title:s,subtitle:E,content:n})}},l.a.createElement(y.a,{id:"alert-dialog-title"},e.dialogTitle),l.a.createElement(j.a,null,l.a.createElement(O.a,{autoFocus:!0,value:s,label:"Title",variant:"outlined",id:"title",fullWidth:!0,onChange:function(e){return u(e.target.value)}})),l.a.createElement(j.a,null,l.a.createElement(O.a,{autoFocus:!0,value:E,label:"Subtitle",variant:"outlined",id:"subtitle",fullWidth:!0,onChange:function(e){return b(e.target.value)}})),l.a.createElement(j.a,null,l.a.createElement(O.a,{autoFocus:!0,value:n,label:"Content",variant:"outlined",id:"content",fullWidth:!0,onChange:function(e){return i(e.target.value)}})),l.a.createElement(k.a,null,l.a.createElement(v.a,{onClick:function(){e.handleClose(),i(e.flashcard.content),u(e.flashcard.title),b(e.flashcard.subtitle)},color:"primary"},"Cancel"),l.a.createElement(v.a,{type:"submit",color:"primary",autoFocus:!0},"Save"))))},B=Object(S.a)({root:{minWidth:275},title:{fontSize:14},pos:{marginBottom:12}});var D=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),i=a[0],r=a[1],s=function(){r(!1)},u=B();return l.a.createElement("div",null,l.a.createElement(b.a,{className:u.root},l.a.createElement(h.a,null,l.a.createElement(m.a,{variant:"h5",component:"h2"},e.flashcard.title),l.a.createElement("br",null),l.a.createElement(m.a,{className:u.pos,color:"textSecondary"},e.flashcard.subtitle),l.a.createElement(m.a,{variant:"body2",component:"p"},e.flashcard.content)),l.a.createElement(f.a,null,l.a.createElement(o.a,{container:!0},l.a.createElement(o.a,{item:!0,xs:2,md:2,align:"center"},l.a.createElement(v.a,{variant:"outlined",color:"primary",size:"small",onClick:function(){r(!0)}},"Edit")),l.a.createElement(o.a,{item:!0,xs:8,md:8}),l.a.createElement(o.a,{item:!0,xs:2,md:2,align:"center"},l.a.createElement(p.a,{variant:"contained",color:"secondary","aria-label":"delete",onClick:function(){return e.handleDelete(e.flashcard.id)}},l.a.createElement(g.a,null)))))),l.a.createElement(F,{dialogTitle:"Edit",open:i,handleClose:s,onSubmit:function(t,a,n){return function(t,a,n){t.preventDefault(),e.onSubmit(a,n),s()}(t,a,n)},flashcard:e.flashcard}))};var N=function(e){var t=e.flashcards.map((function(t){return l.a.createElement(o.a,{item:!0,xs:12,md:6,lg:4,key:t.id},l.a.createElement(D,{flashcard:t,onSubmit:function(t,a){return e.handleSubmit(t,a)},handleDelete:function(t){return e.handleDelete(t)}}))}));return l.a.createElement(o.a,{container:!0,spacing:2},t)},W=a(134),z=a(61),T=a.n(z);function w(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),i=a[0],r=a[1],s=function(){r(!1)};return l.a.createElement("div",null,l.a.createElement(o.a,{container:!0},l.a.createElement(o.a,{item:!0,xs:10,md:11}),l.a.createElement(o.a,{item:!0,xs:1},l.a.createElement(W.a,{color:"primary","aria-label":"add",onClick:function(){r(!0)}},l.a.createElement(T.a,null))),l.a.createElement(o.a,{item:!0,xs:1,md:!1})),l.a.createElement(F,{dialogTitle:"New Card",open:i,handleClose:s,onSubmit:function(t,a,n){return function(t,a,n){t.preventDefault(),e.onSubmit(a,n),s()}(t,a,n)},flashcard:{id:1e3,title:"",subtitle:"",content:""}}))}var J=a(138);function I(e){var t=function(t,a){e.setFlashcards((function(e){var n=!1,l=e.map((function(e){return e.id===t&&(n=!0,e.content=a.content,e.subtitle=a.subtitle,e.title=a.title),e}));return n||(l=[].concat(Object(E.a)(e),[{id:Object(J.a)(),title:a.title,subtitle:a.subtitle,content:a.content}])),l}))};return l.a.createElement(o.a,{container:!0,direction:"column"},l.a.createElement(o.a,{item:!0,container:!0},l.a.createElement(o.a,{item:!0,xs:1}),l.a.createElement(o.a,{item:!0,xs:10},l.a.createElement(N,{flashcards:e.flashcards,handleSubmit:function(e,a){return t(e,a)},handleDelete:function(t){return function(t){e.setFlashcards((function(e){return e.filter((function(e){return e.id!==t}))}))}(t)}})),l.a.createElement(o.a,{item:!0,xs:1})),l.a.createElement(o.a,{item:!0},l.a.createElement("br",null),l.a.createElement(w,{onSubmit:function(e,a){return t(e,a)}}),l.a.createElement("br",null)))}var q=a(20),A=a(140),G=a(44),H=a.n(G),K=a(45),L=a.n(K),M=a(135);function P(e){var t=l.a.useState(3),a=Object(c.a)(t,2),n=a[0],i=a[1],r=l.a.useState(!1),s=Object(c.a)(r,2),u=s[0],d=(s[1],e.flashcards[n]),E=Object(q.a)(),p=Object(S.a)({root:{minWidth:275},title:{fontSize:14},pos:{marginBottom:12}})();return l.a.createElement(l.a.Fragment,null,l.a.createElement(M.a,{maxWidth:"lg"},l.a.createElement(b.a,{className:p.root},l.a.createElement(h.a,null,l.a.createElement(m.a,{variant:"h5",component:"h2"},d.title),l.a.createElement("br",null),l.a.createElement(m.a,{className:p.pos,color:"textSecondary"},d.subtitle),u&&l.a.createElement(m.a,{variant:"body2",component:"p"},d.content)),l.a.createElement(f.a,null,l.a.createElement(o.a,{container:!0},l.a.createElement(o.a,{item:!0,xs:2,md:2,align:"center"}),l.a.createElement(o.a,{item:!0,xs:8,md:8}),l.a.createElement(o.a,{item:!0,xs:2,md:2,align:"center"}))))),l.a.createElement(A.a,{variant:"progress",steps:e.flashcards.length,activeStep:n,nextButton:l.a.createElement(v.a,{size:"small",onClick:function(){i((function(e){return e+1}))},disabled:n===e.flashcards.length-1},"Next","rtl"===E.direction?l.a.createElement(H.a,null):l.a.createElement(L.a,null)),backButton:l.a.createElement(v.a,{size:"small",onClick:function(){i((function(e){return e-1}))},disabled:0===n},"rtl"===E.direction?l.a.createElement(L.a,null):l.a.createElement(H.a,null),"Back")}))}var Q=a(62),R=a(11);var U=function(){var e=l.a.useState([{id:1,title:"title",subtitle:"subtitle1",content:"this is some text"},{id:2,title:"title2",subtitle:"subtitle2",content:"this is some more text"},{id:3,title:"title3",subtitle:"3",content:"no3"},{id:4,title:"yay",subtitle:"more4",content:"this is  more text4"},{id:5,title:"5thing",subtitle:"subtitle5",content:"this is some more tex5"},{id:6,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"},{id:7,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"},{id:8,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"},{id:9,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"},{id:10,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"},{id:11,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"},{id:12,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"},{id:13,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"},{id:14,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"},{id:15,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"}]),t=Object(c.a)(e,2),a=t[0],n=t[1];return l.a.createElement("div",null,l.a.createElement(o.a,{container:!0,direction:"column"},l.a.createElement(o.a,{item:!0},l.a.createElement(d,null)),l.a.createElement(o.a,{item:!0},l.a.createElement(Q.a,null,l.a.createElement(R.a,{exact:!0,path:"/edit"},l.a.createElement(I,{flashcards:a,setFlashcards:n})),l.a.createElement(R.a,{exact:!0,path:"/"},l.a.createElement(P,{flashcards:a})))),l.a.createElement(o.a,{item:!0})))};r.a.render(l.a.createElement(U,null),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.5b00ecd8.chunk.js.map