# nightwatch-chance-faker-js

Ejemplo de uso de Nightwatch.js con Chance.js y Faker.js.

PreRequisitos:
- Java
- NodeJS

Una vez descargado el proyecto, desde línea de comandos ejecutar `npm install` para instalar Nightwatch.js y las dependencias del proyecto.

Es necesario incluir en la carpeta ./lib el .jar de selenium standalone y el driver de chrome.

Para ejecutar los ejemplos hay que ejecutar el comando `nightwatch`. Comenzarán a ejecutarse los tests en Chrome y en el terminal el resultado será algo así:

```
Starting selenium server... started - PID:  18216

[Example Generating An Object With Credentials] Test Suite

Running:  Example generating and object with credentials
 √ Element <body> was visible after 69 milliseconds.
 √ Testing if the page title equals "Google".
 √ Testing if element <input[type=text]> is visible.
  Warn: WaitForElement found 2 elements for selector "input[value="Buscar con Google"]". Only the first one will be checked.
 √ Element <input[value="Buscar con Google"]> was visible after 23 milliseconds.
 √ Element <#search> was visible after 28 milliseconds.
 √ Testing if element <#search> contains text: "Josie Garrett".

OK. 6 assertions passed. (5.962s)

[Example Using Chance] Test Suite

Running:  Example using Chance.js
 √ Element <body> was visible after 62 milliseconds.
 √ Testing if the page title equals "Google".
 √ Testing if element <input[type=text]> is visible.
  Warn: WaitForElement found 2 elements for selector "input[name="btnK"]". Only the first one will be checked.
 √ Element <input[name="btnK"]> was visible after 44 milliseconds.
 √ Element <#search> was visible after 32 milliseconds.
 √ Testing if element <#search> contains text: "Chris Drake".

OK. 6 assertions passed. (5.685s)

[Example Using Faker] Test Suite

Running:  Example using Faker.js
 √ Element <body> was visible after 60 milliseconds.
 √ Testing if the page title equals "Google".
 √ Testing if element <input[type=text]> is visible.
  Warn: WaitForElement found 2 elements for selector "input[name="btnK"]". Only the first one will be checked.
 √ Element <input[name="btnK"]> was visible after 51 milliseconds.
 √ Element <#search> was visible after 39 milliseconds.
 √ Testing if element <#search> contains text: "Magdalena Ortega ".

OK. 6 assertions passed. (6.984s)

OK. 18  total assertions passed. (18.859s)
```