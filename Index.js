const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;



// Middleware para validar el formato del ID
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
  origin: '*'
}));
app.use(express.static('public'));

// Importa el middleware de tiempo
const middlewareTiempo = require('./Middleware');

app.use(middlewareTiempo);

// Importa las rutas
const crudRoutes = require('./Crud.js');
app.use('/api', crudRoutes);

// Mensaje de bienvenida
app.get('/', async (req, res) => {
  // return res.send("Pokemon API");
  return res.sendFile(__dirname + '/public/index.html');
})

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

