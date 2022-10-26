"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6710],{3905:function(e,r,a){a.d(r,{Zo:function(){return p},kt:function(){return m}});var t=a(7294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=t.createContext({}),c=function(e){var r=t.useContext(l),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},p=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?t.createElement(f,i(i({ref:r},p),{},{components:a})):t.createElement(f,i({ref:r},p))}));function m(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},944:function(e,r,a){a.r(r),a.d(r,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var t=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],s={title:"Parte 6 (1.5 horas)",sidebar_position:8},l=void 0,c={unversionedId:"labs/Laboratorio 1/parte6",id:"version-2021_2/labs/Laboratorio 1/parte6",isDocsHomePage:!1,title:"Parte 6 (1.5 horas)",description:"Consigna",source:"@site/versioned_docs/version-2021_2/labs/Laboratorio 1/parte6.md",sourceDirName:"labs/Laboratorio 1",slug:"/labs/Laboratorio 1/parte6",permalink:"/docs/2021_2/labs/Laboratorio 1/parte6",editUrl:"https://github.com/compiladores/compiladores.github.io/edit/master/docs/versioned_docs/version-2021_2/labs/Laboratorio 1/parte6.md",tags:[],version:"2021_2",sidebarPosition:8,frontMatter:{title:"Parte 6 (1.5 horas)",sidebar_position:8},sidebar:"version-2021_2/tutorialSidebar",previous:{title:"Parte 5 (0.5 horas)",permalink:"/docs/2021_2/labs/Laboratorio 1/parte5"},next:{title:"Parte 7 (2 horas)",permalink:"/docs/2021_2/labs/Laboratorio 1/parte7"}},p=[{value:"Consigna",id:"consigna",children:[]},{value:"Consejos",id:"consejos",children:[]}],u={toc:p};function d(e){var r=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"consigna"},"Consigna"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Completar los archivos ",(0,o.kt)("inlineCode",{parentName:"strong"},".flex")," de la carpeta ",(0,o.kt)("inlineCode",{parentName:"strong"},"parte6")," de forma que pasen todas las pruebas de la carpeta ",(0,o.kt)("inlineCode",{parentName:"strong"},"parte6"),".")," No se permite modificar el contenido de los archivos de pruebas, en caso de ser necesario agregar m\xe1s pruebas, hacerlo en un archivo separado."),(0,o.kt)("h2",{id:"consejos"},"Consejos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"La parte 6 consiste en expresar los 4 lenguajes trabajados previamente como archivos ",(0,o.kt)("inlineCode",{parentName:"li"},".jflex"),". Se aconseja proceder de la siguiente manera:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"expresar los tipos de token como expresiones regulares (en las tablas de la parte 2 se hizo una descripci\xf3n informal)"),(0,o.kt)("li",{parentName:"ol"},"Transcribir las expresiones regulares a los archivos ",(0,o.kt)("inlineCode",{parentName:"li"},".jflex"),". La sintaxis de las expresiones regulares de JFlex est\xe1 descripta ",(0,o.kt)("a",{parentName:"li",href:"https://www.jflex.de/manual.html#LexRules"},"aqu\xed"),". Es posible que difieran un poco de las expresiones regulares de java o grep, o de la sintaxis dada en la te\xf3rica."))),(0,o.kt)("li",{parentName:"ul"},'Para BrainfuckAdder ser\xe1 necesario "escapear" caracteres, ya que el ',(0,o.kt)("inlineCode",{parentName:"li"},"+")," y el ",(0,o.kt)("inlineCode",{parentName:"li"},"-")," son caracteres propios de la sintaxis de expresiones regulares Para esto se pueden encerrar los literales entre comillas o usar el caracter ",(0,o.kt)("inlineCode",{parentName:"li"},"\\"),". Ver la sintaxis de expresiones regulares de jflex ",(0,o.kt)("a",{parentName:"li",href:"https://www.jflex.de/manual.html#LexRules"},"aqu\xed"),"."),(0,o.kt)("li",{parentName:"ul"},'En los lenguages LOL y numbersoup se requiere agregar reglas adicionales para detectar algunos tokens mal formados. Estos tokens mal formados en alg\xfan sentido est\xe1n "impl\xedcitos" en la definci\xf3n informal que se hizo previamente del lenguaje, y en los test.')))}d.isMDXComponent=!0}}]);