(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{210:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),l=(n(0),n(333)),i={title:"KubeVela \u5b98\u65b9\u6587\u6863\u7ffb\u8bd1\u6d3b\u52a8",tags:["documentation"],description:"KubeVela \u5b98\u65b9\u6587\u6863\u7ffb\u8bd1\u6d3b\u52a8"},b={permalink:"/zh/blog/kubevela-official-documentation-translation-event",editUrl:"https://github.com/oam-dev/kubevela.io/tree/main/blog/blog/kubevela-official-documentation-translation-event.md",source:"@site/i18n/zh/docusaurus-plugin-content-blog/kubevela-official-documentation-translation-event.md",description:"KubeVela \u5b98\u65b9\u6587\u6863\u7ffb\u8bd1\u6d3b\u52a8",date:"2021-04-30T03:18:38.206Z",formattedDate:"April 30, 2021",tags:[{label:"documentation",permalink:"/zh/blog/tags/documentation"}],title:"KubeVela \u5b98\u65b9\u6587\u6863\u7ffb\u8bd1\u6d3b\u52a8",readingTime:1.41,truncated:!1,prevItem:{title:"\u5982\u4f55\u5728 20 \u5206\u949f\u5185\u7ed9\u4f60\u7684 K8s PaaS \u4e0a\u7ebf\u4e00\u4e2a\u65b0\u529f\u80fd",permalink:"/zh/blog/extend-kubevela-by-cuelang-in-20-mins"},nextItem:{title:"KubeVela \u6b63\u5f0f\u5f00\u6e90\uff1a\u4e00\u4e2a\u9ad8\u53ef\u6269\u5c55\u7684\u4e91\u539f\u751f\u5e94\u7528\u5e73\u53f0\u4e0e\u6838\u5fc3\u5f15\u64ce",permalink:"/zh/blog/kubevela-the-extensible-app-platform-based-on-open-application-model-and-kubernetes"}},o=[{value:"\u80cc\u666f",id:"\u80cc\u666f",children:[]},{value:"\u6d3b\u52a8\u6d41\u7a0b",id:"\u6d3b\u52a8\u6d41\u7a0b",children:[{value:"\u5f00\u59cb\u7ffb\u8bd1",id:"\u5f00\u59cb\u7ffb\u8bd1",children:[]},{value:"\u53c2\u4e0e\u6307\u5357",id:"\u53c2\u4e0e\u6307\u5357",children:[]},{value:"\u7ffb\u8bd1\u8981\u6c42",id:"\u7ffb\u8bd1\u8981\u6c42",children:[]}]}],c={toc:o};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),Object(l.b)("p",null,"KubeVela v1.0 \u542f\u7528\u4e86\u65b0\u7684\u5b98\u7f51\u67b6\u6784\u548c\u6587\u6863\u7ef4\u62a4\u65b9\u5f0f\uff0c\u65b0\u589e\u529f\u80fd\u5305\u62ec\u6587\u6863\u7248\u672c\u5316\u63a7\u5236\u3001i18n \u56fd\u9645\u5316\u4ee5\u53ca\u81ea\u52a8\u5316\u6d41\u7a0b\u3002\u4f46\u76ee\u524d KubeVela \u5b98\u65b9\u6587\u6863\u53ea\u6709\u82f1\u6587\u7248\uff0c\u8fd9\u63d0\u9ad8\u4e86\u5b66\u4e60\u548c\u4f7f\u7528 KubeVela \u7684\u95e8\u69db\uff0c\u4e0d\u5229\u4e8e\u9879\u76ee\u7684\u4f20\u64ad\u548c\u53d1\u5c55\uff0c\u540c\u65f6\u7ffb\u8bd1\u5de5\u4f5c\u4e5f\u80fd\u663e\u8457\u63d0\u5347\u8bed\u8a00\u80fd\u529b\uff0c\u5e2e\u52a9\u6211\u4eec\u62d3\u5bbd\u9605\u8bfb\u6280\u672f\u8d44\u6599\u7684\u5e7f\u5ea6\uff0c\u6545\u7ec4\u7ec7\u672c\u6b21\u6d3b\u52a8\u3002"),Object(l.b)("h2",{id:"\u6d3b\u52a8\u6d41\u7a0b"},"\u6d3b\u52a8\u6d41\u7a0b"),Object(l.b)("p",null,"\u672c\u6b21\u6d3b\u52a8\u4e3b\u8981\u5728 ",Object(l.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela.io"},"kubevela.io")," repo \u4e0b\u8fdb\u884c\uff0c\u62a5\u540d\u53c2\u4e0e\u548c\u8ba4\u9886\u4efb\u52a1\u90fd\u5728 ",Object(l.b)("a",{parentName:"p",href:"https://shimo.im/sheets/QrCwcDqh8xkRWKPC/MODOC"},"KubeVela \u5b98\u65b9\u6587\u6863\u7ffb\u8bd1\u767b\u8bb0")," \u4e2d\uff08",Object(l.b)("strong",{parentName:"p"},"\u8bf7\u52a1\u5fc5\u5728\u8868\u683c\u4e2d\u767b\u8bb0\u4fe1\u606f"),"\uff09\u3002"),Object(l.b)("h3",{id:"\u5f00\u59cb\u7ffb\u8bd1"},"\u5f00\u59cb\u7ffb\u8bd1"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://tvax1.sinaimg.cn/large/ad5fbf65gy1gpdbriuraij20k20l6dhm.jpg",alt:"\u7ffb\u8bd1\u6d41\u7a0b"})),Object(l.b)("p",null,"\u53c2\u4e0e\u7ffb\u8bd1\u6d3b\u52a8\u7684\u57fa\u672c\u6d41\u7a0b\u5982\u4e0b\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4efb\u52a1\u9886\u53d6\uff1a\u5728 ",Object(l.b)("a",{parentName:"li",href:"https://shimo.im/sheets/QrCwcDqh8xkRWKPC/MODOC"},"KubeVela \u5b98\u65b9\u6587\u6863\u7ffb\u8bd1\u767b\u8bb0")," \u767b\u8bb0\u5e76\u8ba4\u9886\u4efb\u52a1\uff1b"),Object(l.b)("li",{parentName:"ul"},"\u63d0\u4ea4\uff1a\u53c2\u4e0e\u4eba\u5458\u63d0\u4ea4 PR \u7b49\u5f85 review\uff1b"),Object(l.b)("li",{parentName:"ul"},"\u5ba1\u9605\uff1amaintainer \u5ba1\u9605 PR\uff1b"),Object(l.b)("li",{parentName:"ul"},"\u7ec8\u5ba1\uff1a \u5bf9 review \u540e\u7684\u5185\u5bb9\u8fdb\u884c\u6700\u540e\u786e\u8ba4\uff1b"),Object(l.b)("li",{parentName:"ul"},"\u5408\u5e76\uff1amerge \u5230 master \u5206\u652f\uff0c\u4efb\u52a1\u7ed3\u675f\u3002")),Object(l.b)("h3",{id:"\u53c2\u4e0e\u6307\u5357"},"\u53c2\u4e0e\u6307\u5357"),Object(l.b)("p",null,"\u4e0b\u9762\u5177\u4f53\u4ecb\u7ecd\u53c2\u4e0e\u7ffb\u8bd1\u7684\u5177\u4f53\u5de5\u4f5c\u3002"),Object(l.b)("h4",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u8d26\u53f7\uff1a\u60a8\u9700\u8981\u5148\u51c6\u5907\u4e00\u4e2a GitHub \u8d26\u53f7\u3002\u4f7f\u7528 Github \u8fdb\u884c\u7ffb\u8bd1\u4efb\u52a1\u7684\u8ba4\u9886\u548c PR \u63d0\u4ea4\u3002"),Object(l.b)("li",{parentName:"ul"},"\u4ed3\u5e93\u548c\u5206\u652f\u7ba1\u7406",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"fork ",Object(l.b)("a",{parentName:"li",href:"https://github.com/oam-dev/kubevela.io"},"kubevela.io")," \u7684\u4ed3\u5e93\uff0c\u5e76\u4f5c\u4e3a\u81ea\u5df1\u4ed3\u5e93\u7684\u4e0a\u6e38\uff1a ",Object(l.b)("inlineCode",{parentName:"li"},"git remote add upstream https://github.com/oam-dev/kubevela.io.git")),Object(l.b)("li",{parentName:"ul"},"\u5728\u81ea\u5df1\u7684\u4ed3\u5e93\uff0c\u4e5f\u5c31\u662f origin \u4e0a\u8fdb\u884c\u7ffb\u8bd1\uff1b"),Object(l.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u4efb\u52a1\u65b0\u5efa\u4e00\u4e2a branch"))),Object(l.b)("li",{parentName:"ul"},"Node.js \u7248\u672c >= 12.13.0 \uff08\u53ef\u4ee5\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"node -v")," \u547d\u4ee4\u67e5\u770b\uff09"),Object(l.b)("li",{parentName:"ul"},"Yarn \u7248\u672c >= 1.5\uff08\u53ef\u4ee5\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"yarn --version")," \u547d\u4ee4\u67e5\u770b\uff09")),Object(l.b)("h4",{id:"\u53c2\u4e0e\u6b65\u9aa4"},"\u53c2\u4e0e\u6b65\u9aa4"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Step1\uff1a\u4efb\u52a1\u6d4f\u89c8")),Object(l.b)("p",null,"\u5728 ",Object(l.b)("a",{parentName:"p",href:"https://shimo.im/sheets/QrCwcDqh8xkRWKPC/MODOC"},"KubeVela \u5b98\u65b9\u6587\u6863\u7ffb\u8bd1\u767b\u8bb0")," \u767b\u8bb0\u5e76\u6d4f\u89c8\u6709\u54ea\u4e9b\u4efb\u52a1\u53ef\u4ee5\u8ba4\u9886\u3002"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Step2\uff1a\u4efb\u52a1\u9886\u53d6")),Object(l.b)("p",null,"\u5728 ",Object(l.b)("a",{parentName:"p",href:"https://shimo.im/sheets/QrCwcDqh8xkRWKPC/MODOC"},"KubeVela \u5b98\u65b9\u6587\u6863\u7ffb\u8bd1\u767b\u8bb0")," \u8868\u683c\u4e2d\u7f16\u8f91\u5e76\u8ba4\u9886\u4efb\u52a1\u3002\u6ce8\u610f\uff1a\u4e3a\u4fdd\u8bc1\u8d28\u91cf\uff0c\u540c\u4e00\u8bd1\u8005\u53ea\u80fd\u540c\u65f6\u8ba4\u9886\u4e09\u4e2a\u4efb\u52a1\uff0c\u5b8c\u6210\u540e\u624d\u53ef\u7ee7\u7eed\u8ba4\u9886\u3002"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Step3\uff1a\u672c\u5730\u6784\u5efa\u548c\u9884\u89c8")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'# \u547d\u4ee4\u5b89\u88c5\u4f9d\u8d56\n$ yarn install\n# \u672c\u5730\u8fd0\u884c\u4e2d\u6587\u6587\u6863\n$ yarn run start -- --locale zh\nyarn run v1.22.10\nwarning From Yarn 1.0 onwards, scripts don\'t require "--" for options to be forwarded. In a future version, any explicit "--" will be forwarded as-is to the scripts.\n$ docusaurus start --locale zh\nStarting the development server...\nDocusaurus website is running at: http://localhost:3000/zh/\n\u2714 Client\n  Compiled successfully in 7.54s\n\u2139 \uff62wds\uff63: Project is running at http://localhost:3000/\n\u2139 \uff62wds\uff63: webpack output is served from /zh/\n\u2139 \uff62wds\uff63: Content not from webpack is served from /Users/saybot/own/kubevela.io\n\u2139 \uff62wds\uff63: 404s will fallback to /index.html\n\u2714 Client\n  Compiled successfully in 137.94ms\n')),Object(l.b)("p",null,"\u8bf7\u52ff\u4fee\u6539 ",Object(l.b)("inlineCode",{parentName:"p"},"/docs")," \u76ee\u5f55\u4e0b\u5185\u5bb9\uff0c\u4e2d\u6587\u6587\u6863\u5728 ",Object(l.b)("inlineCode",{parentName:"p"},"/i18n/zh/docusaurus-plugin-content-docs")," \u4e2d\uff0c\u4e4b\u540e\u5c31\u53ef\u4ee5\u5728 http://localhost:3000/zh/ \u4e2d\u8fdb\u884c\u9884\u89c8\u4e86\u3002"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Step4\uff1a\u63d0\u4ea4 PR")),Object(l.b)("p",null,"\u786e\u8ba4\u7ffb\u8bd1\u5b8c\u6210\u5c31\u53ef\u4ee5\u63d0\u4ea4 PR \u4e86\uff0c\u6ce8\u610f\uff1a\u4e3a\u4e86\u65b9\u4fbf review \u6bcf\u7bc7\u7ffb\u8bd1\u4e3a",Object(l.b)("strong",{parentName:"p"},"\u4e00\u4e2a PR"),"\uff0c\u5982\u679c\u7ffb\u8bd1\u591a\u7bc7\u8bf7 checkout ",Object(l.b)("strong",{parentName:"p"},"\u591a\u4e2a\u5206\u652f"),"\u5e76\u63d0\u4ea4\u591a\u4e2a PR\u3002"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Step5\uff1a\u5ba1\u9605")),Object(l.b)("p",null,"\u7531 maintainer \u5bf9 PR \u8fdb\u884c review\u3002"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Step6\uff1a\u4efb\u52a1\u5b8c\u6210")),Object(l.b)("p",null,"\u7ffb\u8bd1\u5408\u683c\u7684\u6587\u7ae0\u5c06\u4f1a merge \u5230 ",Object(l.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela.io"},"kubevela.io")," \u7684 master \u5206\u652f\u8fdb\u884c\u53d1\u5e03\u3002"),Object(l.b)("h3",{id:"\u7ffb\u8bd1\u8981\u6c42"},"\u7ffb\u8bd1\u8981\u6c42"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u6570\u5b57\u548c\u82f1\u6587\u4e24\u8fb9\u662f\u4e2d\u6587\u8981\u52a0\u7a7a\u683c\u3002"),Object(l.b)("li",{parentName:"ul"},"KubeVela \u7edf\u4e00\u5199\u6cd5\u3002K \u548c V \u5927\u5199\u3002"),Object(l.b)("li",{parentName:"ul"},"\u7ffb\u8bd1\u5b8c\u8bf7\u5148\u9605\u8bfb\u4e00\u904d\uff0c\u4e0d\u8981\u51fa\u73b0\u9057\u6f0f\u6bb5\u843d\uff0c\u4fdd\u8bc1\u6587\u7ae0\u901a\u987a\u3001\u7b26\u5408\u4e2d\u6587\u9605\u8bfb\u4e60\u60ef\u3002\u4e0d\u8ffd\u6c42\u4e25\u683c\u4e00\u81f4\uff0c\u53ef\u4ee5\u610f\u8bd1\u3002review \u7684\u65f6\u5019\u4e5f\u4f1a\u68c0\u9a8c\u3002"),Object(l.b)("li",{parentName:"ul"},"\u4f60\u548c\u60a8\u4e0d\u8981\u6df7\u7528\uff0c\u7edf\u4e00\u4f7f\u7528\u7528 ",Object(l.b)("strong",{parentName:"li"},"\u201c\u4f60\u201d"),"\u3002"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u4f1a\u7ffb\u8bd1\u7684\u8bcd\u6c47\u53ef\u4ee5\u4e0d\u7ffb\u8bd1\uff0c\u53ef\u4ee5\u5728 PR \u4e2d\u8bf4\u660e\uff0creview \u7684\u65f6\u5019\u4f1a\u67e5\u770b\u3002"),Object(l.b)("li",{parentName:"ul"},"Component\u3001Workload\u3001Trait \u8fd9\u4e9b OAM/KubeVela \u91cc\u9762\u5b9a\u4e49\u7684\u4e13\u5c5e\u6982\u5ff5\u4e0d\u8981\u7ffb\u8bd1\uff0c\u6211\u4eec\u4e5f\u8981\u52a0\u5f3a\u8fd9\u4e9b\u8bcd\u6c47\u7684\u8ba4\u77e5\u3002\u53ef\u4ee5\u5728\u4e00\u7bc7\u65b0\u6587\u7ae0\u6700\u5f00\u59cb\u51fa\u73b0\u7684\u65f6\u5019\u7528\u62ec\u53f7\u52a0\u4e0a\u4e2d\u6587\u7ffb\u8bd1\u3002"),Object(l.b)("li",{parentName:"ul"},"\u6ce8\u610f\u4e2d\u82f1\u6587\u6807\u70b9\u7b26\u53f7\u3002"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"PR")," \u547d\u540d\u89c4\u8303 ",Object(l.b)("inlineCode",{parentName:"li"},"Translate <\u7ffb\u8bd1\u6587\u4ef6\u76f8\u5bf9\u8def\u5f84>"),"\uff0c\u5982 ",Object(l.b)("inlineCode",{parentName:"li"},"Translate i18n/zh/docusaurus-plugin-content-docs/current/introduction.md"),"\u3002")))}u.isMDXComponent=!0},333:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,O=p["".concat(i,".").concat(m)]||p[m]||s[m]||l;return n?r.a.createElement(O,b(b({ref:t},c),{},{components:n})):r.a.createElement(O,b({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var c=2;c<l;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);