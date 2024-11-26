const pool = require('../db/dbConfig');

// Insertar un estudiante
const insertarEstudiante = async (nombre, edad, curso) => {
    const query = 'INSERT INTO estudiantes (nombre, edad, curso) VALUES ($1, $2, $3)';
    try {
        await pool.query(query, [nombre, edad, curso]);
        console.log('Estudiante insertado correctamente.');
    } catch (error) {
        console.error('Error al insertar estudiante:', error.message);
    }
};

// Insertar una venta
const insertarVenta = async (productoId, cantidad) => {
    const query = 'INSERT INTO ventas (producto_id, cantidad) VALUES ($1, $2)';
    try {
        await pool.query(query, [productoId, cantidad]);
        console.log('Venta registrada correctamente.');
    } catch (error) {
        console.error('Error al registrar venta:', error.message);
    }
};

module.exports = { insertarEstudiante, insertarVenta };
