"use strict";(self.webpackChunkice_website_v3=self.webpackChunkice_website_v3||[]).push([[1528],{4852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(9231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=o(n),u=r,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||s;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var o=2;o<s;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var a=n(5675),r=(n(9231),n(4852));const s={title:"\u5355\u5143\u6d4b\u8bd5",order:257},i=void 0,l={unversionedId:"guide/advanced/unit-test",id:"guide/advanced/unit-test",title:"\u5355\u5143\u6d4b\u8bd5",description:"\u793a\u4f8b",source:"@site/docs/guide/advanced/unit-test.md",sourceDirName:"guide/advanced",slug:"/guide/advanced/unit-test",permalink:"/docs/guide/advanced/unit-test",draft:!1,editUrl:"https://github.com/alibaba/ice/edit/master/website/docs/guide/advanced/unit-test.md",tags:[],version:"current",frontMatter:{title:"\u5355\u5143\u6d4b\u8bd5",order:257},sidebar:"docs",previous:{title:"HTTP \u8bf7\u6c42",permalink:"/docs/guide/advanced/request"},next:{title:"CSS \u8d44\u6e90\u672c\u5730\u5316",permalink:"/docs/guide/advanced/css-assets-local"}},p={},o=[{value:"Jest",id:"jest",level:2},{value:"\u4f9d\u8d56\u5b89\u88c5",id:"\u4f9d\u8d56\u5b89\u88c5",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u975e UI \u6d4b\u8bd5",id:"\u975e-ui-\u6d4b\u8bd5",level:3},{value:"UI \u6d4b\u8bd5",id:"ui-\u6d4b\u8bd5",level:3},{value:"Vitest",id:"vitest",level:2},{value:"\u4f9d\u8d56\u5b89\u88c5",id:"\u4f9d\u8d56\u5b89\u88c5-1",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e-1",level:3},{value:"\u975e UI \u6d4b\u8bd5",id:"\u975e-ui-\u6d4b\u8bd5-1",level:3},{value:"UI \u6d4b\u8bd5",id:"ui-\u6d4b\u8bd5-1",level:3}],c={toc:o};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null,"\u793a\u4f8b"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"https://github.com/alibaba/ice/tree/master/examples/with-jest",target:"_blank",rel:"noopener noreferrer"},"with-jest")),(0,r.kt)("li",null,(0,r.kt)("a",{href:"https://github.com/alibaba/ice/tree/master/examples/with-vitest",target:"_blank",rel:"noopener noreferrer"},"with-vitest")))),(0,r.kt)("p",null,"ice.js \u4e0d\u8026\u5408\u4efb\u4f55\u4e00\u4e2a\u6d4b\u8bd5\u6846\u67b6\uff0c\u5f00\u53d1\u8005\u53ef\u81ea\u7531\u9009\u62e9\u3002\u76ee\u524d\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"jest")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"https://vitest.dev/"},"vitest")," \u914d\u7f6e\uff0c\u4ee5\u4fbf\u5feb\u901f\u5f00\u59cb\u5355\u5143\u6d4b\u8bd5\u3002"),(0,r.kt)("h2",{id:"jest"},"Jest"),(0,r.kt)("h3",{id:"\u4f9d\u8d56\u5b89\u88c5"},"\u4f9d\u8d56\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i jest -D\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4f7f\u7528 TypeScript \u7f16\u5199\u5355\u5143\u6d4b\u8bd5\uff0c\u63a8\u8350\u63a5\u5165\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://swc.rs/docs/usage/jest"},"@swc/jest")," \u6216 ",(0,r.kt)("a",{parentName:"p",href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/installation"},"ts-jest"))),(0,r.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("p",null,"\u9996\u5148\u9700\u8981\u5728\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e0b\u65b0\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"jest.config.mjs")," \u6587\u4ef6\uff0c\u5e76\u52a0\u5165\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="jest.config.mjs"',title:'"jest.config.mjs"'},"import { defineJestConfig } from '@ice/app';\n\nexport default defineJestConfig({});\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"defineJestConfig")," \u65b9\u6cd5\u8fd4\u56de\u7684\u662f ice.js \u9ed8\u8ba4\u914d\u7f6e\u597d\u7684 Jest \u914d\u7f6e\uff0c\u652f\u6301\u4f20\u5165\u81ea\u5b9a\u4e49\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration"},"Jest \u914d\u7f6e"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"defineJestConfig")," \u5165\u53c2\u652f\u6301\u4e24\u79cd\u5199\u6cd5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jest.Config")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"() => Promise<jest.Config>"))),(0,r.kt)("p",null,"\u4ee5\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"@swc/jest")," \u4e3a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="jest.config.mjs"',title:'"jest.config.mjs"'},"import { defineJestConfig } from '@ice/app';\n\nexport default defineJestConfig({\n+ transform: {\n+   '^.+\\\\.(t|j)sx?$': [\n+     '@swc/jest',\n+     {\n+       // swc \u914d\u7f6e\n+       jsc: {\n+         transform: {\n+           react: {\n+             runtime: 'automatic',\n+           },\n+         },\n+       },\n+     },\n+   ],\n+ },\n});\n")),(0,r.kt)("p",null,"\u7136\u540e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u52a0\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," \u811a\u672c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="package.json"',title:'"package.json"'},'{\n  "scripts": {\n+   "test": "jest"\n  }\n}\n')),(0,r.kt)("p",null,"\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u5c31\u53ef\u4ee5\u5f00\u59cb\u7f16\u5199\u5355\u5143\u6d4b\u8bd5\u4e86\u3002"),(0,r.kt)("h3",{id:"\u975e-ui-\u6d4b\u8bd5"},"\u975e UI \u6d4b\u8bd5"),(0,r.kt)("p",null,"\u5047\u8bbe\u73b0\u5728\u8981\u6d4b\u8bd5 ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," \u51fd\u6570\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/utils/add.ts"',title:'"src/utils/add.ts"'},"export default function add(a, b) {\n  return a + b;\n}\n")),(0,r.kt)("p",null,"\u65b0\u5efa\u4e00\u4e2a\u6d4b\u8bd5\u7528\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="tests/add.spec.ts"',title:'"tests/add.spec.ts"'},"import add from '../src/add';\n\ntest('add function', () => {\n  expect(add(1, 2)).toBe(3);\n});\n")),(0,r.kt)("p",null,"\u8fd9\u65f6\uff0c\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run test")," \u67e5\u770b\u6d4b\u8bd5\u7ed3\u679c\u4e86\u3002"),(0,r.kt)("h3",{id:"ui-\u6d4b\u8bd5"},"UI \u6d4b\u8bd5"),(0,r.kt)("p",null,"\u7ec4\u4ef6 UI \u6d4b\u8bd5\u63a8\u8350\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@testing-library/react"},"@testing-library/react")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@testing-library/jest-dom"},"@testing-library/jest-dom"),"\u3002"),(0,r.kt)("p",null,"\u9996\u5148\u5b89\u88c5\u4f9d\u8d56\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @testing-library/react jest-environment-jsdom @testing-library/jest-dom -D\n")),(0,r.kt)("p",null,"\u7136\u540e\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u65b0\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"jest-setup.ts")," \u5e76\u5199\u5165\u4ee5\u4e0b\u5185\u5bb9\uff0c\u4ee5\u6269\u5c55\u5339\u914d\u5668(matchers)\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="jest-setup.ts"',title:'"jest-setup.ts"'},"import '@testing-library/jest-dom';\n")),(0,r.kt)("p",null,"\u6700\u540e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"jest.config.mjs")," \u4e2d\u52a0\u5165\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="jest.config.mjs"',title:'"jest.config.mjs"'},"import { defineJestConfig } from '@ice/app';\n\nexport default defineJestConfig({\n+ setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],\n+ testEnvironment: 'jest-environment-jsdom',\n});\n")),(0,r.kt)("p",null,"\u5047\u8bbe\u73b0\u5728\u8981\u6d4b\u8bd5\u4e00\u4e2a Header \u7ec4\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/Header.tsx"',title:'"src/components/Header.tsx"'},'export default function Header() {\n  return (\n    <h2 data-testid="title">Jest Test</h2>\n  );\n}\n')),(0,r.kt)("p",null,"\u7f16\u5199\u7ec4\u4ef6\u7684\u6d4b\u8bd5\u7528\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="tests/Header.spec.tsx"',title:'"tests/Header.spec.tsx"'},"import { render, screen } from '@testing-library/react';\nimport Header from '@/components/Header';\n\ntest('test Header component', () => {\n  render(<Header />);\n  expect(screen.getByTestId('title')).toHaveTextContent('Jest Test');\n});\n")),(0,r.kt)("p",null,"\u6700\u540e\uff0c\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run test")," \u5c31\u53ef\u4ee5\u67e5\u770b\u6d4b\u8bd5\u7ed3\u679c\u4e86\u3002"),(0,r.kt)("h2",{id:"vitest"},"Vitest"),(0,r.kt)("h3",{id:"\u4f9d\u8d56\u5b89\u88c5-1"},"\u4f9d\u8d56\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i vitest -D\n")),(0,r.kt)("h3",{id:"\u914d\u7f6e-1"},"\u914d\u7f6e"),(0,r.kt)("p",null,"\u9996\u5148\u9700\u8981\u5728\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e0b\u65b0\u5efa vitest.config.mjs \u6587\u4ef6\uff0c\u5e76\u52a0\u5165\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="vitest.config.mjs"',title:'"vitest.config.mjs"'},"import { defineVitestConfig } from '@ice/app';\n\nexport default defineVitestConfig({});\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"defineVitestConfig")," \u65b9\u6cd5\u8fd4\u56de\u7684\u662f ice.js \u9ed8\u8ba4\u914d\u7f6e\u597d\u7684 vitest \u914d\u7f6e\uff0c\u652f\u6301\u4f20\u5165\u81ea\u5b9a\u4e49\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://vitest.dev/config/"},"vitest \u914d\u7f6e"),"\u3002"),(0,r.kt)("p",null,"defineVitestConfig \u5165\u53c2\u652f\u6301\u4e09\u79cd\u5199\u6cd5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vitest.UserConfig")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Promise<vitest.UserConfig>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(env) => Promise<vitest.UserConfig>"))),(0,r.kt)("p",null,"\u4ee5\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"include")," \u53c2\u6570\u4e3a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="vitest.config.mjs"',title:'"vitest.config.mjs"'},"import { defineVitestConfig } from '@ice/app';\n\nexport default defineVitestConfig({\n+ test: {\n+   include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']\n+ }\n});\n")),(0,r.kt)("p",null,"\u7136\u540e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u52a0\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," \u811a\u672c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="package.json"',title:'"package.json"'},'{\n  "scripts": {\n+   "test": "vitest"\n  }\n}\n')),(0,r.kt)("h3",{id:"\u975e-ui-\u6d4b\u8bd5-1"},"\u975e UI \u6d4b\u8bd5"),(0,r.kt)("p",null,"\u540c\u6837\u6d4b\u8bd5 ",(0,r.kt)("a",{parentName:"p",href:"#%E9%9D%9E-ui-%E6%B5%8B%E8%AF%95"},"Jest \u975e UI \u6d4b\u8bd5\u7ae0\u8282")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Header")," \u7ec4\u4ef6\uff0c\u7f16\u5199\u4ee5\u4e0b\u7684\u6d4b\u8bd5\u7528\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="tests/add.spec.ts"',title:'"tests/add.spec.ts"'},"import { test, expect } from 'vitest';\nimport add from '../src/add';\n\ntest('add', () => {\n  expect(add(1, 2)).toBe(3);\n});\n")),(0,r.kt)("p",null,"\u73b0\u5728\u53ef\u4ee5\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run test")," \u67e5\u770b\u6d4b\u8bd5\u7ed3\u679c\u3002"),(0,r.kt)("h3",{id:"ui-\u6d4b\u8bd5-1"},"UI \u6d4b\u8bd5"),(0,r.kt)("p",null,"\u9996\u5148\u5b89\u88c5\u4f9d\u8d56\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @testing-library/react jsdom @testing-library/jest-dom @vitejs/plugin-react@1.3.2 -D\n")),(0,r.kt)("p",null,"\u7136\u540e\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u65b0\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"vitest-setup.js")," \u5e76\u5199\u5165\u4ee5\u4e0b\u5185\u5bb9\uff0c\u4ee5\u6269\u5c55\u5339\u914d\u5668(matchers)\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="vitest-setup.js"',title:'"vitest-setup.js"'},"import matchers from '@testing-library/jest-dom/matchers';\nimport { expect } from 'vitest';\n\nexpect.extend(matchers);\n")),(0,r.kt)("p",null,"\u6700\u540e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"vitest.config.mjs")," \u4e2d\u52a0\u5165\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="vitest.config.mjs"',title:'"vitest.config.mjs"'},"import { defineVitestConfig } from '@ice/app';\n+ import react from '@vitejs/plugin-react';\n\nexport default defineVitestConfig({\n+ test: {\n+   environment: 'jsdom',\n+   setupFiles: ['./vitest-setup.js'],\n+   plugins: [react()],                // \u652f\u6301\u89e3\u6790 JSX \u8bed\u6cd5\n+ },\n});\n")),(0,r.kt)("p",null,"\u5047\u8bbe\u73b0\u5728\u6d4b\u8bd5\u4e00\u4e2a Header \u7ec4\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/Header.tsx"',title:'"src/components/Header.tsx"'},'export default function Header() {\n  return (\n    <h2 data-testid="title">Vitest Test</h2>\n  );\n}\n')),(0,r.kt)("p",null,"\u7f16\u5199\u7ec4\u4ef6\u7684\u6d4b\u8bd5\u7528\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="tests/Header.spec.tsx"',title:'"tests/Header.spec.tsx"'},"import { test, expect } from 'vitest';\nimport { render, screen } from '@testing-library/react';\nimport Header from '@/components/Header';\n\ntest('test Header component', () => {\n  render(<Header />);\n  expect(screen.getByTestId('title')).toHaveTextContent('Vitest Test');\n});\n")),(0,r.kt)("p",null,"\u6700\u540e\uff0c\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run test")," \u5c31\u53ef\u4ee5\u67e5\u770b\u6d4b\u8bd5\u7ed3\u679c\u4e86\u3002"))}d.isMDXComponent=!0}}]);