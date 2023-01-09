(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var i=c(7),s=c.n(i),n=(c(15),c(10)),a=c(2),r=c(1),l=(c(16),c(17),c(18),c(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},j=c(8),m=c(6),b=c.n(m),u=c(9),v=c.n(u);function h(e){return fetch("".concat("https://www.omdbapi.com/?apikey=2e8b33c3","&t=").concat(e)).then((function(e){return e.json()})).then((function(e){return{Poster:"N/A"!==e.Poster?e.Poster:"https://via.placeholder.com/360x270.png?text=no%20preview",Title:e.Title,Plot:e.Plot,imdbID:e.imdbID}})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}c(21);var O=function(e){var t=e.onAdd,c=Object(r.useState)(""),i=Object(a.a)(c,2),s=i[0],n=i[1],d=Object(r.useState)(!1),m=Object(a.a)(d,2),u=m[0],O=m[1],f=Object(r.useState)(null),x=Object(a.a)(f,2),p=x[0],N=x[1],g=Object(r.useState)(!1),y=Object(a.a)(g,2),w=y[0],I=y[1],P=Object(r.useState)(null),S=Object(a.a)(P,2),k=S[0],D=S[1],F=function(){var e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.prev=1,e.next=4,h(s);case 4:t=e.sent,N(t);case 6:return e.prev=6,O(!1),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[1,,6,9]])})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){if(p){var e=p,t=e.Title,c=e.Poster,i=e.Plot,s=e.imdbID,n={title:t,description:i,imgUrl:c,imdbUrl:"https://www.imdb.com/title/".concat(s),imdbId:s};switch(Object.values(p).every((function(e){return void 0===e}))){case!0:I(!0);break;case!1:D(n)}}}),[p]),Object(r.useEffect)((function(){I(!1)}),[s]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),F()},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",value:s,onChange:function(e){var t=e.target.value;n(t)}})}),w&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"searchButton",type:"submit",className:v()("button is-light",{"is-loading":u}),disabled:0===s.length,children:"Find a movie"})}),k&&Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){return t(k),D(null),void n("")},children:"Add to the list"})})]})]}),k&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(o,{movie:k})]})]})},f=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),c=t[0],i=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(O,{onAdd:function(e){c.find((function(t){return t.imdbId===e.imdbId}))||i([].concat(Object(n.a)(c),[e]))}})})]})};s.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.4f382dce.chunk.js.map