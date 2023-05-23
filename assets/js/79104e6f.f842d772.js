"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[891],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return t?i.createElement(g,s(s({ref:n},d),{},{components:t})):i.createElement(g,s({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<r;c++)s[c]=t[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},35640:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(87462),a=(t(67294),t(3905));t(44996);const r={title:"CSS Frameworks"},s="CSS Frameworks",o={unversionedId:"integrations/css-frameworks",id:"integrations/css-frameworks",title:"CSS Frameworks",description:"Tailwind",source:"@site/docs/integrations/css-frameworks.md",sourceDirName:"integrations",slug:"/integrations/css-frameworks",permalink:"/docs/integrations/css-frameworks",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/integrations/css-frameworks.md",tags:[],version:"current",frontMatter:{title:"CSS Frameworks"},sidebar:"docs",previous:{title:"Email Authentication",permalink:"/docs/guides/email-auth"},next:{title:"Deploying",permalink:"/docs/deploying"}},l={},c=[{value:"Tailwind",id:"tailwind",level:2},{value:"New project tree overview",id:"new-project-tree-overview",level:3},{value:"Tailwind integration steps",id:"tailwind-integration-steps",level:3},{value:"1) Add <code>./tailwind.config.cjs</code>",id:"1-add-tailwindconfigcjs",level:4},{value:"2) Add <code>./postcss.config.cjs</code>",id:"2-add-postcssconfigcjs",level:4},{value:"3) Update <code>./src/client/Main.css</code>",id:"3-update-srcclientmaincss",level:4},{value:"4) Start using Tailwind \ud83e\udd73",id:"4-start-using-tailwind-",level:4},{value:"Adding Tailwind plugins",id:"adding-tailwind-plugins",level:3}],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"css-frameworks"},"CSS Frameworks"),(0,a.kt)("h2",{id:"tailwind"},"Tailwind"),(0,a.kt)("p",null,"To enable support for Tailwind in your Wasp project, you simply need to add two config files (",(0,a.kt)("inlineCode",{parentName:"p"},"tailwind.config.cjs")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"postcss.config.cjs"),") to the root directory. When they are present, Wasp will add the necessary NPM dependencies and copy your config files into the generated project output. You can then start adding ",(0,a.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/functions-and-directives#directives"},"Tailwind CSS directives")," to your CSS files and ",(0,a.kt)("inlineCode",{parentName:"p"},"className"),"s to your React components."),(0,a.kt)("h3",{id:"new-project-tree-overview"},"New project tree overview"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="tree ." {6,13-14}',title:'"tree','."':!0,"{6,13-14}":!0},".\n\u251c\u2500\u2500 main.wasp\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 client\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 tsconfig.json\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Main.css\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 MainPage.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 waspLogo.png\n\u2502\xa0\xa0 \u251c\u2500\u2500 server\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 tsconfig.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 shared\n\u2502\xa0\xa0     \u2514\u2500\u2500 tsconfig.json\n\u251c\u2500\u2500 postcss.config.cjs\n\u2514\u2500\u2500 tailwind.config.cjs\n")),(0,a.kt)("h3",{id:"tailwind-integration-steps"},"Tailwind integration steps"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"You need to name the config files with the ",(0,a.kt)("inlineCode",{parentName:"p"},".cjs")," extension since they are CommonJS modules. If you name them with ",(0,a.kt)("inlineCode",{parentName:"p"},".js")," extension, Wasp will not be able to find them and Tailwind integration will not work.")),(0,a.kt)("h4",{id:"1-add-tailwindconfigcjs"},"1) Add ",(0,a.kt)("inlineCode",{parentName:"h4"},"./tailwind.config.cjs")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./tailwind.config.cjs"',title:'"./tailwind.config.cjs"'},"/** @type {import('tailwindcss').Config} */\nmodule.exports = {\n  content: [\n    \"./src/**/*.{js,jsx,ts,tsx}\",\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}\n")),(0,a.kt)("h4",{id:"2-add-postcssconfigcjs"},"2) Add ",(0,a.kt)("inlineCode",{parentName:"h4"},"./postcss.config.cjs")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./postcss.config.cjs"',title:'"./postcss.config.cjs"'},"module.exports = {\n  plugins: {\n    tailwindcss: {},\n    autoprefixer: {},\n  },\n}\n")),(0,a.kt)("h4",{id:"3-update-srcclientmaincss"},"3) Update ",(0,a.kt)("inlineCode",{parentName:"h4"},"./src/client/Main.css")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="./src/client//Main.css" {1-3}',title:'"./src/client//Main.css"',"{1-3}":!0},"@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n/* rest of content below */\n")),(0,a.kt)("h4",{id:"4-start-using-tailwind-"},"4) Start using Tailwind \ud83e\udd73"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="./src/client/MainPage.js"',title:'"./src/client/MainPage.js"'},'<h1 className="text-3xl font-bold underline">\n  Hello world!\n</h1>\n')),(0,a.kt)("h3",{id:"adding-tailwind-plugins"},"Adding Tailwind plugins"),(0,a.kt)("p",null,"To add Tailwind plugins, add them to your ",(0,a.kt)("inlineCode",{parentName:"p"},"tailwind.config.cjs")," file and ",(0,a.kt)("inlineCode",{parentName:"p"},"main.wasp")," files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./tailwind.config.cjs" {10-11}',title:'"./tailwind.config.cjs"',"{10-11}":!0},"/** @type {import('tailwindcss').Config} */\nmodule.exports = {\n  content: [\n    \"./src/**/*.{js,jsx,ts,tsx}\",\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [\n    require('@tailwindcss/forms'),\n    require('@tailwindcss/typography'),\n  ],\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.wasp" {4-5}',title:'"main.wasp"',"{4-5}":!0},'app todoApp {\n  title: "Example App",\n  dependencies: [\n    ("@tailwindcss/forms", "^0.5.3"),\n    ("@tailwindcss/typography", "^0.5.7")\n  ],\n  // ...\n}\n')))}u.isMDXComponent=!0}}]);