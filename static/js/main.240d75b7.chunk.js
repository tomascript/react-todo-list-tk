(this["webpackJsonpreact-todo-list-tk"]=this["webpackJsonpreact-todo-list-tk"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(1),s=c.n(o),r=c(7),a=c.n(r),i=(c(13),c(2)),d=s.a.createContext();var u=function(e){var t=Object(o.useState)([]),c=Object(i.a)(t,2),s=c[0],r=c[1],a=Object(o.useState)(0),u=Object(i.a)(a,2),l=u[0],j=u[1];Object(o.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todos")),t=JSON.parse(localStorage.getItem("done"));e&&(r(e),j(+t))}),[]),Object(o.useEffect)((function(){s.length>0&&(localStorage.setItem("todos",JSON.stringify(s)),localStorage.setItem("done",JSON.stringify(l)))}),[s,l]);var f={todos:s,setTodos:r,done:l,setDone:j};return Object(n.jsx)(d.Provider,{value:f,children:e.children})};var l=function(){var e=Object(o.useContext)(d),t=e.todos.length,c=t>0?Object(n.jsxs)("span",{children:[e.done,"/",t]}):null;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("i",{className:"fas fa-trash-alt crimson",onClick:function(){e.setDone(0),e.setTodos([]),localStorage.removeItem("todos"),localStorage.removeItem("done")},id:"delete-all"}),Object(n.jsxs)("header",{className:"Header",children:["Todo List ",c]})]})},j=c(3);var f=function(){var e=Object(o.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(o.useContext)(d),a=r.todos,u=r.setTodos,l=Object(o.useRef)();return Object(o.useEffect)((function(){l.current.focus()}),[a]),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("form",{className:"Inputform",onSubmit:function(e){e.preventDefault();var t={text:c,id:Math.random(),completed:!1};s(""),u([].concat(Object(j.a)(a),[t]))},children:Object(n.jsx)("input",{type:"text",className:"Input",placeholder:"Type to-do item here...",ref:l,autoComplete:"off",autoFocus:!0,spellCheck:!1,value:c,onChange:function(e){e.preventDefault(),s(e.target.value)}})})})};var O=function(e){return Object(n.jsx)("div",{children:"delete"===e.type?Object(n.jsx)("i",{className:"fas fa-trash-alt crimson",onClick:function(){return e.clicked(e.id)}}):Object(n.jsx)("i",{className:"fas fa-pencil-alt orange",onClick:e.clicked})})};var b=function(e){var t=Object(o.useState)(e.todo.text),c=Object(i.a)(t,2),s=c[0],r=c[1],a=Object(o.useContext)(d),u=a.todos,l=a.setTodos,f=Object(o.useRef)();return Object(o.useEffect)((function(){f.current.select()}),[]),Object(n.jsx)("form",{onSubmit:function(t){if(t.preventDefault(),""!==s){var c=Object(j.a)(u).map((function(t){return t.id===e.todo.id&&(t.text=s),t}));l(c),e.setEdited(!1)}},children:Object(n.jsx)("input",{type:"text",className:"Edit",ref:f,autoFocus:!0,value:s,onChange:function(e){return r(e.target.value)},onKeyDown:function(t){27===t.keyCode&&e.setEdited(!1)}})})};var m=function(e){var t=Object(o.useState)(!1),c=Object(i.a)(t,2),s=c[0],r=c[1],a=Object(o.useState)(!1),d=Object(i.a)(a,2),u=d[0],l=d[1],j=e.todo.completed?"item-container cross-checked":"item-container";return Object(n.jsxs)("li",{className:"Item",onMouseOver:function(){return l(!0)},onMouseLeave:function(){return l(!1)},children:[Object(n.jsx)("div",{className:j,onClick:function(){return e.clicked(e.todo.id)},children:s?Object(n.jsx)(b,{todo:e.todo,setEdited:r}):e.todo.text}),Object(n.jsxs)("span",{className:u?"icon-container show-icons":"icon-container",children:[Object(n.jsx)(O,{type:"delete",clicked:e.removed,id:e.todo.id}),Object(n.jsx)(O,{type:"edit",clicked:function(){return r(!s)}})]})]})};var x=function(){var e=Object(o.useContext)(d),t=e.todos,c=e.setTodos,s=e.done,r=e.setDone,a=function(e){var n=t.findIndex((function(t){return t.id===e})),o=Object(j.a)(t);o[n].completed=!o[n].completed,o[n].completed?r(s+1):r(s-1),c(o)},i=function(e){var n=t.filter((function(t){return t.completed&&t.id===e&&r(s-1),t.id!==e}));c(n)},u=t.map((function(e){return Object(n.jsx)(m,{todo:e,clicked:a,removed:i},e.id)}));return Object(n.jsx)("ul",{className:"List",children:u})};var v=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(u,{children:[Object(n.jsx)(l,{}),Object(n.jsxs)("main",{children:[Object(n.jsx)(f,{}),Object(n.jsx)(x,{})]})]})})};a.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.240d75b7.chunk.js.map