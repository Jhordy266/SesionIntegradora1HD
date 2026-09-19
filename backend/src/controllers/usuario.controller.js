const Usuario = require('../models/usuario.model');

const datosValidos = ({ nombres, apellidos, dni, correo }) => {
  return Boolean(nombres && apellidos && dni && correo);
};

const listar = async (req, res) => {
  try {
    const usuarios = await Usuario.listar();
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al listar usuarios' });
  }
};

const obtener = async (req, res) => {
  try {
    const usuario = await Usuario.obtenerPorId(req.params.id);

    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    res.json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener usuario' });
  }
};

const crear = async (req, res) => {
  try {
    if (!datosValidos(req.body)) {
      return res.status(400).json({
        mensaje: 'Nombres, apellidos, DNI y correo son obligatorios'
      });
    }

    const id = await Usuario.crear(req.body);

    res.status(201).json({
      mensaje: 'Usuario registrado correctamente',
      id
    });
  } catch (error) {
    console.error(error);

    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ mensaje: 'El DNI ya está registrado' });
    }

    res.status(500).json({ mensaje: 'Error al registrar usuario' });
  }
};

const actualizar = async (req, res) => {
  try {
    if (!datosValidos(req.body)) {
      return res.status(400).json({
        mensaje: 'Nombres, apellidos, DNI y correo son obligatorios'
      });
    }

    const filas = await Usuario.actualizar(req.params.id, req.body);

    if (filas === 0) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    res.json({ mensaje: 'Usuario actualizado correctamente' });
  } catch (error) {
    console.error(error);

    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ mensaje: 'El DNI ya está registrado' });
    }

    res.status(500).json({ mensaje: 'Error al actualizar usuario' });
  }
};

const eliminar = async (req, res) => {
  try {
    const filas = await Usuario.eliminar(req.params.id);

    if (filas === 0) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    res.json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al eliminar usuario' });
  }
};

module.exports = {
  listar,
  obtener,
  crear,
  actualizar,
  eliminar
};
