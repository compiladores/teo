"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8845],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,v=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(v,i(i({ref:t},p),{},{components:a})):n.createElement(v,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2902:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={title:"Parte 1 (0.5 horas)",sidebar_position:3},c=void 0,l={unversionedId:"labs/Laboratorio 2/parte1",id:"version-2021_2/labs/Laboratorio 2/parte1",isDocsHomePage:!1,title:"Parte 1 (0.5 horas)",description:"Derivaciones",source:"@site/versioned_docs/version-2021_2/labs/Laboratorio 2/parte1.md",sourceDirName:"labs/Laboratorio 2",slug:"/labs/Laboratorio 2/parte1",permalink:"/docs/2021_2/labs/Laboratorio 2/parte1",editUrl:"https://github.com/compiladores/compiladores.github.io/edit/master/docs/versioned_docs/version-2021_2/labs/Laboratorio 2/parte1.md",tags:[],version:"2021_2",sidebarPosition:3,frontMatter:{title:"Parte 1 (0.5 horas)",sidebar_position:3},sidebar:"version-2021_2/tutorialSidebar",previous:{title:"Sintaxis de operaciones matem\xe1ticas",permalink:"/docs/2021_2/labs/Laboratorio 2/gramatica"},next:{title:"Parte 2 (1 horas)",permalink:"/docs/2021_2/labs/Laboratorio 2/parte2"}},p=[{value:"Derivaciones",id:"derivaciones",children:[{value:"Consigna",id:"consigna",children:[]}]}],d={toc:p};function u(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"derivaciones"},"Derivaciones"),(0,o.kt)("p",null,"Una derivaci\xf3n es la aplicaci\xf3n de producciones una despu\xe9s de la otra, empezando por el s\xedmbolo ",(0,o.kt)("em",{parentName:"p"},"inicial")," hasta alcanzar una secuencia que conforme una cadena v\xe1lida del lenguaje."),(0,o.kt)("p",null,"Ejemplo extra\xeddo de Louden secci\xf3n 3.4.1:\n",(0,o.kt)("img",{alt:"ejemploderivaciones",src:a(6795).Z})),(0,o.kt)("p",null,"En la carpeta ",(0,o.kt)("inlineCode",{parentName:"p"},"main/.../compiladores/parte1")," se encuentran los siguientes archivos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"deriver/Deriver.java")," y ",(0,o.kt)("inlineCode",{parentName:"li"},"applicator/Applicator.java"),": implementaci\xf3n de una clase que permite escribir derivaciones en Java"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TokenType.java"),": enumerado de tipos de token"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Derivations.java"),": derivaciones a completar")),(0,o.kt)("h3",{id:"consigna"},"Consigna"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Completar los m\xe9todos de ",(0,o.kt)("inlineCode",{parentName:"strong"},"Derivations.java")," de forma que pasen los tests de ",(0,o.kt)("inlineCode",{parentName:"strong"},"test/.../parte1/DerivationsTest.java"),".")," Los m\xe9todos de ",(0,o.kt)("inlineCode",{parentName:"p"},"Derivations.java")," deben estar conformados unicamente por llamadas a los m\xe9todos p\xfablicos de la instancia de ",(0,o.kt)("inlineCode",{parentName:"p"},"Deriver")," pasada como arguento."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"La clase ",(0,o.kt)("inlineCode",{parentName:"p"},"Deriver")," incluye el m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"p"},"getPhrase()"),", que puede ayudar a debuggear la derivaci\xf3n, mostrandote la cadena de tokens actual."))))}u.isMDXComponent=!0},6795:function(e,t,a){t.Z=a.p+"assets/images/img4-19dd63cd24edfe3c4a778786ab59d558.png"}}]);