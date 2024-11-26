const { insertarEstudiante } = require('../queries/inserts');
const { buscarEstudiantesPorEdad } = require('../queries/selects');

const manejarEstudiantes = async () => {
    await insertarEstudiante('Laura Méndez', 21, 'Biología');
    await buscarEstudiantesPorEdad(20);
};

module.exports = { manejarEstudiantes };
