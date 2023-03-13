"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4665],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,k=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9031:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},c="Laboratorio 5: Int\xe9rprete de JsonLang",d={unversionedId:"labs/5",id:"version-2022_2/labs/5",isDocsHomePage:!1,title:"Laboratorio 5: Int\xe9rprete de JsonLang",description:"Int\xe9rprete de JsonLang",source:"@site/versioned_docs/version-2022_2/labs/5.md",sourceDirName:"labs",slug:"/labs/5",permalink:"/teo/docs/2022_2/labs/5",editUrl:"https://github.com/compiladores/compiladores.github.io/edit/master/docs/versioned_docs/version-2022_2/labs/5.md",tags:[],version:"2022_2",frontMatter:{},sidebar:"version-2022_2/tutorialSidebar",previous:{title:"Laboratorio 4: Parsers LL1",permalink:"/teo/docs/2022_2/labs/4"},next:{title:"Laboratorio 6: Compilador a JsonAsm",permalink:"/teo/docs/2022_2/labs/6"}},p=[{value:"Quickstart, editor, dependencias",id:"quickstart-editor-dependencias",children:[{value:"C\xf3mo hacer el laboratorio",id:"c\xf3mo-hacer-el-laboratorio",children:[]},{value:"Arquitectura general del proyecto.",id:"arquitectura-general-del-proyecto",children:[]},{value:"Criterios de evaluaci\xf3n",id:"criterios-de-evaluaci\xf3n",children:[]}]}],s={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"laboratorio-5-int\xe9rprete-de-jsonlang"},"Laboratorio 5: Int\xe9rprete de JsonLang"),(0,o.kt)("p",null,"Int\xe9rprete de JsonLang"),(0,o.kt)("p",null,"Para m\xe1s detalles, visitar\n",(0,o.kt)("a",{parentName:"p",href:"https://compiladores.github.io"},"compiladores.github.io"),"."),(0,o.kt)("h2",{id:"quickstart-editor-dependencias"},"Quickstart, editor, dependencias"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"make setup\n")),(0,o.kt)("p",null,"Instala ",(0,o.kt)("inlineCode",{parentName:"p"},"deno")," 1.26.0 en la carpeta ra\xedz del repositorio, y crea una carpeta\n",(0,o.kt)("inlineCode",{parentName:"p"},".vscode")," con la configuraci\xf3n recomendada de vscode."),(0,o.kt)("h3",{id:"c\xf3mo-hacer-el-laboratorio"},"C\xf3mo hacer el laboratorio"),(0,o.kt)("p",null,"Completar la implementaci\xf3n de ",(0,o.kt)("inlineCode",{parentName:"p"},"FlowExecutor.ts")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"Context.ts")," de manera que\npasen todos los tests incluidos."),(0,o.kt)("h3",{id:"arquitectura-general-del-proyecto"},"Arquitectura general del proyecto."),(0,o.kt)("p",null,"Se utiliz\xf3 inyecci\xf3n de dependencias junto con mucha parametrizaci\xf3n de tipos,\nya que hacer mocks de imports es imposible en deno."),(0,o.kt)("p",null,"En vez de implementar toda la sem\xe1ntica del lenguaje en un \xfanico m\xe9todo que se\ninvoca de forma recursiva, se utiliza el patr\xf3n pipes and filters para\ndividirlo."),(0,o.kt)("h3",{id:"criterios-de-evaluaci\xf3n"},"Criterios de evaluaci\xf3n"),(0,o.kt)("p",null,"La evaluaci\xf3n es objetiva. Al presentar el laboratorio se dar\xe1 una fecha\nrecomendada de entrega. Al entregar el laboratorio se puntuar\xe1 de la siguiente\nforma."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Par\xe1metro"),(0,o.kt)("th",{parentName:"tr",align:null},"comandos relacionados"),(0,o.kt)("th",{parentName:"tr",align:null},"puntaje"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"se entreg\xf3 el TP"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"make test"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"make test_checksum")),(0,o.kt)("td",{parentName:"tr",align:null},"6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"El \xfaltimo commit del PR tiene fecha previa a la recomendada"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"make test_date")),(0,o.kt)("td",{parentName:"tr",align:null},"+2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'Se agregaron 5 tests que contienen "extra" en su descripci\xf3n'),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"make test_extra_quantity")),(0,o.kt)("td",{parentName:"tr",align:null},"+2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Hacer que todos los tests de ",(0,o.kt)("inlineCode",{parentName:"td"},"while")," pasen antes del final de la clase"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"make test_while")),(0,o.kt)("td",{parentName:"tr",align:null},"+1")))))}u.isMDXComponent=!0}}]);