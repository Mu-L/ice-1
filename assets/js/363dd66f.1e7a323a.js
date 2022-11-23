"use strict";(self.webpackChunkice_website_v3=self.webpackChunkice_website_v3||[]).push([[6538],{4852:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(9231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(2203),r=(n(9231),n(4852));const i={title:"\u6784\u5efa\u65f6\u6e32\u67d3 SSG",order:10},o=void 0,l={unversionedId:"guide/basic/ssg",id:"guide/basic/ssg",title:"\u6784\u5efa\u65f6\u6e32\u67d3 SSG",description:"\u5c0f\u7a0b\u5e8f\u7aef\u4e0d\u652f\u6301\u8be5\u80fd\u529b\u3002",source:"@site/docs/guide/basic/ssg.md",sourceDirName:"guide/basic",slug:"/guide/basic/ssg",permalink:"/docs/guide/basic/ssg",draft:!1,editUrl:"https://github.com/ice-lab/ice-next/edit/master/website/docs/guide/basic/ssg.md",tags:[],version:"current",frontMatter:{title:"\u6784\u5efa\u65f6\u6e32\u67d3 SSG",order:10},sidebar:"docs",previous:{title:"\u6570\u636e\u6a21\u62df Mock",permalink:"/docs/guide/basic/mock"},next:{title:"\u670d\u52a1\u7aef\u6e32\u67d3 SSR",permalink:"/docs/guide/basic/ssr"}},s={},c=[{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3},{value:"SSG \u7684\u6570\u636e\u8bf7\u6c42",id:"ssg-\u7684\u6570\u636e\u8bf7\u6c42",level:3},{value:"\u5173\u95ed SSG",id:"\u5173\u95ed-ssg",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5c0f\u7a0b\u5e8f\u7aef\u4e0d\u652f\u6301\u8be5\u80fd\u529b\u3002")),(0,r.kt)("p",null,"\u6784\u5efa\u65f6\u6e32\u67d3\uff0c\u7b80\u79f0 SSG (Static Site Generation)\uff0c\u662f\u6307\u5728\u6784\u5efa\u65f6\u63d0\u524d\u751f\u6210\u5185\u5bb9 HTML \u7684\u6e32\u67d3\u6a21\u5f0f\u3002"),(0,r.kt)("p",null,"ice.js \u9ed8\u8ba4\u5f00\u542f SSG \u80fd\u529b\u3002SSG \u4e0d\u4ec5\u9002\u7528\u4e8e\u9759\u6001\u7ad9\u70b9\uff0c\u4e5f\u9002\u7528\u4e8e\u4e3a\u666e\u901a CSR \u5e94\u7528\u63d0\u524d\u751f\u6210\u9759\u6001\u5185\u5bb9\u3002"),(0,r.kt)("p",null,"\u82e5\u6709\u5982\u4e0b\u9875\u9762\uff0c\u5185\u5bb9\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/home.tsx"',title:'"src/pages/home.tsx"'},"import { useData } from 'ice';\n\nexport default function Home() {\n  const data = useData();\n  return (\n    <>\n      <div>Hello ICE</div>\n      <div>stars: {data?.stars}</div>\n    </>\n  );\n}\n")),(0,r.kt)("p",null,"\u5176\u4e2d\uff0c\u7b2c\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"div")," \u4e2d\u7684\u5185\u5bb9\u662f\u4e0d\u4f9d\u8d56\u4e8e\u6570\u636e\u3002\u5728\u4f20\u7edf\u7684 CSR \u5e94\u7528\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"<Home />")," \u7ec4\u4ef6\u5185\u5bb9\uff0c\u65e0\u8bba\u662f\u5426\u4f9d\u8d56\u6570\u636e\uff0c\u90fd\u9700\u8981\u7b49\u5f85 JS \u52a0\u8f7d\u3001\u89e3\u6790\u540e\u6e32\u67d3\u3002"),(0,r.kt)("p",null,"\u5229\u7528 SSG\uff0c\u5219\u53ef\u4ee5\u5728\u6784\u5efa\u65f6\uff0c\u5c31\u5c06\u4e0d\u4f9d\u8d56\u4e8e\u52a8\u6001\u6570\u636e\u7684\u90e8\u5206\u63d0\u524d\u751f\u6210\u5230 HTML \u4e2d\u3002\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    ...\n  </head>\n  <body>\n    <div id="ice-container">\n      <div>Hello ICE</div>\n      <div>stars: </div>\n    </div>\n  </body>\n</html>\n')),(0,r.kt)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u6d88\u8d39 ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," \u65f6\uff0c\u9700\u8981\u505a\u597d\u7a7a\u503c\u5224\u65ad\uff0c\u907f\u514d ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," \u65f6\uff0c\u4ea7\u751f\u6e32\u67d3\u5f02\u5e38\uff0c\u65e0\u6cd5\u6b63\u5e38\u6784\u5efa\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u9700\u8981\u517c\u5bb9 Node.js \u7aef\u3002SSG \u4f1a\u5728\u6784\u5efa\u65f6\u8fdb\u884c\uff0c\u56e0\u6b64\u4ee3\u7801\u4f1a\u8fd0\u884c\u5728 Node.js \u4fa7\uff0c\u56e0\u6b64\u5728\u6d88\u8d39\u4e00\u4e9b\u6d4f\u89c8\u5668\u7279\u6709\u7684\u73af\u5883\u53d8\u91cf\u65f6\uff0c\u8981\u505a\u597d\u73af\u5883\u5224\u65ad\u3002")),(0,r.kt)("h3",{id:"ssg-\u7684\u6570\u636e\u8bf7\u6c42"},"SSG \u7684\u6570\u636e\u8bf7\u6c42"),(0,r.kt)("p",null,"\u901a\u5e38\u5728 SSG \u65f6\uff0c\u6211\u4eec\u4e0d\u80fd\u4f7f\u7528\u540e\u7aef\u63a5\u53e3\u83b7\u53d6\u5f53\u524d\u7684\u6570\u636e\uff0c\u56e0\u4e3a\u8fd9\u901a\u5e38\u4e0e\u7528\u6237\u8bbf\u95ee\u65f6\u4e0d\u4e00\u81f4\u3002\u8fd9\u65f6\u6211\u4eec\u53ef\u4ee5\u4e3a SSG \u5b9a\u4e49\u7279\u5b9a\u7684\u6570\u636e\u8bf7\u6c42\u65b9\u6cd5\uff0c\u901a\u8fc7\u4e3a\u8def\u7531\u7ec4\u4ef6\u5b9a\u4e49 ",(0,r.kt)("inlineCode",{parentName:"p"},"staticDataLoader")," \u6765\u5b9e\u73b0\u3002\u8fd9\u6837\u5728 SSG \u65f6\uff0c\u7ec4\u4ef6\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"useData()")," \u83b7\u53d6\u7684\u6570\u636e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"staticDataLoader")," \u7684\u8fd4\u56de\u503c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/index.tsx"',title:'"src/pages/index.tsx"'},"import { useData, defineDataLoader, defineStaticDataLoader } from 'ice';\n\nexport default function Home() {\n  const data = useData();\n  return (\n    <>\n      <div>Hello ICE</div>\n      <div>stars: {data?.stars}</div>\n    </>\n  );\n}\n\n// \u6d4f\u89c8\u5668\u4fa7\u7684\u5e38\u89c4\u6570\u636e\u8bf7\u6c42\nexport const dataLoader = defineDataLoader(() => {\n  return fetch('https://example.com/stars');\n});\n\n// \u8fd4\u56de\u7528\u4e8e SSG \u7684\u515c\u5e95\u6570\u636e\nexport const staticDataLoader = defineStaticDataLoader(() => {\n  return {\n    stars: 0,\n  };\n});\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"defineDataLoader")," \u63a5\u53d7\u5165\u53c2\u4e3a\u6570\u7ec4\u65f6\uff08\u5b9a\u4e49\u4e86\u591a\u4e2a\u6570\u636e\u8bf7\u6c42\uff09\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"defineStaticDataLoader")," \u4e5f\u9700\u8981\u4e0e\u5176\u4e00\u4e00\u5bf9\u5e94\u3002")),(0,r.kt)("p",null,"\u6784\u5efa Client \u7aef\u7684\u4ea7\u7269\u65f6\uff0c\u4f1a\u79fb\u9664 ",(0,r.kt)("inlineCode",{parentName:"p"},"staticDataLoader")," \u53ca\u5176\u76f8\u5173\u4f9d\u8d56\u3002"),(0,r.kt)("h2",{id:"\u5173\u95ed-ssg"},"\u5173\u95ed SSG"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"ice.config.mts")," \u4e0b\uff0c\u6309\u5982\u4e0b\u914d\u7f6e\u4fee\u6539"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ice.config.mts"',title:'"ice.config.mts"'},"import { defineConfig } from '@ice/app';\n\nexport default defineConfig(() => ({\n  // ...\n  ssg: false,\n}));\n")))}p.isMDXComponent=!0}}]);