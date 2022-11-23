"use strict";(self.webpackChunkice_website_v3=self.webpackChunkice_website_v3||[]).push([[9625],{4852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(9231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?i.createElement(f,l(l({ref:t},u),{},{components:n})):i.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=n(2203),r=(n(9231),n(4852));const a={title:"\u4f7f\u7528 fusion \u7ec4\u4ef6"},l=void 0,o={unversionedId:"guide/advanced/fusion",id:"guide/advanced/fusion",title:"\u4f7f\u7528 fusion \u7ec4\u4ef6",description:"\u5c0f\u7a0b\u5e8f\u7aef\u4e0d\u652f\u6301\u8be5\u80fd\u529b\u3002",source:"@site/docs/guide/advanced/fusion.md",sourceDirName:"guide/advanced",slug:"/guide/advanced/fusion",permalink:"/docs/guide/advanced/fusion",draft:!1,editUrl:"https://github.com/ice-lab/ice-next/edit/master/website/docs/guide/advanced/fusion.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528 fusion \u7ec4\u4ef6"},sidebar:"docs",previous:{title:"\u90e8\u7f72",permalink:"/docs/guide/advanced/deploy"},next:{title:"\u4ece Rax \u8fc1\u79fb",permalink:"/docs/guide/advanced/integrate-from-rax"}},s={},p=[{value:"\u5f00\u542f\u63d2\u4ef6",id:"\u5f00\u542f\u63d2\u4ef6",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"importStyle",id:"importstyle",level:3},{value:"themePackage",id:"themepackage",level:3},{value:"theme",id:"theme",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5c0f\u7a0b\u5e8f\u7aef\u4e0d\u652f\u6301\u8be5\u80fd\u529b\u3002")),(0,r.kt)("p",null,"icejs \u9879\u76ee\u4e2d\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 fusion \u7ec4\u4ef6\uff0c\u5173\u4e8e fusion \u7ec4\u4ef6\u6309\u9700\u5f15\u5165\u7684\u95ee\u9898\u8bf4\u660e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u811a\u672c\u4ee3\u7801\u6309\u9700\u5f15\u5165\uff1a\u4e0d\u63a8\u8350\u4f7f\u7528 babel-plugin-import\uff0c\u793e\u533a\u4e3b\u6d41\u5de5\u5177 Webpack/Vite \u7b49\u90fd\u5df2\u652f\u6301 tree-shaking\uff0c\u6784\u5efa\u65f6\u9ed8\u8ba4\u90fd\u4f1a\u505a\u6309\u9700\u7684\u5f15\u5165"),(0,r.kt)("li",{parentName:"ul"},"\u6837\u5f0f\u4ee3\u7801\u6309\u9700\u5f15\u5165\uff1a\u7ed3\u5408\u793e\u533a\u8ba8\u8bba ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ant-design/ant-design/issues/16600#issuecomment-492572520"},"issue"),"\uff0c\u5927\u591a\u6570\u573a\u666f\u4e0b\u6837\u5f0f\u6309\u9700\u5f15\u5165\u5e76\u65e0\u592a\u5927\u610f\u4e49\uff0c\u53cd\u800c\u4f1a\u5f15\u5165\u5176\u4ed6\u5de5\u7a0b\u95ee\u9898\uff0c\u56e0\u6b64\u63a8\u8350\u7ec4\u4ef6\u6837\u5f0f\u5728\u9879\u76ee\u7ea7\u5168\u91cf\u5f15\u5165")),(0,r.kt)("p",null,"\u7efc\u4e0a\u6240\u8ff0\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u4e3b\u9898\u5b9a\u5236\u4ee5\u53ca\u6837\u5f0f\u5927\u5c0f\u6781\u81f4\u7684\u8981\u6c42\uff0c\u9879\u76ee\u4e2d\u5e76\u4e0d\u9700\u8981\u4f7f\u7528 fusion \u63d2\u4ef6\uff0c\u901a\u8fc7\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/global.css")," \u4e2d\u5168\u91cf\u5f15\u5165\u6837\u5f0f\u5373\u53ef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/global.css"',title:'"src/global.css"'},"@import '@alifd/next/dist/next.var.css';\n\nbody {}\n")),(0,r.kt)("h2",{id:"\u5f00\u542f\u63d2\u4ef6"},"\u5f00\u542f\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5b89\u88c5\u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i -D @ice/plugin-fusion\n")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"ice.config.mts")," \u4e2d\u6dfb\u52a0\u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="ice.config.mts"',title:'"ice.config.mts"'},"import { defineConfig } from '@ice/app';\nimport fusion from '@ice/plugin-fusion';\n\nexport default defineConfig(() => ({\n  plugins: [\n    fusion({\n      importStyle: true,\n    }),\n  ],\n}));\n")),(0,r.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("h3",{id:"importstyle"},"importStyle"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b: ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean|'sass'")),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"))),(0,r.kt)("p",null,"\u4e3a fusion \u7ec4\u4ef6\u6309\u9700\u52a0\u8f7d\u6837\u5f0f\uff0c\u76ee\u524d fusion \u7ec4\u4ef6\u63d0\u4f9b\u4e24\u79cd\u7c7b\u578b\u6837\u5f0f\uff0c\u9ed8\u8ba4\u52a0\u8f7d ",(0,r.kt)("inlineCode",{parentName:"p"},"css")," \u6837\u5f0f\uff0c\u5982\u679c\u5e0c\u671b\u52a0\u8f7d ",(0,r.kt)("inlineCode",{parentName:"p"},"sass")," \u6837\u5f0f\u53ef\u4ee5\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"importStyle")," \u914d\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"sass"),"\u3002"),(0,r.kt)("h3",{id:"themepackage"},"themePackage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"))),(0,r.kt)("p",null,"\u4e3a fusion \u7ec4\u4ef6\u914d\u7f6e\u4e3b\u9898\u5305\uff0c\u6bd4\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="ice.config.mts"',title:'"ice.config.mts"'},"import { defineConfig } from '@ice/app';\nimport fusion from '@ice/plugin-fusion';\n\nexport default defineConfig(() => ({\n  plugins: [\n    fusion({\n      themePackage: '@alifd/theme-design-pro',\n    }),\n  ],\n}));\n")),(0,r.kt)("h3",{id:"theme"},"theme"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b: ",(0,r.kt)("inlineCode",{parentName:"li"},"Record<string, string>")),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"))),(0,r.kt)("p",null,"\u914d\u7f6e antd \u7684 theme \u4e3b\u9898\uff0c\u914d\u7f6e\u5f62\u5f0f\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="ice.config.mts"',title:'"ice.config.mts"'},"import { defineConfig } from '@ice/app';\nimport fusion from '@ice/plugin-fusion';\n\nexport default defineConfig(() => ({\n  plugins: [\n    fusion({\n      theme: {\n        'css-prefix': 'next-icestark-',\n      },\n    }),\n  ],\n}));\n")))}c.isMDXComponent=!0}}]);