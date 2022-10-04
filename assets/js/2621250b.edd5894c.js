"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7770],{3905:function(e,a,n){n.d(a,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=r.createContext({}),s=function(e){var a=r.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},u=function(e){var a=s(e.components);return r.createElement(c.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=t,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:a},u),{},{components:n})):r.createElement(f,o({ref:a},u))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2013:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),t=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"JFlex",sidebar_position:6},c=void 0,s={unversionedId:"labs/Laboratorio 1/jflex",id:"version-2021_2/labs/Laboratorio 1/jflex",isDocsHomePage:!1,title:"JFlex",description:'Los ejercicios anteriores te guiaron por el desarrollo de lexers "a mano". Existen programas que son capaces de convertir automaticamente la descripci\xf3n de un lenguaje de programaci\xf3n en un lexer. Es decir, a partir de un conjunto ordenado de expresiones regulares ordenado como descripto anteriormente, generan un lexer escrito en alg\xfan lenguaje de programaci\xf3n.',source:"@site/versioned_docs/version-2021_2/labs/Laboratorio 1/jflex.md",sourceDirName:"labs/Laboratorio 1",slug:"/labs/Laboratorio 1/jflex",permalink:"/docs/2021_2/labs/Laboratorio 1/jflex",editUrl:"https://github.com/compiladores/compiladores.github.io/edit/master/docs/versioned_docs/version-2021_2/labs/Laboratorio 1/jflex.md",tags:[],version:"2021_2",sidebarPosition:6,frontMatter:{title:"JFlex",sidebar_position:6},sidebar:"version-2021_2/tutorialSidebar",previous:{title:"Parte 4 (1 horas)",permalink:"/docs/2021_2/labs/Laboratorio 1/parte4"},next:{title:"Parte 5 (0.5 horas)",permalink:"/docs/2021_2/labs/Laboratorio 1/parte5"}},u=[{value:"Estructura de un archivo <code>.jflex</code>",id:"estructura-de-un-archivo-jflex",children:[]},{value:"Interfaz de la clase generada",id:"interfaz-de-la-clase-generada",children:[]}],p={toc:u};function d(e){var a=e.components,n=(0,t.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Los ejercicios anteriores te guiaron por el desarrollo de lexers "a mano". Existen programas que son capaces de convertir automaticamente la descripci\xf3n de un lenguaje de programaci\xf3n en un lexer. Es decir, a partir de un conjunto ordenado de expresiones regulares ordenado como descripto anteriormente, generan un lexer escrito en alg\xfan lenguaje de programaci\xf3n.'),(0,i.kt)("p",null,"En el provisto se integra JFlex como plugin de maven, y con algunas configuraciones extras en ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," se hizo que cada vez que el desarrollador guarda un archivo terminado en ",(0,i.kt)("inlineCode",{parentName:"p"},".jflex"),", se genere el archivo correspondiente en la carpeta ",(0,i.kt)("inlineCode",{parentName:"p"},"lab1/target/generated-sources/jflex"),' (siempre que se use un IDE integrado con maven). La forma "manual" de realizar la integraci\xf3n es corriendo el generador de lexers como un programa aparte en la l\xednea de comandos, que simplemente recibe un archivo ',(0,i.kt)("inlineCode",{parentName:"p"},".flex")," y emite un archivo ",(0,i.kt)("inlineCode",{parentName:"p"},".java"),". La integraci\xf3n realizada en maven incluye este paso intermedio en la compilaci\xf3n."),(0,i.kt)("h2",{id:"estructura-de-un-archivo-jflex"},"Estructura de un archivo ",(0,i.kt)("inlineCode",{parentName:"h2"},".jflex")),(0,i.kt)("p",null,"La estructura de un archivo ",(0,i.kt)("inlineCode",{parentName:"p"},".jflex")," est\xe1 descripta en ",(0,i.kt)("a",{parentName:"p",href:"https://www.jflex.de/manual.html#Example"},"esta secci\xf3n")," de su manual oficial. Aqu\xed se incluye un brev\xedsimo resumen. "),(0,i.kt)("p",null,"El archivo tiene 3 secciones separadas por los caracteres ",(0,i.kt)("inlineCode",{parentName:"p"},"%%"),". A continuaci\xf3n se explica cada secci\xf3n:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<usercode>\n%%\n<opciones y declaraciones>\n%%\n<reglas l\xe9xicas>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"usercode"),": c\xf3digo java que va arriba de la clase generada. En este laboratorio unicamente se utiliza esta secci\xf3n para incluir la declaraci\xf3n ",(0,i.kt)("inlineCode",{parentName:"li"},"package"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"opciones y declaraciones"),": Aqu\xed se permite declarar expresiones regulares que se pueden usar como parte de otras expresiones regulares, y se pueden incluir diversas opciones precedidas del signo ",(0,i.kt)("inlineCode",{parentName:"li"},"%"),". En este laboratorio solamente utilizaremos las siguientes opciones:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"%public"),": hace que la clase sea p\xfablica en vez de tener visibilidad de paquete"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'%class "classname"'),": especifica el nombre de la clase generada"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'%type "classname"'),": especifica el valor que debe retornar el m\xe9todo ",(0,i.kt)("inlineCode",{parentName:"li"},"yylex"),", que es el retornado por el bloque inclu\xeddo en la secci\xf3n de reglas l\xe9xicas"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"%yylexthrow"),": Especifica qu\xe9 clases de excepciones incluir en la declaraci\xf3n ",(0,i.kt)("inlineCode",{parentName:"li"},"throws")," del m\xe9todo ",(0,i.kt)("inlineCode",{parentName:"li"},"yylex"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"%state"),": se explica m\xe1s adelante"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"reglas l\xe9xicas"),": tienen 2 formas:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expr { action }"),": Si se encuentra una ocurrencia de la expresi\xf3n regular ",(0,i.kt)("inlineCode",{parentName:"li"},"expr"),", se ejecuta ",(0,i.kt)("inlineCode",{parentName:"li"},"action"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<STATE> expr { action }"),": Se explica m\xe1s adelante")))),(0,i.kt)("p",null,"JFlex permite crear lexers que ejecutan c\xf3digo arbitrario en cada bloque ",(0,i.kt)("inlineCode",{parentName:"p"},"{ action }"),", introducir variables de instancia, etc. En este laboratorio vamos a restringirnos a lexers sencillos, que unicamente scanean un archivo y devuelven tokens."),(0,i.kt)("h2",{id:"interfaz-de-la-clase-generada"},"Interfaz de la clase generada"),(0,i.kt)("p",null,"Se detalla una parte de la interfaz de la clase generada (la parte que usaremos en el laboratorio)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"constructor: recibe un ",(0,i.kt)("inlineCode",{parentName:"li"},"java.io.Reader")," como par\xe1metro"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yylex()"),": Similar a ",(0,i.kt)("inlineCode",{parentName:"li"},"extractToken"),", avanza por el ",(0,i.kt)("inlineCode",{parentName:"li"},"Reader")," ejecutando un aut\xf3mata y ejecuta el c\xf3digo correspondiente a la primera expresi\xf3n regular que ",(0,i.kt)("em",{parentName:"li"},"matchea"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yybegin(STATE)"),": explicado m\xe1s adelante."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yytext()"),": devuelve el \xfaltimo ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," matcheado por ",(0,i.kt)("inlineCode",{parentName:"li"},"yylex()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".yyatEOF()"),": indica si termin\xf3 de recorrerse el ",(0,i.kt)("inlineCode",{parentName:"li"},"reader"),".")))}d.isMDXComponent=!0}}]);