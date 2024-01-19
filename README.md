# Pokemon API

Este proyecto es una API de Pokemon, la cual administra entrenadores y obtiene pokemones al azar.

## Instalar dependencias

Para instalar las dependencias, ejecuta el siguiente comando:

```bash
npm install
```

## Inicio

Para iniciar el proyecto, ejecuta el siguiente comando:

```bash
npm start
```

La api se ejecuta en la siguiente url:

```bash
http://localhost:4000
```


## Rutas de la API

| Ruta         | Verbo   | Descripción                                       |
| ------------ | ------- | ---------------------------------------------     |
| /api/etrenador     | GET     | Obtiene todos los entrenadores                  |
| /api/entrenador/:id | GET     | Obtiene un Pokemon por su ID                    |
| /api/entrenador/     | POST    | Crea un nuevo Pokemon                           |
| /api/entrenador/:id | PUT     | Actualiza un Pokemon existente por su ID        |
| /api/entrenador/:id | DELETE  | Elimina un Pokemon existente por su ID          |
| /api/pokemon/random| GET     | Obtiene un Pokemon al azar desde una api externa|