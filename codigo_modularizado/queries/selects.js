const pool = require('../db/dbConfig');

// Buscar estudiantes por edad
const buscarEstudiantesPorEdad = async (edad) => {
    const query = 'SELECT * FROM estudiantes WHERE edad > $1';
    try {
        const result = await pool.query(query, [edad]);
        console.log('Estudiantes encontrados:', result.rows);
    } catch (error) {
        console.error('Error al buscar estudiantes:', error.message);
    }
};

// Buscar cursos y profesores
const buscarCursosYProfesores = async () => {
    const query = {
        text: 'SELECT cursos.nombre, profesores.nombre FROM cursos JOIN profesores ON cursos.profesor_id = profesores.id',
        rowMode: 'array',
    };
    try {
        const result = await pool.query(query);
        console.log('Cursos y profesores:', result.rows);
    } catch (error) {
        console.error('Error al buscar cursos y profesores:', error.message);
    }
};

module.exports = { buscarEstudiantesPorEdad, buscarCursosYProfesores };
