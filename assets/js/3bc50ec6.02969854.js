"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9488],{3905:function(a,e,t){t.d(e,{Zo:function(){return o},kt:function(){return k}});var n=t(7294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function s(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,m=function(a,e){if(null==a)return{};var t,n,m={},s=Object.keys(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var l=n.createContext({}),i=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},o=function(a){var e=i(a.components);return n.createElement(l.Provider,{value:e},a.children)},N={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(a,e){var t=a.components,m=a.mdxType,s=a.originalType,l=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),c=i(t),k=m,d=c["".concat(l,".").concat(k)]||c[k]||N[k]||s;return t?n.createElement(d,r(r({ref:e},o),{},{components:t})):n.createElement(d,r({ref:e},o))}));function k(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var s=t.length,r=new Array(s);r[0]=c;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p.mdxType="string"==typeof a?a:m,r[1]=p;for(var i=2;i<s;i++)r[i]=t[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9293:function(a,e,t){t.r(e),t.d(e,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return o},default:function(){return c}});var n=t(7462),m=t(3366),s=(t(7294),t(3905)),r=["components"],p={title:"Parte 4 (2 horas)",sidebar_position:7},l="parte 4: parser recursivo descendiente de un lisp",i={unversionedId:"labs/Laboratorio 2/parte4",id:"version-2021_2/labs/Laboratorio 2/parte4",isDocsHomePage:!1,title:"Parte 4 (2 horas)",description:"Los compiladores recursivos descendientes implementan el stack del parser LL1 de forma impl\xedcita en el stack de ejecuci\xf3n. As\xed, en vez de aplicar una regla de producci\xf3n, se llama a una funci\xf3n que ejecuta la regla de producci\xf3n.",source:"@site/versioned_docs/version-2021_2/labs/Laboratorio 2/parte4.md",sourceDirName:"labs/Laboratorio 2",slug:"/labs/Laboratorio 2/parte4",permalink:"/docs/2021_2/labs/Laboratorio 2/parte4",editUrl:"https://github.com/compiladores/compiladores.github.io/edit/master/docs/versioned_docs/version-2021_2/labs/Laboratorio 2/parte4.md",tags:[],version:"2021_2",sidebarPosition:7,frontMatter:{title:"Parte 4 (2 horas)",sidebar_position:7},sidebar:"version-2021_2/tutorialSidebar",previous:{title:"Gram\xe1tica de compilisp",permalink:"/docs/2021_2/labs/Laboratorio 2/gramatica_compilisp"},next:{title:"Introducci\xf3n a Bison",permalink:"/docs/2021_2/labs/Laboratorio 2/intro-bison"}},o=[{value:"Estructura del c\xf3digo",id:"estructura-del-c\xf3digo",children:[]},{value:"Especificaci\xf3n informal de la sem\xe1ntica",id:"especificaci\xf3n-informal-de-la-sem\xe1ntica",children:[]},{value:"Consigna",id:"consigna",children:[]},{value:"Consejos",id:"consejos",children:[]}],N={toc:o};function c(a){var e=a.components,t=(0,m.Z)(a,r);return(0,s.kt)("wrapper",(0,n.Z)({},N,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"parte-4-parser-recursivo-descendiente-de-un-lisp"},"parte 4: parser recursivo descendiente de un lisp"),(0,s.kt)("p",null,"Los compiladores recursivos descendientes implementan el stack del parser LL1 de forma impl\xedcita en el stack de ejecuci\xf3n. As\xed, en vez de aplicar una regla de producci\xf3n, se llama a una funci\xf3n que ",(0,s.kt)("em",{parentName:"p"},"ejecuta")," la regla de producci\xf3n."),(0,s.kt)("p",null,"El parser recursivo descendiente tiene un m\xe9todo para cada s\xedmbolo no terminal. Para cada uno de ellos, se ejecutar\xe1 un programa que se puede deducir interpretando el diagrama de sintaxis como un diagrama de flujo."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Cada vez que debe encontrarse con un terminal en el diagrama de flujo, se invoca la funci\xf3n ",(0,s.kt)("inlineCode",{parentName:"li"},"match(TokenType)"),", que verifica que el token sea el correcto y lo elimina; o lanza una excepci\xf3n, si el token no es correcto."),(0,s.kt)("li",{parentName:"ul"},"Cuando debe encontrarse con un no terminal, se invoca el m\xe9todo correspondiente a ese no terminal.")),(0,s.kt)("p",null,"Todas las bifurcaciones del diagrama de sintaxis debe poder decidirse mirando \xfanicamente el siguiente token, si la gram\xe1tica es LL1."),(0,s.kt)("h2",{id:"estructura-del-c\xf3digo"},"Estructura del c\xf3digo"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"CompilispParser")," es un parser de ",(0,s.kt)("inlineCode",{parentName:"p"},"Compilisp"),", la sintaxis del lab 1. Debe implementar los m\xe9todos correspondientes a cada no terminal:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"input()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"line()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"sExp()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"list()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"atom()"))),(0,s.kt)("p",null,"Cada uno debe representar el diagrama de sintaxis correspondiente a un s\xedmbolo no terminal. Para esto, adem\xe1s de invocar los otros m\xe9todos-reglas, deben invocar los siguientes m\xe9todos (inclu\xeddos en el esqueleto):"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"match(TokenType)"),": ",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Si el ",(0,s.kt)("inlineCode",{parentName:"li"},"TokenType")," coincide con el siguiente del programa, lo remueve"),(0,s.kt)("li",{parentName:"ul"},"Si no coincide, arroja una excepci\xf3n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"nextToken()")," devuelve el siguiente token sin eliminarlo. Si el programa termin\xf3, arroja una excepci\xf3n."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"getProgramIsOver()")," devuelve un booleano indicando si el programa termin\xf3 o no")),(0,s.kt)("h2",{id:"especificaci\xf3n-informal-de-la-sem\xe1ntica"},"Especificaci\xf3n informal de la sem\xe1ntica"),(0,s.kt)("p",null,"Este lenguaje es un lisp, con lo cual puede usarse scheme (",(0,s.kt)("inlineCode",{parentName:"p"},"sudo apt install mit-scheme"),') para probar algunas expresiones y "construir m\xe1s test" y jugar con un lenguaje similar a compilisp.'),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mo",{parentName:"mrow"},"\u2192"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"{"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"}")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"input \\rightarrow \\{ line \\}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.85396em",verticalAlign:"-0.19444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"{"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"}")))))),(0,s.kt)("p",null,"Est\xe9tico: devuelve un texto que es la concatenaci\xf3n de las l\xedneas."),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mo",{parentName:"mrow"},"\u2192"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"E"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mrow",{parentName:"mrow"},(0,s.kt)("mtext",{parentName:"mrow"},"\xa0"),(0,s.kt)("mstyle",{parentName:"mrow",mathcolor:"#cc0000"},(0,s.kt)("mtext",{parentName:"mstyle"},"\\n")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"line \\rightarrow [sExp] \\text{ \\n}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"\xa0"),(0,s.kt)("span",{parentName:"span",className:"mord text",style:{color:"#cc0000"}},(0,s.kt)("span",{parentName:"span",className:"mord",style:{color:"#cc0000"}},"\\n")))))))),(0,s.kt)("p",null,"Est\xe9tico: devuelve el valor de la sExp convertido a un string."),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"E"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mo",{parentName:"mrow"},"\u2192"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"t")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"sExp \\rightarrow atom | list")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8777699999999999em",verticalAlign:"-0.19444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2223"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t")))))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Si es atom: devuelve el valor del atom"),(0,s.kt)("li",{parentName:"ul"},"si es list y su evaluaci\xf3n no est\xe1 inhibida: Evaluaci\xf3n de la secuencia de ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"E"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mi",{parentName:"mrow"},"p")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"sExp")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8777699999999999em",verticalAlign:"-0.19444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))," (en caso de que no est\xe9 quoteada). El primer ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"E"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mi",{parentName:"mrow"},"p")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"sExp")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8777699999999999em",verticalAlign:"-0.19444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))," es la funci\xf3n y los siguientes son argumentos."),(0,s.kt)("li",{parentName:"ul"},"Si es list y su evaluaci\xf3n est\xe1 inhibida: devuelve una lista.")),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mo",{parentName:"mrow"},"\u2192"),(0,s.kt)("mtext",{parentName:"mrow"},"number"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,s.kt)("mtext",{parentName:"mrow"},"symbol"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,s.kt)("mtext",{parentName:"mrow"},"string")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"atom \\rightarrow \\text{number} | \\text{symbol} | \\text{string}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.61508em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"number")),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2223"),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"symbol")),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2223"),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"string"))))))),(0,s.kt)("p",null,"En el caso de number y string, devuelve el valor correspondiente. En el caso del s\xedmbolo, revisa si existe alguna variable con ese nombre y devuelve su valor. "),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mo",{parentName:"mrow"},"\u2192"),(0,s.kt)("mtext",{parentName:"mrow"},"(\xa0)")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"list \\rightarrow \\text{( )}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"(\xa0)"))))))),(0,s.kt)("p",null,"Devuelve una lista vac\xeda"),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mo",{parentName:"mrow"},"\u2192"),(0,s.kt)("mtext",{parentName:"mrow"},"\xa0(\xa0"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"{"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"E"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"}"),(0,s.kt)("mtext",{parentName:"mrow"},"\xa0)\xa0"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,s.kt)("mtext",{parentName:"mrow"},"\xa0(\xa0"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"{"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"E"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"}"),(0,s.kt)("mtext",{parentName:"mrow"},"\xa0.\xa0"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"E"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mtext",{parentName:"mrow"},"\xa0)\xa0")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"list \\rightarrow \\text{ ( } \\{sExp\\} \\text{ ) } | \\text{ ( } \\{sExp\\} \\text{ . } sExp \\text{ ) }")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"\xa0(\xa0")),(0,s.kt)("span",{parentName:"span",className:"mopen"},"{"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"}"),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"\xa0)\xa0")),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2223"),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"\xa0(\xa0")),(0,s.kt)("span",{parentName:"span",className:"mopen"},"{"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"}"),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"\xa0.\xa0")),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"\xa0)\xa0"))))))),(0,s.kt)("p",null,"Devuelve un listado de los ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"E"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mi",{parentName:"mrow"},"p")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"sExp")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8777699999999999em",verticalAlign:"-0.19444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))," de adentro. El punto no hace ninguna diferencia, es est\xe9tico."),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mo",{parentName:"mrow"},"\u2192"),(0,s.kt)("mtext",{parentName:"mrow"},"\xa0\u2019\xa0"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"E"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mi",{parentName:"mrow"},"p")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"list \\rightarrow \\text{ ' } sExp")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"\xa0\u2019\xa0")),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))),(0,s.kt)("p",null,"Devuelve en sExp de adentro inhibiendo su evaluaci\xf3n."),(0,s.kt)("h2",{id:"consigna"},"Consigna"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Completar los m\xe9todos de ",(0,s.kt)("inlineCode",{parentName:"strong"},"CompilispParser.java")," de forma que pasen los tests de ",(0,s.kt)("inlineCode",{parentName:"strong"},"test/.../parte4/CompilispParserTest.java"),"."),"."),(0,s.kt)("h2",{id:"consejos"},"Consejos"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Implementar unicamente las funcionalidades requeridas para que los test pasen (es decir, ",(0,s.kt)("inlineCode",{parentName:"li"},"+")," y ",(0,s.kt)("inlineCode",{parentName:"li"},"-"),"), no m\xe1s."),(0,s.kt)("li",{parentName:"ul"},"Abusar del tipo ",(0,s.kt)("inlineCode",{parentName:"li"},"Object"),". No implementar ",(0,s.kt)("inlineCode",{parentName:"li"},"CompilispParser")," utilizando tipos seguros."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"CompilispParser")," debe evaluar el programa a medida que lo interpreta. Se recomienda llamar a la funci\xf3n de evaluaci\xf3n en ",(0,s.kt)("inlineCode",{parentName:"li"},"sExp"),". La lista iniciada con ",(0,s.kt)("inlineCode",{parentName:"li"},"QUOTE")," debe inhibir la evaluaci\xf3n de su contenido."),(0,s.kt)("li",{parentName:"ul"},"Se recomienda desarrollar una funci\xf3n recursiva que convierta su contenido a ",(0,s.kt)("inlineCode",{parentName:"li"},"string"),", e invocarla desde ",(0,s.kt)("inlineCode",{parentName:"li"},"line()"),".")))}c.isMDXComponent=!0}}]);