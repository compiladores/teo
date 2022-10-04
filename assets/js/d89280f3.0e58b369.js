"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3145],{3905:function(e,a,r){r.d(a,{Zo:function(){return c},kt:function(){return u}});var n=r(7294);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=n.createContext({}),p=function(e){var a=n.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},c=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=t,b=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(b,i(i({ref:a},c),{},{components:r})):n.createElement(b,i({ref:a},c))}));function u(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1598:function(e,a,r){r.r(a),r.d(a,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=r(7462),t=r(3366),o=(r(7294),r(3905)),i=["components"],s={title:"Parte 2 (1 horas)",sidebar_position:4},l="Parte 2: parseos espec\xedficos",p={unversionedId:"labs/Laboratorio 2/parte2",id:"version-2021_2/labs/Laboratorio 2/parte2",isDocsHomePage:!1,title:"Parte 2 (1 horas)",description:"En esta parte se trabaja con una clase llamada LL1Machine. Implementa la (escasa) l\xf3gica propia del parser LL1, exponiendo 2 operaciones (Louden 4.2.1):",source:"@site/versioned_docs/version-2021_2/labs/Laboratorio 2/parte2.md",sourceDirName:"labs/Laboratorio 2",slug:"/labs/Laboratorio 2/parte2",permalink:"/docs/2021_2/labs/Laboratorio 2/parte2",editUrl:"https://github.com/compiladores/compiladores.github.io/edit/master/docs/versioned_docs/version-2021_2/labs/Laboratorio 2/parte2.md",tags:[],version:"2021_2",sidebarPosition:4,frontMatter:{title:"Parte 2 (1 horas)",sidebar_position:4},sidebar:"version-2021_2/tutorialSidebar",previous:{title:"Parte 1 (0.5 horas)",permalink:"/docs/2021_2/labs/Laboratorio 2/parte1"},next:{title:"Parte 3 (1 hora)",permalink:"/docs/2021_2/labs/Laboratorio 2/parte3"}},c=[{value:"Consigna",id:"consigna",children:[]}],d={toc:c};function m(e){var a=e.components,r=(0,t.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"parte-2-parseos-espec\xedficos"},"Parte 2: parseos espec\xedficos"),(0,o.kt)("p",null,"En esta parte se trabaja con una clase llamada ",(0,o.kt)("inlineCode",{parentName:"p"},"LL1Machine"),". Implementa la (escasa) l\xf3gica propia del parser LL1, exponiendo 2 operaciones (Louden 4.2.1):"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"apply: Reemplazar un no terminal de la parte superior de la pila por una cadena, aplicando una regla gramatical (se desapila el terminal y se apilan los s\xedmbolos de la derecha de la regla)."),(0,o.kt)("li",{parentName:"ol"},"match: Eliminar el token superior de la pila y el primer token de la frase, si es que coinciden.")),(0,o.kt)("p",null,"A partir de las llamadas a la aplicaci\xf3n de reglas gramaticales y a ",(0,o.kt)("inlineCode",{parentName:"p"},"match"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"LL1Machine")," genera un ",(0,o.kt)("em",{parentName:"p"},"\xe1rbol de an\xe1lisis gramatical"),", que es una representaci\xf3n directa del proceso de parsing. El recorrido ",(0,o.kt)("em",{parentName:"p"},"preorder")," de este \xe1rbol se utiliza para testear las derivaciones manuales."),(0,o.kt)("p",null,"Esta parte consiste en completar los m\xe9todos ",(0,o.kt)("inlineCode",{parentName:"p"},"ex1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ex2")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"ex3")," del archivo ",(0,o.kt)("inlineCode",{parentName:"p"},"ManualParser.java")," con llamadas a los m\xe9todos de ",(0,o.kt)("inlineCode",{parentName:"p"},"LL1Machine")," sin incorporar ning\xfan tipo de l\xf3gica. Es decir, ",(0,o.kt)("inlineCode",{parentName:"p"},"ex1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ex2")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"ex3")," deben ser casos particulares para cada uno de los 3 ejemplo presentados en ",(0,o.kt)("inlineCode",{parentName:"p"},"ManualParserTest.java"),", y no deben incorporar condiciones ni ciclos para automarizar el parseo. "),(0,o.kt)("h2",{id:"consigna"},"Consigna"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Completar los m\xe9todos de ",(0,o.kt)("inlineCode",{parentName:"strong"},"ManualParser.java")," de forma que pasen los tests de ",(0,o.kt)("inlineCode",{parentName:"strong"},"test/.../parte2/ManualParserTest.java"),".")," Los m\xe9todos de ",(0,o.kt)("inlineCode",{parentName:"p"},"ManualParser.java")," deben estar conformados unicamente por llamadas a los m\xe9todos p\xfablicos de la instancia de ",(0,o.kt)("inlineCode",{parentName:"p"},"LL1Machine")," pasada como arguento."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Las instrucciones de ",(0,o.kt)("inlineCode",{parentName:"p"},"ManualParser.java")," tendr\xe1n cierta relaci\xf3n con el contenido  de ",(0,o.kt)("inlineCode",{parentName:"p"},"Derivations.java"),", lo cual puede ser \xfatil para resolver este ejercicio m\xe1s r\xe1pido."))))}m.isMDXComponent=!0}}]);