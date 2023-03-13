"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6766],{3905:function(e,a,n){n.d(a,{Zo:function(){return u},kt:function(){return m}});var t=n(7294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=t.createContext({}),c=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},u=function(e){var a=c(e.components);return t.createElement(o.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return n?t.createElement(b,s(s({ref:a},u),{},{components:n})):t.createElement(b,s({ref:a},u))}));function m(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=n.length,s=new Array(l);s[0]=p;var r={};for(var o in a)hasOwnProperty.call(a,o)&&(r[o]=a[o]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var c=2;c<l;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},332:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return r},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var t=n(7462),i=n(3366),l=(n(7294),n(3905)),s=["components"],r={title:"Analisis Semantico",sidebar_position:1},o=void 0,c={unversionedId:"teoricas/analisis-semantico/analisis-semantico-1",id:"teoricas/analisis-semantico/analisis-semantico-1",isDocsHomePage:!1,title:"Analisis Semantico",description:"An\xe1lisis Sem\xe1ntico",source:"@site/docs/teoricas/05-analisis-semantico/01-analisis-semantico-1.md",sourceDirName:"teoricas/05-analisis-semantico",slug:"/teoricas/analisis-semantico/analisis-semantico-1",permalink:"/teo/docs/teoricas/analisis-semantico/analisis-semantico-1",editUrl:"https://github.com/compiladores/compiladores.github.io/edit/master/docs/docs/teoricas/05-analisis-semantico/01-analisis-semantico-1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Analisis Semantico",sidebar_position:1},sidebar:"teoricaSidebar",previous:{title:"Generadores de Analizadores Sint\xe1cticos",permalink:"/teo/docs/teoricas/analisis-sintactico/generadores"},next:{title:"Analisis Semantico",permalink:"/teo/docs/teoricas/analisis-semantico/analisis-semantico-Tipos-de-datos"}},u=[{value:"An\xe1lisis Sem\xe1ntico",id:"an\xe1lisis-sem\xe1ntico",children:[{value:"La Tabla de S\xedmbolos",id:"la-tabla-de-s\xedmbolos",children:[]},{value:"Reglas de \xc1mbito y Estructura de Bloques",id:"reglas-de-\xe1mbito-y-estructura-de-bloques",children:[]},{value:"Gram\xe1ticas con Atributos",id:"gram\xe1ticas-con-atributos",children:[]}]}],d={toc:u};function p(e){var a=e.components,r=(0,i.Z)(e,s);return(0,l.kt)("wrapper",(0,t.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"an\xe1lisis-sem\xe1ntico"},"An\xe1lisis Sem\xe1ntico"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"El ",(0,l.kt)("strong",{parentName:"p"},"an\xe1lisis sem\xe1ntico")," es la fase en la cual el compilador calcula la informaci\xf3n adicional necesaria para la compilaci\xf3n una vez que se conoce la estructura sint\xe1ctica de un programa.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Esta fase se conoce como ",(0,l.kt)("strong",{parentName:"p"},"an\xe1lisis sem\xe1ntico")," debido a que involucra el calculo de informaci\xf3n que sobrepasa las capacidades de las gram\xe1ticas libres de contexto y los algoritmos de an\xe1lisis sint\xe1ctico est\xe1ndar, por lo que no se considera sintaxis.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"La informaci\xf3n calculada tambi\xe9n esta estrechamente relacionada con el significado final, o sem\xe1ntica, del programa que se traduce.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Como el an\xe1lisis que realiza el compilador es est\xe1tico por definici\xf3n, el an\xe1lisis sem\xe1ntico tambi\xe9n se conoce como ",(0,l.kt)("strong",{parentName:"p"},"an\xe1lisis sem\xe1ntico est\xe1tico"),"."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"En un lenguaje t\xedpico est\xe1ticamente tipado como C, en an\xe1lisis sem\xe1ntico involucra la construcci\xf3n de una tabla de s\xedmbolos para mantenerse al tanto de los significados de los nombres establecidos en las declaraciones, inferir los tipos y verificarlos en las expresiones y sentencias con el fin de determinar la exactitud dentro de las reglas de tipos del lenguaje.")))),(0,l.kt)("p",null,"El an\xe1lisis sem\xe1ntico se divide en dos categor\xedas:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"La primera es el an\xe1lisis de un programa que requiere las reglas del lenguaje de programaci\xf3n para establecer su exactitud y garantizar una ejecuci\xf3n adecuada. La complejidad de este tipo de an\xe1lisis varia seg\xfan lo requerido por la definici\xf3n del lenguaje. En lenguajes orientados en forma din\xe1mica tales como LISP y SMALLTALK pueden no haber an\xe1lisis sem\xe1ntico est\xe1tico mientras que en lenguajes como ADA existen fuertes requerimientos que debe cumplir un programa para ser ejecutable.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"La segunda categor\xeda de an\xe1lisis sem\xe1ntico es el an\xe1lisis realizado por un compilador para mejorar la eficiencia de ejecuci\xf3n del programa traducido. Esta clase de an\xe1lisis, por lo regular, se incluye en an\xe1lisis de optimizaci\xf3n o t\xe9cnicas de mejoramiento de c\xf3digo. El an\xe1lisis sem\xe1ntico a diferencia del an\xe1lisis l\xe9xico y del an\xe1lisis sint\xe1ctico no posee generadores autom\xe1ticos de analizadores sem\xe1nticos, como el caso de lex o yacc.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"En el an\xe1lisis sint\xe1ctico existen tres componentes importantes"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"La tabla de s\xedmbolos")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"La verificaci\xf3n y control de tipos")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Las gram\xe1ticas con atributos"))))),(0,l.kt)("p",null,"Estas \xfaltimas son m\xe1s \xfatiles para los lenguajes que obedecen el principio de la ",(0,l.kt)("strong",{parentName:"p"},"sem\xe1ntica dirigida por sintaxis"),", la cual asegura que el contenido sem\xe1ntico de un programa se encuentra estrechamente relacionado con su sintaxis. Todos los lenguajes modernos tienen esta propiedad."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Normalmente quien escribe un compilador casi siempre debe construir una gram\xe1tica con atributos a mano a partir del manual del lenguaje, ya que rara vez la da el dise\xf1ador del lenguaje.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Los algoritmos para la implementaci\xf3n del an\xe1lisis sem\xe1ntico tampoco son tan claramente expresables como los algoritmos de an\xe1lisis sint\xe1ctico.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Existe un problema adicional causado por la temporalidad del an\xe1lisis durante el proceso de compilaci\xf3n. Si el an\xe1lisis sem\xe1ntico se puede suspender hasta que todo el an\xe1lisis sint\xe1ctico este completo, entonces la tarea de implementar el an\xe1lisis sem\xe1ntico se vuelve considerablemente m\xe1s f\xe1cil. Y consiste en esencia en la especificaci\xf3n de orden para el recorrido del \xe1rbol sint\xe1ctico, junto con los c\xe1lculos a realizar cada vez que se encuentra un nodo en el recorrido. Sin embargo, esto implica que el compilador debe realizar varias pasadas de an\xe1lisis. Si por otra parte el compilador necesita realizar todas sus operaciones (incluyendo la generaci\xf3n de c\xf3digo en un solo paso), entonces la implementaci\xf3n del an\xe1lisis sem\xe1ntico se convierte en mucho mas que un proceso a prop\xf3sito para encontrar un orden correcto y un m\xe9todo para calcula la informaci\xf3n sem\xe1ntica. En la actualidad los escritores de compiladores utilizan varias pasadas para simplificar los procesos de an\xe1lisis sem\xe1ntico y generaci\xf3n de c\xf3digo."))),(0,l.kt)("h3",{id:"la-tabla-de-s\xedmbolos"},"La Tabla de S\xedmbolos"),(0,l.kt)("p",null,"La tabla de s\xedmbolos es el principal atributo heredado en un compilador, y, despu\xe9s del \xe1rbol sint\xe1ctico, tambi\xe9n forma la principal estructura de datos. Si bien la tabla de s\xedmbolos esta estrechamente relacionada con el an\xe1lisis sint\xe1ctico y el an\xe1lisis l\xe9xico, los cuales pueden consultarla para resolver ambig\xfcedades."),(0,l.kt)("p",null,"Pero sin embargo, en ciertos lenguajes como Ada y PASCAL, es posible e incluso razonable posponer las operaciones de la tabla de s\xedmbolos hasta despu\xe9s de realizar en an\xe1lisis sint\xe1ctico completo, es decir cuando se sabe que el programa que se esta traduciendo es sint\xe1cticamente correcto."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Principales operaciones en la tabla de s\xedmbolos:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Inserci\xf3n: Se utiliza para almacenar la informaci\xf3n proporcionada por las declaraciones de nombre cuando se procesan estas declaraciones.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-C"},"insert(name, record);\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"B\xfasqueda: Es necesaria para recuperar la informaci\xf3n asociada con un nombre cuando \xe9ste se utiliza en el c\xf3digo.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-C"},"look_up(name);\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Eliminaci\xf3n: Es necesaria para eliminar la informaci\xf3n proporcionada por una declaraci\xf3n cuando ya no se aplica.")),(0,l.kt)("p",null,"La propiedades de estas operaciones son dictadas por las reglas del lenguaje de programaci\xf3n que se esta traduciendo. En particular la informaci\xf3n que se necesita almacenar en la tabla de s\xedmbolos est\xe1 en funci\xf3n de la estructura y prop\xf3sito de las declaraciones."),(0,l.kt)("p",null,"La informaci\xf3n que incluye puede ser:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Tipo de Dato"),(0,l.kt)("li",{parentName:"ul"},"Lexema"),(0,l.kt)("li",{parentName:"ul"},"Posici\xf3n"),(0,l.kt)("li",{parentName:"ul"},"\xc1mbito (scope): informaci\xf3n de la aplicabilidad."),(0,l.kt)("li",{parentName:"ul"},"Informaci\xf3n acerca de la ubicaci\xf3n posible en la memoria.")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Estructura de la Tabla de S\xedmbolos"),(0,l.kt)("p",{parentName:"li"},"La Tabla de S\xedmbolos en un compilador es una estructura de datos llamada ",(0,l.kt)("strong",{parentName:"p"},"diccionario o tabla de hash"),", obviamente por sus bondades en los tiempos de acceso a los datos. Las operaciones sobre la tabla de S\xedmbolos deben ser lo m\xe1s eficientes posible."),(0,l.kt)("p",{parentName:"li"},"Normalmente se utiliza un ",(0,l.kt)("strong",{parentName:"p"},"diccionario con resoluci\xf3n de colisiones de tipo abierto"),":"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"img",src:n(6774).Z})),(0,l.kt)("p",{parentName:"li"},"Obviamente en este punto se debe tener en cuenta todo lo que se conoce sobre la implementaci\xf3n de diccionarios o tablas de hash: correcta elecci\xf3n de la funci\xf3n de hash, la longitud inicial del diccionario, etc. Todo ese an\xe1lisis debiera realizarse con los conocimientos sobre la estructura de dato en cuesti\xf3n.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Declaraciones"),(0,l.kt)("p",{parentName:"li"},"El comportamiento de la tabla de s\xedmbolos depende mucho de las propiedades de las declaraciones del lenguaje que se est\xe1 traduciendo. \xbfQue se inserta?"),(0,l.kt)("p",{parentName:"li"},"Existen cuatro clases b\xe1sicas de declaraciones:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Declaraciones de Constantes"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-C"},"const int SIZE = 199;\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Declaraciones de Tipos"))),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-C"},"struct Entry\n  {\n      char * name;\n      int count;\n      struct Entry * next;\n  }\n  typedef struct Entry * Entry_ptr;\n\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Declaraciones de Variables")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-C"},"int x;\nint vector[10];\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Declaraciones de Funciones")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-C"},"int funcion (int x, int y);\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Un Ejemplo"),(0,l.kt)("p",{parentName:"li"},"A continuaci\xf3n se muestra una posible implementaci\xf3n para crear una entrada en una tabla de s\xedmbolos en C:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-C"},"typedef enum { SYMBOL_LOCAL, SYMBOL_PARAM, SYMBOL_GLOBAL, SYMBOL_FUNCTION, SYMBOL_CONST} symbol_t;\n\nstruct symbol\n{ \n  symbol_t kind;        \n  struct type *type;\n  char *name;\n  int  which;\n};\n\nstruct symbol * symbol_create(symbol_t kind, struct type * type, char * name)\n{\n    struct symbol *s = malloc(sizeof(*s));\n    s->kind=kind;\n    s->type=type;\n    s->name=name;\n    return s;\n{\n\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"kind: indica si un s\xedmbolo es una variable local, funci\xf3n, variable global, etc."),(0,l.kt)("li",{parentName:"ul"},"type: apunta a una estructura de dato que indica el tipo de la variable."),(0,l.kt)("li",{parentName:"ul"},"name: el nombre de la variable."),(0,l.kt)("li",{parentName:"ul"},"which: la posici\xf3n ordinal de la variable local o del par\xe1metro en una funci\xf3n.")))),(0,l.kt)("h3",{id:"reglas-de-\xe1mbito-y-estructura-de-bloques"},"Reglas de \xc1mbito y Estructura de Bloques"),(0,l.kt)("p",null,"Las reglas de \xe1mbito en los lenguajes de programaci\xf3n var\xedan mucho, pero existen varias reglas que son comunes a muchos lenguajes."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Declaraci\xf3n antes de uso"),": Es una regla com\xfan utilizada en C y en PASCAL que requiere que se declare un nombre en el texto del programa antes que cualquier referencia al nombre. Esta declaraci\xf3n antes del uso permite construir la tabla de s\xedmbolos a medida que el an\xe1lisis sint\xe1ctico contin\xfaa y que las b\xfasquedas se realicen tan pronto como se encuentra una referencia de nombre en el c\xf3digo; si la b\xfasqueda falla es que ha ocurrido una violaci\xf3n de la declaraci\xf3n antes del uso. Este tipo de regla fomenta compilaciones de una sola fase"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estructura de bloques"),": Es una propiedad com\xfan de los lenguajes modernos. Un bloque en un lenguaje de programaci\xf3n es cualquier construcci\xf3n que pueda contener declaraciones. En C los bloques son unidades de compilaci\xf3n, es decir las declaraciones de procedimientos y funciones y las sentencias compuestas (encerradas entre llaves). En un lenguaje orientado a objetos la declaraci\xf3n de clases tambi\xe9n son bloques. Un lenguaje esta estructurado en bloques si permite la anidaci\xf3n de bloques dentro de otros bloques, y si el \xe1mbito de declaraciones en un bloque esta limitado a ese y otros bloques contenidos en el mismo, sujeto a la ",(0,l.kt)("strong",{parentName:"li"},"regla de anidaci\xf3n mas pr\xf3xima"),": dadas varias declaraciones diferentes para el mismo nombre, la declaraci\xf3n que se aplica a una referencia es la \xfanica en ese bloque anidado mas pr\xf3ximo a la referencia.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"En muchos lenguajes, como PASCAL y Ada, los procedimientos y funciones tambi\xe9n pueden estar anidados (esto presenta un factor de complicaci\xf3n en el ambiente de tiempo de ejecuci\xf3n para tales lenguajes).")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-C"},"int i,j;\n\nint f(int size)\n   { char i, temp;\n     ...\n     { double j;\n       ...\n     } \n     ...\n     { char * j;\n       ...\n     }\n   } \n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Para implementar \xe1mbitos anidados, la operaci\xf3n de inserci\xf3n de la tabla de s\xedmbolos no debe sobrescribir declaraciones anteriores, sino que las debe ocultar temporalmente, de manera que la operaci\xf3n de b\xfasqueda solo encuentre la declaraci\xf3n para un nombre que se haya insertado m\xe1s recientemente.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"La operaci\xf3n de eliminaci\xf3n no debe eliminar todas las declaraciones correspondientes a un nombre, sino s\xf3lo la m\xe1s reciente, revelando cualquier declaraci\xf3n previa.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Existen varias alternativas posibles para la implementaci\xf3n de \xe1mbitos anidados. Una soluci\xf3n es construir una nueva tabla de s\xedmbolos para cada \xe1mbito y vincular las tablas desde \xe1mbitos internos a \xe1mbitos externos."))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(5834).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"De manera adicional o alternativa, pueden necesitarse asignar un nivel de anidaci\xf3n o profundidad de anidaci\xf3n a cada \xe1mbito y registrar en cada entrada de la tabla de s\xedmbolos el nivel de anidaci\xf3n de cada nombre.")),(0,l.kt)("h3",{id:"gram\xe1ticas-con-atributos"},"Gram\xe1ticas con Atributos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Es un formalismo para expresar sem\xe1ntica. ")),(0,l.kt)("p",null,"  Dada una gram\xe1tica libre de contexto se le agregan:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Atributos: Estos atributos se agregan principalmente a los ",(0,l.kt)("strong",{parentName:"p"},"nodos no terminales"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Funciones o Acciones Sem\xe1nticas: B ","\u2192"," Ab {accion sem\xe1ntica}")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Idea: Para cada una de las producciones de los nodos no terminales"))),(0,l.kt)("p",null,"\u200b      P,A,B ","\u21d2"," B.atributo1                     Son arbitrarios "),(0,l.kt)("p",null,"\u200b                    B.atributo2 "),(0,l.kt)("p",null,"\u200b                    B.atributo3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Las gram\xe1ticas con atributos trabajan con el \xe1rbol de parsing."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Una vez que se construye el \xe1rbol de parsing.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Se puede establecer un orden de dependencia en relaci\xf3n a los atributos")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Existen tres clases de atributos:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Sintetizados"),": Son los atributos que en general suben desde el \xe1rbol, es decir, vienen de las hojas y van hacia la ra\xedz."),(0,l.kt)("p",{parentName:"li"},"E ","\u2192"," T               E.x=f(T,y)"),(0,l.kt)("p",{parentName:"li"},"A ","\u2192"," B              A.x=f(B,y)"),(0,l.kt)("p",{parentName:"li"},"y es un atributo de T x es un atributo de E")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Heredados"),": Es justo el caso inverso de esta situaci\xf3n."),(0,l.kt)("p",{parentName:"li"},"A ","\u2192"," B            B.y=f(A,x)"),(0,l.kt)("p",{parentName:"li"},"E ","\u2192"," T             T.y=f(E,x)"),(0,l.kt)("p",{parentName:"li"},"Los atributos de T est\xe1n utilizando cosas que vienen de E"))),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Inherentes"),": Son atributos fijos A ","\u2192",' 0|1|2       A.x=0              "HARCODEADOS"')))),(0,l.kt)("p",{parentName:"li"},"Son los generadores, van a estar generando los valores de los atributos en alg\xfan punto del \xe1rbol; generan las semillas de los valores."))),(0,l.kt)("p",null,"Los atributos y las acciones sem\xe1nticas establecen una relaci\xf3n de flujo de informaci\xf3n, en cuanto a que para ejecutar una acci\xf3n sem\xe1ntica particular en alg\xfan momento particular, se necesitan atributos, y estos atributos provienen de diferentes lugares, ramas que los sinteticen o definiciones de las ra\xedces heredadas."),(0,l.kt)("p",null,"Sobre el \xe1rbol de parsing se sobreimprime un \xe1rbol de dependencia dado por c\xf3mo se necesitan los atributos. Lo que hace falta hacer es c\xf3mo sincronizar ese doble esquema"),(0,l.kt)("p",null,"Por un lado el \xe1rbol se va a parsear en el ",(0,l.kt)("strong",{parentName:"p"},"orden")," en que se van a ir determinando las derivaciones en la pila, eso depende de c\xf3mo es la gram\xe1tica, el tipo de parser, etc."),(0,l.kt)("p",null,"Ese orden es arbitrario y viene dado por las dependencias que se establecen a trav\xe9s de los atributos (si son sintetizados o heredados)."),(0,l.kt)("p",null,"Una vez que se tiene un \xe1rbol sint\xe1ctico de c\xf3mo un parser reconoce una palabra para un lenguaje, se hace un grafo que se sobrescribe por arriba del \xe1rbol de parsing y que determina una relaci\xf3n de dependencia, es decir, que hay que hacer primero, despu\xe9s, y as\xed","\u2026"," dependiendo de las reglas sem\xe1nticas y lo que \xe9stas hacen."),(0,l.kt)("p",null,"Ejemplo:"),(0,l.kt)("p",null,"A ","\u2192"," AB|B"),(0,l.kt)("p",null,"B ","\u2192"," 0|1"),(0,l.kt)("p",null,"Reglas sem\xe1nticas que permitan obtener el equivalente decimal del numero binario dado por el lenguaje generado por la gram\xe1tica."),(0,l.kt)("p",null,"Sea S=101"),(0,l.kt)("p",null,"Usar LL(1)"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Se construye el \xe1rbol de parsing utilizando el m\xe9todo LL(1)")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(7609).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(7960).Z})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Se listan todas las producciones individual mente y se le asignan acciones y atributos:")),(0,l.kt)("p",null,"A",(0,l.kt)("sub",null,"1")," ","\u2192"," A",(0,l.kt)("sub",null,"2"),"B                  {A",(0,l.kt)("sub",null,"1"),".val=A",(0,l.kt)("sub",null,"2"),"val*2 + B.val }"),(0,l.kt)("p",null,"$$      ",(0,l.kt)("span",{parentName:"p",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex-error",title:"ParseError: KaTeX parse error: Expected '}', got 'EOF' at end of input: 1 {",style:{color:"#cc0000"}},"1 {")),"$=$1}"),(0,l.kt)("p",null,"A ","\u2192"," B                        {A.val=B.val } (Se esta sintetizando el valor hacia arriba)"),(0,l.kt)("p",null,"B ","\u2192"," 0                        {B.val=0}"),(0,l.kt)("p",null,"B ","\u2192"," 1                         {B.val=1}"),(0,l.kt)("p",null,"Atributos: "),(0,l.kt)("p",null,"A.val "),(0,l.kt)("p",null,"B.val"),(0,l.kt)("h3",{id:""}))}p.isMDXComponent=!0},7609:function(e,a,n){a.Z=n.p+"assets/images/gramatica-atributos-ejemplo-298ff7acc7008f880e8eef49ee48fdb5.png"},7960:function(e,a,n){a.Z=n.p+"assets/images/gramatica-atributos-ejemplo1-2c10b2dbd09683673ed10747253e6fb7.png"},6774:function(e,a,n){a.Z=n.p+"assets/images/tabla-de-simbolos-a386dace5c4457cd2aabdcc193cc50d4.png"},5834:function(e,a,n){a.Z=n.p+"assets/images/tabla-simbolos-varios-ambitos-53ea422f9e087026c84c077e0643a1de.png"}}]);