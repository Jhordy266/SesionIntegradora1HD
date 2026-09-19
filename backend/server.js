require('dotenv').config();

const app = require('./src/app');
const db = require('./src/config/database');

const PORT = process.env.PORT || 3000;

const iniciarServidor = async () => {
  try {
    await db.query('SELECT 1');
    console.log('Conexión a MySQL correcta');

    app.listen(PORT, () => {
      console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('No se pudo conectar a MySQL:', error.message);
    process.exit(1);
  }
};

iniciarServidor();
