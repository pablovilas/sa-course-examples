# Arquitectura de Software
## Clase 7 - API REST con JSON y XML como formato de intercambio de mensajes / Tácticas de disponibilidad y de performance en la práctica
### Objetivos

#### Formatos de mensajes en REST APIs

Implementación de mecanismo para responder distintos formatos de mensajes, en esta etapa serán los formatos JSON y XML.
Repasar los *headers* 'Content-Type' y 'Accept'.
Ejemplo de implementacion de middleware en *koa* para responder el formato adecuado de acuerdo al cliente.

#### Tácticas de disponibilidad y performance en la práctica

Tácticas de disponibilidad:

* Ping/Echo
	* Implementación de endpoints de *healtcheck* en ambas APIs de ejemplo provistas
	* Discusión e implementación de módulo para realizar *pings*
* Monitoring
	* Introducción a [PM2](http://pm2.keymetrics.io/docs/usage/quick-start/) y [comandos](http://pm2.keymetrics.io/docs/usage/quick-start/#cheat-sheet) mas utilizados
	* [Modules](https://pm2.keymetrics.io/docs/advanced/pm2-module-system/) para monitoreo de servidores, bases de datos
	* Utilizar PM2 para ejecutar y monitorear múltiples procesos

Tácticas de performance:

* Maintain multiple copies of computations
	* *Load balancing*
	* Ejecutar múltiples copias de nuestros servicios con PM2

### Desafío

1. Escriba una pequeña aplicación que invoque la creación de recursos en una de las APIs de ejemplo provistas.
2. Ahora, extienda su aplicación para que realice la creación de 1000 recursos en dicha API, midiendo el tiempo en realizar la tarea.
3. Discutiendo con sus compañeros, ¿cómo piensa usted que puede ser optimizado el tiempo de respuesta obtenido en el punto 2?.
4. Realice las modificaciones necesarias para optimizar el tiempo de respuesta.





