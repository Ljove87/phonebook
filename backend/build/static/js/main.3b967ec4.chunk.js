(window.webpackJsonpphonebook=window.webpackJsonpphonebook||[]).push([[0],{17:function(e,n,t){e.exports=t(42)},22:function(e,n,t){},23:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(14),c=t.n(a),u=(t(22),t(15)),l=t(2),i=(t(23),function(e){var n=e.person,t=e.deletePerson;return o.a.createElement("div",{key:n.id},n.id," ",n.name," ",n.number,o.a.createElement("button",{type:"button",onClick:function(){t(n.id)}}," Delete"))}),s=function(e){var n=e.value,t=e.onChange;return o.a.createElement("div",null,"filter shown with: ",o.a.createElement("input",{value:n,onChange:function(e){t(e.target.value)}}))},f=function(e){var n=e.message;return null===n?null:o.a.createElement("div",{className:"error"},n)},d=t(4),m=t.n(d),p=t(16),b=t(3),g=t.n(b),h="/api/persons",v={getAll:function(){return g.a.get(h)},create:function(e){return g.a.post(h,e)},update:function(){var e=Object(p.a)(m.a.mark((function e(n,t){var r,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=g.a.put("".concat(h,"/").concat(n),t),e.next=3,r;case 3:return o=e.sent,e.abrupt("return",o.data);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),delPerson:function(e){return g.a.delete("".concat(h,"/").concat(e))}};function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var E=function(){var e=Object(r.useState)([]),n=Object(l.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)([]),d=Object(l.a)(c,2),m=d[0],p=d[1],b=Object(r.useState)([]),g=Object(l.a)(b,2),h=g[0],E=g[1],w=Object(r.useState)([]),y=Object(l.a)(w,2),j=y[0],P=y[1],k=Object(r.useState)(""),D=Object(l.a)(k,2),N=D[0],S=D[1],C=function(){var e=t.find((function(e){return e.name===m})),n=t.find((function(e){return e.number===h}));if(!e&&!n)return!1;if(e&&!window.confirm("Name ".concat(m," is already in the phonebook.\nDo you want to update the number to ").concat(h,"?")))return!1;if(n&&!window.confirm("Number ".concat(h," is already in the phonebook.\nDo you want to update the name to ").concat(m,"?")))return!1;var r=e||n,o=r.id;return console.log("UpdatePersons",r),v.update(o,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(t,!0).forEach((function(n){Object(u.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},r,{name:m,number:h})).then((function(e){a(t.map((function(n){return n.id!==o?n:e}))),p(""),E("")})).catch((function(e){console.log(e.response)})),!0};Object(r.useEffect)((function(){console.log("UseEffect, getAllRequest"),v.getAll().then((function(e){a(e.data),console.log("promise fullfiled")})).catch((function(e){console.log(e.response),console.log("error")}))}),[]);var A=t;return j&&(A=t.filter((function(e){return-1!==e.name.toLocaleLowerCase().indexOf(j.concat(""))}))),o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(f,{message:N}),o.a.createElement(s,{onChange:P,value:j}),o.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),!C()){console.log("addName");var n={name:m,number:h,id:t.length+1};v.create(n).then((function(e){S("undefined"===typeof e?["Number already deleted, please refresh to reflect",!1]:["Added new name ",m," with a number",h,!0]),a(t.map((function(n){return n.id===e.id?e:n}))),a(t.concat(e.data)),p(""),E(""),console.log("addedNewName")})).catch((function(e){console.log(e.response)}))}}},o.a.createElement("div",null,"name: ",o.a.createElement("input",{onChange:function(e){p(e.target.value)},value:m})),o.a.createElement("div",null,"number: ",o.a.createElement("input",{onChange:function(e){E(e.target.value)},value:h})),o.a.createElement("div",null,t.map((function(e){return o.a.createElement(i,{key:e.id,person:e,number:e.number,deletePerson:function(e){return function(e){console.log("delete person"),v.delPerson(e).then((function(n){a(t.filter((function(n){return n.id!==e}))),console.log(n),console.log("deletePersonId")})).catch((function(e){console.log(e.response)}))}(e)}})}))),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"Add"))),o.a.createElement("h2",null,"Numbers"),o.a.createElement("div",null,A.map((function(e){return o.a.createElement("div",{key:e.id},e.id,".",e.name," /",e.number)}))),o.a.createElement("p",null))};c.a.render(o.a.createElement(E,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.3b967ec4.chunk.js.map