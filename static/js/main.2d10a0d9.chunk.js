(this.webpackJsonpflash=this.webpackJsonpflash||[]).push([[0],{58:function(e,t,a){e.exports=a(68)},68:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),i=a.n(r),c=a(13),o=a(111),u=a(98),m=a(102),s=a(69),d=function(){return l.a.createElement(u.a,{position:"static"},l.a.createElement(m.a,null,l.a.createElement(s.a,{variant:"h4",component:"h1"},"Flash")))},f=a(108),E=a(109),h=a(110),b=a(106),p=a(112),v=a(48),x=a.n(v),S=a(107),g=a(115),y=a(103),C=a(104),j=a(113),k=a(105);var D=function(e){var t=l.a.useState(e.flashcard.content),a=Object(c.a)(t,2),n=a[0],r=a[1];return l.a.createElement(g.a,{open:e.open,onClose:e.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t,e.flashcard.id,n)}},l.a.createElement(y.a,{id:"alert-dialog-title"},"Edit"),l.a.createElement(C.a,null,l.a.createElement(j.a,{autoFocus:!0,value:n,label:"Content",variant:"outlined",id:"content",fullWidth:!0,onChange:function(e){return r(e.target.value)}})),l.a.createElement(k.a,null,l.a.createElement(b.a,{onClick:function(){e.handleClose(),r(e.flashcard.content)},color:"primary"},"Cancel"),l.a.createElement(b.a,{type:"submit",color:"primary",autoFocus:!0},"Save"))))},O=Object(S.a)({root:{minWidth:275},title:{fontSize:14},pos:{marginBottom:12}});var F=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),r=a[0],i=a[1],u=function(){i(!1)},m=O();return l.a.createElement("div",null,l.a.createElement(f.a,{className:m.root},l.a.createElement(E.a,null,l.a.createElement(s.a,{variant:"h5",component:"h2"},e.flashcard.title),l.a.createElement("br",null),l.a.createElement(s.a,{className:m.pos,color:"textSecondary"},e.flashcard.subtitle),l.a.createElement(s.a,{variant:"body2",component:"p"},e.flashcard.content)),l.a.createElement(h.a,null,l.a.createElement(o.a,{container:!0},l.a.createElement(o.a,{item:!0,xs:2,md:2,align:"center"},l.a.createElement(b.a,{variant:"outlined",color:"primary",size:"small",onClick:function(){i(!0)}},"Edit")),l.a.createElement(o.a,{item:!0,xs:8,md:8}),l.a.createElement(o.a,{item:!0,xs:2,md:2,align:"center"},l.a.createElement(p.a,{variant:"contained",color:"secondary","aria-label":"delete",onClick:function(){return e.handleDelete(e.flashcard.id)}},l.a.createElement(x.a,null)))))),l.a.createElement(D,{open:r,handleClose:u,onSubmit:function(t,a,n){t.preventDefault(),e.onSubmit(a,n),u()},flashcard:e.flashcard}))};var w=function(e){var t=e.flashcards.map((function(t){return l.a.createElement(o.a,{item:!0,xs:12,md:6,lg:4},l.a.createElement(F,{flashcard:t,onSubmit:function(t,a){return e.handleSubmit(t,a)},handleDelete:function(t){return e.handleDelete(t)}}))}));return l.a.createElement(o.a,{container:!0,spacing:2},t)};var z=function(){var e=l.a.useState([{id:1,title:"title",subtitle:"subtitle1",content:"this is some text"},{id:2,title:"title2",subtitle:"subtitle2",content:"this is some more text"},{id:3,title:"title3",subtitle:"3",content:"no3"},{id:4,title:"yay",subtitle:"more4",content:"this is  more text4"},{id:5,title:"5thing",subtitle:"subtitle5",content:"this is some more tex5"},{id:6,title:"6a",subtitle:"subtitle6",content:"this is some more tex6"}]),t=Object(c.a)(e,2),a=t[0],n=t[1];return l.a.createElement("div",null,l.a.createElement(o.a,{container:!0,direction:"column"},l.a.createElement(o.a,{item:!0},l.a.createElement(d,null)),l.a.createElement(o.a,{item:!0,container:!0},l.a.createElement(o.a,{item:!0,xs:1}),l.a.createElement(o.a,{item:!0,xs:10},l.a.createElement(w,{flashcards:a,handleSubmit:function(e,t){return function(e,t){n((function(a){return a.map((function(a){return a.id===e&&(a.content=t),a}))}))}(e,t)},handleDelete:function(e){return function(e){n((function(t){return t.filter((function(t){return t.id!==e}))}))}(e)}})),l.a.createElement(o.a,{item:!0,xs:1}))))};i.a.render(l.a.createElement(z,null),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.2d10a0d9.chunk.js.map