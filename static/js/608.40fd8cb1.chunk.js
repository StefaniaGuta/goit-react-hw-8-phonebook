"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[608],{7608:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(9439),r=n(2791),s={form:"ContactForm_form__dhl+T",form__label:"ContactForm_form__label__8W82B",form__input:"ContactForm_form__input__VGD4-",form__btn:"ContactForm_form__btn__WXQ4e"},o=n(4420),c=n(3553),l=function(e){return e.contacts.items},i=function(e){return e.filter},u=(0,c.P1)([l,i],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),m=n(8361),_=n(184),f=function(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),n=t[0],c=t[1],i=(0,r.useState)(""),u=(0,a.Z)(i,2),f=u[0],d=u[1],h=(0,o.v9)(l),b=(0,o.I0)(),p=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":c(a);break;case"number":d(a);break;default:return}};return(0,_.jsx)("section",{className:s.form,children:(0,_.jsxs)("form",{className:s.form__container,onSubmit:function(e){(e.preventDefault(),h.some((function(e){return e.name.toLowerCase().trim()===n.toLowerCase().trim()})))?alert("".concat(n," is already in contacts")):10===f.length?h.some((function(e){return e.number.trim()===f.trim()}))?alert("".concat(f," is already in contacts")):(b((0,m.uK)({name:n,number:f})),c(""),d("")):alert("Your contact need to have 10 numbers")},children:[(0,_.jsx)("label",{className:s.form__label,children:"Name"}),(0,_.jsx)("input",{type:"text",name:"name",value:n,className:s.form__input,onChange:p,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Enter name",required:!0}),(0,_.jsx)("label",{className:s.form__label,children:"Number"}),(0,_.jsx)("input",{type:"tel",name:"number",value:f,className:s.form__input,onChange:p,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Enter phone number",required:!0}),(0,_.jsx)("button",{className:s.form__btn,type:"submit",children:"Add contact"})]})})},d={List:"ContactList_List__gG+lN",ContactsList:"ContactList_ContactsList__ps99x",button:"ContactList_button__7kL4l"},h=function(){var e=(0,o.v9)(u),t=(0,o.I0)();return(0,_.jsx)("ul",{className:d.list,children:e.map((function(e){var n=e.id,a=e.name,r=e.number;return(0,_.jsxs)("li",{className:d.ContactsList,children:[a,": ",r,(0,_.jsx)("button",{className:d.button,type:"button",onClick:function(){return t((0,m.GK)(n))},children:"Delete"})]},n)}))})},b=n(7574),p="Filter_text__uqQRu",C="Filter_filerNumber__P+Kgl",x=function(){var e=(0,o.v9)(i),t=(0,o.I0)();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("label",{className:p,children:"You can find contacts by name or phone number"}),(0,_.jsx)("input",{className:C,value:e,type:"text",name:"filter",placeholder:"Enter contact name",onChange:function(e){var n=e.target.value.toLowerCase();t((0,b.M6)(n))}})]})},N="PageContacts_PageContactSection__eZzbp",j="PageContacts_PageContactTitle__I60-4";var v=function(){return(0,_.jsxs)("section",{className:N,children:[(0,_.jsx)("h1",{className:j,children:"YOUR PHONEBOOK"}),(0,_.jsx)("h2",{children:"Add new contact"}),(0,_.jsx)(f,{}),(0,_.jsx)(x,{}),(0,_.jsx)(h,{})]})}}}]);
//# sourceMappingURL=608.40fd8cb1.chunk.js.map