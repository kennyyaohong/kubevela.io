(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{146:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var a=t(3),r=t(7),i=(t(0),t(199)),o={title:"Advanced Features"},p={unversionedId:"cue/advanced",id:"cue/advanced",isDocsHomePage:!1,title:"Advanced Features",description:"As a Data Configuration Language, CUE allows you to do some advanced templating magic in definition objects.",source:"@site/docs/cue/advanced.md",slug:"/cue/advanced",permalink:"/zh/docs/cue/advanced",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/cue/advanced.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1616923587,formattedLastUpdatedAt:"3/28/2021",sidebar:"docs",previous:{title:"Status Write Back",permalink:"/zh/docs/cue/status"},next:{title:"Debug, Test and Dry-run",permalink:"/zh/docs/platform-engineers/debug-test-cue"}},c=[{value:"Render Multiple Resources With a Loop",id:"render-multiple-resources-with-a-loop",children:[]},{value:"Execute HTTP Request in Trait Definition",id:"execute-http-request-in-trait-definition",children:[]},{value:"Data Passing",id:"data-passing",children:[]}],s={toc:c};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"As a Data Configuration Language, CUE allows you to do some advanced templating magic in definition objects."),Object(i.b)("h2",{id:"render-multiple-resources-with-a-loop"},"Render Multiple Resources With a Loop"),Object(i.b)("p",null,"You can define the for-loop inside the ",Object(i.b)("inlineCode",{parentName:"p"},"outputs"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note that in this case the type of ",Object(i.b)("inlineCode",{parentName:"p"},"parameter")," field used in the for-loop must be a map. ")),Object(i.b)("p",null,"Below is an example that will render multiple Kubernetes Services in one trait:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  name: expose\nspec:\n  schematic:\n    cue:\n      template: |\n        parameter: {\n          http: [string]: int\n        }\n\n        outputs: {\n          for k, v in parameter.http {\n            "\\(k)": {\n              apiVersion: "v1"\n              kind:       "Service"\n              spec: {\n                selector:\n                  app: context.name\n                ports: [{\n                  port:       v\n                  targetPort: v\n                }]\n              }\n            }\n          }\n        }\n')),Object(i.b)("p",null,"The usage of this trait could be:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: testapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        ...\n      traits:\n        - type: expose\n          properties:\n            http:\n              myservice1: 8080\n              myservice2: 8081\n")),Object(i.b)("h2",{id:"execute-http-request-in-trait-definition"},"Execute HTTP Request in Trait Definition"),Object(i.b)("p",null,"The trait definition can send a HTTP request and capture the response to help you rendering the resource with keyword ",Object(i.b)("inlineCode",{parentName:"p"},"processing"),"."),Object(i.b)("p",null,"You can define HTTP request ",Object(i.b)("inlineCode",{parentName:"p"},"method"),", ",Object(i.b)("inlineCode",{parentName:"p"},"url"),", ",Object(i.b)("inlineCode",{parentName:"p"},"body"),", ",Object(i.b)("inlineCode",{parentName:"p"},"header")," and ",Object(i.b)("inlineCode",{parentName:"p"},"trailer")," in the ",Object(i.b)("inlineCode",{parentName:"p"},"processing.http")," section, and the returned data will be stored in ",Object(i.b)("inlineCode",{parentName:"p"},"processing.output"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Please ensure the target HTTP server returns a ",Object(i.b)("strong",{parentName:"p"},"JSON data"),".  ",Object(i.b)("inlineCode",{parentName:"p"},"output"),".")),Object(i.b)("p",null,"Then you can reference the returned data from ",Object(i.b)("inlineCode",{parentName:"p"},"processing.output")," in ",Object(i.b)("inlineCode",{parentName:"p"},"patch")," or ",Object(i.b)("inlineCode",{parentName:"p"},"output/outputs"),"."),Object(i.b)("p",null,"Below is an example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  name: auth-service\nspec:\n  schematic:\n    cue:\n      template: |\n        parameter: {\n          serviceURL: string\n        }\n\n        processing: {\n          output: {\n            token?: string\n          }\n          // The target server will return a JSON data with `token` as key.\n          http: {\n            method: *"GET" | string\n            url:    parameter.serviceURL\n            request: {\n              body?: bytes\n              header: {}\n              trailer: {}\n            }\n          }\n        }\n\n        patch: {\n          data: token: processing.output.token\n        }\n')),Object(i.b)("p",null,"In above example, this trait definition will send request to get the ",Object(i.b)("inlineCode",{parentName:"p"},"token")," data, and then patch the data to given component instance."),Object(i.b)("h2",{id:"data-passing"},"Data Passing"),Object(i.b)("p",null,"A trait definition can read the generated API resources (rendered from ",Object(i.b)("inlineCode",{parentName:"p"},"output")," and ",Object(i.b)("inlineCode",{parentName:"p"},"outputs"),") of given component definition."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"}," KubeVela will ensure the component definitions are always rendered before traits definitions.")),Object(i.b)("p",null,"Specifically, the ",Object(i.b)("inlineCode",{parentName:"p"},"context.output")," contains the rendered workload API resource (whose GVK is indicated by ",Object(i.b)("inlineCode",{parentName:"p"},"spec.workload"),"in component definition), and use ",Object(i.b)("inlineCode",{parentName:"p"},"context.outputs.<xx>")," to contain all the other rendered API resources."),Object(i.b)("p",null,"Below is an example for data passing:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: worker\nspec:\n  workload:\n    definition:\n      apiVersion: apps/v1\n      kind: Deployment\n  schematic:\n    cue:\n      template: |\n        output: {\n          apiVersion: "apps/v1"\n          kind:       "Deployment"\n          spec: {\n            selector: matchLabels: {\n              "app.oam.dev/component": context.name\n            }\n\n            template: {\n              metadata: labels: {\n                "app.oam.dev/component": context.name\n              }\n              spec: {\n                containers: [{\n                  name:  context.name\n                  image: parameter.image\n                  ports: [{containerPort: parameter.port}]\n                  envFrom: [{\n                    configMapRef: name: context.name + "game-config"\n                  }]\n                  if parameter["cmd"] != _|_ {\n                    command: parameter.cmd\n                  }\n                }]\n              }\n            }\n          }\n        }\n\n        outputs: gameconfig: {\n          apiVersion: "v1"\n          kind:       "ConfigMap"\n          metadata: {\n            name: context.name + "game-config"\n          }\n          data: {\n            enemies: parameter.enemies\n            lives:   parameter.lives\n          }\n        }\n\n        parameter: {\n          // +usage=Which image would you like to use for your service\n          // +short=i\n          image: string\n          // +usage=Commands to run in the container\n          cmd?: [...string]\n          lives:   string\n          enemies: string\n          port:    int\n        }\n\n\n---\napiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  name: ingress\nspec:\n  schematic:\n    cue:\n      template: |\n        parameter: {\n          domain:     string\n          path:       string\n          exposePort: int\n        }\n        // trait template can have multiple outputs in one trait\n        outputs: service: {\n          apiVersion: "v1"\n          kind:       "Service"\n          spec: {\n            selector:\n              app: context.name\n            ports: [{\n              port:       parameter.exposePort\n              targetPort: context.output.spec.template.spec.containers[0].ports[0].containerPort\n            }]\n          }\n        }\n        outputs: ingress: {\n          apiVersion: "networking.k8s.io/v1beta1"\n          kind:       "Ingress"\n          metadata:\n              name: context.name\n          labels: config: context.outputs.gameconfig.data.enemies\n          spec: {\n            rules: [{\n              host: parameter.domain\n              http: {\n                paths: [{\n                  path: parameter.path\n                  backend: {\n                    serviceName: context.name\n                    servicePort: parameter.exposePort\n                  }\n                }]\n              }\n            }]\n          }\n        }\n')),Object(i.b)("p",null,"In detail, during rendering ",Object(i.b)("inlineCode",{parentName:"p"},"worker")," ",Object(i.b)("inlineCode",{parentName:"p"},"ComponentDefinition"),":"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"the rendered Kubernetes Deployment resource will be stored in the ",Object(i.b)("inlineCode",{parentName:"li"},"context.output"),","),Object(i.b)("li",{parentName:"ol"},"all other rendered resources will be stored in ",Object(i.b)("inlineCode",{parentName:"li"},"context.outputs.<xx>"),", with ",Object(i.b)("inlineCode",{parentName:"li"},"<xx>")," is the unique name in every ",Object(i.b)("inlineCode",{parentName:"li"},"template.outputs"),".")),Object(i.b)("p",null,"Thus, in ",Object(i.b)("inlineCode",{parentName:"p"},"TraitDefinition"),", it can read the rendered API resources (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"context.outputs.gameconfig.data.enemies"),") from the ",Object(i.b)("inlineCode",{parentName:"p"},"context"),"."))}l.isMDXComponent=!0},199:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),l=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=l(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return t?r.a.createElement(b,p(p({ref:n},s),{},{components:t})):r.a.createElement(b,p({ref:n},s))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);