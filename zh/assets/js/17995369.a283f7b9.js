(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{317:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||c;return r?a.a.createElement(d,i(i({ref:t},l),{},{components:r})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),c=(r(0),r(317)),o={title:"vela cap center remove"},i={unversionedId:"cli/vela_cap_center_remove",id:"version-v1.0/cli/vela_cap_center_remove",isDocsHomePage:!1,title:"vela cap center remove",description:"Remove specified capability center",source:"@site/versioned_docs/version-v1.0/cli/vela_cap_center_remove.md",slug:"/cli/vela_cap_center_remove",permalink:"/zh/docs/cli/vela_cap_center_remove",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/cli/vela_cap_center_remove.md",version:"v1.0",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1618390410,formattedLastUpdatedAt:"4/14/2021"},p=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}],l={toc:p};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Remove specified capability center"),Object(c.b)("h3",{id:"synopsis"},"Synopsis"),Object(c.b)("p",null,"Remove specified capability center"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"vela cap center remove <centerName> [flags]\n")),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"vela cap center remove mycenter\n")),Object(c.b)("h3",{id:"options"},"Options"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"  -h, --help   help for remove\n")),Object(c.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"  -e, --env string   specify environment name for application\n")),Object(c.b)("h3",{id:"see-also"},"SEE ALSO"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"vela_cap_center"},"vela cap center"),"\t - Manage Capability Center")),Object(c.b)("h6",{id:"auto-generated-by-spf13cobra-on-20-mar-2021"},"Auto generated by spf13/cobra on 20-Mar-2021"))}s.isMDXComponent=!0}}]);