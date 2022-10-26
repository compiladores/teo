"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[924],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return d}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return t?n.createElement(k,i(i({ref:a},c),{},{components:t})):n.createElement(k,i({ref:a},c))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4386:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],l={title:"Parte 3 (2 horas)",sidebar_position:4},s=void 0,p={unversionedId:"labs/Laboratorio 1/parte3",id:"version-2021_2/labs/Laboratorio 1/parte3",isDocsHomePage:!1,title:"Parte 3 (2 horas)",description:"En esta parte y la siguiente vamos a implementar lexers para los 4 lenguajes planteados anteriormente. En la carpeta parte3 se encuentran los siguientes elementos importantes:",source:"@site/versioned_docs/version-2021_2/labs/Laboratorio 1/parte3.md",sourceDirName:"labs/Laboratorio 1",slug:"/labs/Laboratorio 1/parte3",permalink:"/docs/2021_2/labs/Laboratorio 1/parte3",editUrl:"https://github.com/compiladores/compiladores.github.io/edit/master/docs/versioned_docs/version-2021_2/labs/Laboratorio 1/parte3.md",tags:[],version:"2021_2",sidebarPosition:4,frontMatter:{title:"Parte 3 (2 horas)",sidebar_position:4},sidebar:"version-2021_2/tutorialSidebar",previous:{title:"Parte 2 (0.5 horas)",permalink:"/docs/2021_2/labs/Laboratorio 1/parte2"},next:{title:"Parte 4 (1 horas)",permalink:"/docs/2021_2/labs/Laboratorio 1/parte4"}},c=[{value:"Consigna",id:"consigna",children:[]},{value:"Consejos",id:"consejos",children:[]},{value:"pseudoc\xf3digo",id:"pseudoc\xf3digo",children:[]}],u={toc:c};function m(e){var a=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"En esta parte y la siguiente vamos a implementar lexers para los 4 lenguajes planteados anteriormente. En la carpeta ",(0,o.kt)("inlineCode",{parentName:"p"},"parte3")," se encuentran los siguientes elementos importantes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"LanguageAutomata.java"),": Una interfaz que se usa para representar toda la informaci\xf3n necesaria para expresar una aut\xf3mata capaz de parsear un lenguaje:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Funci\xf3n de transici\xf3n")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Funci\xf3n que dice si un estado es final")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Funci\xf3n que dice cu\xe1l es el estado "muerto", que es el que no tiene transiciones salientes.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"otras cosas necesarias para definir el aut\xf3mata"),(0,o.kt)("p",{parentName:"li"},"La interfaz tiene 2 tipos gen\xe9ricos. El tipo ",(0,o.kt)("inlineCode",{parentName:"p"},"S")," es el tipo de los estados, y ",(0,o.kt)("inlineCode",{parentName:"p"},"T")," representa los tipos de token. As\xed, la interfaz nos permite cambiar los tipos enumerados que se usan en el lenguaje.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ManualLexer.java"),": A partir de un aut\xf3mata que implementa ",(0,o.kt)("inlineCode",{parentName:"li"},"LanguageAutomata"),', implementa un algoritmo que convierte strings en tokens "observando" el comportamiento de la funci\xf3n de transici\xf3n. Expone 2 m\xe9todos, que deben completarse como parte del alcance de este laboratorio:',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"extractToken(String program)")," avanza por el ",(0,o.kt)("inlineCode",{parentName:"li"},"String")," recibido como par\xe1metro hasta alcanzar un estado muerto del aut\xf3mata. Entonces devuelve el token correspondiente al \xfaltimo ",(0,o.kt)("em",{parentName:"li"},"estado final"),", y la posici\xf3n del \xfaltimo caracter donde se lo alcanz\xf3."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lex(String program)")," Llama constantemente a ",(0,o.kt)("inlineCode",{parentName:"li"},"extractToken()"),", hasta consumir la totalidad del programa."))),(0,o.kt)("li",{parentName:"ul"},"Carpeta ",(0,o.kt)("inlineCode",{parentName:"li"},"BrainfuckAdder"),": Contiene el aut\xf3mata y los tipos enumerados correspondientes a ese lenguage.")),(0,o.kt)("p",null,"Por otra parte, en la carpeta de nombre ",(0,o.kt)("inlineCode",{parentName:"p"},"parte3")," dentro de ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," se encuentra ",(0,o.kt)("inlineCode",{parentName:"p"},"ManualLexerTest"),", que usa la implementaci\xf3n de ",(0,o.kt)("inlineCode",{parentName:"p"},"BrainfuckAdder")," inclu\xedda para testear ",(0,o.kt)("inlineCode",{parentName:"p"},"ManualLexer"),"."),(0,o.kt)("h2",{id:"consigna"},"Consigna"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Completar ManualLexer.java de forma que pasen los tests en ManualLexerTest.java. Se recomienda iniciar por los tests de ",(0,o.kt)("inlineCode",{parentName:"strong"},"extractToken")," y luego continuar con los de ",(0,o.kt)("inlineCode",{parentName:"strong"},"lex"),".")," No se permite modificar los tests de ",(0,o.kt)("inlineCode",{parentName:"p"},"ManualLexerTest.java"),", si se considera necesario agregar m\xe1s pruebas, crear un archivo con pruebas adicionales."),(0,o.kt)("h2",{id:"consejos"},"Consejos"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Hacer pasar primero los tests que eval\xfaan la funci\xf3n ",(0,o.kt)("inlineCode",{parentName:"li"},"extractToken"),", y luego pasar a los tests de ",(0,o.kt)("inlineCode",{parentName:"li"},"lex"),"."),(0,o.kt)("li",{parentName:"ol"},"En el texto ",(0,o.kt)("em",{parentName:"li"},"tiger"),", secci\xf3n 2.3, subt\xedtulo ",(0,o.kt)("em",{parentName:"li"},"RECOGNIZING THE LONGEST MATCH"),' se describe el algoritmo que "observa" al aut\xf3mata. No incluye una descripci\xf3n formal del pseudoc\xf3digo.')),(0,o.kt)("h2",{id:"pseudoc\xf3digo"},"pseudoc\xf3digo"),(0,o.kt)("p",null,"Se propone a continuaci\xf3n un pseudoc\xf3digo aproximado de los m\xe9todos a completar como parte de la consigna. ",(0,o.kt)("strong",{parentName:"p"},"No copiarlo tal cual ya que se excluyeron detalles importantes tales como \xedndices, excepciones, algunas variables, etc"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"extractToken(programa){\n    estadoActual= ESTADO_INICIAL\n    ultimoEstadoFinal=ninguno\n    for(cada caracter del programa){\n        estadoActual= TRANSCICION(estadoActual,caracter)\n        if(ES_FINAL(estadoActual)){\n            ultimoEstadoFinal=estadoActual\n        }\n        if(estadoActual=ESTADO_MUERTO){\n            return ultimoEstadoFinal, posfinal\n        }\n    }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"lex(programa){\n    tokens=[]\n    while(programa no est\xe1 vac\xedo){\n        token = extractToken(programa)\n        programa = programa sin los caracteres del token\n        tokens.agregar( token )\n    }\n}\n")))}m.isMDXComponent=!0}}]);