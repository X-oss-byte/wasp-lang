"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2259],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,f=d["".concat(p,".").concat(h)]||d[h]||c[h]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},84637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var o=n(87462),r=(n(67294),n(3905)),a=n(44996);const i={id:"08-the-end",title:"The End"},s=void 0,p={unversionedId:"tutorials/todo-app/08-the-end",id:"tutorials/todo-app/08-the-end",title:"The End",description:'We did it! For all those that followed the instructions closely and created "Build a Todo App in Wasp" task in our Todo App, let\'s celebrate by marking it as done :)!',source:"@site/docs/tutorials/todo-app/08-the-end.md",sourceDirName:"tutorials/todo-app",slug:"/tutorials/todo-app/08-the-end",permalink:"/docs/tutorials/todo-app/08-the-end",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/tutorials/todo-app/08-the-end.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"08-the-end",title:"The End"},sidebar:"docs",previous:{title:"Dependencies",permalink:"/docs/tutorials/todo-app/07-dependencies"},next:{title:"Examples",permalink:"/docs/examples"}},l={},u=[{value:"Tailwind CSS Support",id:"tailwind-css-support",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],d={toc:u},c="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'We did it! For all those that followed the instructions closely and created "Build a Todo App in Wasp" task in our Todo App, let\'s celebrate by marking it as done :)!'),(0,r.kt)("img",{alt:"Yay we are done with the Todo App tutorial!",src:(0,a.Z)("img/todo-app-tutorial-end.gif"),style:{border:"1px solid black"}}),(0,r.kt)("p",null,"You can check out the whole code of the app that we just built ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/tree/release/examples/tutorials/TodoApp"},"here"),"."),(0,r.kt)("p",null,"If you are interested in what is Wasp actually generating in the background, you can check the ",(0,r.kt)("inlineCode",{parentName:"p"},".wasp/out/")," directory in your project."),(0,r.kt)("h2",{id:"tailwind-css-support"},"Tailwind CSS Support"),(0,r.kt)("p",null,"Wasp supports Tailwind out of the box! \ud83c\udfa8 If you want to style your app with sweet Tailwind CSS classes, all you have to do is add a couple of config files to your app."),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/integrations/css-frameworks#tailwind"},"this guide")," to learn more!"),(0,r.kt)("h2",{id:"whats-next"},"What's next?"),(0,r.kt)("p",null,"Well, you could check the ",(0,r.kt)("strong",{parentName:"p"},"Guides")," on the left of the docs for more details on specific parts of Wasp. Let your imagination run wild and build something of your own! \u2728 Maybe something real-time with ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/websockets"},"WebSockets")," or with ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/features#jobs"},"async jobs"),"?"),(0,r.kt)("p",null,"If you notice that some of the features you'd like to have are missing, or have any other kind of feedback, please write to us on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/rzdnErX"},"Discord")," or create an issue on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp"},"Github"),", so we can learn which features to add/improve next \ud83d\ude4f"),(0,r.kt)("p",null,"Even better, if you would like to contribute or help building the feature, let us know!\nYou can find more details on contributing ",(0,r.kt)("a",{parentName:"p",href:"/docs/contributing"},"here"),"."),(0,r.kt)("p",null,"Oh, and do ",(0,r.kt)("strong",{parentName:"p"},"subscribe to our newsletter: ",(0,r.kt)("a",{parentName:"strong",href:"https://wasp-lang.dev/#signup"},"https://wasp-lang.dev/#signup")," ")," ! We usually send 1 per month, and Matija does his best to unleash his creativity to make them engaging and fun to read :D!"))}h.isMDXComponent=!0}}]);