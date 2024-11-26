const { manejarEstudiantes } = require('./controllers/estudiantesController');
const { manejarVentasYCursos } = require('./controllers/ventasController');

const app = async () => {
    console.log('--- Manejando estudiantes ---');
    await manejarEstudiantes();

    console.log('--- Manejando ventas y cursos ---');
    await manejarVentasYCursos();
}
app();
