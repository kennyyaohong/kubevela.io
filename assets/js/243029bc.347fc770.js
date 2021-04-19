(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(332)),o={title:"Install kubectl plugin"},i={unversionedId:"end-user/kubectlplugin",id:"end-user/kubectlplugin",isDocsHomePage:!1,title:"Install kubectl plugin",description:"Install vela kubectl plugin can help you to ship applications more easily!",source:"@site/docs/end-user/kubectlplugin.md",slug:"/end-user/kubectlplugin",permalink:"/docs/next/end-user/kubectlplugin",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/kubectlplugin.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1618580826,formattedLastUpdatedAt:"4/16/2021",sidebar:"docs",previous:{title:"Multi-Cluster Deployment",permalink:"/docs/next/rollout/appdeploy"},next:{title:"Explore Applications",permalink:"/docs/next/end-user/explore"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],u={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Install vela kubectl plugin can help you to ship applications more easily!"),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("p",null,"You can install kubectl plugin ",Object(l.b)("inlineCode",{parentName:"p"},"kubectl vela")," by:"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"macOS/Linux")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"curl -fsSl https://kubevela.io/script/install-kubectl-vela.sh | bash\n")),Object(l.b)("p",null,"You can also download the binary from ",Object(l.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/releases"},"release pages ( >= v1.0.3)")," manually.\nKubectl will discover it from your system path automatically."),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'$ kubectl vela -h\nA Highly Extensible Platform Engine based on Kubernetes and Open Application Model.\n\nUsage:\n  kubectl vela [flags]\n  kubectl vela [command]\n\nAvailable Commands:\n\nFlags:\n  -h, --help   help for vela\n\n    dry-run     Dry Run an application, and output the K8s resources as\n                result to stdout, only CUE template supported for now\n    live-diff   Dry-run an application, and do diff on a specific app\n                revison. The provided capability definitions will be used\n                during Dry-run. If any capabilities used in the app are not\n                found in the provided ones, it will try to find from\n                cluster.\n    show        Show the reference doc for a workload type or trait\n    version     Prints out build version information\n\n\nUse "kubectl vela [command] --help" for more information about a command.\n')))}p.isMDXComponent=!0},332:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,f=s["".concat(o,".").concat(b)]||s[b]||d[b]||l;return n?a.a.createElement(f,i(i({ref:t},u),{},{components:n})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);