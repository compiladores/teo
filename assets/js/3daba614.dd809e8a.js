"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6847],{3905:function(a,e,t){t.d(e,{Zo:function(){return o},kt:function(){return k}});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function i(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var p=n.createContext({}),l=function(a){var e=n.useContext(p),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},o=function(a){var e=l(a.components);return n.createElement(p.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,p=a.parentName,o=i(a,["components","mdxType","originalType","parentName"]),N=l(t),k=s,d=N["".concat(p,".").concat(k)]||N[k]||c[k]||m;return t?n.createElement(d,r(r({ref:e},o),{},{components:t})):n.createElement(d,r({ref:e},o))}));function k(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,r=new Array(m);r[0]=N;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=a,i.mdxType="string"==typeof a?a:s,r[1]=i;for(var l=2;l<m;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},3234:function(a,e,t){t.r(e),t.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return o},default:function(){return N}});var n=t(7462),s=t(3366),m=(t(7294),t(3905)),r=["components"],i={},p="Laboratorio 4: Resumen te\xf3rico",l={unversionedId:"labs/lab_cuatro_introduccion_teorica",id:"labs/lab_cuatro_introduccion_teorica",isDocsHomePage:!1,title:"Laboratorio 4: Resumen te\xf3rico",description:"Bibliograf\xeda",source:"@site/docs/labs/4_lab_cuatro_introduccion_teorica.md",sourceDirName:"labs",slug:"/labs/lab_cuatro_introduccion_teorica",permalink:"/docs/labs/lab_cuatro_introduccion_teorica",editUrl:"https://github.com/compiladores/compiladores.github.io/edit/master/docs/docs/labs/4_lab_cuatro_introduccion_teorica.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Laboratorio 3: Resumen te\xf3rico",permalink:"/docs/labs/introduccion_teorica"},next:{title:"Laboratorio 1: automatas",permalink:"/docs/labs/1"}},o=[{value:"Bibliograf\xeda",id:"bibliograf\xeda",children:[]},{value:"Definici\xf3n de gram\xe1tica libre de contexto",id:"definici\xf3n-de-gram\xe1tica-libre-de-contexto",children:[{value:"Notaci\xf3n",id:"notaci\xf3n",children:[]}]},{value:"Derivaciones",id:"derivaciones",children:[]},{value:"Grm\xe1ticas ambiguas",id:"grm\xe1ticas-ambiguas",children:[]},{value:"Gram\xe1ticas LL1",id:"gram\xe1ticas-ll1",children:[]},{value:"\xbfQu\xe9 es un parser LL1?",id:"qu\xe9-es-un-parser-ll1",children:[{value:"Algoritmo de un parser LL1",id:"algoritmo-de-un-parser-ll1",children:[]}]}],c={toc:o};function N(a){var e=a.components,i=(0,s.Z)(a,r);return(0,m.kt)("wrapper",(0,n.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"laboratorio-4-resumen-te\xf3rico"},"Laboratorio 4: Resumen te\xf3rico"),(0,m.kt)("h2",{id:"bibliograf\xeda"},"Bibliograf\xeda"),(0,m.kt)("p",null,"Louden 4.2, 3.2. Ullman 4.2.1. Apuntes de la te\xf3rica."),(0,m.kt)("h2",{id:"definici\xf3n-de-gram\xe1tica-libre-de-contexto"},"Definici\xf3n de gram\xe1tica libre de contexto"),(0,m.kt)("p",null,"Una grm\xe1tica libre de contexto se define matematicamente como:"),(0,m.kt)("ol",null,(0,m.kt)("li",{parentName:"ol"},"Conjunto de s\xedmbolos terminales ",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"T")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"T")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T")))))," (",(0,m.kt)("inlineCode",{parentName:"li"},"if"),", ",(0,m.kt)("inlineCode",{parentName:"li"},"int"),", ",(0,m.kt)("inlineCode",{parentName:"li"},"{")," ... )"),(0,m.kt)("li",{parentName:"ol"},"Conjunto de s\xedmbolos ",(0,m.kt)("strong",{parentName:"li"},"no")," terminales ",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"V")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"V")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V")))))," (",(0,m.kt)("inlineCode",{parentName:"li"},"IfStmt"),", ",(0,m.kt)("inlineCode",{parentName:"li"},"VarDecl"),", ",(0,m.kt)("inlineCode",{parentName:"li"},"BlockExpr"),")"),(0,m.kt)("li",{parentName:"ol"},"Conjunto de producciones ",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"P")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"P")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P")))))," (",(0,m.kt)("inlineCode",{parentName:"li"},"BlockExpr -> { CompoundStmt }"),")"),(0,m.kt)("li",{parentName:"ol"},"Un s\xedmbolo inicial ",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"S")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"S")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"S"))))))),(0,m.kt)("p",null,"Una gram\xe1tica es una 4-upla: ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"G"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"V"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"T"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"P"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"S"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"G=(V,T,P,S)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"G"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"S"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,m.kt)("h3",{id:"notaci\xf3n"},"Notaci\xf3n"),(0,m.kt)("p",null,"En el laboratorio 3 y el laboratorio 4 se usa la siguiente notaci\xf3n:"),(0,m.kt)("ol",null,(0,m.kt)("li",{parentName:"ol"},"Simbolos no terminales: encerrados por ",(0,m.kt)("inlineCode",{parentName:"li"},"< >")," por ejemplo, el s\xedmbolo llamado ",(0,m.kt)("em",{parentName:"li"},"expresi\xf3n")," se representa como ",(0,m.kt)("inlineCode",{parentName:"li"},"<expresion>")),(0,m.kt)("li",{parentName:"ol"},"S\xedmbolos terminales: sin una notaci\xf3n particular. El literal ",(0,m.kt)("em",{parentName:"li"},"if")," se escribe ",(0,m.kt)("inlineCode",{parentName:"li"},"if"),"."),(0,m.kt)("li",{parentName:"ol"},"Producciones: ",(0,m.kt)("ul",{parentName:"li"},(0,m.kt)("li",{parentName:"ul"},"El s\xedmbolo no terminal que da lugar a la producci\xf3n se escribe del lado izquierdo"),(0,m.kt)("li",{parentName:"ul"},"El s\xedmbolo utilizado es ",(0,m.kt)("inlineCode",{parentName:"li"},"::=")," en vez de una flecha"),(0,m.kt)("li",{parentName:"ul"},"Los s\xedmbolos que tiene como resultado la producci\xf3n van del lado derecho de ",(0,m.kt)("inlineCode",{parentName:"li"},"::="))))),(0,m.kt)("h2",{id:"derivaciones"},"Derivaciones"),(0,m.kt)("p",null,"Consisten en transformar el s\xedmbolo inicial aplicando producciones sucesivas."),(0,m.kt)("h2",{id:"grm\xe1ticas-ambiguas"},"Grm\xe1ticas ambiguas"),(0,m.kt)("p",null,"Son aquellas que permiten llegar a cierta una secuencia de s\xedmbolos a trav\xe9s de distintas secuencias de aplicaci\xf3n de producciones. Las gram\xe1ticas ambiguas permiten interpretar el c\xf3digo de m\xe1s de una forma, con lo cual no son utiles."),(0,m.kt)("h2",{id:"gram\xe1ticas-ll1"},"Gram\xe1ticas LL1"),(0,m.kt)("p",null,"Las gram\xe1ticas LL1 son aquellas que:"),(0,m.kt)("ol",null,(0,m.kt)("li",{parentName:"ol"},"No tienen recursividad por izquierda"),(0,m.kt)("li",{parentName:"ol"},"No son ambiguas")),(0,m.kt)("p",null,"Las grm\xe1ticas LL1 se pueden utilizar facilmente en parsers LL1."),(0,m.kt)("h2",{id:"qu\xe9-es-un-parser-ll1"},"\xbfQu\xe9 es un parser LL1?"),(0,m.kt)("p",null,"Un parser LL1 es similar al parser descendiente recursivo pero ",(0,m.kt)("strong",{parentName:"p"},"usa un stack expl\xedcito")," donde el parser recursivo descendiente utiliza el call stack."),(0,m.kt)("p",null,'"Partes" de un parser LL1:'),(0,m.kt)("ol",null,(0,m.kt)("li",{parentName:"ol"},"Cola que contiene la secuencia de simbolos que se debe parsear. El parser unicamente lee de aqu\xed, no hace push."),(0,m.kt)("li",{parentName:"ol"},"Stack de estado: Contiene la informaci\xf3n que antes ten\xeda el call stack"),(0,m.kt)("li",{parentName:"ol"},"Tabla de transiciones ",(0,m.kt)("em",{parentName:"li"},"M"),": Tabla de doble entrada ",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"M"),(0,m.kt)("mo",{parentName:"mrow"},"\u2208"),(0,m.kt)("mi",{parentName:"mrow"},"V"),(0,m.kt)("mo",{parentName:"mrow"},"\xd7"),(0,m.kt)("mi",{parentName:"mrow"},"T"),(0,m.kt)("mo",{parentName:"mrow"},"\u2192"),(0,m.kt)("mi",{parentName:"mrow"},"P")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"M \\in V \\times T \\rightarrow P")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.72243em",verticalAlign:"-0.0391em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"M"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2208"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.76666em",verticalAlign:"-0.08333em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"))))),". Esta tabla se usa cuando hay un s\xedmbolo no terminal en la punta del stack de estado. A partir del no terminal del stack de estado (",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow"},"\u2208"),(0,m.kt)("mi",{parentName:"mrow"},"V")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\in V")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2208"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"))))),") y el primer terminal de la cola (",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow"},"\u2208"),(0,m.kt)("mi",{parentName:"mrow"},"T")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\in T")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2208"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"))))),"), define qu\xe9 producci\xf3n (",(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow"},"\u2208"),(0,m.kt)("mi",{parentName:"mrow"},"P")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\in P")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2208"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"))))),") aplicar."),(0,m.kt)("li",{parentName:"ol"},'"nucleo algor\xedtmico" descripto acontinuaci\xf3n.')),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"algoritmo",src:t(6827).Z})),(0,m.kt)("h3",{id:"algoritmo-de-un-parser-ll1"},"Algoritmo de un parser LL1"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},"stack_estado=[s\xedmbolo_inicial]\ncola=listado_de_tokens\nwhile len(cola) > 0:\n    if cola[0]==stack_estado[0]:\n        cola.pop()\n        stack_estado.pop()\n    else:\n        produccion = M[stack_estado[0],cola[0]]\n        stack_estado.push(*produccion.lado_derecho)\n")),(0,m.kt)("p",null,"A fines del laboratorio, escribimos el algoritmo de la siguiente manera:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},"stack_estado=[s\xedmbolo_inicial]\ncola=listado_de_tokens\ndef match():\n    cola.pop()\n    stack_estado.pop()\ndef apply(produccion):\n    stack_estado.push(*produccion.lado_derecho)\n\n\nwhile len(cola) > 0:\n    if cola[0]==stack_estado[0]:\n        match()\n    else:\n        apply(M[stack_estado[0],cola[0]])\n")),(0,m.kt)("p",null,"En los ejercicios de parsing LL1 del presente laboratorio, se debe describir el listado de operaciones ",(0,m.kt)("em",{parentName:"p"},"match")," y ",(0,m.kt)("em",{parentName:"p"},"apply")," que realizar\xeda el parser LL1."))}N.isMDXComponent=!0},6827:function(a,e,t){e.Z=t.p+"assets/images/algoritmo.drawio-dd53a4ed6d0a86127271437e76b1af68.png"}}]);