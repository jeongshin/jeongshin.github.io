"use strict";(self.webpackChunkreact_native_awesome_swiper_docs=self.webpackChunkreact_native_awesome_swiper_docs||[]).push([[463],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5292:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},i="useSwiperContext",c={unversionedId:"hooks/useSwiperContext",id:"hooks/useSwiperContext",title:"useSwiperContext",description:"Overview",source:"@site/docs/hooks/useSwiperContext.md",sourceDirName:"hooks",slug:"/hooks/useSwiperContext",permalink:"/docs/hooks/useSwiperContext",draft:!1,editUrl:"https://github.com/JeongShin/react-native-awesome-swiper/tree/main/packages/create-docusaurus/templates/shared/docs/hooks/useSwiperContext.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ScaleSwiper",permalink:"/docs/SwiperUI/ScaleSwiper"},next:{title:"useSwiperRefCallback",permalink:"/docs/hooks/useSwiperRefCallback"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Type",id:"type",level:2},{value:"Example",id:"example",level:2}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"useswipercontext"},"useSwiperContext"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useSwiperContext")," is hooks to read internal context of swiper"),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface SwiperContextType {\n  itemCount: number; // data length\n  itemWidth: number; // item width calculated from slide count\n  scrollX: Animated.Value; // FlatList animated value of content offset x\n  activeIndex: number; // current centered item index\n}\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSwiperContext } from 'react-native-awesome-swiper';\n\nconst MyItem = () => {\n  const { itemCount, itemWidth, scrollX, activeIndex } = useSwiperContext();\n\n  return <View />;\n};\n")))}u.isMDXComponent=!0}}]);