CREATE DATABASE IF NOT EXISTS registro_usuarios;

USE registro_usuarios;

CREATE TABLE IF NOT EXISTS usuarios (
                                        id INT AUTO_INCREMENT PRIMARY KEY,
                                        nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    dni VARCHAR(8) NOT NULL UNIQUE,
    correo VARCHAR(150) NOT NULL,
    telefono VARCHAR(15)
    );

INSERT INTO usuarios (
    nombres,
    apellidos,
    dni,
    correo,
    telefono
)
VALUES (
           'Juan',
           'Perez',
           '12345678',
           'juan.perez@gmail.com',
           '987654321'
       );

SELECT * FROM usuarios;