const {
    obtenerEmpleados,
    insertarEmpleado,
    actualizarSalario,
    eliminarEmpleado,
} = require('../queries/empleadosQueries');

const listarEmpleados = async () => {
    try {
        const result = await obtenerEmpleados();
        console.table(result.rows);
        console.log('Command:', result.command);
        console.log('Fields:', result.fields.map((field) => field.name));
        console.log('RowCount:', result.rowCount);
    } catch (error) {
        console.error('Error al listar empleados:', error.message);
    }
};

const agregarEmpleado = async () => {
    try {
        const nuevoEmpleado = {
            nombre: 'Carlos Sánchez',
            puesto: 'Tester',
            salario: 35000,
            departamento_id: 2,
        };
        const result = await insertarEmpleado(nuevoEmpleado);
        console.log('Empleado agregado:', result.rows[0]);
    } catch (error) {
        console.error('Error al agregar empleado:', error.message);
    }
};

const modificarSalario = async () => {
    try {
        const datos = { empleadoId: 2, nuevoSalario: 65000 };
        const result = await actualizarSalario(datos);
        console.log('Empleado actualizado:', result.rows[0]);
    } catch (error) {
        console.error('Error al modificar salario:', error.message);
    }
};

const eliminarEmpleadoPorId = async () => {
    try {
        const empleadoId = 3;
        const result = await eliminarEmpleado(empleadoId);
        console.log(`Empleados eliminados: ${result.rowCount}`);
    } catch (error) {
        console.error('Error al eliminar empleado:', error.message);
    }
};

module.exports = {
    listarEmpleados,
    agregarEmpleado,
    modificarSalario,
    eliminarEmpleadoPorId,
};
