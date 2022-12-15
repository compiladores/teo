"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7639],{3905:function(a,e,t){t.d(e,{Zo:function(){return o},kt:function(){return k}});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function m(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=n.createContext({}),i=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):m(m({},e),a)),t},o=function(a){var e=i(a.components);return n.createElement(l.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,r=a.originalType,l=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),N=i(t),k=s,d=N["".concat(l,".").concat(k)]||N[k]||c[k]||r;return t?n.createElement(d,m(m({ref:e},o),{},{components:t})):n.createElement(d,m({ref:e},o))}));function k(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var r=t.length,m=new Array(r);m[0]=N;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p.mdxType="string"==typeof a?a:s,m[1]=p;for(var i=2;i<r;i++)m[i]=t[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},6765:function(a,e,t){t.r(e),t.d(e,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return o},default:function(){return N}});var n=t(7462),s=t(3366),r=(t(7294),t(3905)),m=["components"],p={marp:!0},l="Pr\xe1ctica 3 ( 7/9 )",i={unversionedId:"practicas/3",id:"practicas/3",isDocsHomePage:!1,title:"Pr\xe1ctica 3 ( 7/9 )",description:"Orden del d\xeda",source:"@site/docs/practicas/3.md",sourceDirName:"practicas",slug:"/practicas/3",permalink:"/docs/practicas/3",editUrl:"https://github.com/compiladores/compiladores.github.io/edit/master/docs/docs/practicas/3.md",tags:[],version:"current",frontMatter:{marp:!0},sidebar:"practicaSidebar",previous:{title:"Pr\xe1ctica 2 ( 30/8 )",permalink:"/docs/practicas/2"},next:{title:"Pr\xe1ctica 4 ( 28/9 )",permalink:"/docs/practicas/4"}},o=[{value:"Orden del d\xeda",id:"orden-del-d\xeda",children:[]},{value:"Qu\xe9 es un lexer",id:"qu\xe9-es-un-lexer",children:[]},{value:"Lenguaje: 4++",id:"lenguaje-4",children:[]},{value:"Intro a flex",id:"intro-a-flex",children:[]},{value:"Breve repaso de DFA",id:"breve-repaso-de-dfa",children:[]},{value:"C\xf3mo visualizar un DFA",id:"c\xf3mo-visualizar-un-dfa",children:[]},{value:"Construyendo un lexer DFA para 4++",id:"construyendo-un-lexer-dfa-para-4",children:[]},{value:"Nuevos tipos de estado:",id:"nuevos-tipos-de-estado",children:[]},{value:"Explicaci\xf3n Lab 2 + criterios de correcci\xf3n",id:"explicaci\xf3n-lab-2--criterios-de-correcci\xf3n",children:[]}],c={toc:o};function N(a){var e=a.components,p=(0,s.Z)(a,m);return(0,r.kt)("wrapper",(0,n.Z)({},c,p,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pr\xe1ctica-3--79-"},"Pr\xe1ctica 3 ( 7/9 )"),(0,r.kt)("h2",{id:"orden-del-d\xeda"},"Orden del d\xeda"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Qu\xe9 es un lexer"),(0,r.kt)("li",{parentName:"ol"},"Presentaci\xf3n del lenguaje 4++"),(0,r.kt)("li",{parentName:"ol"},"flex"),(0,r.kt)("li",{parentName:"ol"},"Repaso de DFA"),(0,r.kt)("li",{parentName:"ol"},"Lexer DFA de 4++"),(0,r.kt)("li",{parentName:"ol"},"Explicaci\xf3n lab 2 + ejemplo ejercicio 00")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"qu\xe9-es-un-lexer"},"Qu\xe9 es un lexer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'float matchO(char *s) { /* find a zero */\n    if (!strncmp(s, "0.0", 3))\n    return 0.;\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    [\n        \n        (KEYWORD_FLOAT), (ID,"match0"), (LEFT_PAREN), (KEYWORD_CHAR), (STAR), (ID,"s"),(RIGHT_PAREN), (LEFT_BRACE),\n\n        (KEYWORD_IF),(LEFT_PAREN),(BANG),(ID,"strcmp"),(LEFT_PAREN),(ID,"s"),(COMMA),(STRING,"0.0"),(COMMA),(NUM,"3"),(RIGHT_PAREN),(RIGHT_PAREN),\n\n        (KEYWORD_RETURN),(REAL,"0."),(SEMICOLON),\n        \n        (RIGHT_BRACE),\n        \n        (EOF),\n    ]\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Listado priorizado de expresiones regulares (siempre gana el match m\xe1s largo)")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"lenguaje-4"},"Lenguaje: 4++"),(0,r.kt)("p",null,"Se permite separar con ",(0,r.kt)("inlineCode",{parentName:"p"},"_")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Expresi\xf3n regular"),(0,r.kt)("th",{parentName:"tr",align:null},"tipo de token"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"40")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CUARENTA"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"4+")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CUATROS"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\+\\+")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MAS_MAS"))))),(0,r.kt)("p",null,"Ejemplos de frases v\xe1lidas "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"frase"),(0,r.kt)("th",{parentName:"tr",align:null},"tokens"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"4444++40")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(CUATROS,4444),(MAS_MAS,++),(CUARENTA,40)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"++++4444")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(MAS_MAS,++),(MAS_MAS,++),(CUATROS,4444)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"4__40")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(CUATROS,4),(CUARENTA,40)"))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"intro-a-flex"},"Intro a flex"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt install flex\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"flex -iI ejemplo.l && gcc -g lex.yy.c -o lexer -ll && ./lexer\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'%%\nhola   { printf("token1 %s\\n",yytext); }\n1      { printf("token2 %s\\n",yytext); }\n.      { printf("ERROR %s\\n",yytext); }\n%%\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"breve-repaso-de-dfa"},"Breve repaso de DFA"),(0,r.kt)("p",null,"Composici\xf3n de un DFA:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Alfabeto ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u03a3")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\Sigma")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u03a3")))))),(0,r.kt)("li",{parentName:"ul"},"Conjunto de estados ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"D")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"D")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"D")))))),(0,r.kt)("li",{parentName:"ul"},"Funci\xf3n de transici\xf3n ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"T"),(0,r.kt)("mo",{parentName:"mrow"},":"),(0,r.kt)("mi",{parentName:"mrow"},"D"),(0,r.kt)("mo",{parentName:"mrow"},"\xd7"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u03a3"),(0,r.kt)("mo",{parentName:"mrow"},"\u2192"),(0,r.kt)("mi",{parentName:"mrow"},"D")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"T:D\\times\\Sigma\\rightarrow D")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},":"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.76666em",verticalAlign:"-0.08333em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"D"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u03a3"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"D")))))),(0,r.kt)("li",{parentName:"ul"},"Estado inicial ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msub"},"S"),(0,r.kt)("mn",{parentName:"msub"},"0")),(0,r.kt)("mo",{parentName:"mrow"},"\u2208"),(0,r.kt)("mi",{parentName:"mrow"},"D")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"S_0 \\in D")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.83333em",verticalAlign:"-0.15em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"S"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.30110799999999993em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.05764em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"0")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,r.kt)("span",{parentName:"span"})))))),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"\u2208"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"D")))))),(0,r.kt)("li",{parentName:"ul"},"Estados de aceptaci\xf3n ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"A"),(0,r.kt)("mo",{parentName:"mrow"},"\u2282"),(0,r.kt)("mi",{parentName:"mrow"},"D")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"A \\subset D")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.72243em",verticalAlign:"-0.0391em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"\u2282"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"D"))))))),(0,r.kt)("p",null,"Un DFA es una tupla ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u03a3"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mi",{parentName:"mrow"},"D"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mi",{parentName:"mrow"},"T"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msub"},"S"),(0,r.kt)("mn",{parentName:"msub"},"0")),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mi",{parentName:"mrow"},"A"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(\\Sigma,D,T,S_0,A)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u03a3"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"D"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"S"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.30110799999999993em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.05764em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"0")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,r.kt)("span",{parentName:"span"})))))),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"c\xf3mo-visualizar-un-dfa"},"C\xf3mo visualizar un DFA"),(0,r.kt)("p",null,"El siguiente DFA detecta un n\xfamero impar de letras ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"automata",src:t(8445).Z})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"construyendo-un-lexer-dfa-para-4"},"Construyendo un lexer DFA para 4++"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"separados",src:t(225).Z})),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"unidos 1",src:t(6461).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"optimista: ",(0,r.kt)("inlineCode",{parentName:"li"},"(CUATROS,4),(CUATROS,4),(CUATROS,4)")," = ",(0,r.kt)("inlineCode",{parentName:"li"},"444")," (y longer match rule?)"),(0,r.kt)("li",{parentName:"ul"},"pesimista: ",(0,r.kt)("inlineCode",{parentName:"li"},"44_")," va al mismo lugar que ",(0,r.kt)("inlineCode",{parentName:"li"},"h"))),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"unidos 3",src:t(7006).Z})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"nuevos-tipos-de-estado"},"Nuevos tipos de estado:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estado inicial"),": separado"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estado tokenizable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estado inv\xe1lido")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estado muerto"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"explicaci\xf3n-lab-2--criterios-de-correcci\xf3n"},"Explicaci\xf3n Lab 2 + criterios de correcci\xf3n"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Aceptar el assignment (link ahora o en el mail luego)"),(0,r.kt)("li",{parentName:"ol"},"Clonar el assignment YAYAYA"),(0,r.kt)("li",{parentName:"ol"},"Puntaje (hasta 11! punto extra):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pasan los test 00, 01, 02, 03: ",(0,r.kt)("strong",{parentName:"li"},"6ptos")," (autom\xe1tico)"),(0,r.kt)("li",{parentName:"ul"},"El ejercicio 01 ",(0,r.kt)("strong",{parentName:"li"},"pusheado")," antes de las 22 de hoy: ",(0,r.kt)("strong",{parentName:"li"},"+1ptos")," "),(0,r.kt)("li",{parentName:"ul"},"El \xfaltimo commit es previo al martes 23:59: ",(0,r.kt)("strong",{parentName:"li"},"+2ptos")),(0,r.kt)("li",{parentName:"ul"},'Agregar 5 \xf3 m\xe1s tests que digan "extra" en la descripci\xf3n (debe ser en otro archivo): ',(0,r.kt)("strong",{parentName:"li"},"+2ptos"))))))}N.isMDXComponent=!0},8445:function(a,e,t){e.Z=t.p+"assets/images/automata-dde46f21b8b3d7044403da3acc8d3459.png"},225:function(a,e,t){e.Z=t.p+"assets/images/separados.drawio-cc071dfc38628459bd63ef24663f2614.png"},7006:function(a,e,t){e.Z=t.p+"assets/images/unidos_con_dead.drawio-eaa0788682a224ac0283bb3ddeef53e6.png"},6461:function(a,e,t){e.Z=t.p+"assets/images/unidos_sin_dead.drawio-e654e72ca0f6ca156a93b1cf561b72aa.png"}}]);