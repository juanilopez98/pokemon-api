const express = require('express');
const app = express();
const port = process.env.PORT || 4000;



// Middleware para validar el formato del ID
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Importa el middleware de tiempo
const middlewareTiempo = require('./Middleware');

app.use(middlewareTiempo);

// Importa las rutas
const crudRoutes = require('./Crud.js');
app.use('/api', crudRoutes);

// Mensaje de bienvenida
app.get('/', async (req, res) => {
  return res.send("Pokemon API");
})  

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

