(this.webpackJsonph2=this.webpackJsonph2||[]).push([[0],{11:function(e,t,n){e.exports=n(25)},16:function(e,t,n){},2:function(e,t,n){e.exports={form:"ContactForm_form__GrARc","label-name":"ContactForm_label-name__h42Nr"}},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),c=n.n(l),o=(n(16),n(7)),i=n(8),m=n(9),u=n(10),s=n(2),d=n.n(s),h=function(e){var t=e.handleChangeName,n=e.nameValue,a=e.numberValue,l=e.handleChangeNumber,c=e.addToContacts,o=e.contactsId;return r.a.createElement("div",{className:d.a.form},r.a.createElement("form",null,r.a.createElement("label",{className:d.a["label-name"],htmlFor:o},"Name",r.a.createElement("input",{name:"name",id:o,type:"text",value:n,onChange:t})),r.a.createElement("label",{className:d.a["label-name"]},"Number",r.a.createElement("input",{name:"number",type:"text",value:a,onChange:l})),r.a.createElement("div",null,r.a.createElement("button",{type:"text",onClick:c},"Add contact"))))},C=function(e){var t=e.handleChangeNameFilter,n=e.filterContacts;return r.a.createElement("div",null,r.a.createElement("p",null,"Find contacts by name"),r.a.createElement("input",{onChange:t,onInputCapture:n}))},f=n(3),b=n.n(f),p=function(e){var t=e.contacts,n=e.filterContacts,a=e.deleteContact;return r.a.createElement("div",null,r.a.createElement("ul",null,n.length?n.map((function(e){return r.a.createElement("li",{key:e.name},e.name," : ",e.number,r.a.createElement("button",{type:"button",id:e.id,className:b.a.delete,onClick:a},"Delete"))})):t.map((function(e){return r.a.createElement("li",{key:e.name},e.name," : ",e.number,r.a.createElement("button",{type:"button",id:e.id,className:b.a.delete,onClick:a},"Delete"))}))))},g=n(4),v=n.n(g),E=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filterContacts:[],filter:"",name:"",number:""},e.addToContacts=function(t){t.preventDefault();var n=e.state,a=n.contacts,r=n.name,l=n.number;!0!==e.isContact()?r.length&&l.length?a.push({name:r,number:l,id:v.a.generate()}):alert("Enter name and number"):alert("".concat(r," is already in contacts")),e.setState((function(e){return{contacts:e.contacts}})),e.setState({name:"",number:""})},e.handleChangeName=function(t){e.setState({name:t.target.value})},e.handleChangeNumber=function(t){e.setState({number:t.target.value})},e.handleChangeNameFilter=function(t){e.setState({filter:t.target.value})},e.filterContacts=function(t){t.preventDefault(),t.persist();var n=e.state.contacts;e.setState((function(){return{filterContacts:n.filter((function(e){return e.name.toLowerCase().includes(t.target.value)||e.number.toLowerCase().includes(t.target.value)}))}}))},e.deleteContact=function(t){var n=e.state.contacts,a=t.target.attributes.id.value,r=n.filter((function(e){return e.id!==a}));e.setState({contacts:r,filterContacts:r})},e.isContact=function(t){var n=e.state,a=n.name;return n.contacts.some((function(e){return e.name.toLocaleLowerCase()===a.toLocaleLowerCase()}))},e.contactsId=v.a.generate(),e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=e.contacts,l=e.filter,c=e.filterContacts;return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(h,{handleChangeName:this.handleChangeName,nameValue:t,numberValue:n,handleChangeNumber:this.handleChangeNumber,addToContacts:this.addToContacts,contactsId:this.contactsId,isContact:this.isContact}),r.a.createElement("h2",null,"Contacts"),r.a.createElement(C,{handleChangeNameFilter:this.handleChangeNameFilter,filterContacts:this.filterContacts,contacts:a,filter:l}),r.a.createElement(p,{contacts:a,filterContacts:c,deleteContact:this.deleteContact}))}}]),n}(a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))},3:function(e,t,n){e.exports={delete:"ContactList_delete__Qp8I6"}}},[[11,1,2]]]);
//# sourceMappingURL=main.7d726505.chunk.js.map