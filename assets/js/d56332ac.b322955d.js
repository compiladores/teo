"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9984],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2920:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),l=["components"],s={marp:!0},o="Pr\xe1ctica 4 ( 21/9 )",c={unversionedId:"practicas/4",id:"practicas/4",isDocsHomePage:!1,title:"Pr\xe1ctica 4 ( 21/9 )",description:"Bibliograf\xeda: Louden 3.6",source:"@site/docs/practicas/4.md",sourceDirName:"practicas",slug:"/practicas/4",permalink:"/docs/practicas/4",editUrl:"https://github.com/compiladores/compiladores.github.io/edit/master/docs/docs/practicas/4.md",tags:[],version:"current",frontMatter:{marp:!0},sidebar:"practicaSidebar",previous:{title:"Pr\xe1ctica 3 ( 7/9 )",permalink:"/docs/practicas/3"}},p=[{value:"Orden del d\xeda",id:"orden-del-d\xeda",children:[]},{value:"\xbfQu\xe9 es un parser?",id:"qu\xe9-es-un-parser",children:[{value:"Ejemplo",id:"ejemplo",children:[]}]},{value:"\xbfC\xf3mo se describe una sintaxis?",id:"c\xf3mo-se-describe-una-sintaxis",children:[{value:"Representaci\xf3n BNF (ejemplo de Louden 4.10)",id:"representaci\xf3n-bnf-ejemplo-de-louden-410",children:[]},{value:"Representaci\xf3n EBNF",id:"representaci\xf3n-ebnf",children:[]},{value:"Diagramas de sintaxis (Louden 3.5.2)",id:"diagramas-de-sintaxis-louden-352",children:[]}]},{value:"Parsers descendientes recursivos",id:"parsers-descendientes-recursivos",children:[{value:"Sentencia",id:"sentencia",children:[]},{value:"Exp",id:"exp",children:[]},{value:"sent-if",id:"sent-if",children:[]}]},{value:"Intervalo",id:"intervalo",children:[]},{value:"Explicaci\xf3n Lab 3 + criterios de correcci\xf3n",id:"explicaci\xf3n-lab-3--criterios-de-correcci\xf3n",children:[]}],u={toc:p};function d(e){var n=e.components,s=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pr\xe1ctica-4--219-"},"Pr\xe1ctica 4 ( 21/9 )"),(0,i.kt)("p",null,"Bibliograf\xeda: Louden 3.6"),(0,i.kt)("h2",{id:"orden-del-d\xeda"},"Orden del d\xeda"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Repaso te\xf3rico con un ejemplo"),(0,i.kt)("li",{parentName:"ol"},"Intervalo"),(0,i.kt)("li",{parentName:"ol"},"Explicaci\xf3n lab 3 + ejemplo")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"qu\xe9-es-un-parser"},"\xbfQu\xe9 es un parser?"),(0,i.kt)("p",null,"Un parser toma una cadena de tokens y los convierte en un \xe1rbol de sintaxis."),(0,i.kt)("h3",{id:"ejemplo"},"Ejemplo"),(0,i.kt)("p",null,"Fragmento de c\xf3digo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'float matchO(char *s) { /* find a zero */\n    if (!strncmp(s, "0.0", 3))\n    return 0.;\n}\n')),(0,i.kt)("p",null,"Fragmento de AST similar a lo que extrae el compilador de C : ",(0,i.kt)("a",{parentName:"p",href:"https://clang.llvm.org/doxygen/group__CINDEX.html#gaaccc432245b4cd9f2d470913f9ef0013"},"referencia")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"bg right contain",src:t(1720).Z})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"c\xf3mo-se-describe-una-sintaxis"},"\xbfC\xf3mo se describe una sintaxis?"),(0,i.kt)("p",null,"Por medio de una gram\xe1tica libre de contexto, que son m\xe1s expresivas que las expresiones regulares. Estas se pueden representar de las siguientes formas:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"BNF"),(0,i.kt)("li",{parentName:"ul"},"EBNF"),(0,i.kt)("li",{parentName:"ul"},"Diagramas de sintaxis")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"representaci\xf3n-bnf-ejemplo-de-louden-410"},"Representaci\xf3n BNF (ejemplo de Louden 4.10)"),(0,i.kt)("p",null,"En esta representaci\xf3n, la gram\xe1tica se representa como reglas de derivaci\xf3n:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<sentencia> ::= <sent-if>\n<sentencia> ::= otro\n<sent-if> ::= if ( <exp> ) <sentencia> <parte-else>\n<parte-else> ::= else <sentencia>\n<parte-else> ::= \n<exp> ::= 0\n<exp> ::= 1\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"representaci\xf3n-ebnf"},"Representaci\xf3n EBNF"),(0,i.kt)("p",null,"Se agrega la ",(0,i.kt)("inlineCode",{parentName:"p"},"|")," para indicar alternativas, ",(0,i.kt)("inlineCode",{parentName:"p"},"{ }")," para indicar repetici\xf3n 0 o m\xe1s veces, ",(0,i.kt)("inlineCode",{parentName:"p"},"[ ]")," para indicar que algo es opcional."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<sentencia> ::= <sent-if> | otro\n<sent-if> ::= if ( <exp> ) <sentencia> [else <sentencia>]\n<exp> ::= 0 | 1\n")),(0,i.kt)("p",null,"Ejemplo: LUA ",(0,i.kt)("a",{parentName:"p",href:"https://www.lua.org/manual/5.3/manual.html#9"},"https://www.lua.org/manual/5.3/manual.html#9")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"diagramas-de-sintaxis-louden-352"},"Diagramas de sintaxis (Louden 3.5.2)"),(0,i.kt)("p",null,"Representaci\xf3n gr\xe1fica de la EBNF. Su interpretaci\xf3n como diagrama de flujo permite extraer facilmente parsers descendientes recursivos."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"bg left contain",src:t(2508).Z})),(0,i.kt)("p",null,"Ejemplo: SQLite ",(0,i.kt)("a",{parentName:"p",href:"https://www.sqlite.org/syntaxdiagrams.html#select-stmt"},"https://www.sqlite.org/syntaxdiagrams.html#select-stmt")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"parsers-descendientes-recursivos"},"Parsers descendientes recursivos"),(0,i.kt)("p",null,"Los parsers descendientes recursivos son programas en los que cada funci\xf3n se corresponde de forma directa con una regla de la sintaxis. Verifican que una lista de tokens conforme cierta gram\xe1tica y pueden hacer \xfanicamente 2 operaciones sobre una cola de tokens: observar el siguiente token \xf3 consumirlo. ",(0,i.kt)("strong",{parentName:"p"},'No pueden "ver" m\xe1s all\xe1 del primer token.')),(0,i.kt)("p",null,"A continuaci\xf3n se expone un ejemplo de conversi\xf3n de un diagrama de sintaxis a un programa. Aqu\xed, "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"void head()")," retorna el tipo de token del siguiente token que no fue consumido"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"void consumir(int token_type)")," ",(0,i.kt)("strong",{parentName:"li"},"verifica")," que el tipo de token de ",(0,i.kt)("inlineCode",{parentName:"li"},"head()")," es ",(0,i.kt)("inlineCode",{parentName:"li"},"token_type"),". Si esta condici\xf3n se cumple, lo remueve de la cola. Si no se cumple, hay un ",(0,i.kt)("strong",{parentName:"li"},"error de sintaxis"),". Imprime un error y llama ",(0,i.kt)("inlineCode",{parentName:"li"},"exit(1)"),".")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sentencia"},"Sentencia"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"bg left contain",src:t(4036).Z})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void sentencia(){\n    if(head()==OTRO){\n        consumir(OTRO);\n    }else{\n        sent_if();\n    }\n}\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"exp"},"Exp"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"bg left contain",src:t(7339).Z})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void expr(){\n    if(head()==KW_ZERO){\n        consumir(KW_ZERO);\n    }else{\n        consumir(KW_ONE);\n    }\n}\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sent-if"},"sent-if"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"bg left contain",src:t(8646).Z})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void sentif(){\n    consumir(KW_IF);\n    consumir(LEFT_PAREN);\n    expr();\n    consumir(RIGHT_PAREN);\n    sentencia();\n    if(head()==KW_ELSE){\n        consumir(KW_ELSE);\n        sentencia();\n    }\n}\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"intervalo"},"Intervalo"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"termdown 10m")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"explicaci\xf3n-lab-3--criterios-de-correcci\xf3n"},"Explicaci\xf3n Lab 3 + criterios de correcci\xf3n"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Aceptar el assignment (link ahora o en el mail luego)"),(0,i.kt)("li",{parentName:"ol"},"Clonar el assignment YAYAYA"),(0,i.kt)("li",{parentName:"ol"},"Puntaje:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Pasan los test: ",(0,i.kt)("strong",{parentName:"li"},"6ptos")," (autom\xe1tico)"),(0,i.kt)("li",{parentName:"ul"},"El \xfaltimo commit es previo al martes 4/10 23:59: ",(0,i.kt)("strong",{parentName:"li"},"+2ptos")),(0,i.kt)("li",{parentName:"ul"},'Agregar 5 \xf3 m\xe1s tests que digan "extra" en la descripci\xf3n (debe ser en otro archivo): ',(0,i.kt)("strong",{parentName:"li"},"+2ptos"))))))}d.isMDXComponent=!0},1720:function(e,n,t){n.Z=t.p+"assets/images/img1.drawio-f368024dd4b18364e7c29590e2e3b61f.png"},2508:function(e,n,t){n.Z=t.p+"assets/images/img2.drawio-b17e0fc6414896691fe7570803be15cc.png"},7339:function(e,n,t){n.Z=t.p+"assets/images/img_exp.drawio-5f621f9c605d96a290fb800f5b3465a1.png"},4036:function(e,n,t){n.Z=t.p+"assets/images/img_sentencia.drawio-b194cf959cb00e930d54825304cfd309.png"},8646:function(e,n,t){n.Z=t.p+"assets/images/img_sentif.drawio-67c9c84226c1f56ed4a15fe4500f3d97.png"}}]);