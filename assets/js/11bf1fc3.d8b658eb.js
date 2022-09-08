"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9578],{3905:function(e,a,n){n.d(a,{Zo:function(){return p},kt:function(){return u}});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),m=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=m(e.components);return t.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,k=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return n?t.createElement(k,i(i({ref:a},p),{},{components:n})):t.createElement(k,i({ref:a},p))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6361:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return p},default:function(){return d}});var t=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Introducci\xf3n a Bison",sidebar_position:8},s="Introducci\xf3n a Bison",m={unversionedId:"labs/Laboratorio 2/intro-bison",id:"version-2021_2/labs/Laboratorio 2/intro-bison",isDocsHomePage:!1,title:"Introducci\xf3n a Bison",description:"Fuente: Manual oficial de bison",source:"@site/versioned_docs/version-2021_2/labs/Laboratorio 2/intro-bison.md",sourceDirName:"labs/Laboratorio 2",slug:"/labs/Laboratorio 2/intro-bison",permalink:"/docs/2021_2/labs/Laboratorio 2/intro-bison",editUrl:"https://github.com/compiladores/compiladores.github.io/edit/master/docs/versioned_docs/version-2021_2/labs/Laboratorio 2/intro-bison.md",tags:[],version:"2021_2",sidebarPosition:8,frontMatter:{title:"Introducci\xf3n a Bison",sidebar_position:8},sidebar:"version-2021_2/tutorialSidebar",previous:{title:"Parte 4 (2 horas)",permalink:"/docs/2021_2/labs/Laboratorio 2/parte4"},next:{title:"Parte 5 (1 horas)",permalink:"/docs/2021_2/labs/Laboratorio 2/parte5"}},p=[{value:"Estructura (fuente)",id:"estructura-fuente",children:[]},{value:"Declaraciones bison (fuente)",id:"declaraciones-bison-fuente",children:[]},{value:"Reglas de derivaci\xf3n (fuente)",id:"reglas-de-derivaci\xf3n-fuente",children:[]},{value:"Integraci\xf3n del parser generado por bison",id:"integraci\xf3n-del-parser-generado-por-bison",children:[{value:"Integraci\xf3n con maven",id:"integraci\xf3n-con-maven",children:[]},{value:"Integraci\xf3n con el resto del c\xf3digo",id:"integraci\xf3n-con-el-resto-del-c\xf3digo",children:[]}]}],c={toc:p};function d(e){var a=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introducci\xf3n-a-bison"},"Introducci\xf3n a Bison"),(0,o.kt)("p",null,"Fuente: ",(0,o.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/bison/manual/html_node"},"Manual oficial de bison")),(0,o.kt)("p",null,"Bison es una versi\xf3n m\xe1s de nueva de yacc, que es retrocompatible y permite exportar parsers en java. Bison trabaja con archivos ",(0,o.kt)("inlineCode",{parentName:"p"},".y")," que son casi id\xe9nticos a los de yacc."),(0,o.kt)("h2",{id:"estructura-fuente"},"Estructura (",(0,o.kt)("a",{parentName:"h2",href:"https://www.gnu.org/software/bison/manual/html_node/Grammar-Outline.html"},"fuente"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"%{\n  Prologue\n%}\n\nBison declarations\n\n%%\nGrammar rules\n%%\n\nEpilogue\n")),(0,o.kt)("p",null,"El pr\xf3logo y el ep\xedlogo permiten introducir c\xf3digo java antes o despu\xe9s del parser generado por bison. No usaremos estas secciones. Las otras se describen brevemente a continuaci\xf3n."),(0,o.kt)("h2",{id:"declaraciones-bison-fuente"},"Declaraciones bison (",(0,o.kt)("a",{parentName:"h2",href:"https://www.gnu.org/software/bison/manual/html_node/Java-Declarations-Summary.html"},"fuente"),")"),(0,o.kt)("p",null,"Son configuraciones generales sobre el parser que Bison generar\xe1."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'%language "Java"')," el parser emitido es c\xf3digo java"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"%define api.parser.class {Calc}")," Define el nombre de la clase parser generada (en este caso ",(0,o.kt)("inlineCode",{parentName:"li"},"Calc"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"%define api.parser.public")," Hace que la visibilidad de la clase del parser sea p\xfablica"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"%define package {ar.uba.fi.compiladores.parte5}")," Package de la clase generada."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"%define api.value.type {Number}")," Define el tipo de los ",(0,o.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/bison/manual/html_node/Semantic-Values.html"},(0,o.kt)("em",{parentName:"a"},"valores sem\xe1nticos")),". Un valor sem\xe1ntico es el resultado de la aplicaci\xf3n del token. En el caso de la calculadora, este tipo es ",(0,o.kt)("inlineCode",{parentName:"li"},"Number"),". En el caso del int\xe9rprete de lisp construido en la parte 4, estos son valores de tipo ",(0,o.kt)("inlineCode",{parentName:"li"},"Object"),". Un parser que no procese el programa a medida que lo analiza podr\xeda devolver una clase que represente un nodo del \xe1brol de sintaxis abstracto. Un compilador podr\xeda devolver una porci\xf3n del programa compilado."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"%token L_PAREN"),": define un s\xedmbolo terminal (en este caso, ",(0,o.kt)("inlineCode",{parentName:"li"},"L_PAREN"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"%code { <c\xf3digo java> }"),": codigo java inyectado en la clase generada, lo cual permite agregar propiedades y m\xe9todos."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"%code imports { <imports java> }"),": Permite importar clases para usarlos en el c\xf3digo de la clase generada"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"%code init { <c\xf3digo java> }"),": C\xf3digo que se ejecuta en el constructor del parser generado.")),(0,o.kt)("h2",{id:"reglas-de-derivaci\xf3n-fuente"},"Reglas de derivaci\xf3n (",(0,o.kt)("a",{parentName:"h2",href:"https://www.gnu.org/software/bison/manual/html_node/Rules-Syntax.html"},"fuente"),")"),(0,o.kt)("p",null,"La regla"),(0,o.kt)("div",{className:"math math-display"},(0,o.kt)("span",{parentName:"div",className:"katex-display"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"f"),(0,o.kt)("mi",{parentName:"mrow"},"a"),(0,o.kt)("mi",{parentName:"mrow"},"c"),(0,o.kt)("mi",{parentName:"mrow"},"t"),(0,o.kt)("mi",{parentName:"mrow"},"o"),(0,o.kt)("mi",{parentName:"mrow"},"r"),(0,o.kt)("mo",{parentName:"mrow"},"\u2192"),(0,o.kt)("mtext",{parentName:"mrow"},"\xa0(\xa0"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"{"),(0,o.kt)("mi",{parentName:"mrow"},"e"),(0,o.kt)("mi",{parentName:"mrow"},"x"),(0,o.kt)("mi",{parentName:"mrow"},"p"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"}"),(0,o.kt)("mtext",{parentName:"mrow"},"\xa0)\xa0"),(0,o.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,o.kt)("mtext",{parentName:"mrow"},"number")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"factor \\rightarrow \\text{ ( } \\{exp\\} \\text{ ) } | \\text{number}")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,o.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord text"},(0,o.kt)("span",{parentName:"span",className:"mord"},"\xa0(\xa0")),(0,o.kt)("span",{parentName:"span",className:"mopen"},"{"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,o.kt)("span",{parentName:"span",className:"mclose"},"}"),(0,o.kt)("span",{parentName:"span",className:"mord text"},(0,o.kt)("span",{parentName:"span",className:"mord"},"\xa0)\xa0")),(0,o.kt)("span",{parentName:"span",className:"mord"},"\u2223"),(0,o.kt)("span",{parentName:"span",className:"mord text"},(0,o.kt)("span",{parentName:"span",className:"mord"},"number"))))))),(0,o.kt)("p",null,"Se escribe como:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"factor: L_PAREN exp R_PAREN | NUMBER ;\n")),(0,o.kt)("p",null,"Para capturar la sintaxis, hay que escribir ",(0,o.kt)("em",{parentName:"p"},"acciones"),", que son c\xf3digo java entre corchetes, de la siguiente manera:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'factor: \n L_PAREN exp R_PAREN    { $$=$2; System.out.printLn("("+$2+")");}\n| NUMBER                { $$=$1; System.out.printLn("number!" + $1); }\n;\n')),(0,o.kt)("p",null,'Este c\xf3digo java es "especial". Se agregan las siguientes variables:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$$"),": valor sem\xe1ntico que devuelve esta regla"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$n")," donde ",(0,o.kt)("inlineCode",{parentName:"li"},"n")," es un  n\xfamero: devuelve el valor sem\xe1ntico del ",(0,o.kt)("inlineCode",{parentName:"li"},"n"),"-avo token producido por la regla.")),(0,o.kt)("h2",{id:"integraci\xf3n-del-parser-generado-por-bison"},"Integraci\xf3n del parser generado por bison"),(0,o.kt)("h3",{id:"integraci\xf3n-con-maven"},"Integraci\xf3n con maven"),(0,o.kt)("p",null,"En el ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")," del lab 2 se agreg\xf3 una etapa a la compilaci\xf3n que llama al comando ",(0,o.kt)("inlineCode",{parentName:"p"},"bison")," para cada uno de los archivos ",(0,o.kt)("inlineCode",{parentName:"p"},".y")," del proyecto, y almacena los parser java generados en ",(0,o.kt)("inlineCode",{parentName:"p"},"lab2/target/generated-sources/bison"),". "),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Cuando un archivo ",(0,o.kt)("inlineCode",{parentName:"p"},".y")," est\xe1 mal escrito, la generaci\xf3n falla silenciosamente. Es necesario correr la tarea maven ",(0,o.kt)("inlineCode",{parentName:"p"},"compile")," y verificar en los logs si el archivo se gener\xf3 mal."))),(0,o.kt)("p",null,"El comando ",(0,o.kt)("inlineCode",{parentName:"p"},"bison")," est\xe1 instalado en el ",(0,o.kt)("inlineCode",{parentName:"p"},"devcontainer"),". De no usar el ",(0,o.kt)("inlineCode",{parentName:"p"},"devcontainer"),", ser\xe1 necesario instalarlo."),(0,o.kt)("h3",{id:"integraci\xf3n-con-el-resto-del-c\xf3digo"},"Integraci\xf3n con el resto del c\xf3digo"),(0,o.kt)("p",null,"La clase parser generada recibe como par\xe1metro de su constructor un lexer. Este lexer debe implementar una interfaz que est\xe1 escrita dentro del parser. Es decir, si el parser se llama ",(0,o.kt)("inlineCode",{parentName:"p"},"Calc"),", la interfaz del lexer a implementar es ",(0,o.kt)("inlineCode",{parentName:"p"},"Calc.Lexer"),". M\xe9todos de la interfaz:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"yylex()"),": Devuelve el ",(0,o.kt)("em",{parentName:"li"},"tipo")," del siguiente token. Este tipo es un ",(0,o.kt)("inlineCode",{parentName:"li"},"int"),". La interfaz ",(0,o.kt)("inlineCode",{parentName:"li"},"Lexer")," define constantes est\xe1ticas ",(0,o.kt)("inlineCode",{parentName:"li"},"int"),", cada una de las cuales tiene el nombre de uno de los s\xedmbolos terminales, y cuyo valor es el ",(0,o.kt)("inlineCode",{parentName:"li"},"int")," correspondiente."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getLVal()"),": Devuelve el valor sem\xe1ntico del \xfaltimo token devuelto por ",(0,o.kt)("inlineCode",{parentName:"li"},"yylex()"),". Si el mismo no tiene valor sem\xe1ntico (como en el caso de ",(0,o.kt)("inlineCode",{parentName:"li"},"(")," \xf3 ",(0,o.kt)("inlineCode",{parentName:"li"},"+"),"), no se debe arrojar un error."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"yyerror(msg)"),": Emite un error.")))}d.isMDXComponent=!0}}]);