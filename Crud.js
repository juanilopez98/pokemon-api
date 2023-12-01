const express = require('express');
const { validationResult, check } = require('express-validator');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const axios = require('axios');
const url = 'mongodb://localhost:27017';
const dbName = 'pokemon';



// Middleware para validar el formato del ID
const validateID = (req, res, next) => {
  const id = req.params.id;
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ error: 'ID no valido' });
  }
  next();
};


/// Conexión a la base de datos ///
const connectDB = async () => {
  try {
    const client = await MongoClient.connect('mongodb+srv://lopezjuanignacio027:pokemonapi123@cluster0.bjfdf9b.mongodb.net/', { useNewUrlParser: true });
    console.log('Conexión exitosa');
    return client.db(dbName);
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    throw new Error('Error al conectar a la base de datos');
  }
};

// Manejo de error
const handleError = (res, error, errorMessage) => {
  console.error(error);
  res.status(500).send(errorMessage);
};

// Rutas CRUD de entrenador

// Crear un nuevo entrenador
router.post(
  '/entrenador',
  [
    check('nombre').notEmpty().withMessage('El nombre no puede estar vacío'),
    check('medallas').isInt().withMessage('Las medallas deben ser un número entero'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const db = await connectDB();
      const collection = db.collection('entrenador');
      await collection.insertOne(req.body);
      res.send('El entrenador ha sido creado ');
    } catch (error) {
      handleError(res, error, 'Error al crear el entrenador');
    }
  }
);

// Obtener todos los entrenadores
router.get('/entrenador', async (req, res) => {
  try {
    const db = await connectDB();
    const collection = db.collection('entrenador');
    const data = await collection.find({}).toArray();
    res.json(data);
  } catch (error) {
    handleError(res, error, 'Error al obtener los entrenadores');
  }
});

// Obtener un entrenador por ID
router.get('/entrenador/:id', validateID, async (req, res) => {
  const id = req.params.id;
  try {
    const db = await connectDB();
    const collection = db.collection('entrenador');
    const data = await collection.findOne({ _id: id });
    res.json(data);
  } catch (error) {
    handleError(res, error, 'Error al obtener el entrenador por ID');
  }
});

// Actualizar un entrenador por ID
router.put('/entrenador/:id', [validateID], async (req, res) => {
  const id = req.params.id;
  try {
    const db = await connectDB();
    const collection = db.collection('entrenador');
    await collection.updateOne({ _id: id }, { $set: req.body });
    res.send('El entrenador ha sido actualizado exitosamente');
  } catch (error) {
    handleError(res, error, 'Error al actualizar el entrenador');
  }
});

// Eliminar un entrenador por ID
router.delete('/entrenador/:id', validateID, async (req, res) => {
  const id = req.params.id;
  try {
    const db = await connectDB();
    const collection = db.collection('entrenador');
    await collection.deleteOne({ _id: id });
    res.send('El entrenador ha sido eliminado');
  } catch (error) {
    handleError(res, error, 'Error al eliminar el entrenador');
  }
});

// obtener un pokemon random
router.get('/pokemons/random', async (req, res) => {
  try {
    const randomPokemonId = Math.floor(Math.random() * 807) + 1;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);
    const pokemonData = response.data;
    res.json(pokemonData);
  } catch (error) {
    handleError(res, error, 'Error al obtener un pokemon random');
  }
});

module.exports = router;
