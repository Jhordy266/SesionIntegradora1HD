# Registro de Usuarios

Aplicación web para registrar y administrar datos personales de usuarios mediante operaciones CRUD.

## Tecnologías utilizadas

* Frontend: Angular
* Backend: Node.js + Express
* Base de datos: MySQL
* Gestor de base de datos: MySQL Workbench

## Funcionalidades

El sistema permitirá:

* Registrar usuarios.
* Listar usuarios.
* Editar usuarios.
* Eliminar usuarios.

## Entidad principal

### Usuario

Campos:

* id
* nombres
* apellidos
* dni
* correo
* telefono

## Integrantes y responsabilidades

| Integrante   | Parte desarrollada                                  |
|--------------| --------------------------------------------------- |
| Deybi Quispe | Creación de la base de datos MySQL y tabla usuarios |
| Integrante 2 | Backend Node.js y API CRUD                          |
| Integrante 3 | Frontend Angular                                    |

## Base de datos

Se creó la base de datos `registro_usuarios` y la tabla `usuarios`.

La tabla contiene los siguientes campos:

* `id`: identificador único autoincremental.
* `nombres`: nombres del usuario.
* `apellidos`: apellidos del usuario.
* `dni`: documento de identidad único.
* `correo`: correo electrónico.
* `telefono`: número de teléfono.

El script de creación de la base de datos se encuentra en:

`database/registro_usuarios.sql`

## Backend

El backend utiliza Node.js, Express y MySQL2 y sigue una estructura MVC separando modelo, controlador y rutas.

Endpoints disponibles:

* `GET /api/usuarios`
* `GET /api/usuarios/:id`
* `POST /api/usuarios`
* `PUT /api/usuarios/:id`
* `DELETE /api/usuarios/:id`

Para ejecutar el backend:

```bash
cd backend
npm install
```

Copiar `.env.example` como `.env` y completar las credenciales locales de MySQL. Luego ejecutar:

```bash
npm run dev
```
