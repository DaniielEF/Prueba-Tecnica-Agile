# Prueba-Tecnica-Agile

Parte 1:

Fundamentos de Javascript

Manipulacion de array, uso del método .map para crear el nuevo array que cumpla las condiciones estipuladas
Dificultad para manejar Promise (establecer refuerzo de tema)
Aplicación de clases en JS

Parte 2:

Ejercicio práctico con React.js y librerías

implementacion de formulario con formik y validación con Yup,
manejo de estados globales entre componentes con react-redux,
simulación de solicitud post a una API 




Si tuvieras que optimizar tu solución para manejar un volumen masivo de formularios enviados, ¿qué cambios implementarías? Explica tus decisiones técnicas.

Limitar las solicitudes realizadas a la API para guardar los fomularios cada cierta cantidad de formularios, por ejemplo cada 20 formularios enviados guardar un respaldo en la API para limitar las solicitudes HTTP, además implementaría Firebase para el manejo de las bases de datos y poder almacenar la información en la red.
Esta desicion permite adicionar la posibilidad de personalizar los formularios mediante un inicio de sesion intuitivo para el usuario.