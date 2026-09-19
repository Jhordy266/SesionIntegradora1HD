const db = require('../config/database');

const listar = async () => {
  const [rows] = await db.query(
    'SELECT id, nombres, apellidos, dni, correo, telefono FROM usuarios ORDER BY id DESC'
  );
  return rows;
};

const obtenerPorId = async (id) => {
  const [rows] = await db.query(
    'SELECT id, nombres, apellidos, dni, correo, telefono FROM usuarios WHERE id = ?',
    [id]
  );
  return rows[0];
};

const crear = async ({ nombres, apellidos, dni, correo, telefono }) => {
  const [result] = await db.query(
    `INSERT INTO usuarios (nombres, apellidos, dni, correo, telefono)
     VALUES (?, ?, ?, ?, ?)`,
    [nombres, apellidos, dni, correo, telefono || null]
  );
  return result.insertId;
};

const actualizar = async (id, { nombres, apellidos, dni, correo, telefono }) => {
  const [result] = await db.query(
    `UPDATE usuarios
     SET nombres = ?, apellidos = ?, dni = ?, correo = ?, telefono = ?
     WHERE id = ?`,
    [nombres, apellidos, dni, correo, telefono || null, id]
  );
  return result.affectedRows;
};

const eliminar = async (id) => {
  const [result] = await db.query(
    'DELETE FROM usuarios WHERE id = ?',
    [id]
  );
  return result.affectedRows;
};

module.exports = {
  listar,
  obtenerPorId,
  crear,
  actualizar,
  eliminar
};
