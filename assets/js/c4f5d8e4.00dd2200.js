(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4195],{7467:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return T}});var n=a(2122),l=(a(7757),a(7294)),s=a(6010),r=a(3516),o=a(1756);function c(e){var t=e.title,a=e.children,n=e.language,s=e.metastring;return l.createElement("div",{className:"code-with-header"},l.createElement("div",{className:"code-header"},t),l.createElement(o.Z,{className:n,metastring:s},a))}var i=function(e){var t=e.placeholder;return l.createElement("form",{className:"email-signup-form",action:"https://gmail.us4.list-manage.com/subscribe/post?u=8139c7de74df98aa17054b235&id=f0c6ba5f1d",method:"post"},l.createElement("input",{"aria-label":"Email address",name:"EMAIL",type:"email",required:!0,className:"input",placeholder:t||"Enter your email"}),l.createElement("div",{className:""},l.createElement("button",{className:"button button--primary",type:"submit"},"Subscribe")))},m=a(6742),u=a(2263),d=a(4996),p=a(9105),E={heroBanner:"heroBanner_3P7f",startButtonAndVersion:"startButtonAndVersion_1-0e",startCliCmd:"startCliCmd_1W0V",tryWaspRow:"tryWaspRow_1RI1",tryWaspContainer:"tryWaspContainer_3G1r",usingWindows:"usingWindows_vykc",socialProofSection:"socialProofSection_36lj",socialProof:"socialProof_3g4q",ycLogo:"ycLogo_19_2",backedByYC:"backedByYC_3Qmm",waspVersion:"waspVersion_1za0",features:"features_3azU",featureImage:"featureImage_ZtzX",featureListTitle:"featureListTitle_27o7",featuresList:"featuresList_2c2i",featuresListComing:"featuresListComing_18jr",featuresListDone:"featuresListDone_2hZ5",responsiveCentered:"responsiveCentered_3xDC",featuresAndRoadmap:"featuresAndRoadmap_3UgT",visibleOnMobileOnly:"visibleOnMobileOnly_luWX",visibleOnDesktopOnly:"visibleOnDesktopOnly_2Dsg",heroButton:"heroButton_KGuh"},g=a(3253),h=a.n(g),f=[{title:"Quick start",description:l.createElement(l.Fragment,null,"No more endless configuration files. Create a production-ready web app with just a few lines of code - we will set you up with all the best defaults.")},{title:"Speed & Power",description:l.createElement(l.Fragment,null,"Move fast using Wasp's declarative language, but also drop down to ",l.createElement("code",null,"js/html/css...")," when you require more control.")},{title:"No lock-in",description:l.createElement(l.Fragment,null,"If Wasp becomes too limiting for you, simply eject and continue with the human-readable source code following industry best-practices.")}];function v(e){var t=e.imageUrl,a=e.title,n=e.description,r=(0,d.Z)(t);return l.createElement("div",{className:(0,s.Z)("col col--4",E.feature)},r&&l.createElement("div",{className:"text--center"},l.createElement("img",{className:E.featureImage,src:r,alt:a})),l.createElement("h2",null,a),l.createElement("p",null,n))}function w(){return l.createElement("section",{className:"section-lg"},l.createElement("div",{className:"container",style:{textAlign:"center"}},l.createElement("img",{className:"logo",src:"img/eqpar-separator.png"})))}function N(){return l.createElement("a",{href:"https://www.producthunt.com/posts/wasp-lang-alpha?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-wasp-lang-alpha",target:"_blank"},l.createElement("img",{src:"https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=277135&theme=light&period=daily",alt:"Wasp-lang Alpha - Develop web apps in React & Node.js with no boilerplate | Product Hunt",style:{width:"250px",height:"54px"},width:"250",height:"54"}))}function b(){return l.createElement(c,{title:"todoApp.wasp",language:"css"},'app todoApp {\n  title: "ToDo App", /* visible in tab */\n\n  auth: { /* full-stack auth out-of-the-box */\n    userEntity: User,\n    methods: [ EmailAndPassword ],\n  }\n}\n\nroute RootRoute { path: "/", to: MainPage }\npage MainPage {\n  /* import your React code */\n  component: import Main from "@ext/Main.js"\n}\n')}function y(){var e=Object.freeze({NEW_APP:"Create a new app",DEFINE_ENTITY:"Define and query a data model",ADD_AUTH:"Add authentication"}),t=(0,l.useState)(e.NEW_APP),a=t[0],n=t[1];function r(){if(a===e.NEW_APP){return l.createElement("div",{className:"codeExampleFiles"},l.createElement(c,{title:"todoApp.wasp",language:"css"},'/* global app settings */\napp todoApp {\n  title: "ToDo App" /* browser tab title */\n}\n\n/* routing */\nroute RootRoute { path: "/", to: MainPage }\npage MainPage {\n  component: import Main from "@ext/Main" /* import your React code */\n}\n'),l.createElement(c,{title:"ext/Main.js | External React code, imported above",language:"jsx"},"import React from 'react'\n\nexport default () => <span> Hello World! </span>\n"),l.createElement("div",null,"That's it, this is the whole app! Run ",l.createElement("code",null,"wasp start")," and check it out at ",l.createElement("code",null,"http://localhost:3000"),"!"))}if(a===e.ADD_AUTH){return l.createElement("div",{className:"codeExampleFiles"},l.createElement(c,{title:"todoApp.wasp",language:"css"},'app todoApp {\n  /* ... */\n\n  /* full-stack auth out-of-the-box */\n  auth: {\n    userEntity: User,\n    methods: [ EmailAndPassword ], /* more methods coming soon */\n    onAuthFailedRedirectTo: "/login"\n  }\n}\n\n/* ... */\n\n/* email & password required because of the auth method above */\nentity User {=psl\n    id          Int     @id @default(autoincrement())\n    email       String  @unique\n    password    String\npsl=}\n\npage MainPage {\n  authRequired: true, /* available only to logged in users */\n  component: import Main from "@ext/Main"\n}\n'),l.createElement(c,{title:"ext/Main.js | Checking if user is logged in",language:"jsx"},"import React from 'react'\nimport Todo from './Todo.js'\n\n/* Because of authRequired property in todoApp.wasp, this page is\n * available only to logged in users and prop 'user' is automatically provided by wasp. */\nexport default ({ user }) => {\n  return <Todo/>\n}\n"),l.createElement("div",null,"To learn more about authentication & authorization in Wasp, check the ",l.createElement(m.Z,{to:(0,d.Z)("/docs/language/features#authentication--authorization")},"docs"),"."))}if(a===e.DEFINE_ENTITY){return l.createElement("div",{className:"codeExampleFiles"},l.createElement(c,{title:"todoApp.wasp",language:"css"},'/* ... */\n\n/* Data model is defined via Prisma Schema Language (PSL) */\nentity Task {=psl\n    id          Int     @id @default(autoincrement())\n    description String\n    isDone      Boolean @default(false)\npsl=}\n\nquery getTasks {\n  fn: import { getTasks } from "@ext/queries.js", /* import Node.js function */\n  /* A list of entities this query uses - useful for automatic invalidation and refetching */\n  entities: [Task]\n}\n'),l.createElement(c,{title:"ext/queries.js | Node.js function imported in a query above",language:"jsx"},"export const getTasks = async (args, context) => {\n  // Since we above declared this query is using Task, it is automatically injected in the\n  // context.\n  return context.entities.Task.findMany()\n}\n"),l.createElement(c,{title:"ext/Todo.js | Invoking query from React code",language:"jsx"},"import React from 'react'\nimport { useQuery } from '@wasp/queries'\nimport getTasks from '@wasp/queries/getTasks.js'\n\nexport default () => {\n  // Standard useQuery syntax, Wasp provides a thin wrapper around it.\n  const { data: tasks } = useQuery(getTasks)\n  return <Tasks tasks={tasks}/>\n}\n"),l.createElement("div",null,"To learn more about working with data in Wasp, check the ",l.createElement(m.Z,{to:(0,d.Z)("/docs/language/language/features#entity")},"docs"),"."))}return console.log("this should never happen."),null}function o(){function t(t){var r=t.codeExampleKey;return l.createElement("button",{className:(0,s.Z)("button","info",a===e[r]&&"is-active","button--secondary"),onClick:function(){return n(e[r])}},e[r])}return Object.keys(e).map((function(e,a){return l.createElement(t,{codeExampleKey:e,key:a})}))}return l.createElement("div",{className:"row CodeExamples"},l.createElement("div",{className:"ButtonTabs col col--3"},l.createElement("div",null,l.createElement(o,null))),l.createElement("div",{className:"col col--9"},l.createElement(r,null)))}function k(){return l.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=wasp-lang&repo=wasp&type=star&count=true&size=large",frameBorder:"0",scrolling:"0",width:"160px",height:"30px"})}function Z(){return l.createElement("a",{href:"https://discord.gg/rzdnErX"},l.createElement("img",{alt:"discord",src:"https://img.shields.io/discord/686873244791210014?label=chat%20@%20discord",height:"29px"}))}function C(){return l.createElement("section",{className:"section-lg bg-diff",id:"signup"},l.createElement("div",{className:"container"},l.createElement("div",{className:(0,s.Z)("row",E.responsiveCentered)},l.createElement("div",{className:"col col--10 col--offset-1"},l.createElement("h2",null,"Stay up to date"),l.createElement("h3",null,l.createElement("p",null,"Join our mailing list and be the first to know when we ship new features and updates!")))),l.createElement("div",{className:(0,s.Z)("row",E.responsiveCentered),style:{paddingTop:"1rem"}},l.createElement("div",{className:"col col--8 col--offset-2"},l.createElement(i,null))),l.createElement("div",{className:(0,s.Z)("row",E.responsiveCentered,"section-text")},l.createElement("div",{className:"col col--10 col--offset-1"},l.createElement("h3",null,l.createElement("p",null,"Also, make sure to check out ",l.createElement(m.Z,{to:"https://github.com/wasp-lang/wasp"},"Wasp repo on Github")," and express your support by giving us a star!")))),l.createElement("div",{className:(0,s.Z)("row",E.responsiveCentered),style:{paddingTop:"1rem"}},l.createElement("div",{className:"col"},l.createElement(k,null),l.createElement(Z,null)))))}function x(){return l.createElement("section",{className:(0,s.Z)("section-lg","bg-diff",E.socialProofSection)},l.createElement("div",{className:"container"},l.createElement("div",{className:(0,s.Z)("row",E.responsiveCentered)},l.createElement("div",{className:"col col--10 col--offset-1"},l.createElement("div",{className:(0,s.Z)(E.socialProof)},l.createElement("div",{className:(0,s.Z)(E.backedByYC)},l.createElement("img",{className:(0,s.Z)(E.ycLogo),src:"img/ycombinator-logo.png"}),l.createElement("span",null,"backed by ",l.createElement("strong",null,"Y Combinator"))),l.createElement(N,null))))," "))}var T=function(){var e=(0,u.Z)().siteConfig,t=void 0===e?{}:e,a=l.useState(!1),o=a[0],c=a[1],i=(0,d.Z)("docs/tutorials/todo-app"),g="https://wasp-rwa.netlify.app";return l.createElement(r.Z,{title:""+t.title,description:t.tagline},l.createElement(p.Z,null,l.createElement("meta",{property:"og:image",content:t.url+(0,d.Z)("img/hero-code-shot.png")})),l.createElement("header",{className:(0,s.Z)("hero",E.heroBanner)},l.createElement("div",{className:"container"},l.createElement("div",{className:"row hero-row"},l.createElement("div",{className:"col col--7"},l.createElement("div",{className:"hero-text-col"},l.createElement("h2",{className:"hero-subtitle"},t.tagline),l.createElement("div",{className:"hero-works-with"},l.createElement("h3",{className:"works-with-text"},"Describe high-level features with Wasp DSL and write the rest of your logic in React, Node.js and Prisma."),l.createElement("div",{className:"hero-works-with-icons"},l.createElement("img",{src:"img/react-logo.svg"}),l.createElement("img",{src:"img/nodejs-logo.svg"}),l.createElement("img",{src:"img/prisma-logo.svg"})))))," ",l.createElement("div",{className:"col col--5"},l.createElement(b,null))," ")," ",l.createElement("div",{className:(0,s.Z)("row",E.responsiveCentered,E.tryWaspRow)},l.createElement("div",{className:"col col--10 col--offset-1"},l.createElement("div",{className:(0,s.Z)(E.tryWaspContainer)},l.createElement("div",{className:(0,s.Z)(E.startCliCmd)},l.createElement("span",null,l.createElement("code",null,"curl -sSL https://get.wasp-lang.dev/installer.sh | sh"))),l.createElement("div",{className:(0,s.Z)(E.startButtonAndVersion)},l.createElement(m.Z,{className:(0,s.Z)("button button--primary button--huge",E.heroButton),to:(0,d.Z)("/docs")},"Try Wasp in 5 minutes \u2192"))),l.createElement("div",{className:(0,s.Z)(E.usingWindows)},"Using Windows? Check the instructions ",l.createElement(m.Z,{to:(0,d.Z)("/docs/#2-installation")},"here"),"."),l.createElement(h(),{isOpen:o,style:{content:{top:"40%",left:"40%",transform:"translate(-30%, -30%)",paddingTop:"4rem",background:"var(--ifm-hero-background-color)"}},onRequestClose:function(){c(!1)},shouldCloseOnOverlayClick:!0},l.createElement("div",{className:"container"},l.createElement("div",{className:(0,s.Z)("row")},l.createElement("div",{className:"col col--10"},l.createElement("h2",{className:"modal-step-title"},"1. Open your terminal and run:"),l.createElement("div",{className:(0,s.Z)(E.startCliCmd),style:{height:"40px"}},l.createElement("span",null,l.createElement("code",null,"curl -sSL https://get.wasp-lang.dev/installer.sh | sh"))),l.createElement("h2",{className:"modal-step-title ",style:{marginTop:"4rem"}},"2. Create a new project:"),l.createElement("div",{className:(0,s.Z)(E.startCliCmd),style:{height:"40px"}},l.createElement("span",null,l.createElement("code",null,"wasp new MyFirstApp"))),l.createElement("h2",{className:"modal-step-title",style:{marginTop:"4rem"}},"3. Run your first app:"),l.createElement("div",{className:(0,s.Z)(E.startCliCmd),style:{height:"40px",marginRight:"10px"}},l.createElement("span",null,l.createElement("code",null,"cd MyFirstApp && wasp start"))),l.createElement("span",null,"That's it! Open ",l.createElement(m.Z,{to:"http://localhost:3000/"},"http://localhost:3000")," and see how it looks like!"),l.createElement("div",{style:{marginTop:"4rem"}},l.createElement("span",null,"You ran into problems or want more details? Refer to the ",l.createElement(m.Z,{to:(0,d.Z)("/docs")},"docs"),".")))))),l.createElement("div",{className:(0,s.Z)("row",E.responsiveCentered),style:{paddingTop:"1rem"}},l.createElement("div",{className:"col"},l.createElement(k,null),l.createElement(Z,null)))))," ")),l.createElement("main",null,l.createElement(x,null),l.createElement("section",{className:"section-lg"},l.createElement("div",{className:"container"},l.createElement("div",{className:(0,s.Z)("row",E.responsiveCentered)},l.createElement("div",{className:"col col--12"},l.createElement("h3",{className:"title"},"Wasp is an open source, declarative DSL for devs who want to ",l.createElement("span",{className:"title-strong"},"use modern web dev stack"),"\xa0",l.createElement("span",{style:{whiteSpace:"nowrap"}},"(React ",l.createElement("img",{src:"img/react-logo.png",height:"25px"}),", Node.js ",l.createElement("img",{src:"img/node-logo.png",height:"25px"}),", Prisma ",l.createElement("img",{src:"img/prisma-logo.png",height:"25px"}),", ...)"),"\xa0",l.createElement("span",{className:"title-strong"},"without writing boilerplate"),"."),l.createElement("h3",null,l.createElement("p",null,"Frontend, backend and deployment - all unified with one concise language."),l.createElement("p",null,"Zero configuration, all best practices.")))))),l.createElement(w,null),l.createElement("section",{className:"section-lg",id:"how-it-works"},l.createElement("div",{className:"container"},l.createElement("div",{className:(0,s.Z)("row",E.responsiveCentered)},l.createElement("div",{className:"col col--10 col--offset-1"},l.createElement("h2",null,"How it works"),l.createElement("h3",null,l.createElement("p",null,"Given ",l.createElement("code",null,".wasp")," + ",l.createElement("code",null,".js"),", ",l.createElement("code",null,".css"),", ",l.createElement("code",null,"...")," files as an input, Wasp compiler behind the scene\xa0",l.createElement("span",{className:"title-strong"},"generates the full source code of your web app")," - front-end, back-end and deployment.")))),l.createElement("div",{className:(0,s.Z)("row",E.responsiveCentered),style:{paddingTop:"2rem"}},l.createElement("div",{className:"col"},l.createElement("img",{className:"wasp-diagram",src:"img/wasp-compilation.png",alt:"Wasp compilation"}))))),l.createElement(w,null),f&&f.length>0&&l.createElement("section",{className:(0,s.Z)(E.features,"bg-diff")},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},f.map((function(e,t){return l.createElement(v,(0,n.Z)({key:t},e))}))))),l.createElement(w,null),l.createElement("section",{className:"section-lg",id:"fast-and-scalable"},l.createElement("div",{className:"container"},l.createElement("div",{className:(0,s.Z)("row",E.responsiveCentered)},l.createElement("div",{className:"col col--10 col--offset-1"},l.createElement("h2",null,"Quick to start, easy to scale"),l.createElement("h3",null,l.createElement("p",null,"Wasp aims to be at least as flexible as the traditional web frameworks like Ruby on Rails.",l.createElement("br",null),"Start your project quickly with the best defaults and customize and scale it as it grows.")),l.createElement("h3",null,l.createElement("p",null,"As an example, we used Wasp to implement a copy of Medium:"))))," ",l.createElement("div",{className:"row"},l.createElement("div",{className:"col col--10 col--offset-1"},l.createElement("a",{href:g,target:"_blank"},l.createElement("img",{className:"rwa",src:"img/rwa-screenshot.png",alt:"RealWorldApp in Wasp"})))),l.createElement("div",{className:(0,s.Z)("row",E.responsiveCentered)},l.createElement("div",{className:"col col--10 col--offset-1"},l.createElement("h3",null,"You can try out the deployed app ",l.createElement("a",{href:g},"here")," or check out the source code ",l.createElement("a",{href:"https://github.com/wasp-lang/wasp/tree/main/examples/realworld"},"here"),"."))))),l.createElement(w,null),l.createElement("section",{className:"section-lg",id:"what-can-do"},l.createElement("div",{className:"container"},l.createElement("div",{className:(0,s.Z)(E.featuresAndRoadmap,"row",E.responsiveCentered)},l.createElement("div",{className:"col col--10 col--offset-1"},l.createElement("h2",null,"Features & Roadmap"))),l.createElement("div",{className:(0,s.Z)("row")},l.createElement("div",{className:"col col--6"},l.createElement("h3",{className:E.featureListTitle},"Alpha"),l.createElement("ul",{className:(0,s.Z)(E.featuresList,E.featuresListDone)},l.createElement("li",null," full-stack auth (email & password) "),l.createElement("li",null," pages & routing "),l.createElement("li",null," blurs the line between client & server - define your server actions and queries and call them directly in your client code (RPC)! "),l.createElement("li",null," smart caching of server actions and queries (automatic cache invalidation) "),l.createElement("li",null," entity (data model) definition with Prisma.io "),l.createElement("li",null," ACL on frontend "),l.createElement("li",null," importing NPM dependencies "))),l.createElement("div",{className:"col col--6"},l.createElement("h3",{className:E.featureListTitle},"Coming next"),l.createElement("ul",{className:(0,s.Z)(E.featuresList,E.featuresListComing)},l.createElement("li",null," ACL on backend "),l.createElement("li",null," one-click deployment "),l.createElement("li",null," more auth methods (Google, LinkedIn, ...) "),l.createElement("li",null," tighter integration of entities with other features "),l.createElement("li",null," themes and layouts "),l.createElement("li",null," support for explicitly defined server API "),l.createElement("li",null," inline JS - ability to mix JS code with Wasp code! "),l.createElement("li",null," Typescript support "),l.createElement("li",null," server-side rendering "),l.createElement("li",null," Visual Editor "),l.createElement("li",null," support for different languages on backend "),l.createElement("li",null," richer wasp language with better tooling ")))))),l.createElement(w,null),l.createElement("section",{className:"section-lg",id:"the-language"},l.createElement("div",{className:"container"},l.createElement("div",{className:(0,s.Z)("row",E.responsiveCentered)},l.createElement("div",{className:"col col--10 col--offset-1"},l.createElement("h2",null,"The Language"),l.createElement("h3",null,l.createElement("p",null,"Concepts such as ",l.createElement("em",null,"app"),", ",l.createElement("em",null,"page"),", ",l.createElement("em",null,"route"),", ",l.createElement("em",null,"auth"),"\xa0 etc. are baked into Wasp, providing the higher level of expressiveness.")))),l.createElement(y,null))),l.createElement("section",{className:"section-lg"},l.createElement("div",{className:"container"},l.createElement("div",{className:(0,s.Z)("row",E.responsiveCentered)},l.createElement("div",{className:"col col--10 col--offset-1"},l.createElement("h2",null,"Take the tutorial"),l.createElement("h3",null,l.createElement("p",null,"Take the ",l.createElement(m.Z,{to:i}," Todo App tutorial ")," and build a full-fledged Todo app in Wasp!")))),l.createElement("div",{className:(0,s.Z)("row",E.responsiveCentered),style:{paddingTop:"2rem"}},l.createElement("div",{className:"col"},l.createElement("img",{alt:"How Todo App will work once it is done",src:(0,d.Z)("img/todo-app-tutorial-intro.gif"),style:{border:"1px solid black"}}))))),l.createElement("div",{id:"join-the-list"},l.createElement(C,null))))}}}]);