const { insertarVenta } = require('../queries/inserts');
const { buscarCursosYProfesores } = require('../queries/selects');

const manejarVentasYCursos = async () => {
    await insertarVenta(3, 3);
    await buscarCursosYProfesores();
};

module.exports = { manejarVentasYCursos };
