(this["webpackJsonpfirst-app"]=this["webpackJsonpfirst-app"]||[]).push([[0],{31:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);c(28),c(29),c(30),c(31);var s=c(1),i=c.n(s),a=c(25),n=c.n(a),l=(c(36),c(37),c(4)),r=c(2),d=c(0),o=function(){return Object(d.jsx)(i.a.Fragment,{children:Object(d.jsx)("nav",{className:"navbar navbar-dark bg-dark navbar-expand-sm font-weight-bold",children:Object(d.jsx)("div",{className:"container px-3",children:Object(d.jsxs)("ul",{className:"navbar-nav ",children:[Object(d.jsx)("li",{className:"nav-item px-2",children:Object(d.jsx)(l.b,{to:"/",className:"nav-link",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item px-2",children:Object(d.jsx)(l.b,{to:"/employees",className:"nav-link",children:"Employees"})}),Object(d.jsx)("li",{className:"nav-item px-2",children:Object(d.jsx)(l.b,{to:"/stocks",className:"nav-link",children:"Stocks"})}),Object(d.jsx)("li",{className:"nav-item px-2",children:Object(d.jsx)(l.b,{to:"/about",className:"nav-link",children:"About"})})]})})})})},j=function(){return Object(d.jsx)(i.a.Fragment,{children:Object(d.jsx)("div",{className:"container mt-5 text-center",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col",children:[Object(d.jsx)("p",{className:"h4 text-primary",children:"More Info about Company"}),Object(d.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet aspernatur beatae cumque deleniti dicta distinctio dolor, doloribus eligendi et ex fugit harum ipsa ipsam natus nisi placeat provident quia saepe totam. Asperiores, cupiditate dolore doloremque ea enim et harum, illo illum iste labore magni obcaecati repellat sunt veniam, voluptatibus."})]})})})})},b=c(8),m=c(10),u=c.n(m),h=function(){var e=Object(s.useState)([]),t=Object(b.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),r=Object(b.a)(n,2),o=(r[0],r[1]);return Object(s.useEffect)((function(){u.a.get("https://gist.githubusercontent.com/thenaveensaggam/77fd2f17e30dd74e29dc39156420be1a/raw/9f872818c85abd63999200ebc963907f9197f812/customers.21-10-2020.json").then((function(e){a(e.data)})).catch((function(e){o(e)}))}),[]),Object(d.jsx)(i.a.Fragment,{children:Object(d.jsxs)("div",{className:"container mt-3",children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col",children:[Object(d.jsx)("p",{className:"h4 text-primary",children:"Employees List"}),Object(d.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A blanditiis consectetur consequuntur delectus eos eveniet ex, ipsa itaque minus necessitatibus obcaecati odit omnis quam qui quibusdam reprehenderit soluta vero voluptas!"})]})}),Object(d.jsx)("div",{className:"row mt-3",children:Object(d.jsx)("div",{className:"col",children:Object(d.jsxs)("table",{className:"table table-hover table-striped  text-center ",children:[Object(d.jsx)("thead",{className:"bg-secondary text-white",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"SNO"}),Object(d.jsx)("td",{children:"Name"}),Object(d.jsx)("td",{children:"Email"}),Object(d.jsx)("td",{children:"Phone Number"}),Object(d.jsx)("td",{children:"Location"})]})}),Object(d.jsx)("tbody",{children:c.length>0?Object(d.jsx)(i.a.Fragment,{children:c.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.login.uuid.substr(e.login.uuid.length-4)}),Object(d.jsx)(l.b,{to:"/employees/".concat(e.login.uuid),children:Object(d.jsx)("td",{className:"font-weight-bold text-primary",children:Object(d.jsxs)("u",{children:[e.name.title,".",e.name.first," ",e.name.last]})})}),Object(d.jsx)("td",{children:e.email}),Object(d.jsx)("td",{children:e.phone}),Object(d.jsx)("td",{children:e.location.country})]},e.login.uuid)}))}):null})]})})})]})})},x=function(){var e=Object(r.g)().id,t=Object(s.useState)({}),c=Object(b.a)(t,2),a=c[0],n=c[1],o=Object(s.useState)(""),j=Object(b.a)(o,2),m=(j[0],j[1]);return Object(s.useEffect)((function(){u.a.get("https://gist.githubusercontent.com/thenaveensaggam/77fd2f17e30dd74e29dc39156420be1a/raw/9f872818c85abd63999200ebc963907f9197f812/customers.21-10-2020.json").then((function(t){var c=t.data.find((function(t){return t.login.uuid===e}));n(c)})).catch((function(e){m(e)}))}),[]),Object(d.jsx)(i.a.Fragment,{children:Object(d.jsxs)("div",{className:"container mt-3",children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col",children:[Object(d.jsx)("p",{className:"h4 text-primary",children:"Employees Details"}),Object(d.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid architecto cupiditate debitis dicta, dolore doloremque, eligendi eum facere, hic inventore iusto laboriosam laudantium molestias obcaecati quam repellat temporibus vel!"})]})}),Object(d.jsx)("div",{className:"row mt-5",children:Object(d.jsx)("div",{className:"col",children:Object.keys(a).length>0?Object(d.jsx)(i.a.Fragment,{children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card-header bg-secondary text-white",children:Object(d.jsxs)("p",{className:"h4",children:[a.name.title,". ",a.name.first," ",a.name.last]})}),Object(d.jsxs)("div",{className:"card-body bg-warning",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-3 d-flex justify-content-center align-items-center ",children:Object(d.jsx)("img",{src:a.picture.large,alt:"/",width:500,className:"img-fluid img-thumbnail"})}),Object(d.jsx)("div",{className:"col-md-9 ",children:Object(d.jsxs)("ul",{className:"list-group",children:[Object(d.jsxs)("li",{className:"list-group-item font-weight-bold",children:["Age : ",a.dob.age,".Yrs"]}),Object(d.jsxs)("li",{className:"list-group-item font-weight-bold",children:["Email : ",a.email]}),Object(d.jsxs)("li",{className:"list-group-item font-weight-bold",children:["Timezone : ",a.location.timezone.description]}),Object(d.jsxs)("li",{className:"list-group-item font-weight-bold",children:["Postcode : ",a.location.postcode]}),Object(d.jsxs)("li",{className:"list-group-item font-weight-bold",children:["City : ",a.location.city]})]})})]}),Object(d.jsx)(l.b,{to:"/employees",className:"btn btn-deep-purple btn-sm mt-3 font-weight-bold",children:"Back"})]})]})}):null})})]})})},O=function(){var e=Object(r.f)(),t=Object(s.useState)([]),c=Object(b.a)(t,2),a=c[0],n=c[1],l=Object(s.useState)(""),o=Object(b.a)(l,2),j=(o[0],o[1]);Object(s.useEffect)((function(){u.a.get("https://gist.githubusercontent.com/thenaveensaggam/635d9448bb93c8b96be007e47677082c/raw/62f52cdbde2970fd919c6f08a4cbf6b5c8a58088/stocks-27-10-2020.json").then((function(e){n(e.data)})).catch((function(e){j(e)}))}),[]);var m=function(t){e.push("/stocks/".concat(t.id))};return Object(d.jsx)(i.a.Fragment,{children:Object(d.jsxs)("div",{className:"container mt-3",children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col",children:[Object(d.jsx)("p",{className:"h4 text-primary",children:" Stocks Information"}),Object(d.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur deleniti dolor dolore error, est fugiat hic id in ipsa necessitatibus nihil obcaecati optio possimus praesentium quam quibusdam quidem repellendus rerum, suscipit tenetur voluptas voluptates! Ex labore molestiae pariatur! Neque!"})]})}),Object(d.jsx)("div",{className:"row mt-3",children:Object(d.jsx)("div",{className:"col",children:Object(d.jsxs)("table",{className:"table table-striped table-hover text-center ",children:[Object(d.jsx)("thead",{className:"text-white bg-secondary",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Id"}),Object(d.jsx)("td",{children:"Name"}),Object(d.jsx)("td",{children:"Industry"}),Object(d.jsx)("td",{children:"Market"}),Object(d.jsx)("td",{children:"Sector"}),Object(d.jsx)("td",{children:"Symbol"})]})}),Object(d.jsx)("tbody",{children:a.length>0?Object(d.jsx)(i.a.Fragment,{children:a.map((function(e){return Object(d.jsxs)("tr",{onClick:m.bind(undefined,e),children:[Object(d.jsx)("td",{children:e.id}),Object(d.jsx)("td",{className:"font-weight-bold ",children:Object(d.jsx)("u",{children:e.name})}),Object(d.jsx)("td",{children:e.industry}),Object(d.jsx)("td",{children:e.market}),Object(d.jsx)("td",{children:e.sector}),Object(d.jsx)("td",{children:e.symbol})]},e.id)}))}):null})]})})})]})})},p=function(){var e=Number(Object(r.g)().id),t=Object(s.useState)([]),c=Object(b.a)(t,2),a=c[0],n=c[1],o=Object(s.useState)(""),j=Object(b.a)(o,2),m=(j[0],j[1]);return Object(s.useEffect)((function(){u.a.get("https://gist.githubusercontent.com/thenaveensaggam/635d9448bb93c8b96be007e47677082c/raw/62f52cdbde2970fd919c6f08a4cbf6b5c8a58088/stocks-27-10-2020.json").then((function(t){var c=t.data.find((function(t){return t.id===e}));n(c)})).catch((function(e){m(e)}))}),[]),Object(d.jsx)(i.a.Fragment,{children:Object(d.jsxs)("div",{className:"container mt-4",children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col",children:[Object(d.jsx)("p",{className:"h4 text-primary",children:" Stocks Details"}),Object(d.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolor dolores dolorum, inventore laboriosam laudantium obcaecati placeat provident quasi recusandae? Accusantium adipisci dolor, dolorum eaque enim expedita fuga itaque molestias, nesciunt nobis non odio pariatur quae quis reprehenderit saepe suscipit!"})]})}),Object(d.jsx)("div",{className:"row mt-5",children:Object(d.jsx)("div",{className:"col-md-9",children:Object.keys(a).length>0?Object(d.jsx)(i.a.Fragment,{children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card-header bg-success ",children:Object(d.jsx)("p",{className:"h4 font-weight-bold",children:a.name})}),Object(d.jsx)("div",{className:"card-body bg-light",children:Object(d.jsxs)("ul",{className:"list-group ",children:[Object(d.jsxs)("li",{className:"list-group-item font-italic bg-warning",children:["Id : ",a.id]}),Object(d.jsxs)("li",{className:"list-group-item font-italic bg-light",children:["Industry : ",a.industry]}),Object(d.jsxs)("li",{className:"list-group-item font-italic bg-warning",children:["Market : ",a.market]}),Object(d.jsxs)("li",{className:"list-group-item font-italic bg-light",children:["Sector : ",a.sector]}),Object(d.jsxs)("li",{className:"list-group-item font-italic bg-warning",children:["Symbol : ",a.symbol]})]})}),Object(d.jsx)(l.b,{to:"/stocks",className:"btn btn-success btn-sm mt-3 w-25 d-flex align-items-center justify-content-center font-weight-bold",children:" Back"})]})}):null})})]})})},g=function(){return Object(d.jsx)(i.a.Fragment,{children:Object(d.jsx)("div",{className:"landing-page",children:Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center h-100 text-center",children:[Object(d.jsx)("h4",{className:"display-4",children:"React Routing"}),Object(d.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aperiam asperiores cum, delectus dignissimos distinctio dolorem dolores enim explicabo, fugiat hic in laudantium minima nulla quam quidem rem tempore!"})]})})})})},f=function(){return Object(d.jsx)(i.a.Fragment,{children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(o,{}),Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{exact:!0,path:"/",component:g}),Object(d.jsx)(r.a,{exact:!0,path:"/about",component:j}),Object(d.jsx)(r.a,{exact:!0,path:"/employees",component:h}),Object(d.jsx)(r.a,{exact:!0,path:"/employees/:id",component:x}),Object(d.jsx)(r.a,{exact:!0,path:"/stocks",component:O}),Object(d.jsx)(r.a,{exact:!0,path:"/stocks/:id",component:p})]})]})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,66)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,n=t.getTTFB;c(e),s(e),i(e),a(e),n(e)}))};n.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),N()}},[[65,1,2]]]);
//# sourceMappingURL=main.67bea719.chunk.js.map