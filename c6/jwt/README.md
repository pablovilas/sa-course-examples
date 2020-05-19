# Arquitectura de Software
## Clase 7 - Autenticación y autorización con JWT

### Objetivos

* Implementar una API REST con operaciones CRUD para pedidos
* Implementar un mecanismo de autenticación y autorización utilizando [JWT](https://jwt.io/), leer acerca de JWT [aqui](https://jwt.io/introduction/)

### Ejercicio

La idea es realizar un flujo de autenticación y autorización de usuarios como indica el diagrama debajo

![JWT](img/jwt.png)

1. Se hace una petición para autenticar el usuario por medio de credenciales
2. Se firma el token JWT por medio de una clave privada
3. Se devuelve el token JWT
4. La aplicación cliente guarda el token devuelto para utilizarlo en las llamadas que requieran autenticación
5. El cliente envía el token JWT como cabezal de la petición
6. El servicio destino verifica la validez del token por medio de una clave pública
7. Si el token es válido el sistema retorna la información solicitada

#### API de pedidos

Exponer un API REST con JSON como formato de intercambio de mensajes.
Los endpoints son los siguientes:

1. **GET** */orders?offset=0&limit=2*
	```json
    [
    {
        "id": 1,
        "state": "NEW",
        "items": [
        {
            "id": 1,
            "description": "item 1"
        },
        {
            "id": 2,
            "description": "item 2"
        }
        ],
        "total": 100
    },
    {
        "id": 1,
        "state": "NEW",
        "items": [
        {
            "id": 1,
            "description": "item 1"
        },
        {
            "id": 2,
            "description": "item 2"
        }
        ],
        "total": 100
    },
    {
        "id": 1,
        "state": "NEW",
        "items": [
        {
            "id": 1,
            "description": "item 1"
        },
        {
            "id": 2,
            "description": "item 2"
        }
        ],
        "total": 100
    }
    ]
    ```
2. **GET** */orders/:id*
	```json
    {
        "id": 1,
        "state": "NEW",
        "items": [
        {
            "id": 1,
            "description": "item 1"
        },
        {
            "id": 2,
            "description": "item 2"
        }
        ],
        "total": 100
    }
    ```
3. **POST** */orders/*
	```json
    {
        "id": 1,
        "state": "NEW",
        "items": [
        {
            "id": 1,
            "description": "item 1"
        },
        {
            "id": 2,
            "description": "item 2"
        }
        ],
        "total": 100
    }
    ```

Todos los endpoints deben estar protegidos y contar con los permisos diferenciados para lectura y escritura 
Al momento de implementar la protección de endpoints primero va a tener que generar un token de JWT que será devuelto al cliente y éste lo utilizara en las subsiguiente llamadas.

#### API de autenticación y permisos

Para generar las claves públicas y privadas puede utilizar este sitio: http://travistidwell.com/jsencrypt/demo/index.html
Una vez autenticado el usuario debe generar el token JWT utilizando la clave privada, ésta debe permanecer en secreto solo para la entidad que genera los tokens.
La clave pública puede ser distribuida y anexada a aquellos servicios que requieran validar la autenticidad del token JWT que llega como parte de las peticiones.
Un ejemplo de endpoint de autenticación puede ser:

**POST** */login/*

```json
{
    "clientId": "client_id",
    "clientSecret": "client_secret_shh"
}
```
    
respuesta:

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6Im9ydCIsImlhdCI6MTU1MTI5NDkwOX0.1AcM6WjVEcU9iE6OEsAPBOMUXGGF9Mt9o8iCxVzOdZ0"
}
```

luego, si quiero usar el token en el API de órdenes:

**GET** */orders/:id*

Agregar el header ```Authorization``` con la informacion

```Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6Im9ydCIsImlhdCI6MTU1MTI5NDkwOX0.1AcM6WjVEcU9iE6OEsAPBOMUXGGF9Mt9o8iCxVzOdZ0```

### Posibles Node modules a utilizar

Algunos de los posibles módulos a utilizar (no restringidos a éstos) son:

1. *[koa](https://github.com/koajs/koa)*: web framework
2. *[koa-json](https://github.com/koajs/json)*: convierte objetos en JSON
3. *[koa-logger](https://github.com/koajs/logger)*: logging de cada request y response
4. *[koa-router](https://github.com/ZijianHe/koa-router)*: gestión simple de rutas
5. *[koa-bodyparser](https://github.com/koajs/bodyparser)*: parsing del request body
6. *[koa-jwt](https://github.com/koajs/jwt)*: helper para manejar JWT con koa
7. *[jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)*: implementación de JWT
