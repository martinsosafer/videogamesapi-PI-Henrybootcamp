(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{42:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(27),i=n.n(c),o=(n(53),n(54),n(12)),s=n(6),l=(n(55),n(0));function d(){return Object(l.jsxs)("div",{id:"background",children:[Object(l.jsx)("h1",{id:"texto",children:" Welcome to the Videogames API !"}),Object(l.jsx)(o.b,{to:"/home",children:Object(l.jsxs)("h1",{children:[" ",Object(l.jsx)("button",{id:"boton",children:"Enter \ud83c\udfae  "})]})})]})}var j=n(16),u=n(7),b=n(15),O=n(22),h=n(23);function p(){return function(){var e=Object(O.a)(Object(b.a)().mark((function e(t){var n;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("http://localhost:3001/videogames");case 3:return n=e.sent,e.abrupt("return",t({type:"GET_VIDEOGAMES",payload:n.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log("Error en getVideogames/actions",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}function g(){return function(){var e=Object(O.a)(Object(b.a)().mark((function e(t){var n;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("http://localhost:3001/genres");case 3:return n=e.sent,e.abrupt("return",t({type:"GET_GENRES",payload:n.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log("Error en getGenres/actions",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}n(67);var m=function(e){var t=e.name,n=e.image,r=e.genres,a=e.rating,c=e.id,i=(e.platforms,e.released,e.description,e.background_image);return Object(l.jsxs)("div",{id:"card",children:[Object(l.jsx)("h3",{children:t}),Object(l.jsx)("img",{src:n||i,alt:"Img not found",width:"300px",height:"200px"}),Object(l.jsxs)("h5",{children:["\ud83e\udde9 Genre: ",null===r||void 0===r?void 0:r.join(",  ")]}),Object(l.jsxs)("h5",{children:["\ud83c\udf1f Rating: ",a]}),Object(l.jsx)(o.b,{to:"/details/".concat(c),children:Object(l.jsx)("button",{id:"MoreInfo",children:"More information.. \u27a1\ufe0f"})})]})};n(42);function f(e){for(var t=e.videogamePerPage,n=e.allVideogames,r=e.paginado,a=[],c=1;c<=Math.ceil(n/t);c++)a.push(c);return Object(l.jsx)("nav",{children:Object(l.jsx)("ul",{id:"ul",children:a&&a.map((function(e){return Object(l.jsx)("button",{onClick:function(){return r(e)},id:"pag",children:e},e)}))})})}n(68);function v(){var e=Object(u.b)(),t=Object(r.useState)(""),n=Object(j.a)(t,2),a=n[0],c=n[1];function i(t){t.preventDefault(),""!==a&&(e(function(e){return function(){var t=Object(O.a)(Object(b.a)().mark((function t(n){var r;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("http://localhost:3001/videogames?name=".concat(e));case 3:return r=t.sent,t.abrupt("return",n({type:"GET_NAME_VIDEOGAMES",payload:r.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(a)),c(""))}return Object(l.jsxs)("div",{id:"search",children:[Object(l.jsx)("input",{id:"searchTerm",type:"text",placeholder:"Search...",value:a,onChange:function(e){return function(e){e.preventDefault(),c(e.target.value)}(e)}}),Object(l.jsx)("button",{id:"searchButton",type:"submit",onClick:function(e){return i(e)},children:"Search"})]})}function x(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{id:"loading",src:"https://64.media.tumblr.com/9976fc3fd9079bb417c8202faa01a733/tumblr_nkn9wvpOr11unqiwko1_400.gif",alt:"Loading"}),Object(l.jsx)("h1",{children:"Loading..."})]})}function E(){return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{id:"h1notfound",children:"...Videogame Not Found..."}),Object(l.jsx)("img",{id:"notfound",src:"https://i.pinimg.com/originals/78/3a/be/783abe099d970302318ab45598f5eddf.gif",alt:"Videogame Not Found",width:"330px",height:"350px"})]})})}n(69);function y(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.videogames})),n=Object(u.c)((function(e){return e.allgenres})),a=Object(r.useState)(!0),c=Object(j.a)(a,2),i=c[0],s=c[1],d=Object(r.useState)(""),b=Object(j.a)(d,1)[0],O=Object(r.useState)(1),h=Object(j.a)(O,2),y=h[0],C=h[1],R=Object(r.useState)(15),S=Object(j.a)(R,1)[0],G=y*S,_=G-S,D=t.slice(_,G);function T(t){var n;e((n=t.target.value,console.log(n),{type:"FILTER_BY_GENRES",payload:n})),C(1)}return t.length>0&&i&&s(!1),Object(r.useEffect)((function(){e(p()),e(g())}),[e]),Object(l.jsxs)("div",{id:"HomeGral",children:[Object(l.jsx)("h1",{id:"titulo",children:"GAME WORLD"}),Object(l.jsx)(o.b,{to:"/videogames",children:Object(l.jsx)("button",{id:"btnCrea",children:"Create Videogame"})}),Object(l.jsx)("button",{id:"reload",onClick:function(t){!function(t){t.preventDefault(),e(p())}(t)},children:"Reload Videogames"}),Object(l.jsxs)("div",{children:[Object(l.jsx)(v,{}),Object(l.jsx)("div",{onChange:function(e){return T(e)},children:Object(l.jsxs)("select",{id:"select",children:[Object(l.jsx)("option",{value:"All",children:"All Genres"}),null===n||void 0===n?void 0:n.map((function(e){return Object(l.jsx)("option",{value:e.name,children:e.name},e.id)}))]})}),Object(l.jsxs)("select",{id:"select",onChange:function(t){return function(t){t.preventDefault(),e({type:"ORDER_BY_NAME",payload:t.target.value}),C(1),b("Ordenado ".concat(t.target.value))}(t)},children:[Object(l.jsx)("option",{children:"Order"}),Object(l.jsx)("option",{value:"asc",children:"Ascending"}),Object(l.jsx)("option",{value:"desc",children:"Descending"})]}),Object(l.jsxs)("select",{id:"select",onChange:function(t){return function(t){t.preventDefault(),e({type:"ORDER_BY_RATING",payload:t.target.value}),C(1),b(t.target.value)}(t)},children:[Object(l.jsx)("option",{children:"Select Rating"}),Object(l.jsx)("option",{value:"least",children:"Least Popular"}),Object(l.jsx)("option",{value:"most",children:"Most Popular"})]}),Object(l.jsxs)("select",{id:"select",onChange:function(t){return function(t){t.preventDefault(),e({type:"FILTER_CREATED",payload:t.target.value})}(t)},children:[Object(l.jsx)("option",{value:"all",children:"All Video Games"}),Object(l.jsx)("option",{value:"api",children:"Existing"}),Object(l.jsx)("option",{value:"created",children:"Created"})]}),Object(l.jsx)("div",{id:"cardHome",children:(null===D||void 0===D?void 0:D.length)>0&&!i?null===D||void 0===D?void 0:D.map((function(e){return Object(l.jsx)(m,{id:e.id,name:e.name,image:e.image?e.image:e.background_image,genres:e.genres,rating:e.rating,platforms:e.platforms,released:e.released,description:e.description},e.id)})):!D.length>0&&i?Object(l.jsx)(x,{}):Object(l.jsx)(E,{})}),Object(l.jsx)(f,{videogamePerPage:S,allVideogames:t.length,paginado:function(e){C(e)},currentPage:y}),Object(l.jsxs)("button",{id:"pag",onClick:function(e){return function(e){e.preventDefault(),C(y-1)}(e)},disabled:y<=1,children:[" ","Prev"," "]}),Object(l.jsxs)("button",{id:"pag",onClick:function(e){return function(e){e.preventDefault(),C(y+1)}(e)},disabled:D.length<15,children:[" ","Next"," "]})]})]})}var C=n(17),R=n(20),S=n(3);n(70);var G=function(){var e=Object(u.b)(),t=Object(s.f)(),n=Object(u.c)((function(e){return e.allgenres})),a=Object(u.c)((function(e){return e.platforms})),c=Object(u.c)((function(e){return e.allVideogames})),i=Object(r.useState)({}),d=Object(j.a)(i,2),m=d[0],f=d[1],v=/(http(s?):)([/|.|\w|\s|-])*.(?:jpg|gif|png)/;function x(e){var t={};return e.name.trim()?c.find((function(t){return t.name.toLowerCase().trim()===e.name.toLocaleLowerCase().trim()}))?t.name="The ".concat(e.name," already exists"):"number"===e.description||e.description.length<10||""===e.description.trim()?t.description="Enter a correct description":""===e.released.trim()?t.released="Enter a date":e.image&&v.test(e.image)?e.released<"1950 - 01- 01"?t.released="The date cannot be less than 1950 - 01- 01":""===e.rating||e.rating<1||e.rating>6?t.rating="Enter a rating":0===e.genres.length?t.genres="Select one or more genres":0===e.platforms.length&&(t.platforms="Select one or more platforms"):t.image="This is not a valid URL":t.name="Enter a correct name",t}var E=Object(r.useState)({name:"",image:"",description:"",released:"",rating:"",genres:[],platforms:[]}),y=Object(j.a)(E,2),G=y[0],_=y[1];function D(e){_(Object(S.a)(Object(S.a)({},G),{},Object(R.a)({},e.target.name,e.target.value))),f(x(Object(S.a)(Object(S.a)({},G),{},Object(R.a)({},e.target.name,e.target.value))))}return Object(r.useEffect)((function(){e(g()),e(p())}),[e]),Object(l.jsxs)("div",{id:"generalForm",children:[Object(l.jsx)("h2",{id:"h2",children:"Create your Video Game"}),Object(l.jsxs)("form",{id:"form",onSubmit:function(n){n.preventDefault(),f(x(G));var r,a=x(G);0!==Object.values(a).length||(e((r=G,function(){var e=Object(O.a)(Object(b.a)().mark((function e(t){var n;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("http://localhost:3001/videogames",r);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),alert("A new VideoGame has been created"),_({name:"",image:"",description:"",released:"",rating:"",genres:[],platforms:[]}),t.push("/home"))},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{id:"label",children:"Name: "}),Object(l.jsx)("input",{id:"input",type:"text",value:G.name,name:"name",onChange:D}),m.name&&Object(l.jsx)("h4",{id:"error",children:m.name})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{id:"label",children:"Image: "}),Object(l.jsx)("input",{id:"input",type:"text",value:G.image,name:"image",onChange:D}),m.image&&Object(l.jsx)("h4",{id:"error",children:m.image})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{id:"label",children:"Released: "}),Object(l.jsx)("input",{id:"input",type:"date",value:G.released,name:"released",onChange:D}),m.released&&Object(l.jsx)("h4",{id:"error",children:m.released})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{id:"label",children:"Rating: "}),Object(l.jsx)("input",{id:"input",type:"number",value:G.rating,name:"rating",min:1,max:6,onChange:D}),m.rating&&Object(l.jsx)("h4",{id:"error",children:m.rating})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{id:"label",children:"Description: "}),Object(l.jsx)("textarea",{id:"input",type:"text",value:G.description,name:"description",onChange:D}),m.description&&Object(l.jsx)("h4",{id:"error",children:m.description})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{id:"label",children:"Genres "}),Object(l.jsxs)("select",{id:"selectform",onChange:function(e){return t=e,_(Object(S.a)(Object(S.a)({},G),{},{genres:Object(C.a)(new Set([].concat(Object(C.a)(G.genres),[t.target.value])))})),void f(x(Object(S.a)(Object(S.a)({},G),{},Object(R.a)({},t.target.name,t.target.value))));var t},children:[Object(l.jsx)("option",{disabled:!0,selected:!0,children:"Select genres"}),null===n||void 0===n?void 0:n.map((function(e){return Object(l.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),m.genres&&Object(l.jsx)("h4",{id:"error",children:m.genres}),Object(l.jsx)("ul",{children:G.genres.map((function(e){return Object(l.jsxs)("li",{children:[Object(l.jsx)("div",{children:e+""}),Object(l.jsx)("button",{id:"pag",value:e,onClick:function(){return function(e){_(Object(S.a)(Object(S.a)({},G),{},{genres:G.genres.filter((function(t){return t!==e}))}))}(e)},children:"x"})]})}))})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{id:"label",children:"Platforms "}),Object(l.jsxs)("select",{id:"selectform",onChange:function(e){return t=e,_(Object(S.a)(Object(S.a)({},G),{},{platforms:Object(C.a)(new Set([].concat(Object(C.a)(G.platforms),[t.target.value])))})),void f(x(Object(S.a)(Object(S.a)({},G),{},Object(R.a)({},t.target.name,t.target.value))));var t},children:[Object(l.jsxs)("option",{disabled:!0,selected:!0,children:[" ","Select Platform"]}),null===a||void 0===a?void 0:a.map((function(e){return Object(l.jsx)("option",{value:e,children:e},e.id)}))]}),m.platforms&&Object(l.jsx)("h4",{id:"error",children:m.platforms}),Object(l.jsx)("ul",{children:G.platforms.map((function(e){return Object(l.jsxs)("li",{children:[Object(l.jsx)("div",{children:e+""}),Object(l.jsx)("button",{id:"pag",value:e,onClick:function(){return function(e){_(Object(S.a)(Object(S.a)({},G),{},{platforms:G.platforms.filter((function(t){return t!==e}))}))}(e)},children:"x"})]})}))})]}),Object(l.jsx)("button",{id:"botonform",type:"submit",children:"Create Video Game"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{children:Object(l.jsx)(o.b,{to:"/home",children:Object(l.jsx)("button",{id:"botonform",children:"Go Back Home "})})})]})]})};n(71);function _(e){var t,n,a=Object(u.b)(),c=Object(s.g)().id,i=Object(u.c)((function(e){return e.details}));return Object(r.useEffect)((function(){return a(function(e){return function(){var t=Object(O.a)(Object(b.a)().mark((function t(n){var r;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("http://localhost:3001/videogames/".concat(e));case 3:return r=t.sent,t.abrupt("return",n({type:"GET_DETAILS",payload:r.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log("ERROR EN GET DETAILS/ACTION",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(c)),function(){a({type:"CLEAR",payload:[]})}}),[a,c]),Object(l.jsx)("div",{id:"general",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{id:"nombre",children:i.name}),Object(l.jsx)("img",{id:"image",src:i.background_image?i.background_image:i.image,alt:"",width:"400px",height:"250px"}),Object(l.jsxs)("div",{id:"h4",children:[Object(l.jsxs)("h4",{children:["\ud83c\udf1f Rating: ",i.rating," "]}),Object(l.jsxs)("h4",{children:["\ud83d\udcc6 Released: ",i.released]}),Object(l.jsxs)("h4",{children:["\ud83c\udfae Platforms:"," ",i.platforms?i.platforms+",":null===(t=i.platforms)||void 0===t?void 0:t.map((function(e,t){return Object(l.jsx)("li",{children:e.name},t)}))]}),Object(l.jsxs)("h4",{children:["\ud83e\udde9 Genres:",null===(n=i.genres)||void 0===n?void 0:n.map((function(e,t){return Object(l.jsx)("li",{children:e.name},t)}))]}),Object(l.jsx)("h4",{children:" \ud83d\udcdc Description:"})," ",Object(l.jsxs)("p",{children:[" ",Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:i.description}})]})]}),Object(l.jsx)(o.b,{to:"/home",children:Object(l.jsx)("button",{id:"botondetail",children:"Go Home"})})]},i.id)})}var D=function(){return Object(l.jsx)(o.a,{children:Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{exact:!0,path:"/",component:d}),Object(l.jsx)(s.a,{exact:!0,path:"/home",component:y}),Object(l.jsx)(s.a,{path:"/videogames",component:G}),Object(l.jsx)(s.a,{path:"/details/:id",component:_})]})})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},A=n(34),w=n(47),k=n(48),V={videogames:[],allVideogames:[],allgenres:[],platforms:[],details:{}};var I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_VIDEOGAMES":var n=[];return t.payload.map((function(e){return n=[].concat(Object(C.a)(n),Object(C.a)(e.platforms))})),Object(S.a)(Object(S.a)({},e),{},{videogames:Object(C.a)(t.payload),allVideogames:Object(C.a)(t.payload),platforms:Array.from(new Set(n)),page:1});case"GET_NAME_VIDEOGAMES":return Object(S.a)(Object(S.a)({},e),{},{videogames:t.payload});case"GET_GENRES":return Object(S.a)(Object(S.a)({},e),{},{allgenres:t.payload});case"GET_DETAILS":case"CLEAR":return Object(S.a)(Object(S.a)({},e),{},{details:t.payload});case"FILTER_BY_GENRES":var r=e.allVideogames,a="All"===t.payload?r:r.filter((function(e){return e.genres.includes(t.payload)}));return Object(S.a)(Object(S.a)({},e),{},{videogames:a});case"FILTER_CREATED":var c=e.allVideogames,i="created"===t.payload?c.filter((function(e){return e.inDb})):c.filter((function(e){return!e.inDb}));return Object(S.a)(Object(S.a)({},e),{},{videogames:"all"===t.payload?e.allVideogames:i});case"ORDER_BY_RATING":var o="least"===t.payload?e.videogames.sort((function(e,t){return e.rating>t.rating?1:t.rating>e.rating?-1:0})):e.videogames.sort((function(e,t){return e.rating>t.rating?-1:t.rating>e.rating?1:0}));return Object(S.a)(Object(S.a)({},e),{},{videogames:o});case"ORDER_BY_NAME":var s="asc"===t.payload?e.videogames.sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})):e.videogames.sort((function(e,t){return e.name>t.name?-1:t.name>e.name?1:0}));return Object(S.a)(Object(S.a)({},e),{},{videogames:s});default:return e}},L=Object(A.createStore)(I,Object(w.composeWithDevTools)(Object(A.applyMiddleware)(k.a)));i.a.render(Object(l.jsx)(u.a,{store:L,children:Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(D,{})})}),document.getElementById("root")),T()}},[[72,1,2]]]);
//# sourceMappingURL=main.20ea7887.chunk.js.map