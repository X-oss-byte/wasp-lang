"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3377],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=l(n),k=a,m=u["".concat(p,".").concat(k)]||u[k]||d[k]||s;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=k;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[u]="string"==typeof e?e:a,o[1]=r;for(var l=2;l<s;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},57760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));const s={title:"TypeScript Support"},o="Using Wasp with TypeScript",r={unversionedId:"typescript",id:"typescript",title:"TypeScript Support",description:"TypeScript is a programming language that brings static type analysis to JavaScript. It is a superset of JavaScript (i.e., all valid JavaScript programs are valid TypeScript programs) and compiles to JavaScript before running. TypeScript's type system detects common errors at build time (reducing the chance of runtime errors in production) and enables type-based auto-completion in IDEs.",source:"@site/docs/typescript.md",sourceDirName:".",slug:"/typescript",permalink:"/docs/typescript",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/typescript.md",tags:[],version:"current",frontMatter:{title:"TypeScript Support"},sidebar:"docs",previous:{title:"Deploying",permalink:"/docs/deploying"},next:{title:"Testing",permalink:"/docs/guides/testing"}},p={},l=[{value:"Migrating your project to TypeScript",id:"migrating-your-project-to-typescript",level:2},{value:"Example",id:"example",level:3},{value:"Entity Types",id:"entity-types",level:2},{value:"Backend type support for Queries and Actions",id:"backend-type-support-for-queries-and-actions",level:2},{value:"Frontend type support for Queries and Actions",id:"frontend-type-support-for-queries-and-actions",level:2},{value:"Frontend type support for Queries",id:"frontend-type-support-for-queries",level:3},{value:"Frontend type support for Actions",id:"frontend-type-support-for-actions",level:3},{value:"Type support for the <code>useAction</code> hook",id:"type-support-for-the-useaction-hook",level:4},{value:"Database seeding",id:"database-seeding",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-wasp-with-typescript"},"Using Wasp with TypeScript"),(0,a.kt)("p",null,"TypeScript is a programming language that brings static type analysis to JavaScript. It is a superset of JavaScript (i.e., all valid JavaScript programs are valid TypeScript programs) and compiles to JavaScript before running. TypeScript's type system detects common errors at build time (reducing the chance of runtime errors in production) and enables type-based auto-completion in IDEs."),(0,a.kt)("p",null,"This document assumes you are familiar with TypeScript and primarily focuses on how to use it with Wasp. To learn more about TypeScript itself, we recommend reading ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/"},"the official docs"),"."),(0,a.kt)("p",null,"The document also assumes a basic understanding of core Wasp features (e.g., Queries, Actions, Entities). You can read more about these features in ",(0,a.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/docs/language/features"},"our feature docs"),"."),(0,a.kt)("p",null,"Besides allowing you to write your code in TypeScript, Wasp also supports:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Importing and using Wasp Entity types (on both the server and the client)."),(0,a.kt)("li",{parentName:"ul"},"Automatic full-stack type support for Queries and Actions - frontend types are automatically inferred from backend definitions."),(0,a.kt)("li",{parentName:"ul"},"Type-safe generic hooks (",(0,a.kt)("inlineCode",{parentName:"li"},"useQuery")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"useAction"),") with the accompanying type inference."),(0,a.kt)("li",{parentName:"ul"},"Type-safe optimistic update definitions.")),(0,a.kt)("p",null,"We'll dig into the details of each feature in the following sections. But first, let's see how you can introduce TypeScript to an existing Wasp project."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To get the best IDE experience, make sure to leave ",(0,a.kt)("inlineCode",{parentName:"p"},"wasp start")," running in the background. Wasp will track the working directory and ensure the generated code/types are up to date with your changes."),(0,a.kt)("p",{parentName:"admonition"},"Your editor may sometimes report type and import errors even while ",(0,a.kt)("inlineCode",{parentName:"p"},"wasp start")," is running. This happens when the TypeScript Language Server gets out of sync with the current code. If you're using VS Code, you can manually restart the language server by opening the command palette and selecting ",(0,a.kt)("em",{parentName:"p"},'"TypeScript: Restart TS Server."'))),(0,a.kt)("h2",{id:"migrating-your-project-to-typescript"},"Migrating your project to TypeScript"),(0,a.kt)("p",null,"Wasp supports TypeScript out of the box!"),(0,a.kt)("p",null,"Our scaffolding already includes TypeScript, so migrating your project to TypeScript is as simple as changing file extensions and using the language. This approach allows you to gradually migrate your project on a file-by-file basis."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"Let's first assume your Wasp file contains the following definitions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp",title:"main.wasp"},'entity Task {=psl\n    id          Int     @id @default(autoincrement())\n    description String\n    isDone      Boolean @default(false)\npsl=}\n\nquery getTaskInfo {\n  fn: import { getTaskInfo } from "@server/queries.js",\n  entities: [Task]\n}\n')),(0,a.kt)("p",null,"Let's now assume that your ",(0,a.kt)("inlineCode",{parentName:"p"},"queries.js")," file looks something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/server/queries.js"',title:'"src/server/queries.js"'},'import HttpError from "@wasp/core/HttpError.js"\n\nfunction getInfoMessage(task) {\n  const isDoneText = task.isDone ? "is done" : "is not done"\n  return `Task \'${task.description}\' is ${isDoneText}.`\n}\n\nexport const getTaskInfo = async ({ id }, context) => {\n  const Task = context.entities.Task\n  const task = await Task.findUnique({ where: { id } })\n  if (!task) {\n    throw new HttpError(404)\n  }\n  return getInfoMessage(task)\n}\n')),(0,a.kt)("p",null,"To migrate this file to TypeScript, all you have to do is:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Change the filename from ",(0,a.kt)("inlineCode",{parentName:"li"},"queries.js")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"queries.ts"),"."),(0,a.kt)("li",{parentName:"ol"},"Write some types.")),(0,a.kt)("p",null,"Let's start by only providing a basic ",(0,a.kt)("inlineCode",{parentName:"p"},"getInfoMessage")," function. We'll see how to properly type the rest of the file in the following sections."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=src/server/queries.ts",title:"src/server/queries.ts"},'import HttpError from "@wasp/core/HttpError.js"\n\n// highlight-next-line\nfunction getInfoMessage(task: {\n  isDone: boolean\n  description: string\n}): string {\n  const isDoneText = task.isDone ? "is done" : "is not done"\n  return `Task \'${task.description}\' is ${isDoneText}.`\n}\n\nexport const getTaskInfo = async ({ id }, context) => {\n  const Task = context.entities.Task\n  const task = await Task.findUnique({ where: { id } })\n  if (!task) {\n    throw new HttpError(404)\n  }\n  return getInfoMessage(task)\n}\n')),(0,a.kt)("p",null,"You don't need to change anything inside the ",(0,a.kt)("inlineCode",{parentName:"p"},".wasp")," file."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Even when you use TypeScript, and your file is called ",(0,a.kt)("inlineCode",{parentName:"p"},"queries.ts"),", you still need to import it using the ",(0,a.kt)("inlineCode",{parentName:"p"},".js")," extension:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-wasp"},'query getTaskInfo {\n  fn: import { getTaskInfo } from "@server/queries.js",\n  entities: [Task]\n}\n')),(0,a.kt)("p",{parentName:"admonition"},"Wasp internally uses ",(0,a.kt)("inlineCode",{parentName:"p"},"esnext")," module resolution, which always requires specifying the extension as ",(0,a.kt)("inlineCode",{parentName:"p"},".js")," (i.e., the extension used in the emitted JS file). This applies to all ",(0,a.kt)("inlineCode",{parentName:"p"},"@server")," imports (and files on the server in general). This quirk does not apply to client files (the transpiler takes care of it)."),(0,a.kt)("p",{parentName:"admonition"},"Read more about ES modules in TypeScript ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/esm-node.html"},"here"),". If you're interested in the discussion and the reasoning behind this, read about it ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/33588"},"in this GitHub issue"),".")),(0,a.kt)("h2",{id:"entity-types"},"Entity Types"),(0,a.kt)("p",null,"Instead of manually specifying the types for ",(0,a.kt)("inlineCode",{parentName:"p"},"isDone")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"description"),", we can get them from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Task")," entity type. Wasp will generate types for all entities and let you import them from ",(0,a.kt)("inlineCode",{parentName:"p"},'"@wasp/entities"'),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=src/server/queries.ts",title:"src/server/queries.ts"},'import HttpError from "@wasp/core/HttpError.js"\n// highlight-next-line\nimport { Task } from "@wasp/entities"\n\n// highlight-next-line\nfunction getInfoMessage(task: Pick<Task, "isDone" | "description">): string {\n  const isDoneText = task.isDone ? "is done" : "is not done"\n  return `Task \'${task.description}\' is ${isDoneText}.`\n}\n\nexport const getTaskInfo = async ({ id }, context) => {\n  const Task = context.entities.Task\n  const task = await Task.findUnique({ where: { id } })\n  if (!task) {\n    throw new HttpError(404)\n  }\n  return getInfoMessage(task)\n}\n')),(0,a.kt)("p",null,"By doing this, we've connected the argument type of the ",(0,a.kt)("inlineCode",{parentName:"p"},"getInfoMessage")," function with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Task")," entity. This coupling removes duplication and ensures the function keeps the correct signature even if we change the entity. Of course, the function might throw type errors depending on how we change the entity, but that's precisely what we want!"),(0,a.kt)("p",null,"Don't worry about typing the query function for now. We'll see how to handle this in the next section."),(0,a.kt)("p",null,"Entity types are also available on the client under the same import:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=src/client/Main.jsx",title:"src/client/Main.jsx"},'import { Task } from "@wasp/entities"\n\nexport function ExamplePage() {}\n  const task: Task = {\n    id: 123,\n    description: "Some random task",\n    isDone: false,\n  }\n  return <div>{task.description}</div>\n}\n\n')),(0,a.kt)("p",null,"The mentioned type safety mechanisms also apply here: changing the task entity in our ",(0,a.kt)("inlineCode",{parentName:"p"},".wasp")," file changes the imported type, which might throw a type error and warn us that our task definition is outdated."),(0,a.kt)("h2",{id:"backend-type-support-for-queries-and-actions"},"Backend type support for Queries and Actions"),(0,a.kt)("p",null,"Wasp automatically generates the appropriate types for all Operations (i.e., Actions and Queries) you define inside your ",(0,a.kt)("inlineCode",{parentName:"p"},".wasp")," file. Assuming your ",(0,a.kt)("inlineCode",{parentName:"p"},".wasp")," file contains the following definition:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp",title:"main.wasp"},'// ...\n\nquery GetTaskInfo {\n  fn: import { getTaskInfo } from "@server/queries.js",\n  entities: [Task]\n}\n')),(0,a.kt)("p",null,"Wasp will generate a type called ",(0,a.kt)("inlineCode",{parentName:"p"},"GetTaskInfo"),", which you can use to type the Query's implementation. By assigning the ",(0,a.kt)("inlineCode",{parentName:"p"},"GetTaskInfo")," type to your function, you get the type information for its context. In this case, TypeScript will know the ",(0,a.kt)("inlineCode",{parentName:"p"},"context.entities")," object must include the ",(0,a.kt)("inlineCode",{parentName:"p"},"Task")," entity. If the Query had auth enabled, it would also know that ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," includes user information."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GetTaskInfo")," can is a generic type that takes two (optional) type arguments:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Input")," - The argument (i.e., payload) received by the query function."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Output")," - The query function's return type.")),(0,a.kt)("p",null,"Suppose you don't care about typing the Query's inputs and outputs. In that case, you can omit both type arguments, and TypeScript will infer the most general types (i.e., ",(0,a.kt)("inlineCode",{parentName:"p"},"never")," for the input, ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown")," for the output.)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=src/server/queries.ts",title:"src/server/queries.ts"},'import HttpError from "@wasp/core/HttpError.js"\nimport { Task } from "@wasp/entities"\n// highlight-next-line\nimport { GetTaskInfo } from "@wasp/queries/types"\n\nfunction getInfoMessage(task: Pick<Task, "isDone" | "description">): string {\n  const isDoneText = task.isDone ? "is done" : "is not done"\n  return `Task \'${task.description}\' is ${isDoneText}.`\n}\n\n// Use the type parameters to specify the Query\'s argument and return types.\n// highlight-next-line\nexport const getTaskInfo: GetTaskInfo<Pick<Task, "id">, string> = async ({ id }, context) => {\n  // Thanks to the definition in your .wasp file, the compiler knows the type of\n  // `context` (and that it contains the `Task` entity).\n  const Task = context.entities.Task\n\n  // Thanks to the first type argument in `GetTaskInfo`, the compiler knows `args`\n  // is of type `Pick<Task, "id">`.\n  const task = await Task.findUnique({ where: { id } })\n  if (!task) {\n    throw new HttpError(404)\n  }\n\n  // Thanks to the second type argument in `GetTaskInfo`, the compiler knows the\n  // function must return a value of type `string`.\n  return getInfoMessage(task)\n}\n')),(0,a.kt)("p",null,"Everything described above applies to Actions as well."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If don't want to define a new type for the Query's return value, the new ",(0,a.kt)("inlineCode",{parentName:"p"},"satisfies")," keyword will allow TypeScript to infer it automatically:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const getFoo = (async (_args, context) => {\n  const foos = await context.entities.Foo.findMany()\n  return {\n    foos,\n    message: "Here are some foos!",\n    queriedAt: new Date(),\n  }\n}) satisfies GetFoo\n')),(0,a.kt)("p",{parentName:"admonition"},"From the snippet above, TypeScript knows:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"The correct type for ",(0,a.kt)("inlineCode",{parentName:"li"},"context"),". "),(0,a.kt)("li",{parentName:"ol"},"The Query's return type is ",(0,a.kt)("inlineCode",{parentName:"li"},"{ foos: Foo[], message: string, queriedAt: Date }"),".")),(0,a.kt)("p",{parentName:"admonition"},"If you don't need the context, you can skip specifying the Query's type (and arguments):"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const getFoo = () => {{ name: 'Foo', date: new Date() }}\n"))),(0,a.kt)("h2",{id:"frontend-type-support-for-queries-and-actions"},"Frontend type support for Queries and Actions"),(0,a.kt)("p",null,"Wasp supports automatic full-stack type safety \xe0 la tRPC. You only need to define the Operation's type on the backend, and the frontend will automatically know how to call it."),(0,a.kt)("h3",{id:"frontend-type-support-for-queries"},"Frontend type support for Queries"),(0,a.kt)("p",null,"The examples assume you've defined the Query ",(0,a.kt)("inlineCode",{parentName:"p"},"getTaskInfo")," from the previous sections:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/server/queries.ts"',title:'"src/server/queries.ts"'},'export const getTaskInfo: GetTaskInfo<Pick<Task, "id">, string> = \n  async ({ id }, context) => {\n    // ...\n  }\n')),(0,a.kt)("p",null,"Wasp will use the type of ",(0,a.kt)("inlineCode",{parentName:"p"},"getTaskInfo")," to infer the Query's types on the frontend:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/client/TaskInfo.tsx"',title:'"src/client/TaskInfo.tsx"'},'import { useQuery } from "@wasp/queries"\n// Wasp knows the type of `getTaskInfo` thanks to your backend definition.\n// highlight-next-line\nimport getTaskInfo from "@wasp/queries/getTaskInfo"\n\nexport const TaskInfo = () => {\n  const {\n    // TypeScript knows `taskInfo` is a `string | undefined` thanks to the\n    // backend definition.\n    data: taskInfo,\n    // TypeScript also knows `isError` is a `boolean`.\n    isError,\n    // TypeScript knows `error` is of type `Error`.\n    error,\n    // TypeScript knows `id` must be a `Task["id"]` (i.e., a number) thanks to\n    // your backend definition.\n    // highlight-next-line\n  } = useQuery(getTaskInfo, { id: 1 })\n\n  if (isError) {\n    return <div> Error during fetching tasks: {error.message || "unknown"}</div>\n  }\n\n  // TypeScript forces you to perform this check.\n  return taskInfo === undefined ? (\n    <div>Waiting for info...</div>\n  ) : (\n    <div>{taskInfo}</div>\n  )\n}\n')),(0,a.kt)("h3",{id:"frontend-type-support-for-actions"},"Frontend type support for Actions"),(0,a.kt)("p",null,"Assuming the following action definition in your ",(0,a.kt)("inlineCode",{parentName:"p"},".wasp")," file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp",title:"main.wasp"},'action addTask {\n  fn: import { addTask } from "@server/actions.js"\n  entities: [Task]\n}\n')),(0,a.kt)("p",null,"And its corresponding implementation in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/server/actions.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=src/server/actions.ts",title:"src/server/actions.ts"},'import { AddTask } from "@wasp/actions/types"\n\ntype TaskPayload = Pick<Task, "description" | "isDone">\n\nconst addTask: AddTask<TaskPayload, Task> = async (args, context) => {\n  // ...\n}\n')),(0,a.kt)("p",null,"Here's how to use it on the frontend:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=src/client/AddTask.tsx",title:"src/client/AddTask.tsx"},'import { useAction } from "@wasp/actions"\n// TypeScript knows `addTask` is a function that expects a value of type\n// `TaskPayload` and returns a value of type `Promise<Task>`.\nimport addTask from "@wasp/queries/addTask"\n\nconst AddTask = ({ description }: Pick<Task, "description">) => {\n  return (\n    <div>\n      <button onClick={() => addTask({ description, isDone: false })}>\n        Add unfinished task\n      </button>\n      <button onClick={() => addTask({ description, isDone: true })}>\n        Add finished task\n      </button>\n    </div>\n  )\n}\n\n')),(0,a.kt)("h4",{id:"type-support-for-the-useaction-hook"},"Type support for the ",(0,a.kt)("inlineCode",{parentName:"h4"},"useAction")," hook"),(0,a.kt)("p",null,"Type inference also works if you decide to use the action via the ",(0,a.kt)("inlineCode",{parentName:"p"},"useAction")," hook:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// addTaskFn is of type (args: TaskPayload) => Task\nconst addTaskFn = useAction(addTask)\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useAction")," hook also includes support for optimistic updates. Read ",(0,a.kt)("a",{parentName:"p",href:"/docs/language/features#the-useaction-hook"},"the feature docs")," to understand more about optimistic updates and how to define them in Wasp."),(0,a.kt)("p",null,"Here's an example that shows how you can use static type checking in their definitions (the example assumes an appropriate action defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},".wasp")," file and implemented on the server):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=Task.tsx",title:"Task.tsx"},'import { useQuery } from "@wasp/queries"\nimport { OptimisticUpdateDefinition, useAction } from "@wasp/actions"\nimport updateTaskIsDone from "@wasp/actions/updateTaskIsDone"\n\ntype TaskPayload = Pick<Task, "id" | "isDone">\n\nconst Task = ({ taskId }: Pick<Task, "id">) => {\n  const updateTaskIsDoneOptimistically = useAction(\n    updateTaskIsDone,\n    {\n      optimisticUpdates: [\n        {\n          getQuerySpecifier: () => [getTask, { id: taskId }],\n          // This query\'s cache should should never be empty\n          updateQuery: ({ isDone }, oldTask) => ({ ...oldTask!, isDone }),\n          // highlight-next-line\n        } as OptimisticUpdateDefinition<TaskPayload, Task>,\n        {\n          getQuerySpecifier: () => [getTasks],\n          updateQuery: (updatedTask, oldTasks) =>\n            oldTasks &&\n            oldTasks.map((task) =>\n              task.id === updatedTask.id ? { ...task, ...updatedTask } : task\n            ),\n          // highlight-next-line\n        } as OptimisticUpdateDefinition<TaskPayload, Task[]>,\n      ],\n    }\n  )\n  // ...\n}\n')),(0,a.kt)("h2",{id:"database-seeding"},"Database seeding"),(0,a.kt)("p",null,"When implementing a seed function in TypeScript, you can import a ",(0,a.kt)("inlineCode",{parentName:"p"},"DbSeedFn")," type via"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import type { DbSeedFn } from "@wasp/dbSeed/types.js"\n')),(0,a.kt)("p",null,"and use it to type your seed function like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export const devSeedSimple: DbSeedFn = async (prismaClient) => { ... }\n")))}d.isMDXComponent=!0}}]);