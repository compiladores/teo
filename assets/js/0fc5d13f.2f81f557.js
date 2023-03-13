"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7439],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=m(a),k=r,N=u["".concat(o,".").concat(k)]||u[k]||s[k]||l;return a?n.createElement(N,i(i({ref:e},d),{},{components:a})):n.createElement(N,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5174:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],p={title:"Analisis Semantico",sidebar_position:2},o=void 0,m={unversionedId:"teoricas/analisis-semantico/analisis-semantico-Tipos-de-datos",id:"version-2022_2/teoricas/analisis-semantico/analisis-semantico-Tipos-de-datos",isDocsHomePage:!1,title:"Analisis Semantico",description:"Tipos de Datos y  Verificaci\xf3n de Tipos",source:"@site/versioned_docs/version-2022_2/teoricas/05-analisis-semantico/02-analisis-semantico-Tipos-de-datos.md",sourceDirName:"teoricas/05-analisis-semantico",slug:"/teoricas/analisis-semantico/analisis-semantico-Tipos-de-datos",permalink:"/teo/docs/2022_2/teoricas/analisis-semantico/analisis-semantico-Tipos-de-datos",editUrl:"https://github.com/compiladores/compiladores.github.io/edit/master/docs/versioned_docs/version-2022_2/teoricas/05-analisis-semantico/02-analisis-semantico-Tipos-de-datos.md",tags:[],version:"2022_2",sidebarPosition:2,frontMatter:{title:"Analisis Semantico",sidebar_position:2},sidebar:"version-2022_2/teoricaSidebar",previous:{title:"Analisis Semantico",permalink:"/teo/docs/2022_2/teoricas/analisis-semantico/analisis-semantico-1"},next:{title:"Bibliografia",permalink:"/teo/docs/2022_2/teoricas/bibliografia"}},d=[{value:"Tipos de Datos y  Verificaci\xf3n de Tipos",id:"tipos-de-datos-y--verificaci\xf3n-de-tipos",children:[]}],s={toc:d};function u(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"tipos-de-datos-y--verificaci\xf3n-de-tipos"},"Tipos de Datos y  Verificaci\xf3n de Tipos"),(0,l.kt)("p",null,"Una de las tareas principales de un compilador es el c\xe1lculo y mantenimiento de la informaci\xf3n de tipos de datos (inferencia de tipos), y el uso detal informaci\xf3n para asegurar que cada parte de un programa tenga sentido bajo las reglas detipo del lenguaje (verificaci\xf3n de tipos)."),(0,l.kt)("p",null,"La informaci\xf3n del tipo de dato puede ser est\xe1tica o din\xe1mica, o una mezcla de las dos."),(0,l.kt)("p",null,"\u200b     LISP ","\u2013","> Din\xe1mica "),(0,l.kt)("p",null,"\u200b     C, Ada ","\u2013","> Est\xe1tica"),(0,l.kt)("p",null,"Te\xf3ricamente un tipo de dato es un conjunto de valores, o m\xe1s precisamente, un conjunto de valores con ciertas operaciones sobre ellos."),(0,l.kt)("p",null,"En el terreno de la construcci\xf3n de compiladores estos conjuntos por lo regular se describen mediante una expresi\xf3n de tipo, que es un nombre de tipo ","\u2013","> integer, o una expresi\xf3n estructurada tal como array","[1..10]"," of real."),(0,l.kt)("p",null,"La informaci\xf3n de tipo puede almacenarse:"),(0,l.kt)("p",null,"1 En la tabla de s\xedmbolos (ver tabla de s\xedmbolos)"),(0,l.kt)("p",null,"2 En la tabla de tipos"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Introducci\xf3n"),(0,l.kt)("p",{parentName:"li"},"Un lenguaje de programaci\xf3n siempre contiene un n\xfamero de tipos incluidos, llamados ",(0,l.kt)("strong",{parentName:"p"},"tipos predefinidos"),". Normalmente corresponden a tipos num\xe9ricos, dependientes de la arquitectura de la m\xe1quina. Tambi\xe9n tipos elementales como ",(0,l.kt)("strong",{parentName:"p"},"char")," o ",(0,l.kt)("strong",{parentName:"p"},"boolean"),". \xc9stos se denominan tipos ",(0,l.kt)("strong",{parentName:"p"},"simples de datos"),". Ejemplo: Enteros ","\u2013","> complemento a 2."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Dado un conjunto de tipos predefinidos, se pueden crear nuevos tipos de datos utilizando ",(0,l.kt)("strong",{parentName:"p"},"constructores de tipos")," (array, struct, record) .")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Estos constructores pueden veres como funciones que toman tipos existentes como par\xe1metros y devuelven nuevos tipos con una estructura que depende del constructor; ",(0,l.kt)("strong",{parentName:"p"},"tipos estructurados"),".")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Tabla de tipos"),(0,l.kt)("p",{parentName:"li"},"Generalmente, la tabla de tipos contiene informaci\xf3n del nombre del tipo, el tama\xf1o, el padre si se trata de un tipo compuesto, y alguna informaci\xf3n m\xe1s dependiendo del compilador."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"La tabla suele estar ordenada por el nombre del tipo ya que no se debe repetir el mismo tipo."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Si el compilador ",(0,l.kt)("strong",{parentName:"p"},"no admite \xe1mbitos anidados")," con una sola tabla, es suficiente.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Si el compilador ",(0,l.kt)("strong",{parentName:"p"},"admite \xe1mbitos anidados"),", es necesario gestionarlos mediante la utilizaci\xf3n de una pila de tablas."))))),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Los campos m\xednimos necesarios:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Nombre: puede ser un int"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Tipo base: se utiliza para tipos compuestos char[] ","\u2013","> tipo base char")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Padre: es el tipo en el caso de declarar registros o structs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Dimensi\xf3n: n\xfamero de elementos de un tipo predefinido contenido en un tipo estructurado")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"M\xednimo: se utiliza para el caso de la definici\xf3n de arreglos")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"M\xe1ximo: \xeddem, pero el m\xe1ximo \xedndice")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\xc1mbito: es el \xe1mbito donde se defini\xf3 el tipo; normalmente inicia en 0, se va incrementando o decrementando seg\xfan se mueva uno dentro de los distintos \xe1mbitos. Cuando se sale de un \xe1mbito se deben eliminar todos los tipos que declaramos en \xe9l"))))),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"cod"),(0,l.kt)("th",{parentName:"tr",align:null},"nombre"),(0,l.kt)("th",{parentName:"tr",align:null},"tipo base"),(0,l.kt)("th",{parentName:"tr",align:null},"padre"),(0,l.kt)("th",{parentName:"tr",align:null},"dimension"),(0,l.kt)("th",{parentName:"tr",align:null},"min"),(0,l.kt)("th",{parentName:"tr",align:null},"max"),(0,l.kt)("th",{parentName:"tr",align:null},"amb"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",{parentName:"li"},"Ejemplo:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-Pascal"},"Program P;\n\n   Type vector = array[5..10] of integer;\n   var v : vector;  x : integer;\n\n   begin\n      v[7] := 15;\n      x:= v[7];\n   end;\n")),(0,l.kt)("p",{parentName:"li"},"Se procesa la l\xednea 1."),(0,l.kt)("p",{parentName:"li"},"Tabla de tipos:"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Cod"),(0,l.kt)("th",{parentName:"tr",align:null},"Nombre"),(0,l.kt)("th",{parentName:"tr",align:null},"TipoBase"),(0,l.kt)("th",{parentName:"tr",align:null},"Padre"),(0,l.kt)("th",{parentName:"tr",align:null},"Dimensi\xf3n"),(0,l.kt)("th",{parentName:"tr",align:null},"M\xednimo"),(0,l.kt)("th",{parentName:"tr",align:null},"M\xe1ximo"),(0,l.kt)("th",{parentName:"tr",align:null},"\xc1mbito"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"0")))),(0,l.kt)("p",{parentName:"li"},"Tabla de s\xedmbolos:"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Cod"),(0,l.kt)("th",{parentName:"tr",align:null},"Nombre"),(0,l.kt)("th",{parentName:"tr",align:null},"Categor\xeda"),(0,l.kt)("th",{parentName:"tr",align:null},"Tipo"),(0,l.kt)("th",{parentName:"tr",align:null},"NumPar"),(0,l.kt)("th",{parentName:"tr",align:null},"ListaPar"),(0,l.kt)("th",{parentName:"tr",align:null},"Direcci\xf3n"),(0,l.kt)("th",{parentName:"tr",align:null},"\xc1mbito"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",{parentName:"li"},"Se procesa la l\xednea 2."),(0,l.kt)("p",{parentName:"li"},"Tabla de tipos:"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Cod"),(0,l.kt)("th",{parentName:"tr",align:null},"Nombre"),(0,l.kt)("th",{parentName:"tr",align:null},"TipoBase"),(0,l.kt)("th",{parentName:"tr",align:null},"Padre"),(0,l.kt)("th",{parentName:"tr",align:null},"Dimensi\xf3n"),(0,l.kt)("th",{parentName:"tr",align:null},"M\xednimo"),(0,l.kt)("th",{parentName:"tr",align:null},"M\xe1ximo"),(0,l.kt)("th",{parentName:"tr",align:null},"\xc1mbito"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"vector"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",{parentName:"li"},"Tabla de s\xedmbolos:"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Cod"),(0,l.kt)("th",{parentName:"tr",align:null},"Nombre"),(0,l.kt)("th",{parentName:"tr",align:null},"Categor\xeda"),(0,l.kt)("th",{parentName:"tr",align:null},"Tipo"),(0,l.kt)("th",{parentName:"tr",align:null},"NumPar"),(0,l.kt)("th",{parentName:"tr",align:null},"ListaPar"),(0,l.kt)("th",{parentName:"tr",align:null},"Direcci\xf3n"),(0,l.kt)("th",{parentName:"tr",align:null},"\xc1mbito"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",{parentName:"li"},"Se procesa la l\xednea 3."),(0,l.kt)("p",{parentName:"li"},"Tabla de tipos:"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Cod"),(0,l.kt)("th",{parentName:"tr",align:null},"Nombre"),(0,l.kt)("th",{parentName:"tr",align:null},"TipoBase"),(0,l.kt)("th",{parentName:"tr",align:null},"Padre"),(0,l.kt)("th",{parentName:"tr",align:null},"Dimensi\xf3n"),(0,l.kt)("th",{parentName:"tr",align:null},"M\xednimo"),(0,l.kt)("th",{parentName:"tr",align:null},"M\xe1ximo"),(0,l.kt)("th",{parentName:"tr",align:null},"\xc1mbito"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"vector"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",{parentName:"li"},"Tabla de s\xedmbolos:"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Cod"),(0,l.kt)("th",{parentName:"tr",align:null},"Nombre"),(0,l.kt)("th",{parentName:"tr",align:null},"Categor\xeda"),(0,l.kt)("th",{parentName:"tr",align:null},"Tipo"),(0,l.kt)("th",{parentName:"tr",align:null},"NumPar"),(0,l.kt)("th",{parentName:"tr",align:null},"ListaPar"),(0,l.kt)("th",{parentName:"tr",align:null},"Direcci\xf3n"),(0,l.kt)("th",{parentName:"tr",align:null},"\xc1mbito"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"variable"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"9006"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",{parentName:"li"},"Gram\xe1tica de declaraciones modula 2"),(0,l.kt)("p",{parentName:"li"},"S ","\u2192"," var id: T; "),(0,l.kt)("p",{parentName:"li"},"T ","\u2192"," array","[num.. num]"," of T;"),(0,l.kt)("p",{parentName:"li"}," T ","\u2192"," real | integer | char;"),(0,l.kt)("p",{parentName:"li"},"Construir un traductor (transpilador) a C"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-C"},"int x;\nfloat y[4];\n")),(0,l.kt)("p",{parentName:"li"},"Dada una gram\xe1tica con atributos se debe:"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Decidir los atributos y asignarlos a los s\xedmbolos")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Se deben insertar las acciones sem\xe1nticas necesarias")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Tener en cuenta:"),(0,l.kt)("p",{parentName:"li"},"i. Si todos los atributos son sintetizados, se pondr\xe1n las acciones S. Despu\xe9s de los atributos implicados, lo mejor es situarlos al final de la regla de producci\xf3n. Los atributos sintetizados siempre hay que calcularlos despu\xe9s que hayan tomado valor los dem\xe1s atributos."),(0,l.kt)("p",{parentName:"li"},"ii. Si hay atributos heredados:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Un atributo heredado A.h ",(0,l.kt)("strong",{parentName:"li"},"debe")," calcularse antes que aparezca el s\xedmbolo A."),(0,l.kt)("li",{parentName:"ul"},"Un atributo sintetizado A.S ",(0,l.kt)("strong",{parentName:"li"},"no debe")," utilizarse antes de que aparezca el s\xedmbolo A.")),(0,l.kt)("p",{parentName:"li"},"iii. Una acci\xf3n sem\xe1ntica no debe referirse a un atributo sintetizado de un s\xedmbolo a la derecha de la acci\xf3n."))),(0,l.kt)("p",{parentName:"li"},"Abributos no terminales"),(0,l.kt)("p",{parentName:"li"},"T ","\u2192"," ",(0,l.kt)("strong",{parentName:"p"},"REAL")," "),(0,l.kt)("p",{parentName:"li"},"\u200b    { "),(0,l.kt)("p",{parentName:"li"},'\u200b         T.array=""; '),(0,l.kt)("p",{parentName:"li"},'\u200b         T.tipo="float"; '),(0,l.kt)("p",{parentName:"li"},"\u200b    } "),(0,l.kt)("p",{parentName:"li"},"| ",(0,l.kt)("strong",{parentName:"p"},"INTEGER")," "),(0,l.kt)("p",{parentName:"li"},"   {"),(0,l.kt)("p",{parentName:"li"},'\u200b       T.array=""; '),(0,l.kt)("p",{parentName:"li"},'\u200b       T.tipo="int"; '),(0,l.kt)("p",{parentName:"li"},"\u200b    } "),(0,l.kt)("p",{parentName:"li"},"| ",(0,l.kt)("strong",{parentName:"p"},"CHAR")," "),(0,l.kt)("p",{parentName:"li"},"\u200b    { "),(0,l.kt)("p",{parentName:"li"},'\u200b        T.array=""; '),(0,l.kt)("p",{parentName:"li"},'\u200b         T.tipo="char"; '),(0,l.kt)("p",{parentName:"li"},"\u200b     }"),(0,l.kt)("p",{parentName:"li"},"T ","\u2192"," array","[num.. num1]"," of T1; "),(0,l.kt)("p",{parentName:"li"},"\u200b    {"),(0,l.kt)("p",{parentName:"li"},"\u200b        T.Tipo=T1.Tipo;"),(0,l.kt)("p",{parentName:"li"},"\u200b         int lbound=atol(num); "),(0,l.kt)("p",{parentName:"li"},"\u200b         int hbound=atol(num1); "),(0,l.kt)("p",{parentName:"li"},"\u200b         int indice=hbound-lbound; "),(0,l.kt)("p",{parentName:"li"},"\u200b         if ","[T.array=='/0']"," "),(0,l.kt)("p",{parentName:"li"},"\u200b        {"),(0,l.kt)("p",{parentName:"li"},'\u200b              T.array="','[" + str(indice) + "]','";\n\u200b         } '),(0,l.kt)("p",{parentName:"li"},"\u200b        else "),(0,l.kt)("p",{parentName:"li"},"\u200b        { "),(0,l.kt)("p",{parentName:"li"},'\u200b               T.array="','[" + str(indice) +"]','" + T1.array; '),(0,l.kt)("p",{parentName:"li"},"\u200b        } "),(0,l.kt)("p",{parentName:"li"},"}"),(0,l.kt)("p",{parentName:"li"},"S ","\u2192"," var id: T; "),(0,l.kt)("p",{parentName:"li"},"\u200b         { "),(0,l.kt)("p",{parentName:"li"},"\u200b          if ","[T.array=='/0']"," "),(0,l.kt)("p",{parentName:"li"},'\u200b                 S.trad= T.tipo + id.lexema +";"; '),(0,l.kt)("p",{parentName:"li"},"\u200b           else "),(0,l.kt)("p",{parentName:"li"},'\u200b                 S.trad= T.tipo. + id.lexema + T.array " ";"; }'),(0,l.kt)("p",{parentName:"li"},"Ejercicio:"),(0,l.kt)("p",{parentName:"li"},"Dada la siguiente gram\xe1tica :"),(0,l.kt)("p",{parentName:"li"},"E ","\u2192"," E + E"),(0,l.kt)("p",{parentName:"li"},"E ","\u2192"," E ","*"," E"),(0,l.kt)("p",{parentName:"li"},"E ","\u2192"," (E)"),(0,l.kt)("p",{parentName:"li"},"E ","\u2192"," num | id"),(0,l.kt)("p",{parentName:"li"},"num es int, id un identificador de la tabla de s\xedmbolos."))))))}u.isMDXComponent=!0}}]);