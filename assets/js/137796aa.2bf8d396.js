"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1837],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,b=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4082:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Introducci\xf3n",sidebar_position:1},p=void 0,u={unversionedId:"labs/Laboratorio 1/intro",id:"version-2021_2/labs/Laboratorio 1/intro",isDocsHomePage:!1,title:"Introducci\xf3n",description:"Bibliograf\xeda",source:"@site/versioned_docs/version-2021_2/labs/Laboratorio 1/intro.md",sourceDirName:"labs/Laboratorio 1",slug:"/labs/Laboratorio 1/intro",permalink:"/teo/docs/2021_2/labs/Laboratorio 1/intro",editUrl:"https://github.com/compiladores/compiladores.github.io/edit/master/docs/versioned_docs/version-2021_2/labs/Laboratorio 1/intro.md",tags:[],version:"2021_2",sidebarPosition:1,frontMatter:{title:"Introducci\xf3n",sidebar_position:1},sidebar:"version-2021_2/tutorialSidebar",previous:{title:"Trabajo pr\xe1ctico",permalink:"/teo/docs/2021_2/labs/Trabajo Pr\xe1ctico"},next:{title:"Parte 1 (0.5 horas)",permalink:"/teo/docs/2021_2/labs/Laboratorio 1/parte1"}},c=[{value:"Bibliograf\xeda",id:"bibliograf\xeda",children:[]},{value:"\xbfQu\xe9 es un lexer? (tiger 2.1)",id:"qu\xe9-es-un-lexer-tiger-21",children:[{value:"Ejemplo",id:"ejemplo",children:[]}]},{value:"\xbfC\xf3mo describe un lexer? (tiger 2.2)",id:"c\xf3mo-describe-un-lexer-tiger-22",children:[{value:"Ejemplo",id:"ejemplo-1",children:[]}]}],d={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"bibliograf\xeda"},"Bibliograf\xeda"),(0,o.kt)("p",null,"Tiger book: 2.1, 2.2, 2.3"),(0,o.kt)("h2",{id:"qu\xe9-es-un-lexer-tiger-21"},"\xbfQu\xe9 es un lexer? (tiger 2.1)"),(0,o.kt)("p",null,"Un lexer convierte una secuencia de caracteres en una secuencia de ",(0,o.kt)("strong",{parentName:"p"},"tokens"),"."),(0,o.kt)("h3",{id:"ejemplo"},"Ejemplo"),(0,o.kt)("p",null,"Fragmento de c\xf3digo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'float matchO(char *s) { /* find a zero */\n    if (!strncmp(s, "0.0", 3))\n    return 0.;\n}\n')),(0,o.kt)("p",null,"Secuencia de tokens que podr\xeda extraer el lexer de C:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'    [\n        \n        (KEYWORD_FLOAT), (ID,"match0"), (LEFT_PAREN), (KEYWORD_CHAR), (STAR), (ID,"s"),(RIGHT_PAREN), (LEFT_BRACE),\n\n        (KEYWORD_IF),(LEFT_PAREN),(BANG),(ID,"strcmp"),(LEFT_PAREN),(ID,"s"),(COMMA),(STRING,"0.0"),(COMMA),(NUM,"3"),(RIGHT_PAREN),(RIGHT_PAREN),\n\n        (KEYWORD_RETURN),(REAL,"0."),(SEMICOLON),\n        \n        (RIGHT_BRACE),\n        \n        (EOF),\n    ]\n')),(0,o.kt)("p",null,"Notar que:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"El lexer hace desaparecer los comentarios"),(0,o.kt)("li",{parentName:"ul"},"El lexer hace desaparecer el espacio en blanco")),(0,o.kt)("h2",{id:"c\xf3mo-describe-un-lexer-tiger-22"},"\xbfC\xf3mo describe un lexer? (tiger 2.2)"),(0,o.kt)("p",null,"Para describir un lexer, lo \xfanico que necesitamos es un listado de expresiones regulares. Las expresiones regulares que est\xe1n m\xe1s arriba tienen mayor prioridad que las que est\xe1n m\xe1s abajo en la lista."),(0,o.kt)("h3",{id:"ejemplo-1"},"Ejemplo"),(0,o.kt)("p",null,"Algunas de las expresiones regulares que podr\xeda haber en el ejemplo anterior:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Expresi\xf3n regular"),(0,o.kt)("th",{parentName:"tr",align:null},"tipo de token"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"float")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"KEYWORD_FLOAT"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"LEFT_PAREN"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"[0-9]+")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"NUM"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"([0-9]+\\.[0-9]*)\\|([0-9]*\\.[0-9]+)")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"REAL"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"[a-z][a-zO-9]*")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ID"))))),(0,o.kt)("p",null,"Notar que:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"float")," podr\xeda interpretarse como un ",(0,o.kt)("inlineCode",{parentName:"li"},"ID"),", pero se interpreta como ",(0,o.kt)("inlineCode",{parentName:"li"},"KEYWORD_FLOAT"),", debido a su posici\xf3n en la lista"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"floated")," ser\xeda un ",(0,o.kt)("inlineCode",{parentName:"li"},"ID")," y no un ",(0,o.kt)("inlineCode",{parentName:"li"},"KEYWORD_FLOAT")," con un ",(0,o.kt)("inlineCode",{parentName:"li"},"ed")," colgando, debido a que el lexer busca la coincidencia m\xe1s larga (",(0,o.kt)("em",{parentName:"li"},"longest match"),").")))}s.isMDXComponent=!0}}]);