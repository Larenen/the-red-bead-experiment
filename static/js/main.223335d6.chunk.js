(this["webpackJsonpthe-red-bead-experiment"]=this["webpackJsonpthe-red-bead-experiment"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),n=c.n(a),i=c(6),b=c.n(i),r=(c(13),c(2)),d=(c(14),c(7)),j=(c(15),c.p+"static/media/white-bead.018f9fe4.png"),o=c.p+"static/media/red-bead.6a5416e7.png",l=c.p+"static/media/empty-hole.bf1a8e26.png",u=[.2,.8],h=[0,1];function O(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"button",disabled:!e.isEnabled,onClick:function(){e.setBeads(function(){for(var e=[],t=0;t<50;t++)e.push(Object(s.jsx)("img",{className:"bead",alt:"bead",src:0===m()?o:j},t));return e}()),e.setStepPassed(!0)},children:"Losuj"}),Object(s.jsx)("div",{className:"container",children:e.beads})]})}function p(){for(var e=[],t=0;t<50;t++)e.push(Object(s.jsx)("img",{className:"bead",alt:"bead",src:l},t));return e}function m(){for(var e=Math.random(),t=0,c=u.length-1,s=0;s<c;++s)if(e<(t+=u[s]))return h[s];return h[c]}c(16);function f(e){return Object(s.jsxs)("div",{className:"options",children:[Object(s.jsxs)("div",{className:"option",children:[Object(s.jsx)("input",{id:"right"+e.number,type:"checkbox",checked:e.right,onChange:function(t){e.setRight(t.target.checked),e.setStepPassed(t.target.checked||e.left||e.down||e.up)},disabled:!e.isEnabled}),Object(s.jsx)("label",{htmlFor:"right"+e.number,children:"Przechyl w prawo"})]}),Object(s.jsxs)("div",{className:"option",children:[Object(s.jsx)("input",{id:"left"+e.number,type:"checkbox",checked:e.left,onChange:function(t){e.setLeft(t.target.checked),e.setStepPassed(e.right||t.target.checked||e.down||e.up)},disabled:!e.isEnabled}),Object(s.jsx)("label",{htmlFor:"left"+e.number,children:"Przechyl w lewo"})]}),Object(s.jsxs)("div",{className:"option",children:[Object(s.jsx)("input",{id:"down"+e.number,type:"checkbox",checked:e.down,onChange:function(t){e.setDown(t.target.checked),e.setStepPassed(e.right||e.left||t.target.checked||e.up)},disabled:!e.isEnabled}),Object(s.jsx)("label",{htmlFor:"down"+e.number,children:"Przechyl w d\xf3\u0142"})]}),Object(s.jsxs)("div",{className:"option",children:[Object(s.jsx)("input",{id:"up"+e.number,type:"checkbox",checked:e.up,onChange:function(t){e.setUp(t.target.checked),e.setStepPassed(e.right||e.left||e.down||t.target.checked)},disabled:!e.isEnabled}),Object(s.jsx)("label",{htmlFor:"up"+e.number,children:"Przechyl w g\xf3r\u0119"})]})]})}var x=function(){var e=Object(a.useState)(p()),t=Object(r.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(!0),b=Object(r.a)(i,2),l=b[0],u=b[1],h=Object(a.useState)(!1),m=Object(r.a)(h,2),x=m[0],g=m[1],k=Object(a.useState)(!1),S=Object(r.a)(k,2),w=S[0],v=S[1],N=Object(a.useState)(!1),P=Object(r.a)(N,2),y=P[0],z=P[1],E=Object(a.useState)(!1),C=Object(r.a)(E,2),F=C[0],K=C[1],L=Object(a.useState)(!1),M=Object(r.a)(L,2),B=M[0],D=M[1],R=Object(a.useState)(!1),U=Object(r.a)(R,2),J=U[0],A=U[1],I=Object(a.useState)(!1),Z=Object(r.a)(I,2),q=Z[0],G=Z[1],H=Object(a.useState)(!1),Q=Object(r.a)(H,2),T=Q[0],V=Q[1],W=Object(a.useState)(!1),X=Object(r.a)(W,2),Y=X[0],$=X[1],_=Object(a.useState)(!1),ee=Object(r.a)(_,2),te=ee[0],ce=ee[1],se=Object(a.useState)(!1),ae=Object(r.a)(se,2),ne=ae[0],ie=ae[1],be=Object(a.useState)(!1),re=Object(r.a)(be,2),de=re[0],je=re[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Krok pierwszy:"}),Object(s.jsx)("button",{className:"button",disabled:!l,onClick:function(){u(!1),g(!0),n(p()),D(!1),A(!1),G(!1),V(!1),$(!1),ce(!1),ie(!1),je(!1)},children:"Zamieszaj kulki"}),Object(s.jsx)("h1",{children:"Krok drugi:"}),Object(s.jsx)(f,{number:1,isEnabled:x,right:B,setRight:D,left:J,setLeft:A,down:q,setDown:G,up:T,setUp:V,setStepPassed:v}),Object(s.jsx)("h1",{children:"Krok trzeci:"}),Object(s.jsx)(O,{isEnabled:w,beads:c,setBeads:n,setStepPassed:z}),Object(s.jsx)("h1",{h1:!0,children:"Krok czwarty:"}),Object(s.jsx)(f,{number:2,isEnabled:y,right:Y,setRight:$,left:te,setLeft:ce,down:ne,setDown:ie,up:de,setUp:je,setStepPassed:K}),Object(s.jsx)("button",{className:"button",disabled:!F,onClick:function(){n(function(e){for(var t,c,a=Object(d.a)(e),n=0;n<2;n++){var i=(t=0,c=49,Math.floor(Math.random()*(c-t))+t),b=a[i].props.src.includes("media/red");a[i]=Object(s.jsx)("img",{className:"bead",alt:"bead",src:b?j:o},i)}return a}(c)),u(!0),g(!1),v(!1),z(!1),K(!1)},children:"Potrz\u0105\u015bnij tack\u0105"})]})};b.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.223335d6.chunk.js.map