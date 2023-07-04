"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[131],{543:function(n,t,e){e.d(t,{W:function(){return c}});var a="Container_container__VVOCq",r=e(184);function c(n){var t=n.children;return(0,r.jsx)("div",{className:a,children:t})}},131:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var a=e(861),r=e(942),c=e(413),s=e(439),u=e(757),i=e.n(u),o="ContactForm_form__dhl+T",l="ContactForm_label__-cVXI",m="ContactForm_input__Bl93P",f="ContactForm_button__eSwX9",d=e(791),h=e(434),p=e(11),_=e(184);function x(){var n=(0,h.v9)((function(n){return n.contacts.contacts.items})),t=(0,h.I0)(),e=(0,d.useState)({name:"",number:""}),u=(0,s.Z)(e,2),x=u[0],v=u[1],b=function(n){var t=n.currentTarget,e=t.name,a=t.value;v((function(n){return(0,c.Z)((0,c.Z)({},n),{},(0,r.Z)({},e,a))}))},j=function(){var e=(0,a.Z)(i().mark((function e(a){var r,c,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),r=x.name,c=x.number,!n.find((function(n){return n.name===r}))){e.next=5;break}return alert("".concat(r," is already in contacts.")),e.abrupt("return");case 5:return s={name:r,number:c},e.next=8,t((0,p.je)(s));case 8:return e.next=10,t((0,p.m$)());case 10:C();case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),C=function(){v({name:"",number:""})};return(0,_.jsxs)("form",{className:o,onSubmit:j,children:[(0,_.jsxs)("label",{className:l,children:["\u0406\u043c'\u044f",(0,_.jsx)("input",{className:m,value:x.name,onChange:b,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,_.jsxs)("label",{className:l,children:["\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443",(0,_.jsx)("input",{className:m,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:x.number,onChange:b,required:!0})]}),(0,_.jsx)("button",{className:f,type:"submit",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043d\u043e\u0432\u0438\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]})}var v="ContactList_list__csErn",b="ContactList_item__EZYHO",j="ContactList_contact_name__Jt8ih",C="ContactList_deleteButton__3hT3n";function N(){var n=(0,h.v9)((function(n){return n.contacts.contacts.items})),t=(0,h.v9)((function(n){return n.contacts.filter})),e=(0,h.I0)(),r=function(){var n=(0,a.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e((0,p.xX)(t));case 2:return n.next=4,e((0,p.m$)());case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),c=function(n,t){return n.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}))}(n,t);return(0,d.useEffect)((function(){e((0,p.m$)())}),[e]),(0,_.jsx)("ul",{className:v,children:c.map((function(n){var t=n.id,e=n.name,a=n.number;return(0,_.jsxs)("li",{className:b,children:[(0,_.jsx)("p",{className:j,children:e}),(0,_.jsx)("p",{children:a}),(0,_.jsx)("button",{className:C,type:"button",onClick:function(){return r(t)},children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]},t)}))})}var w=e(543),g=e(661);function y(){var n=(0,h.v9)((function(n){return n.contacts.filter})),t=(0,h.I0)();return(0,_.jsx)("label",{className:"filter__label",children:(0,_.jsx)("input",{className:"filter__input",type:"text",value:n,onChange:function(n){t((0,g.Tv)(n.currentTarget.value))}})})}var k=function(){var n=(0,h.v9)((function(n){return n.contacts.contacts.items}));return(0,_.jsxs)(w.W,{children:[(0,_.jsx)("h2",{className:"contactsTitle",children:"\u041a\u043d\u0438\u0433\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432"}),(0,_.jsx)(x,{}),(0,_.jsx)("h2",{className:"contactsTitle",children:"\u0417\u043d\u0430\u0439\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"}),(0,_.jsx)(y,{}),0===n.length?(0,_.jsx)("p",{className:"emptyMessage",children:"\u0412\u0430\u0448\u0430 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u043a\u043d\u0438\u0433\u0430 \u043f\u0443\u0441\u0442\u0430. \u0414\u043e\u0434\u0430\u0439\u0442\u0435, \u0431\u0443\u0434\u044c-\u043b\u0430\u0441\u043a\u0430, \u043a\u043e\u043d\u0442\u0430\u043a\u0442"}):(0,_.jsx)(N,{})]})}}}]);
//# sourceMappingURL=131.9304fd2e.chunk.js.map