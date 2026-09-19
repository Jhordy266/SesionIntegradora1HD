const express = require('express');
const cors = require('cors');
const usuarioRoutes = require('./routes/usuario.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensaje: 'API Registro de Usuarios' });
});

app.use('/api/usuarios', usuarioRoutes);

module.exports = app;
