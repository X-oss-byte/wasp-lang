(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7162],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(2263),a=n(3919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,s=void 0!==i&&i,l=o.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(s)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+p:p}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},6105:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return v},default:function(){return w},frontMatter:function(){return h},metadata:function(){return g},toc:function(){return k}});var r=n(2122),a=n(9756),o=n(7294),i=n(3905),s=n(9443);var l=function(){var e=(0,o.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(6010),p="tabItem_1uMI",c="tabItemActive_2DSg";var d=function(e){var t,n=e.lazy,r=e.block,a=e.defaultValue,i=e.values,s=e.groupId,d=e.className,m=o.Children.toArray(e.children),f=null!=i?i:m.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=a?a:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,v=l(),g=v.tabGroupChoices,k=v.setTabGroupChoices,b=(0,o.useState)(h),w=b[0],y=b[1],N=[];if(null!=s){var x=g[s];null!=x&&x!==w&&f.some((function(e){return e.value===x}))&&y(x)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),r=f[n].value;y(r),null!=s&&(k(s,r),setTimeout((function(){var e,n,r,a,o,i,s,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,s=i.innerHeight,l=i.innerWidth,n>=0&&o<=l&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":r},d)},f.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,u.Z)("tabs__item",p,{"tabs__item--active":w===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:C,onClick:C},null!=n?n:t)}))),n?(0,o.cloneElement)(m.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))};var m=function(e){var t=e.children,n=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:r},t)},f=(n(4996),["components"]),h={title:"Getting Started",slug:"/",next:"/tutorials/todo-app"},v=void 0,g={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"1. Requirements",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting Started",slug:"/",next:"/tutorials/todo-app"},sidebar:"docs",next:{title:"What is Wasp?",permalink:"/docs/about"}},k=[{value:"1. Requirements",id:"1-requirements",children:[]},{value:"2. Installation",id:"2-installation",children:[]},{value:"3. Creating and running your first app",id:"3-creating-and-running-your-first-app",children:[]},{value:"4. What next?",id:"4-what-next",children:[]}],b={toc:k};function w(e){var t=e.components,n=(0,a.Z)(e,f);return(0,i.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-requirements"},"1. Requirements"),(0,i.kt)("p",null,"You need to have ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," (and ",(0,i.kt)("inlineCode",{parentName:"p"},"npm"),") installed on your machine and available in ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node"),": >=16.11.0 and <=16.15.0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm"),": >= 8.0.0 and <= 8.5.5")),(0,i.kt)("p",null,"You can check ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," versions by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell-session"},"node -v\nnpm -v\n")),(0,i.kt)("p",null,"We recommend using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm")," for managing your Node.js installation version(s)."),(0,i.kt)("details",null,(0,i.kt)("summary",{style:{cursor:"pointer",textDecoration:"underline"}},"Quick guide on installing/using nvm"),(0,i.kt)("div",null,(0,i.kt)("p",null,"  Install nvm via your OS package manager (aptitude, pacman, homebrew, ...) or alternatively via ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm#install--update-script"},"nvm install script"),"."),(0,i.kt)("p",null,"  Then, install a version of node that you need, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell-session"},"nvm install 16.15.0\n")),(0,i.kt)("p",null,"  Finally, whenever you need to ensure specific version of node is used, run e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell-session"},"nvm use 16.15.0\n")),(0,i.kt)("p",null,"  to set the node version for current shell session."),(0,i.kt)("p",null,"  You can run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell-session"},"node -v\n")),(0,i.kt)("p",null,"  to check the version of node currently being used in this shell session."),(0,i.kt)("p",null,"  Check NVM repo for more details: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"https://github.com/nvm-sh/nvm")," ."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Why does Wasp require this specific ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," range and doesn't support a newer version x.y.z?"),(0,i.kt)("p",{parentName:"div"},'At Wasp, we focus on supporting the latest LTS ("long-term-support") Node.js version, since it guarantees stability and active maintainance, which is why official Node.js team recommends it for usage in production.\nTherefore, a specific Wasp release will usually require the version of Node.js that was LTS at that point of time.\nCheck out ',(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/about/releases/"},"https://nodejs.org/en/about/releases/")," for more details about Node.js releases."),(0,i.kt)("p",{parentName:"div"},"Sometimes we will make an exception to that and additionaly limit the Node.js version or postpone switching to the latest LTS if there are certain issues with new Node.js version, in which case we will catch up once those are resolved on Node.js side or we find a workaround on Wasp side."))),(0,i.kt)("h2",{id:"2-installation"},"2. Installation"),(0,i.kt)(d,{defaultValue:"linux/osx",values:[{label:"Linux / OS X",value:"linux/osx"},{label:"Windows",value:"win"},{label:"From source",value:"source"}],mdxType:"Tabs"},(0,i.kt)(m,{value:"linux/osx",mdxType:"TabItem"},(0,i.kt)("div",{style:{borderLeft:"solid 6px #bf9900",paddingLeft:"10px"}},(0,i.kt)("p",null,"Open your terminal and run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSL https://get.wasp-lang.dev/installer.sh | sh\n")))),(0,i.kt)(m,{value:"win",mdxType:"TabItem"},(0,i.kt)("div",{style:{borderLeft:"solid 6px #bf9900",paddingLeft:"10px"}},(0,i.kt)("p",null,"With Wasp for Windows, we are almost there: Wasp is successfully compiling and running on Windows but there is a bug or two stopping it from fully working. Check it out ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/issues/48"},"here")," if you are interested in helping."),(0,i.kt)("p",null,"In the meantime, the best way to start using Wasp on Windows is by using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"WSL"),". Once you set up Ubuntu on WSL, just follow Linux instructions for installing Wasp. If you need further help, reach out to us on ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/rzdnErX"},"Discord")," - we have some community members using WSL that might be able to help you."))),(0,i.kt)(m,{value:"source",mdxType:"TabItem"},(0,i.kt)("div",{style:{borderLeft:"solid 6px #bf9900",paddingLeft:"10px"}},(0,i.kt)("p",null,"If installer is not working for you or your OS is not supported, you can try building Wasp from source."),(0,i.kt)("p",null,"To install from source, you need to clone the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp"},"wasp repo"),", install ",(0,i.kt)("a",{parentName:"p",href:"https://cabal.readthedocs.io/en/stable/getting-started.html"},"cabal")," on your machine and then run ",(0,i.kt)("inlineCode",{parentName:"p"},"cabal install")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"waspc/")," dir."),(0,i.kt)("p",null,"If you have never built Wasp before, this might take some time due to ",(0,i.kt)("inlineCode",{parentName:"p"},"cabal")," downloading dependencies for the first time.  "),(0,i.kt)("p",null,"Check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/tree/main/waspc"},"waspc/")," for more details on building.")))),(0,i.kt)("h2",{id:"3-creating-and-running-your-first-app"},"3. Creating and running your first app"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell-session"},"wasp new MyNewApp # Creates a new web app named MyNewApp.\ncd MyNewApp\nwasp start # Serves the web app.\n")),(0,i.kt)("p",null,"That's it \ud83c\udf89! You have successfully created and served a new web app at ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," and Wasp is serving both frontend and backend for you."),(0,i.kt)("h2",{id:"4-what-next"},"4. What next?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Check out the \ud83e\udd13 ",(0,i.kt)("a",{parentName:"strong",href:"/docs/tutorials/todo-app"},"Todo App tutorial")," \ud83e\udd13 , which will take you through all the core features of Wasp!")),(0,i.kt)("p",null,"You can also:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Join the community on ",(0,i.kt)("a",{parentName:"li",href:"https://discord.gg/rzdnErX"},"Discord"),"! Any feedback or questions you have, we are there for you."),(0,i.kt)("li",{parentName:"ul"},"If you are using Visual Studio Code, install our ",(0,i.kt)("a",{href:"https://marketplace.visualstudio.com/items?itemName=wasp-lang.wasp"},"Wasp language extension"),"!")))}w.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);