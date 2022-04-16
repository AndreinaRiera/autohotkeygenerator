# Autohotkeygenerator
¡APP WEB REACTJS PARA CREAR ARCHIVOS AHK FACILMENTE!

URL: https://autohotkeygenerator.herokuapp.com/

____________________________________________________________________________________________________________________


[autohotkey](https://www.autohotkey.com/) es un lenguaje para window que permite crear rutinas, atajos de teclado, acortadores y automatizar muchas tareas en la PC 
"The ultimate automation scripting language for Windows."

Pero...es un lenguaje bastante complejo, que requiere tiempo de aprendizaje y tener en cuenta muchas cosas (como escapar algunos caracteres especiales en los textos, por ejemplo), como cualquier otro lenguaje de programacion. 


```
#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
			; #Warn  ; Enable warnings to assist with detecting common errors.
			SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
			SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

; Escribir mi correo rapidamente

::@g.com::
SendRaw, miCorreoGmailCompleto@gmail.com
return

; Escribir mi correo personal rapidamente

::p@g.com::
SendRaw, miCorreoGmailPersonalCompleto@gmail.com
return
```


¿Entiendes algo de lo que dice arriba? Asi se ve un archivo pequeño en autohotkey. Lo que hace es convertir @g.com en miCorreoGmailCompleto@gmail.com, y p@g.com en miCorreoGmailPersonalCompleto@gmail.com 

El objetivo de [autohotkeygenerator](https://autohotkeygenerator.herokuapp.com/) es facilitar la creacion e interaccion con este lenguaje. 
Desde un formulario facil e intuito puedes agregar la description, el activador y la accion de tu rutina. Agregandola facilmente a tu archivo. Puedes incluir tantas rutinas como quieres, y luego descargar el archivo generado automaticamente por la app. 

Siguiendo los pasos es muy rapido crear rutinas personalizadas para optimizar tu tiempo en la PC. 

![Screenshot1](https://user-images.githubusercontent.com/34286823/163688953-ed018016-ea11-4d2b-a94b-646dbc0a8d31.png)


_________________________________________________________________________________________________________________________________________

## Todo lo que puedes hacer 

Con el lenguaje de autohotkey se pueden trabajar con variables, bucles, datos dinamicos extraidos de internet o de tus archivos, interactuar directamente con paginas web en tu navegador, correos electronicos y mucho mas. 

Puedes leer la [documentacion completa aqui](https://www.autohotkey.com/docs/AutoHotkey.htm). 

En [autohotkeygenerator](https://autohotkeygenerator.herokuapp.com/) he incluido solo algunas de las muchas acciones y activadores posibles.

_________________________________________________________________________________________________________________________________________

## Este es un proyecto personal

La app web actual fue desarrollada por mi, como demostracion del proyecto general. 
Espero que en algun momento siga creciendo la idea. 

Si te parece una buena idea, ¡Comentamelo! Seria muy util para mi saberlo. 







