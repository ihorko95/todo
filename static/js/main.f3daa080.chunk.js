(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(7),r=a.n(c),l=(a(14),a(5)),i=a(1),s=a(2),u=a(3),m=a(4),d=function(e){var t=e.todo,a=e.done;return o.a.createElement("div",{className:"row "},o.a.createElement("div",{className:"col-12 col-sm-6 "}," ",o.a.createElement("h1",null,"TODO List")),o.a.createElement("div",{className:"col-12 col-sm-6 align-self-end"},o.a.createElement("h6",{className:"float-sm-right"},t," more to do, ",a," done")))},p=function(){return o.a.createElement("div",null,o.a.createElement("input",{className:"form-control",placeholder:"Search"}))},f=a(8),v=(a(15),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={done:!1,important:!1},e.onTitleClick=function(){e.setState((function(e){return{done:!e.done}}))},e.onMarkClick=function(){e.setState((function(e){return{important:!e.important}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e,t=this.props,a=t.title,n=t.onDeleted,c=this.state,r="",l="";return c.done&&(r=" done"),c.important&&(l=" important"),e="im "+r+l,o.a.createElement("span",{className:"im"},o.a.createElement("span",{className:e,onClick:this.onTitleClick},a),o.a.createElement("div",{className:"btn-group float-right btn-group"},o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm ",onClick:n},o.a.createElement("i",{className:"fa fa-trash-o","aria-hidden":"true"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm ",onClick:this.onMarkClick},o.a.createElement("i",{className:"fa fa-exclamation","aria-hidden":"true"}))))}}]),a}(n.Component)),b=(a(16),function(e){var t=e.todos,a=e.onDeleted,n=t.map((function(e){var t=e.id,n=Object(f.a)(e,["id"]);return o.a.createElement("li",{key:t,className:"list-group-item"}," ",o.a.createElement(v,Object.assign({},n,{onDeleted:function(e){a(t)}})))}));return o.a.createElement("div",null,o.a.createElement("ul",{className:"list-group"},n))}),h=(a(17),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"item-status-filter btn-group float-sm-right"},o.a.createElement("input",{type:"button",className:"btn btn-info",value:"All"}),o.a.createElement("input",{type:"button",className:"btn btn-outline-secondary",value:"Active"}),o.a.createElement("input",{type:"button",className:"btn btn-outline-secondary",value:"Done"}))}}]),a}(n.Component)),E=(a(18),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.addInputText,a=e.changeInputValue,n=e.addNewTodoItem;return o.a.createElement("span",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:""},o.a.createElement("input",{type:"text",className:"form-control",placeholder:"Add new Item",value:t,onChange:a,onKeyDown:function(e){"Enter"===e.key&&n()}})),o.a.createElement("div",{className:" "},o.a.createElement("button",{type:"button",className:"btn btn-success btn-sm form-control ",onClick:n},"ADD")))))}}]),a}(n.Component)),N=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={todoData:[{id:1,title:"Drink coffee",important:!1},{id:2,title:"Make a meal",important:!0},{id:3,title:"Clean the room",important:!1}],addInputText:""},e.changeInputValue=function(t){var a=t.target.value;e.setState((function(){return{addInputText:a}}))},e.addNewTodoItem=function(){var t=e.state.todoData.length+1,a=e.state.addInputText;""!==a&&(e.setState((function(e){var n=e.todoData,o=Object(l.a)(n.slice(0));return o.push({id:t,title:a,important:!1}),{todoData:o}})),e.setState((function(){return{addInputText:""}})))},e.onDeleted=function(t){e.setState((function(e){var a=e.todoData,n=a.findIndex((function(e){return e.id===t}));return{todoData:[].concat(Object(l.a)(a.slice(0,n)),Object(l.a)(a.slice(n+1)))}}))},e}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"mx-auto col-lg-6"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement(d,{todo:1,done:5}))),o.a.createElement("div",{className:"row align-items-center"},o.a.createElement("div",{className:"col-sm"},o.a.createElement(p,null)),o.a.createElement("div",{className:"col-sm"},o.a.createElement(h,null))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement(b,{todos:this.state.todoData,onDeleted:this.onDeleted}))),o.a.createElement(E,{addInputText:this.state.addInputText,changeInputValue:this.changeInputValue,addNewTodoItem:this.addNewTodoItem}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.f3daa080.chunk.js.map