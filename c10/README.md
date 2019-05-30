# Arquitectura de Software
## Clase 10 - Logging library
### Objetivos

* Discusión sobre implementación de libreria para logging
* Utilización de libreria en otros proyectos
* Implementación de distintos appenders: standard output, archivo de texto y base de datos
* Discusión sobre el impacto de logging en el sistema

### Ejercicio

Se pide implementar una libreria reutilizable de logging. La interfaz deseada es la siguiente:

```javascript
const config = {
	appender: 'console', // file, database
    level: Logger.INFO
    format: '[$level] $date: $log $error'
};
let log = new Logger(config);
log.debug('Debug log');
log.info('Information log');
log.warn('Warning log');
log.error('Error log', new Error('Error example'));
log.fatal('Fatal log', new Error('Error example'));
```

Los niveles de logging a soportar son:

* *Debug*
* *Information*
* *Warning*
* *Error*
* *Fatal*

Los distintos appenders a soportar son:

* **Standard output (console)**: se debe imprimir por consola la linea correspondiente al log
* **Archivo de texto (file)**: se debe almacenar en tiempo real cada linea de log en un archivo de texto
* **Base de datos (database)**: similiar al anterior pero en una tabla de una base de datos

Se debe configurar el formato del log de acuerdo a tres variables definidas:

* **level**: imprime el nivel del log *DEBUG*, *INFO*, *WARN*, *ERROR*, *FATAL*
* **date**: fecha del log en formato *DD/MM/YYYY HH:mm:ss.sss*
* **log**: corresponde a la linea a registrar en la bitácora
* **error**: mensaje del error en caso de que sea provisto

Ejemplo de lineas de logging:

```
[INFO] 30/05/2019 08:10:23.102: Information log
[ERROR] 30/05/2019 08:10:30.239: Error log, Error: Error example
```

En el caso del appender de archivo de texto de debe especificar el nombre y destino del archivo, para el caso de base de datos se tiene que proveer los datos de conexión necesarios.

## Procedimiento

1. Implementar la libreria simplemente con el appender de consola. Si quiere darle mas "color" a su implementación puede utilizar [esta](https://github.com/chalk/chalk#readme) librería
2. Pruebe su librería en el ejemplo de la clase 8 (orders-api-rest) ejecutando el script dentro de orders-creator-runner
3. Ahora implemente para almacenar los logs en un archivo de texto
4. Vuelva a realizar la misma prueba pero almacenando en archivo de texto
5. Analice el impacto de distintos appenders, comente resultados
6. Discuta como puede extender esta librería para que pueda ser utilizada en un sistema distribuido
