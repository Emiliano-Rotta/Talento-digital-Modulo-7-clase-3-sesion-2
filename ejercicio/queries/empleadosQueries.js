const pool = require('../db/config');

// Obtener empleados con nombre del departamento
const obtenerEmpleados = async () => {
    const query = `
        SELECT e.id, e.nombre, e.puesto, e.salario, d.nombre AS departamento
        FROM empleados e
        JOIN departamentos d ON e.departamento_id = d.id;
    `;
    const result = await pool.query(query);
    return result;
};

// Insertar empleado parametrizado
const insertarEmpleado = async (empleado) => {
    const query = `
        INSERT INTO empleados (nombre, puesto, salario, departamento_id)
        VALUES ($1, $2, $3, $4) RETURNING *;
    `;
    const values = [empleado.nombre, empleado.puesto, empleado.salario, empleado.departamento_id];
    const result = await pool.query(query, values);
    return result;
};

// Actualizar salario con objeto
const actualizarSalario = async ({ empleadoId, nuevoSalario }) => {
    const query = `
        UPDATE empleados
        SET salario = $1
        WHERE id = $2 RETURNING *;
    `;
    const values = [nuevoSalario, empleadoId];
    const result = await pool.query(query, values);
    return result;
};

// Eliminar empleado por ID
const eliminarEmpleado = async (empleadoId) => {
    const query = 'DELETE FROM empleados WHERE id = $1;';
    const result = await pool.query(query, [empleadoId]);
    return result;
};

module.exports = {
    obtenerEmpleados,
    insertarEmpleado,
    actualizarSalario,
    eliminarEmpleado,
};
