(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{134:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),l=(r(0),r(333)),c={title:"Metrics"},i={unversionedId:"developers/references/traits/metrics",id:"developers/references/traits/metrics",isDocsHomePage:!1,title:"Metrics",description:"\u63cf\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developers/references/traits/metrics.md",slug:"/developers/references/traits/metrics",permalink:"/zh/docs/next/developers/references/traits/metrics",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/developers/references/traits/metrics.md",version:"current",lastUpdatedBy:"chenggui53",lastUpdatedAt:1619491628,formattedLastUpdatedAt:"4/27/2021",sidebar:"docs",previous:{title:"Route",permalink:"/zh/docs/next/developers/references/traits/route"},next:{title:"Scaler",permalink:"/zh/docs/next/developers/references/traits/scaler"}},b=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u89c4\u8303",id:"\u89c4\u8303",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]}],o={toc:b};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(l.b)("p",null,"\u914d\u7f6e\u4f60\u670d\u52a1\u7684\u76d1\u63a7\u6307\u6807\u3002"),Object(l.b)("h2",{id:"\u89c4\u8303"},"\u89c4\u8303"),Object(l.b)("p",null,"\u5217\u51fa ",Object(l.b)("inlineCode",{parentName:"p"},"Metrics")," trait \u7684\u6240\u6709\u914d\u7f6e\u9879\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},'name: my-app-name\n\nservices:\n  my-service-name:\n    ...\n    metrics:\n      format: "prometheus"\n      port: 8080\n      path: "/metrics"\n      scheme:  "http"\n      enabled: true\n')),Object(l.b)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u540d\u79f0"),Object(l.b)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),Object(l.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(l.b)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),Object(l.b)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"path"),Object(l.b)("td",{parentName:"tr",align:null},"\u670d\u52a1\u7684\u6307\u6807\u8def\u5f84"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"/metrics")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"format"),Object(l.b)("td",{parentName:"tr",align:null},"\u6307\u6807\u7684\u683c\u5f0f\uff0c\u9ed8\u8ba4\u4e3a prometheus"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"prometheus")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"scheme"),Object(l.b)("td",{parentName:"tr",align:null},"\u68c0\u7d22\u6570\u636e\u7684\u65b9\u5f0f\uff0c\u652f\u6301 ",Object(l.b)("inlineCode",{parentName:"td"},"http")," \u548c ",Object(l.b)("inlineCode",{parentName:"td"},"https")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"http")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"enabled"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"port"),Object(l.b)("td",{parentName:"tr",align:null},"\u6307\u6807\u7684\u7aef\u53e3\uff0c\u9ed8\u8ba4\u81ea\u52a8\u66b4\u9732"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"selector"),Object(l.b)("td",{parentName:"tr",align:null},"Pods \u7684 label selector\uff0c\u9ed8\u8ba4\u81ea\u52a8\u66b4\u9732"),Object(l.b)("td",{parentName:"tr",align:null},"map","[string]","string"),Object(l.b)("td",{parentName:"tr",align:null},"false"),Object(l.b)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0},333:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(r),s=n,m=u["".concat(c,".").concat(s)]||u[s]||d[s]||l;return r?a.a.createElement(m,i(i({ref:t},o),{},{components:r})):a.a.createElement(m,i({ref:t},o))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,c=new Array(l);c[0]=s;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<l;o++)c[o]=r[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);