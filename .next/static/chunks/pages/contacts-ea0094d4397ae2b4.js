(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[192],{5385:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/contacts",function(){return r(8931)}])},2773:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(5893),s=r(1686),i=r(3113);let a=(0,s.zo)(i.Z).withConfig({componentId:"sc-6bef4b11-0"})(["display:flex;align-items:",";flex-direction:",";justify-content:",";flex-wrap:",";margin-top:",";margin-bottom:",";padding-top:",";padding-bottom:",";gap:",";text-align:",";"," @media ","{max-width:80%;flex-direction:column;gap:1rem;","}"],e=>e.align||"flex-start",e=>e.flex||"row",e=>e.justify||"flex-start",e=>e.wrap||"wrap",e=>e.mt||"0",e=>e.mb||"0",e=>e.pt||"0",e=>e.pb||"0",e=>e.gap||"0",e=>e.$textAlign||"left",e=>e.$isEqualWidth&&"\n    & > * {\n      flex: 1;\n    }\n  ",e=>e.theme.media.tablet,e=>"center"===e.align?"\n     align-items: center;\n  ":"align-items: stretch;"),o=e=>{let{...t}=e;return(0,n.jsx)(a,{...t})}},1001:(e,t,r)=>{"use strict";r.d(t,{Z:()=>j});var n=r(5893),s=r(9008),i=r.n(s),a=r(7375),o=r(8063),c=r(3214),l=r(1664),d=r.n(l),m=r(6720);let x=()=>(0,n.jsx)("header",{children:(0,n.jsx)(c.Z,{variant:"dark",expand:"lg",children:(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(c.Z.Brand,{as:d(),href:"/",children:"CADEX"}),(0,n.jsx)(c.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,n.jsxs)(c.Z.Collapse,{id:"basic-navbar-nav",children:[(0,n.jsx)(o.Z,{className:"me-auto"}),(0,n.jsx)(o.Z,{children:(0,n.jsx)(o.Z.Link,{as:d(),href:"/contacts",children:(0,n.jsx)(m.Z,{variant:"light",children:"Наши контакты"})})})]})]})})});var h=r(3113);let p=()=>(0,n.jsx)("footer",{children:(0,n.jsx)(h.Z,{children:(0,n.jsx)("p",{children:"Copyright \xa9 2024 - All rights reserved || Designed By: Danil"})})});var g=r(3454);let j=e=>{let{children:t,keywords:r,description:s}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i(),{children:[(0,n.jsx)("meta",{name:"description",content:"".concat(s?", ".concat(s):"")}),(0,n.jsx)("meta",{content:"".concat(r?"русские города, путешествия, туризм, ".concat(r):"")}),(0,n.jsx)("meta",{property:"og:title",content:"CADEX"}),(0,n.jsx)("meta",{property:"og:description",content:s||""}),(0,n.jsx)("meta",{property:"og:url",content:g.env.REACT_APP_CLIENT_URL}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:title",content:"CADEX"}),(0,n.jsx)("meta",{name:"twitter:description",content:s||""}),(0,n.jsx)("title",{children:"CADEX"})]}),(0,n.jsx)(x,{}),(0,n.jsx)("main",{children:t}),(0,n.jsx)(p,{})]})}},7190:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(5893);let s=r(1686).zo.section.withConfig({componentId:"sc-5ccdc246-0"})(["margin-top:",";margin-bottom:",";padding-top:",";padding-bottom:",";background-color:",";"],e=>e.mt||"0",e=>e.mb||"0",e=>e.pt||"7vh",e=>e.pb||"7vh",e=>e.bg||"unset"),i=e=>{let{...t}=e;return(0,n.jsx)(s,{...t})}},3113:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});let n=r(1686).zo.div.withConfig({componentId:"sc-a0afef2c-0"})(["max-width:1220px;width:100%;margin:0 auto;margin-top:",";margin-bottom:",";"],e=>e.mt||"0",e=>e.mb||"0")},8931:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Z});var n=r(5893),s=r(2773),i=r(1001),a=r(7190),o=r(6310),c=r(7536),l=r(7533),d=r(6720),m=r(1686);let x=m.ZP.input.withConfig({componentId:"sc-c44591b-0"})(["padding:8px 12px;border:1px solid #dddddd;border-radius:6px;width:100%;transition:border-color 0.3s;&:focus{border-color:#007bff;outline:none;}&.error{border-color:red;}"]),h=m.ZP.textarea.withConfig({componentId:"sc-c44591b-1"})(["padding:8px 12px;border:1px solid #dddddd;border-radius:6px;width:100%;transition:border-color 0.3s;&:focus{border-color:#007bff;outline:none;}&.error{border-color:red;}"]);var p=r(4280);let g=(0,m.ZP)(p.Z).withConfig({componentId:"sc-94532ec4-0"})(["border:1px solid #ccc;padding:20px;border-radius:8px;background-color:white;display:flex;flex-direction:column;margin-top:2vh;"]),j=(0,m.ZP)(p.Z.Group).withConfig({componentId:"sc-94532ec4-1"})(["margin-bottom:2vh;"]),f=o.Ry().shape({name:o.Z_().required("Поле имя обязательно"),email:o.Z_().email("Неверный адрес электронной почты").required("Поле email обязателен"),message:o.Z_().required("Поле сообщение обязательно")}),b=e=>{let{onSubmit:t}=e,{register:r,handleSubmit:i,formState:{errors:o,isSubmitting:m}}=(0,c.cI)({resolver:(0,l.X)(f)});return(0,n.jsx)(a.Z,{bg:"#f4f3f5",pt:"15vh",children:(0,n.jsxs)(s.Z,{flex:"column",align:"center",children:[(0,n.jsx)("h2",{children:"Оставьте нам сообщение"}),(0,n.jsxs)(g,{onSubmit:i(t),children:[(0,n.jsxs)(j,{controlId:"formName",children:[(0,n.jsx)(g.Label,{children:"Имя"}),(0,n.jsx)(x,{type:"text",...r("name"),className:o.name?"error":""}),o.name&&(0,n.jsx)("div",{className:"error-message",children:o.name.message})]}),(0,n.jsxs)(j,{controlId:"formEmail",children:[(0,n.jsx)(g.Label,{children:"Email"}),(0,n.jsx)(x,{type:"email",...r("email"),className:o.email?"error":""}),o.email&&(0,n.jsx)("div",{className:"error-message",children:o.email.message})]}),(0,n.jsxs)(j,{controlId:"formMessage",children:[(0,n.jsx)(g.Label,{children:"Сообщение"}),(0,n.jsx)(h,{...r("message"),className:o.message?"error":""}),o.message&&(0,n.jsx)("div",{className:"error-message",children:o.message.message})]}),(0,n.jsx)(d.Z,{variant:"primary",type:"submit",disabled:m||Object.keys(o).length>0,children:"Отправить"})]})]})})};var u=r(7294),w=r(3454);let Z=()=>{let[e,t]=(0,u.useState)(""),r=async e=>{try{let r=await fetch("".concat(w.env.REACT_APP_API_URL,"/contact"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!r.ok)throw Error("Network response was not ok");let n=await r.json();t(n.message)}catch(e){console.error("Error submitting form:",e)}};return(0,n.jsxs)(i.Z,{keywords:"контакты, форма обратной связи, связь с нами, поддержка клиентов, \n            услуги, вопросы, отзывы, сообщения, CADEX",description:"Свяжитесь с нами через форму обратной связи. Мы ценим ваше мнение и готовы ответить на ваши вопросы.    Оставьте сообщение, и мы свяжемся с вами в кратчайшие сроки.",children:[e?(0,n.jsx)(a.Z,{bg:"#f4f3f5",pt:"25vh",pb:"25vh",children:(0,n.jsx)(s.Z,{flex:"column",align:"center",children:(0,n.jsxs)("h2",{children:["Thank you for your interest, ",e]})})}):(0,n.jsx)(b,{onSubmit:r}),(0,n.jsx)(a.Z,{children:(0,n.jsx)(s.Z,{mt:"auto",flex:"column",align:"center",children:(0,n.jsx)("h2",{children:"CADEX"})})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[558,738,888,774,179],()=>t(5385)),_N_E=e.O()}]);