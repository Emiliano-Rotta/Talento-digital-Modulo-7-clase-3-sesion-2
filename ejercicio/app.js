const {
    listarEmpleados,
    agregarEmpleado,
    modificarSalario,
    eliminarEmpleadoPorId,
} = require('./controllers/empleadosController');

const app = async () => {
    console.log('--- Listar empleados ---');
    await listarEmpleados();

    console.log('--- Agregar nuevo empleado ---');
    await agregarEmpleado();

    console.log('--- Modificar salario ---');
    await modificarSalario();

    console.log('--- Eliminar empleado ---');
    await eliminarEmpleadoPorId();
};

app();
