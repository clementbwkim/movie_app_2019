(this.webpackJsonpmovie_app_2019=this.webpackJsonpmovie_app_2019||[]).push([[0],{57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(0),r=a.n(n),c=a(29),i=a.n(c),o=a(8),l=a(2),j=a(17),m=a.n(j),d=a(30),u=a(11),h=a(12),b=a(14),v=a(13),p=a(31),O=a.n(p);a(57);var x=function(e){var t=e.id,a=e.year,n=e.title,r=e.summary,c=e.poster,i=e.largePoster,l=e.genres,j=e.rating;return Object(s.jsx)("div",{className:"movie",children:Object(s.jsxs)(o.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:r,poster:c,largePoster:i,genres:l,rating:j}},children:[Object(s.jsx)("img",{src:c,alt:n,title:n}),Object(s.jsxs)("div",{className:"movie__data",children:[Object(s.jsx)("h3",{className:"movie__title",children:n}),Object(s.jsx)("h5",{className:"movie__year",children:a}),Object(s.jsx)("ul",{className:"movie__genres",children:l.map((function(e,t){return Object(s.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(s.jsxs)("h5",{className:"movie__rating",children:["rating: ",j]}),Object(s.jsxs)("p",{className:"movie__summary",children:[r.slice(0,180),"..."]})]})]})})},g=(a(63),function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(u.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(m.a.mark((function t(){var a,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,s=a.data.data.movies,e.setState({movies:s,isLoading:!1}),console.log(s);case 6:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(s.jsx)("section",{className:"container",children:t?Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(s.jsx)("div",{className:"movies",children:a.map((function(e){return Object(s.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,largePoster:e.large_cover_image,genres:e.genres,rating:e.rating},e.id)}))})})}}]),a}(r.a.Component));a(64);var f=function(e){return console.log(e),Object(s.jsxs)("div",{className:"about__container",children:[Object(s.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(s.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},_=(a(65),function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return console.log("location",e),e.state?Object(s.jsxs)("div",{className:"detail-wrapper",children:[Object(s.jsx)("div",{className:"detail-img",children:Object(s.jsx)("img",{src:e.state.largePoster,alt:e.state.title,title:e.state.title})}),Object(s.jsxs)("div",{className:"detail-texts",children:[Object(s.jsx)("h2",{children:e.state.title}),Object(s.jsx)("p",{children:e.state.summary})]})]}):null}}]),a}(r.a.Component));a(66);var y=function(){return Object(s.jsxs)("div",{className:"nav",children:[Object(s.jsx)(o.b,{to:"/",children:"Home"}),Object(s.jsx)(o.b,{to:"/about",children:"About"})]})};a(67);var N=function(){return Object(s.jsxs)(o.a,{children:[Object(s.jsx)(y,{}),Object(s.jsx)(l.a,{path:"/",exact:!0,component:g}),Object(s.jsx)(l.a,{path:"/about",component:f}),Object(s.jsx)(l.a,{path:"/movie/:id",component:_})]})};i.a.render(Object(s.jsxs)(r.a.StrictMode,{children:[Object(s.jsx)(N,{})," "]}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.e7f50dc1.chunk.js.map