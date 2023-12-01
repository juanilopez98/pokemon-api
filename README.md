# Pokemon API

Este proyecto es una API de Pokemon, la cual administra entrenadores y obtiene pokemones al azar.

## Inicio

Para iniciar el proyecto, ejecuta el siguiente comando:

```bash
node Index.js
```


## Rutas de la API

| Ruta         | Verbo   | Descripción                                       |
| ------------ | ------- | ---------------------------------------------     |
| /etrenador     | GET     | Obtiene todos los entrenadores                  |
| /etrenador/:id | GET     | Obtiene un Pokemon por su ID                    |
| /etrenador     | POST    | Crea un nuevo Pokemon                           |
| /etrenador/:id | PUT     | Actualiza un Pokemon existente por su ID        |
| /etrenador/:id | DELETE  | Elimina un Pokemon existente por su ID          |
| /pokemon/random| GET     | Obtiene un Pokemon al azar desde una api externa|