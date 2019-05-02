# Arquitectura de Software
## Clase 5 - REST API
### Objetivos

* Implementar una API REST para consultar datos estadísticos sobre la altura y peso de personas
* Leer información desde un archivo CSV para popular datos
* Implementar distintos mecanismos de persistencia
    * Memoria
    * Base de datos
* Implementar un mecanismo de paginación

### Ejercicio

Exponer un API REST con JSON como formato de intercambio de mensajes.
Los endpoints son los siguientes:

1. **GET** */users?offset=0&limit=2*
	```json
    {
        "offset": 0,
        "limit": 2,
        "size": 2,
        "data": [
            {
              "id": 1,
              "height": 65.78,
              "weight": 112.99
            },
            {
              "id": 2,
              "height": 71.52,
              "weight": 136.49
            }
        ]
	}
    ```
2. **GET** */users/:id*
	```json
    {
        "id": 1,
        "height": 65.78,
        "weight": 112.99
    }
    ```

Podemos obtener información estadística de la altura y pesos de algunas personas accediendo a los siguientes enlaces:

* [Muestreo de 200 personas](https://people.sc.fsu.edu/~jburkardt/data/csv/hw_200.csv)
* [Muestreo de 25000 personas](https://people.sc.fsu.edu/~jburkardt/data/csv/hw_25000.csv)

considerar que ambos archivos se encuentran en formato *CSV*.

### Posibles Node modules a utilizar

Algunos de los posibles módulos a utilizar (no restringidos a éstos) son:

1. *koa*: web framework
2. *koa-json*: convierte objetos en JSON
3. *koa-logger*: logging de cada request y response
4. *koa-router*: gestión simple de rutas
5. *sqlite3*: base de datos simple y embebida
