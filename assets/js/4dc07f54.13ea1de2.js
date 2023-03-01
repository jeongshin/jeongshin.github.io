"use strict";(self.webpackChunkreact_native_global_components_docs=self.webpackChunkreact_native_global_components_docs||[]).push([[581],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(k,l(l({ref:t},s),{},{components:r})):a.createElement(k,l({ref:t},s))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1764:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o=r.p+"assets/images/create-snackbar-example-07f8ae335eecf01fe2d9fd4d61970b3e.gif",l={},i="createSnackbar",c={unversionedId:"API/createSnackbar",id:"API/createSnackbar",title:"createSnackbar",description:"Overview",source:"@site/docs/API/createSnackbar.mdx",sourceDirName:"API",slug:"/API/createSnackbar",permalink:"/docs/API/createSnackbar",draft:!1,editUrl:"https://github.com/JeongShin/react-native-global-components/tree/main/packages/create-docusaurus/templates/shared/docs/API/createSnackbar.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"createPopup",permalink:"/docs/API/createPopup"},next:{title:"Customize",permalink:"/docs/Guides/Customize"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Example",id:"example",level:2},{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>show</code>",id:"show",level:3},{value:"<code>hide</code>",id:"hide",level:3}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"createsnackbar"},"createSnackbar"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Only one snackbar can be mounted at same time"),(0,n.kt)("li",{parentName:"ul"},"Prevents ",(0,n.kt)("strong",{parentName:"li"},"overlapped rendering")," global components created with ",(0,n.kt)("inlineCode",{parentName:"li"},"createSnackbar")," using rx observable and queue internally"),(0,n.kt)("li",{parentName:"ul"},"Unlike popup, snackbar switches visible component immediately on ",(0,n.kt)("inlineCode",{parentName:"li"},"show")," request")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"For example, if SimpleSnackbar ",(0,n.kt)("inlineCode",{parentName:"p"},"show")," called multiple times, it's handled switching snackbar without delay."),(0,n.kt)("div",{className:"sample-gif"},(0,n.kt)("img",{src:o,className:"sample-gif-img",alt:"create-snackbar-example"})),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Same with ",(0,n.kt)("a",{parentName:"p",href:"/docs/API/createPopup#Usage"},"createPopup")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"show"},(0,n.kt)("inlineCode",{parentName:"h3"},"show")),(0,n.kt)("p",null,"method to show created global component"),(0,n.kt)("p",null,"generic ",(0,n.kt)("inlineCode",{parentName:"p"},"T")," is inferred from your component props"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"type show = (props: T) => void;\n")),(0,n.kt)("h3",{id:"hide"},(0,n.kt)("inlineCode",{parentName:"h3"},"hide")),(0,n.kt)("p",null,"method to hide currently visible global component"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"type hide = () => void;\n")))}d.isMDXComponent=!0}}]);