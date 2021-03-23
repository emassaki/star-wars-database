(this["webpackJsonpstar-wars-database"]=this["webpackJsonpstar-wars-database"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),c=a.n(r),m=a(2),o=a(4),u=Object(n.createContext)(),s=["rotation_period","orbital_period","diameter","surface_water","population"],i={filterByName:{name:""},filterByNumericValues:[{column:"",comparison:"",value:""}],order:{column:"name",sort:"ASC"}};var d=function(e){var t=e.children,a=Object(n.useState)([]),r=Object(m.a)(a,2),c=r[0],d=r[1],f=Object(n.useState)([]),b=Object(m.a)(f,2),p=b[0],E=b[1],v=Object(n.useState)(i),h=Object(m.a)(v,2),j=h[0],O=h[1],N=Object(n.useState)(s),C=Object(m.a)(N,2),y=C[0],S=C[1],x=Object(n.useState)(!0),g=Object(m.a)(x,2),k=g[0],w=g[1];Object(n.useEffect)((function(){fetch("https://swapi-trybe.herokuapp.com/api/planets/").then((function(e){return e.json()})).then((function(e){d(e.results),w(!1)}))}),[]),Object(n.useEffect)((function(){var e=j.filterByName.name,t=j.filterByNumericValues,a=j.order,n=function(e,t){return Object(o.a)(e.sort((function(e,a){var n=parseInt(e[t.column],10)?parseInt(e[t.column],10):e[t.column],l=parseInt(a[t.column],10)?parseInt(a[t.column],10):a[t.column];return"unknown"===n&&(n=1/0),"unknown"===l&&(l=1/0),n>l&&"ASC"===t.sort?1:n<l&&"ASC"===t.sort||n>l&&"DESC"===t.sort?-1:n<l&&"DESC"===t.sort?1:0})))}(c.filter((function(a){return t.every((function(t){var n=t.column,l=t.comparison,r=t.value,c=a.name.toLowerCase().includes(e.toLowerCase());switch(l){case"maior que":return parseInt(a[n],10)>parseInt(r,10)&&c;case"menor que":return parseInt(a[n],10)<parseInt(r,10)&&c;case"igual a":return parseInt(a[n],10)===parseInt(r,10)&&c;default:return c}}))})),a);E(n)}),[c,j]);var B={planets:p,setPlanets:E,filters:j,setFilters:O,columns:y,setColumns:S,loading:k};return l.a.createElement(u.Provider,{value:B},t)},f=a(1);function b(){var e=Object(n.useContext)(u),t=e.filters,a=e.setFilters,r=e.columns,c=e.setColumns,m=t.filterByNumericValues;return l.a.createElement("div",{className:"mx-3"},m.map((function(e){var n=e.column,u=e.comparison,s=e.value;return n?l.a.createElement("div",{className:"input-group mb-1",key:n,"data-testid":"filter"},l.a.createElement("input",{type:"text",className:"form-control col-xs-3",value:"".concat(n," ").concat(u," ").concat(s),disabled:!0}),l.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){return function(e){c([].concat(Object(o.a)(r),[e])),a(Object(f.a)(Object(f.a)({},t),{},{filterByNumericValues:m.filter((function(t){return t.column!==e}))}))}(n)}},"X")):""})))}var p=a(3);function E(){var e=Object(n.useContext)(u),t=e.filters,a=e.setFilters,r=e.columns,c=e.setColumns,s=Object(n.useState)({}),i=Object(m.a)(s,2),d=i[0],b=i[1],E=t.filterByNumericValues,v=d.column,h=d.comparison,j=d.value;Object(n.useEffect)((function(){b({column:r[0],comparison:"maior que",value:"0"})}),[r]);var O=function(e){var t=e.target;b(Object(f.a)(Object(f.a)({},d),{},Object(p.a)({},t.name,t.value)))};return l.a.createElement("form",{className:"d-flex flex-column mx-3"},l.a.createElement("select",{value:v,name:"column",onChange:O,"data-testid":"column-filter",className:"form-select mb-1"},r.map((function(e){return l.a.createElement("option",{key:e},e)}))),l.a.createElement("select",{value:h,name:"comparison",onChange:O,"data-testid":"comparison-filter",className:"form-select mb-1"},["maior que","menor que","igual a"].map((function(e){return l.a.createElement("option",{key:e},e)}))),l.a.createElement("input",{type:"number",value:j,name:"value","data-testid":"value-filter",placeholder:"0",onChange:O,className:"form-control mb-1"}),l.a.createElement("button",{type:"submit","data-testid":"button-filter",onClick:function(e){e.preventDefault(),v&&(a(Object(f.a)(Object(f.a)({},t),{},{filterByNumericValues:[].concat(Object(o.a)(E),[d])})),c(r.filter((function(e){return v!==e}))))},className:"btn btn-outline-primary mb-3"},"Filter"))}function v(){var e=Object(n.useContext)(u),t=e.filters,a=e.setFilters,r=Object(n.useState)({column:"name",sort:"ASC"}),c=Object(m.a)(r,2),o=c[0],s=c[1],i=o.column,d=o.sort,b=function(e){var t=e.target;s(Object(f.a)(Object(f.a)({},o),{},Object(p.a)({},t.name,t.value)))};return l.a.createElement("form",{className:"d-flex flex-column mx-3"},l.a.createElement("select",{value:i,name:"column",onChange:b,"data-testid":"column-sort",className:"form-select mb-1"},["name","rotation_period","orbital_period","diameter","climate","terrain","surface_water","population"].map((function(e){return l.a.createElement("option",{key:e},e)}))),l.a.createElement("span",null,l.a.createElement("div",{className:"form-check"},l.a.createElement("label",{htmlFor:"ASC",className:"form-check-label"},"Ascendent",l.a.createElement("input",{type:"radio","data-testid":"column-sort-input-asc",value:"ASC",id:"ASC",name:"sort",onChange:b,className:"form-check-input mb-1"}))),l.a.createElement("div",{className:"form-check"},l.a.createElement("label",{htmlFor:"DESC",className:"form-check-label"},"Descendent",l.a.createElement("input",{type:"radio","data-testid":"column-sort-input-desc",value:"DESC",id:"DESC",onChange:b,name:"sort",className:"form-check-input mb-1"})))),l.a.createElement("button",{type:"submit","data-testid":"column-sort-button",onClick:function(e){e.preventDefault(),a(Object(f.a)(Object(f.a)({},t),{},{order:{column:i,sort:d}}))},className:"btn btn-outline-primary mb-3"},"Sort"))}function h(){var e=Object(n.useContext)(u),t=e.filters,a=e.setFilters,r=t.filterByName.name;return l.a.createElement("div",{className:"d-flex flex-row flex-wrap"},l.a.createElement(E,null),l.a.createElement(v,null),l.a.createElement("form",{className:"mx-3"},l.a.createElement("input",{type:"text",value:r,onChange:function(e){a(Object(f.a)(Object(f.a)({},t),{},{filterByName:{name:e.target.value}}))},"data-testid":"name-filter",placeholder:"Search by name",className:"form-control mb-3"})),l.a.createElement(b,null))}function j(){return Object(n.useContext)(u).loading?l.a.createElement("div",{className:"position-relative mt-5"},l.a.createElement("div",{className:"position-absolute top-50 start-50 translate-middle"},l.a.createElement("div",{className:"spinner-border",role:"status"},l.a.createElement("span",{className:"visually-hidden"},"Loading...")))):""}function O(){var e=Object(n.useContext)(u).planets;return l.a.createElement("table",{className:"table table-hover table-dark align-middle"},l.a.createElement("thead",{className:"align-middle"},l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Rotation Period"),l.a.createElement("th",null,"Orbital Period"),l.a.createElement("th",null,"Diameter"),l.a.createElement("th",null,"Climate"),l.a.createElement("th",null,"Gravity"),l.a.createElement("th",null,"Terrain"),l.a.createElement("th",null,"Surface Water"),l.a.createElement("th",null,"Population"),l.a.createElement("th",null,"Films"),l.a.createElement("th",null,"Created"),l.a.createElement("th",null,"Edited"),l.a.createElement("th",null,"URL"))),l.a.createElement("tbody",null,e.map((function(e){return l.a.createElement("tr",{key:e.name},l.a.createElement("td",{"data-testid":"planet-name"},e.name),l.a.createElement("td",null,e.rotation_period),l.a.createElement("td",null,e.orbital_period),l.a.createElement("td",null,e.diameter),l.a.createElement("td",null,e.climate),l.a.createElement("td",null,e.gravity),l.a.createElement("td",null,e.terrain),l.a.createElement("td",null,e.surface_water),l.a.createElement("td",null,e.population),l.a.createElement("td",null,e.films),l.a.createElement("td",null,e.created),l.a.createElement("td",null,e.edited),l.a.createElement("td",null,e.url))}))))}a(14);var N=function(){return l.a.createElement(d,null,l.a.createElement("h1",{className:"m-3"},"Star Wars Planet Searcher"),l.a.createElement(h,null),l.a.createElement(O,null),l.a.createElement(j,null))};c.a.render(l.a.createElement(N,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.3307bc58.chunk.js.map