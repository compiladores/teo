"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2148],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,b=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return a?r.createElement(b,o(o({ref:t},d),{},{components:a})):r.createElement(b,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2720:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],l={},c="Laboratorio 1: automatas",s={unversionedId:"labs/1",id:"labs/1",isDocsHomePage:!1,title:"Laboratorio 1: automatas",description:"Para m\xe1s detalles, visitar compiladores.github.io.",source:"@site/docs/labs/1.md",sourceDirName:"labs",slug:"/labs/1",permalink:"/docs/labs/1",editUrl:"https://github.com/compiladores/compiladores.github.io/edit/master/docs/docs/labs/1.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Laboratorio 2: Resumen te\xf3rico",permalink:"/docs/labs/intro_teorica_2"},next:{title:"Laboratorio 2: Lexers",permalink:"/docs/labs/2"}},d=[{value:"Quickstart",id:"quickstart",children:[{value:"Editor",id:"editor",children:[]},{value:"Deno",id:"deno",children:[]},{value:"Dependencias",id:"dependencias",children:[]},{value:"C\xf3mo hacer el laboratorio",id:"c\xf3mo-hacer-el-laboratorio",children:[]},{value:"Criterios de evaluaci\xf3n",id:"criterios-de-evaluaci\xf3n",children:[]}]}],p={toc:d};function u(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"laboratorio-1-automatas"},"Laboratorio 1: automatas"),(0,i.kt)("p",null,"Para m\xe1s detalles, visitar ",(0,i.kt)("a",{parentName:"p",href:"https://compiladores.github.io"},"compiladores.github.io"),"."),(0,i.kt)("h2",{id:"quickstart"},"Quickstart"),(0,i.kt)("h3",{id:"editor"},"Editor"),(0,i.kt)("p",null,"Se recomienda usar vscode y la extensi\xf3n para deno. Para esto apretar ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+P")," y luego pegar"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ext install denoland.vscode-deno\n")),(0,i.kt)("h3",{id:"deno"},"Deno"),(0,i.kt)("p",null,"Existen 2 alternativas para instalar deno:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Seguir las ",(0,i.kt)("a",{parentName:"li",href:"https://deno.land/#installation"},"instrucciones oficiales")," para instalar el comando ",(0,i.kt)("inlineCode",{parentName:"li"},"deno")),(0,i.kt)("li",{parentName:"ol"},"Descargar el ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/denoland/deno/releases/tag/v1.18.1"},"\xfaltimo release")," desde el repositorio oficial de deno, descomprimir el binario en cualquier lugar y luego configurarlo en ./.vscode/settings.json de la siguiente manera (reemplazando ",(0,i.kt)("inlineCode",{parentName:"li"},"./deno")," por la ruta al binario)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'mkdir .vscode\necho \'{\n    "deno.path": "./deno", /* DENO NO FUE INSTALADO SINO QUE SE DESCARG\xd3 EL BINARIO EN ESTA UBICACI\xd3N */\n    "deno.enable": true /* UTILIZAR EL LANGUAGE SERVER DE DENO EN VEZ DE TYPESCRIPT "C\xd3MUN" */\n}\' > .vscode/settings.json\n')),(0,i.kt)("h3",{id:"dependencias"},"Dependencias"),(0,i.kt)("p",null,"No se instalan otras dependencias"),(0,i.kt)("h3",{id:"c\xf3mo-hacer-el-laboratorio"},"C\xf3mo hacer el laboratorio"),(0,i.kt)("p",null,"Este laboratorio se compone de 4 ejercicios similares. Las carpetas numeradas tienen una estructura similar:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"alphabet.ts"),": enumerado con el alfabeto del ejercicio. No debe modificarse"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test.ts"),": archivo de pruebas. No debe modificarse."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ex.ts"),": Contenido del ejercicio. Debe exportar un objeto de nombre ",(0,i.kt)("inlineCode",{parentName:"li"},"machineDescription")," con las siguientes propiedades:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transition"),": funci\xf3n de transici\xf3n"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initial"),": estado inicial"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"acceptance"),": listado de estados de aceptaci\xf3n")))),(0,i.kt)("p",null,"El ejercicio consiste en completar ",(0,i.kt)("inlineCode",{parentName:"p"},"ex.ts")," de forma que pasen los tests de ",(0,i.kt)("inlineCode",{parentName:"p"},"test.ts"),"."),(0,i.kt)("h3",{id:"criterios-de-evaluaci\xf3n"},"Criterios de evaluaci\xf3n"),(0,i.kt)("p",null,"La evaluaci\xf3n es objetiva. Al presentar el laboratorio se dar\xe1 una fecha recomendada de entrega.\nAl entregar el laboratorio se puntuar\xe1 de la siguiente forma:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Par\xe1metro"),(0,i.kt)("th",{parentName:"tr",align:null},"puntaje"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"se entreg\xf3 el TP"),(0,i.kt)("td",{parentName:"tr",align:null},"6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"El \xfaltimo commit del PR tiene fecha previa a la recomendada"),(0,i.kt)("td",{parentName:"tr",align:null},"+2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Se resolvi\xf3 el ejercicio 99"),(0,i.kt)("td",{parentName:"tr",align:null},"+2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Se resolvi\xf3 el ejercicio 01 en clase"),(0,i.kt)("td",{parentName:"tr",align:null},"+1 (revisado manualmente)")))))}u.isMDXComponent=!0}}]);