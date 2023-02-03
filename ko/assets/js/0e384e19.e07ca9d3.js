"use strict";(self.webpackChunkreact_native_global_components_docs=self.webpackChunkreact_native_global_components_docs||[]).push([[9671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Getting Started",l={unversionedId:"intro",id:"intro",title:"Getting Started",description:"platforms npm",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/react-native-global-components/ko/docs/intro",draft:!1,editUrl:"https://github.com/JeongShin/react-native-global-components/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Tutorial - Basics",permalink:"/react-native-global-components/ko/docs/category/tutorial---basics"}},s={},c=[{value:"What is global component? \ud83e\udd14",id:"what-is-global-component-",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Installation",id:"installation",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/platforms-Android%20%7C%20iOS-brightgreen.svg?style=flat-square&colorB=191A17",alt:"platforms"})," ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-native-global-components"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/react-native-global-components.svg?style=flat-square",alt:"npm"}))),(0,a.kt)("admonition",{title:"Experimental \ud83e\uddea",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This library is created by junior developer for side-projects & very experimental",(0,a.kt)("br",null),"\nRecommend to not use this library for production")),(0,a.kt)("h2",{id:"what-is-global-component-"},"What is global component? \ud83e\udd14"),(0,a.kt)("p",null,"In this project, global component definition is component that used commonly and globally with user interactions."),(0,a.kt)("p",null,"Global component provides ",(0,a.kt)("strong",{parentName:"p"},"easy to use and fully customizable")," implement of Snackbar & Popup."),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://reactjs.org/"},"React")," (>=17.0.2)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://reactnative.dev/"},"React Native")," (>=0.66.4)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.swmansion.com/react-native-reanimated/"},"Reanimated v2")," (>=2.8.0)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rxjs.dev/"},"RxJS")," (^7.2.0)")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-global-components\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-global-components\n")))}m.isMDXComponent=!0}}]);