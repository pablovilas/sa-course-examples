# Arquitectura de Software
## Clase 6 - Autenticación y autorización con JWT y Publish/Suscribe
### Objetivos

* Implementar una API REST con operaciones CRUD para un usuario
* Incluir un mecanismo de autenticación y autorización utilizando [JWT](https://jwt.io/), leer acerca de JWT [aqui](https://jwt.io/introduction/)
* Implementar un mecanismo de publish/suscribe que publique un mensaje por cada usuario almacenado
* La persistencia de usuarios es deseable que sea en base de datos 

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
              "firstName": "Nombre 1",
              "lastName": "Apellido 1",
              "email": "example@example.com"
            },
            {
              "id": 2,
              "firstName": "Nombre 2",
              "lastName": "Apellido 2",
              "email": "example2@example.com"
            }
        ]
	}
    ```
2. **GET** */users/:id*
	```json
    {
        "id": 1,
        "firstName": "Nombre 1",
        "lastName": "Apellido 1",
        "email": "example@example.com"
    }
    ```
3. **POST** */users/*
	```json
    {
        "firstName": "Nombre 3",
        "lastName": "Apellido 3",
        "email": "example3@example.com"
    }
    ```
4. **POST** */login/*
	```json
    {
        "clientId": "client_id",
        "clientSecret": "client_secret_shh"
    }
    ```

Todos los endpoints excepto */login/* deben estar protegidos

### Posibles Node modules a utilizar

Algunos de los posibles módulos a utilizar (no restringidos a éstos) son:

1. *[koa](https://github.com/koajs/koa)*: web framework
2. *[koa-json](https://github.com/koajs/json)*: convierte objetos en JSON
3. *[koa-logger](https://github.com/koajs/logger)*: logging de cada request y response
4. *[koa-router](https://github.com/ZijianHe/koa-router)*: gestión simple de rutas
5. *[koa-bodyparser](https://github.com/koajs/bodyparser)*: parsing del request body
6. *[koa-jwt](https://github.com/koajs/jwt)*: helper para manejar JWT con koa
7. *[jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)*: implementación de JWT

