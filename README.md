# EnglishHackaton 2024 - Arroyo Consulting

Desarrollo de una plataforma Web auto-asistida que determine el nivel linguistico de un candidato en el idioma INGLÉS bajo el estandar internacional MCERL, considerando sus habilidades de escucha, habla y comprensión lectora a través de pruebas online generadas automáticamente por Inteligencia artificial.

---

## Prueba 1: Escritura

- El sistema selecciona aleatoriamente los temas a tratar con el candidato.
- Segun el tema, el candidato debe escribir una composición escrita donde demuestre sus habilidades en grámatica y redacción de todos los tiempos gramaticales (pasado, presente y futuro).
- El sistema debe limitar el tiempo en cada prueba escrita y la cantidad de caractéres.
- El sistema debe limitar el Copiar - Pegar.
- El sistema debe bloquear el uso de complementos o correctores instaldos en el navegador (ejemplo gramarly).
- La cantidad de composiciones a desarrollar por el candidato debe ser configurada por el administrador del sistema.
- Al finalizar la prueba, el sistema revisa automáticamente los textos y retroalimenta al candidato.
- Los temas a tratar con el candidato deben ser configurables por el administrador.

---

## Prueba 2: Escucha

- El sistema selecciona aleatoriamente los temas a tratar con el candidato.
- Segun el tema, el sistema genera un audio donde presente una conversación en inglés entre dos personas.
- Una vez ejecutado el audio, el candidato pasa a responder una serie de preguntas acerca del mismo en formato de multiples respuestas, selección única. Estas preguntas son generadas automáticamente por el sistema.
- El sistema debe limitar la cantidad de veces que se puede escuchar el audio (max. 2 veces).
- El sistema debe limitar el tiempo en cada prueba.
- La cantidad de audios formulados es configurada por el administrador del sistema.
- Al finalizar la prueba, el sistema revisa automáticamente las respuestas y retroalimenta al candidato.
- Los temas a tratar con el candidato deben ser configurables por el administrador.




---

## Prueba 3: Conversación

- El formato de la prueba es tipo pregunta - respuesta.
- El sistema genera audios automáticamente preguntando sobre un tema especifico.
- El sistema habilita la captura de audios para grabar la respuesta desde el micrófono del candidato.
- El sistema limita el tiempo de captura de cada respuesta a máx 30 seg.
- La cantidad de preguntas a formular es configurada por el administrador del sistema.
- Al finalizar la prueba, el sistema revisa automáticamente las respuestas y retroalimenta al candidato.
- Los temas a tratar con el candidato deben ser configurables por el administrador.


---

## Prueba 4: Resultados
- Determinar el nivel de inglés según los criterios de la compañía donde se definirá los porcentajes (pesos) para cada prueba.
- Los resultados se deben evaluar frente al marco común europeo, cuyos valores ya determinan la escala.
- Presentar un resumen de las tres pruebas anteriores.
- Se tiene una política de reintento de máximo 2 veces.
- Historial de pruebas realizadas.
- Exportar Resultados a PDF.
