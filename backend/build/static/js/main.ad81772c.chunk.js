(window.webpackJsonpphonebook=window.webpackJsonpphonebook||[]).push([[0],{17:function(e,t,n){e.exports=n(43)},22:function(e,t,n){},23:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),u=(n(22),n(16)),l=n(2),i=(n(23),function(e){var t=e.person,n=e.deletePerson;return r.a.createElement("div",{className:"mb-2"},r.a.createElement("div",{className:"row border-list"},r.a.createElement("div",{className:"col-md-10 persons"},t.name,"  ",t.number),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("button",{type:"button",className:"btn btn-danger button-font",onClick:function(){n(t.id)}},"Delete"))))}),s=function(e){var t=e.value,n=e.onChange;return r.a.createElement("div",{className:"filter-input"},r.a.createElement("label",{htmlFor:"filter"},"Filter shown with:"),r.a.createElement("input",{type:"text",value:t,onChange:function(e){n(e.target.value)},placeholder:"Enter any name to check if it exist"}))},m=function(e){var t=e.message,n=e.isError;return t?r.a.createElement("div",{style:{color:n?"red":"green",border:"0.2em solid currentColor",borderRadius:"0.3em",fontSize:"125%",padding:"0.3em 0.5em",backgroundColor:"white",margin:"0.5em 0.5em"}},t):null},d=n(3),f=n.n(d),p=n(5),b=n(4),v=n.n(b),h="/api/persons",E={getAll:function(){return v.a.get(h)},create:function(){var e=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post(h,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(p.a)(f.a.mark((function e(t,n){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=v.a.put("".concat(h,"/").concat(t),n),e.next=3,a;case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),del:function(e){return v.a.delete("".concat(h,"/").concat(e))}};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var O=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)([]),d=Object(l.a)(c,2),f=d[0],p=d[1],b=Object(a.useState)([]),v=Object(l.a)(b,2),h=v[0],O=v[1],w=Object(a.useState)([]),y=Object(l.a)(w,2),N=y[0],j=y[1],k=Object(a.useState)(""),P=Object(l.a)(k,2),x=P[0],S=P[1],C=function(){var e=n.find((function(e){return e.name===f})),t=n.find((function(e){return e.number===h}));if(!e&&!t)return!1;if(e&&!window.confirm("Name ".concat(f," is already in the phonebook.\nDo you want to update the number to ").concat(h,"?")))return!1;if(t&&!window.confirm("Number ".concat(h," is already in the phonebook.\nDo you want to update the name to ").concat(f,"?")))return!1;var a=e||t,r=a.id;return E.update(r,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a,{name:f,number:h})).then((function(e){o(n.map((function(t){return t.id!==r?t:e}))),p(""),O("")})).catch((function(e){console.log(e.response)})),!0};Object(a.useEffect)((function(){E.getAll().then((function(e){o(e.data)})).catch((function(e){console.log(e.response),console.log("error")}))}),[]);var D=n;return N&&(D=n.filter((function(e){return-1!==e.name.toLowerCase().indexOf(N.concat(""))}))),r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Phonebook"),r.a.createElement(m,{message:x}),r.a.createElement("div",{className:"pt-3"},r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),!C()){console.log("addName");var t={name:f,number:h,id:n.length+1};E.create(t).then((function(e){o(n.concat(e)),p(""),O(""),console.log("addedNewName"),S("Successefuly added ".concat(f)),setTimeout((function(){S(null)}),5e3)})).catch((function(e){S("Person validation failed, name or phonenumber must be minimum 5 characters long"),setTimeout((function(){S(null)}),5e3),console.log(e)}))}}},r.a.createElement("div",{className:"form-add"},r.a.createElement("div",{className:"pb-3"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",onChange:function(e){p(e.target.value)},value:f,placeholder:"Enter name..."})),r.a.createElement("div",{className:"pb-3"},r.a.createElement("label",{htmlFor:"number"},"Number"),r.a.createElement("input",{type:"text",onChange:function(e){O(e.target.value)},value:h,placeholder:"Enter number..."}))),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"btn btn-primary button-font"},"Add Name")),r.a.createElement("div",{className:"phonebook-list"},n.map((function(e){return r.a.createElement(i,{key:e.id,person:e,number:e.number,deletePerson:function(e){return function(e){console.log("delete person"),E.del(e).then((function(t){o(n.filter((function(t){return t.id!==e})))})).catch((function(e){console.log(e.response)}))}(e)}})}))))),r.a.createElement("div",{className:"filter"},r.a.createElement("h2",null,"Numbers"),r.a.createElement(s,{onChange:j,value:N}),r.a.createElement("div",null,D.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("div",{className:"row filter-persons"},r.a.createElement("div",{className:"col-md-3"},e.name," "),r.a.createElement("div",{className:"col-md-3"},e.number)))})))))};n(42);c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ad81772c.chunk.js.map