"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[29],{29:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var n=r(861),a=r(439),i=r(757),c=r.n(i),u=r(340),s=r(791),o=r(767),l=r(87),h=r(689),d=r(184),p=function(e){var t=e.name,r=e.id,n=e.location;return(0,d.jsx)("li",{children:(0,d.jsx)(l.rU,{state:{from:{location:n}},to:"/movies/".concat(r),children:(0,d.jsx)("p",{children:t})})})},f=function(e){var t=e.info,r=e.location;return(0,d.jsx)("ul",{children:t.map((function(e){return(0,d.jsx)(p,{id:e.id,name:e.original_title,location:r},e.id)}))})},m=function(){var e=(0,l.lr)(),t=(0,a.Z)(e,2),r=t[0],i=t[1],p=r.get("query"),m=(0,h.TH)(),j=(0,s.useState)(!1),x=(0,a.Z)(j,2),v=x[0],y=x[1],N=(0,s.useState)(null),Z=(0,a.Z)(N,2),b=Z[0],g=Z[1],I=(0,s.useState)([]),k=(0,a.Z)(I,2),S=k[0],J=k[1];return(0,s.useEffect)((function(){if(p){var e={method:"GET",url:"https://api.themoviedb.org/3/search/movie",params:{query:"".concat(p),include_adult:"false",language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTBmMzA5MDUwNDNlOTFlM2Q3NWQxNTYzODk3N2Q4NiIsInN1YiI6IjY1NGZjNDcyMjg2NmZhMTA4ZGM1Njc3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lx_HtS3ZcboNqUtdarGHjit2ujK3zjcrh0XUPiGXEFg"}},t=function(){var t=(0,n.Z)(c().mark((function t(){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,y(!0),t.next=4,u.Z.request(e);case 4:r=t.sent,n=r.data,J(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),g(t.t0.message);case 12:return t.prev=12,y(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}}),[p]),(0,d.jsxs)("div",{children:[(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.inputQuery.value;i({query:t})},children:[(0,d.jsxs)("label",{children:["Search by name",(0,d.jsx)("input",{type:"text",name:"inputQuery",required:!0})]}),(0,d.jsx)("button",{type:"submit",children:"Search"})]}),!1!==v&&(0,d.jsx)(o.a,{}),null!==b&&(0,d.jsxs)("p",{children:["Oops, some error occured... Error message: ",b]}),0!==S.length&&(0,d.jsx)(f,{info:S.results,location:m})]})},j=function(){return(0,d.jsx)("div",{children:(0,d.jsx)(m,{})})}}}]);
//# sourceMappingURL=29.e86ef08c.chunk.js.map