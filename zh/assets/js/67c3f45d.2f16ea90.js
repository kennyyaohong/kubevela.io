(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),l=(n(0),n(333)),c={title:"Task"},o={unversionedId:"developers/references/component-types/task",id:"developers/references/component-types/task",isDocsHomePage:!1,title:"Task",description:"\u63cf\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developers/references/component-types/task.md",slug:"/developers/references/component-types/task",permalink:"/zh/docs/next/developers/references/component-types/task",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/developers/references/component-types/task.md",version:"current",lastUpdatedBy:"chenggui",lastUpdatedAt:1619487268,formattedLastUpdatedAt:"4/27/2021",sidebar:"docs",previous:{title:"Webservice",permalink:"/zh/docs/next/developers/references/component-types/webservice"},next:{title:"Worker",permalink:"/zh/docs/next/developers/references/component-types/worker"}},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u89c4\u8303",id:"\u89c4\u8303",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]}],i={toc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(l.b)("p",null,"\u63cf\u8ff0\u8fd0\u884c\u5b8c\u6210\u4ee3\u7801\u6216\u811a\u672c\u7684\u4f5c\u4e1a\u3002"),Object(l.b)("h2",{id:"\u89c4\u8303"},"\u89c4\u8303"),Object(l.b)("p",null,"\u5217\u51fa ",Object(l.b)("inlineCode",{parentName:"p"},"Task")," \u7c7b\u578b workload \u7684\u6240\u6709\u914d\u7f6e\u9879\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},'name: my-app-name\n\nservices:\n  my-service-name:\n    type: task\n    image: perl\n    count: 10\n    cmd: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]\n')),Object(l.b)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u540d\u79f0"),Object(l.b)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),Object(l.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(l.b)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),Object(l.b)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"cmd"),Object(l.b)("td",{parentName:"tr",align:null},"\u5bb9\u5668\u4e2d\u8fd0\u884c\u7684\u547d\u4ee4"),Object(l.b)("td",{parentName:"tr",align:null},"[]string"),Object(l.b)("td",{parentName:"tr",align:null},"false"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"count"),Object(l.b)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5e76\u884c\u8fd0\u884c\u7684 task \u6570\u91cf"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"restart"),Object(l.b)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4f5c\u4e1a\u91cd\u542f\u7b56\u7565\uff0c\u503c\u53ea\u80fd\u4e3a Never \u6216 OnFailure\u3002"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"Never")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"image"),Object(l.b)("td",{parentName:"tr",align:null},"\u4f60\u7684\u670d\u52a1\u4f7f\u7528\u7684\u955c\u50cf"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null})))))}b.isMDXComponent=!0},333:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||s[d]||l;return n?a.a.createElement(m,o(o({ref:t},i),{},{components:n})):a.a.createElement(m,o({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var i=2;i<l;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);