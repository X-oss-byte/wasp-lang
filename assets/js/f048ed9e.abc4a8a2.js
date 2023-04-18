"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9962],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),o=n(72389),i=n(67392),s=n(7094),u=n(12466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:m,groupId:h,className:k}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,i.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[N,x]=(0,r.useState)(v),W=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=h){const e=y[h];null!=e&&e!==N&&b.some((t=>t.value===e))&&x(e)}const O=e=>{const t=e.currentTarget,n=W.indexOf(t),a=b[n].value;a!==N&&(T(t),x(a),null!=h&&w(h,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=W.indexOf(e.currentTarget)+1;n=W[t]??W[0];break}case"ArrowLeft":{const t=W.indexOf(e.currentTarget)-1;n=W[t]??W[W.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},k)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>W.push(e),onKeyDown:C,onClick:O},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},45675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),l=n(65488),o=n(85162);n(44996);const i={title:"Quick Start",slug:"/quick-start",next:"/tutorials/todo-app"},s=void 0,u={unversionedId:"introduction/getting-started",id:"introduction/getting-started",title:"Quick Start",description:"Installation",source:"@site/docs/introduction/getting-started.md",sourceDirName:"introduction",slug:"/quick-start",permalink:"/docs/quick-start",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/introduction/getting-started.md",tags:[],version:"current",frontMatter:{title:"Quick Start",slug:"/quick-start",next:"/tutorials/todo-app"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Introduction",permalink:"/docs/tutorials/todo-app"}},p={},c=[{value:"Installation",id:"installation",level:2},{value:"What next?",id:"what-next",level:3},{value:"More details",id:"more-details",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Installation",id:"installation-1",level:3}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Welcome, new Waspeteer \ud83d\udc1d!"),(0,r.kt)("p",null,"To install Wasp on Linux / OSX / WSL(Win), open your terminal and run: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sSL https://get.wasp-lang.dev/installer.sh | sh\n")),(0,r.kt)("p",null," \u2139\ufe0f Wasp requires ",(0,r.kt)("inlineCode",{parentName:"p"},"node")," and will warn you if it is missing: check below for ",(0,r.kt)("a",{parentName:"p",href:"#requirements"},"more details"),"."),(0,r.kt)("p",null,"Then, create a new app by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wasp new MyNewApp # Creates a new web app named MyNewApp.\ncd MyNewApp\nwasp start # Serves the web app.\n")),(0,r.kt)("p",null,"That's it \ud83c\udf89! You have successfully created and served a new web app at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," and Wasp is serving both frontend and backend for you."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Anything went wrong, or you have additional questions? Check ",(0,r.kt)("a",{parentName:"p",href:"#more-details"},"More Details")," section below!")),(0,r.kt)("h3",{id:"what-next"},"What next?"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\ud83d\udc49 ",(0,r.kt)("strong",{parentName:"li"},"Check out the ",(0,r.kt)("a",{parentName:"strong",href:"/docs/tutorials/todo-app"},"Todo App tutorial")," , which will take you through all the core features of Wasp!")," \ud83d\udc48"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","If you are using VSCode, install our ",(0,r.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=wasp-lang.wasp"},"Wasp language extension"),"."),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Join us on ",(0,r.kt)("a",{parentName:"li",href:"https://discord.gg/rzdnErX"},"Discord"),"! Any feedback or questions you have, we are there for you."),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Follow Wasp development by subscribing to our newsletter: ",(0,r.kt)("a",{parentName:"li",href:"https://wasp-lang.dev/#signup"},"https://wasp-lang.dev/#signup")," . We usually send 1 per month, and Matija does his best to unleash his creativity to make them engaging and fun to read :D!")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"more-details"},"More details"),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"You must have ",(0,r.kt)("inlineCode",{parentName:"p"},"node")," (and ",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),") installed on your machine and available in ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),". We rely on the latest Node.js LTS version (currently ",(0,r.kt)("inlineCode",{parentName:"p"},"v18.14.2"),")."),(0,r.kt)("p",null,"We recommend using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm")," for managing your Node.js installation version(s)."),(0,r.kt)("details",null,(0,r.kt)("summary",{style:{cursor:"pointer",textDecoration:"underline"}},"Quick guide on installing/using nvm"),(0,r.kt)("div",null,(0,r.kt)("p",null,"  Install nvm via your OS package manager (aptitude, pacman, homebrew, ...) or alternatively via ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm#install--update-script"},"nvm install script"),"."),(0,r.kt)("p",null,"  Then, install a version of node that you need, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"nvm install 18\n")),(0,r.kt)("p",null,"  Finally, whenever you need to ensure a specific version of node is used, run e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"nvm use 18\n")),(0,r.kt)("p",null,"  to set the node version for the current shell session."),(0,r.kt)("p",null,"  You can run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"node -v\n")),(0,r.kt)("p",null,"  to check the version of node currently being used in this shell session."),(0,r.kt)("p",null,"  Check NVM repo for more details: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"https://github.com/nvm-sh/nvm")," ."))),(0,r.kt)("h3",{id:"installation-1"},"Installation"),(0,r.kt)(l.Z,{defaultValue:"linux/osx",values:[{label:"Linux / OS X",value:"linux/osx"},{label:"Windows",value:"win"},{label:"From source",value:"source"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"linux/osx",mdxType:"TabItem"},(0,r.kt)("div",{style:{borderLeft:"solid 6px #bf9900",paddingLeft:"10px"}},(0,r.kt)("p",null,"Open your terminal and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sSL https://get.wasp-lang.dev/installer.sh | sh\n")))),(0,r.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("div",{style:{borderLeft:"solid 6px #bf9900",paddingLeft:"10px"}},(0,r.kt)("p",null,"With Wasp for Windows, we are almost there: Wasp is successfully compiling and running on Windows but there is a bug or two stopping it from fully working. Check it out ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/issues/48"},"here")," if you are interested in helping."),(0,r.kt)("p",null,"In the meantime, the best way to start using Wasp on Windows is by using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"WSL"),". Once you set up Ubuntu on WSL, just follow Linux instructions for installing Wasp. If you need further help, reach out to us on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/rzdnErX"},"Discord")," - we have some community members using WSL that might be able to help you."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"  If you are using WSL2, make sure that your Wasp project is not on Windows file system, but instead on Linux file system. Otherwise, Wasp won't be able to detect file changes, due to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/WSL/issues/4739"},"issue in WSL2"),".")))),(0,r.kt)(o.Z,{value:"source",mdxType:"TabItem"},(0,r.kt)("div",{style:{borderLeft:"solid 6px #bf9900",paddingLeft:"10px"}},(0,r.kt)("p",null,"If the installer is not working for you or your OS is not supported, you can try building Wasp from source."),(0,r.kt)("p",null,"To install from source, you need to clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp"},"wasp repo"),", install ",(0,r.kt)("a",{parentName:"p",href:"https://cabal.readthedocs.io/en/stable/getting-started.html"},"cabal")," on your machine and then run ",(0,r.kt)("inlineCode",{parentName:"p"},"cabal install")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"waspc/")," dir."),(0,r.kt)("p",null,"If you have never built Wasp before, this might take some time due to ",(0,r.kt)("inlineCode",{parentName:"p"},"cabal")," downloading dependencies for the first time."),(0,r.kt)("p",null,"Check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/tree/main/waspc"},"waspc/")," for more details on building.")))),(0,r.kt)("admonition",{title:"Try Wasp Without Installing \ud83e\udd14?",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"  Give Wasp a spin in the browser without any setup by running our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/gitpod-template"},"Wasp Template for Gitpod"))))}m.isMDXComponent=!0}}]);