// Ejercicios clase anterior

// Ejercicio 1: Gestión de Estudiantes
// Objetivo: Crear una base de datos para gestionar estudiantes y realizar consultas parametrizadas para agregar nuevos estudiantes y buscar los que cumplan criterios específicos.
// Pasos:
// Crear la base de datos "gestor_estudiantes".
// Crear una tabla llamada "estudiantes" con la siguiente estructura:

// CREATE TABLE estudiantes (
//     id SERIAL PRIMARY KEY,
//     nombre VARCHAR(50) NOT NULL,
//     edad INT NOT NULL,
//     curso VARCHAR(50) NOT NULL
// );

// INSERT INTO estudiantes (nombre, edad, curso)
// VALUES 
//     ('Juan Pérez', 20, 'Matemáticas'),
//     ('María López', 22, 'Física'),
//     ('Carlos Gómez', 19, 'Química');

// Realizar las siguientes acciones:
// Insertar un estudiante utilizando una consulta parametrizada.
// Buscar todos los estudiantes mayores de 20 años usando una consulta parametrizada.
// const { Pool } = require('pg')
// require('dotenv').config()

// const pool = new Pool({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: 'gestor_estudiantes',
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT,
// })


// const insertarEstudiante = async () => {
//     try {
//         const insertarEstudiante = 'INSERT INTO estudiantes (nombre, edad, curso) VALUES ($1, $2, $3)';
//         const datos = ['Juan', 30, 'Back']
//         await pool.query(insertarEstudiante, datos)
//         console.log('estudiante insertado correctamente.')

//     } catch (err){
//         console.error('Error en el ejercicio 1:', err.message);
//     }
// }
// insertarEstudiante()

// const seleccionarEstudiante = async () => {
//     try {

//         const mayores = 'SELECT * FROM estudiantes WHERE edad > $1';
//         const edad = [20]
//         const estudianteMayor =  await pool.query(mayores, edad)
//         console.log('Los estudiantes mayores de 20 son: ', estudianteMayor.rows)

//     } catch (err){
//         console.error('Error en el ejercicio 1:', err.message);
//     }
// }
// seleccionarEstudiante()
//-------------------------------------------------------------

// Ejercicio 2: Registro de Profesores y Cursos
// Objetivo: Crear una base de datos para registrar profesores y cursos, utilizando el modo de fila rowMode: 'array' para realizar consultas avanzadas.
//     Pasos:
// Crear la base de datos "registro_educativo".
// Crear dos tablas:

// CREATE TABLE profesores(
//         id SERIAL PRIMARY KEY,
//         nombre VARCHAR(50) NOT NULL,
//         especialidad VARCHAR(50) NOT NULL
//     );
// CREATE TABLE cursos(
//         id SERIAL PRIMARY KEY,
//         nombre VARCHAR(50) NOT NULL,
//         profesor_id INT REFERENCES profesores(id)
//     );
// INSERT INTO profesores(nombre, especialidad)
// VALUES
//     ('Ana Torres', 'Matemáticas'),
//     ('Luis García', 'Física'),
//     ('Sofía Martínez', 'Química');
//     INSERT INTO cursos(nombre, profesor_id)
// VALUES
//     ('Álgebra', 1),
//     ('Termodinámica', 2),
//     ('Reacciones Químicas', 3);
    

// realizar las siguientes acciones:
// Buscar todos los cursos junto con el nombre del profesor, utilizando el modo rowMode: 'array'.
// Insertar un nuevo curso para un profesor específico utilizando una consulta parametrizada.

// const { Pool } = require('pg')
// require('dotenv').config()

// const pool = new Pool({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: 'registro_educativo',
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT,
// })



// const cursos = async () => {
//     try {
//         const selectCursos = {
//             text: 'SELECT cursos.nombre, profesores.nombre FROM cursos JOIN profesores ON cursos.profesor_id = profesores.id',
//             rowMode: 'array',
//         }
//         const seleccionarCurso = await pool.query(selectCursos)
//         console.log('Cursos y profesores:', seleccionarCurso.rows)


//     } catch (err){
//         console.error('Error en el ejercicio 2:', err.message);
//     }
// }
// cursos()

// const insertCursos = async () => {
//     try {
//         const selectCursos  = 'INSERT INTO cursos (nombre, profesor_id) VALUES ($1, $2)';
//         const datos = ['Cálculo', 1]
       
//         await pool.query(selectCursos, datos)
//         console.log('Curso insertado correctamente.')


//     } catch (err){
//         console.error('Error en el ejercicio 2:', err.message);
//     }
// }
// insertCursos()

    //--------------------------------------------------
//     Objetivo: Crear una base de datos para registrar ventas de productos, realizar consultas con objetos y manejar errores en las consultas.
// Pasos:
// Crear la base de datos "admin_ventas".
// Crear dos tablas:
// CREATE TABLE productos(
//             id SERIAL PRIMARY KEY,
//             nombre VARCHAR(50) NOT NULL,
//             precio NUMERIC(10, 2) NOT NULL
//         );
// CREATE TABLE ventas(
//             id SERIAL PRIMARY KEY,
//             producto_id INT REFERENCES productos(id),
//             cantidad INT NOT NULL,
//             fecha DATE DEFAULT CURRENT_DATE
//         );

// INSERT INTO productos(nombre, precio)
// VALUES
//     ('Laptop', 1000.00),
//     ('Mouse', 20.00),
//     ('Teclado', 50.00);


//     INSERT INTO ventas(producto_id, cantidad)
// VALUES
//     (1, 2),
//     (2, 5);


// Realizar las siguientes acciones:
// Insertar una nueva venta utilizando una consulta con objetos.
// Buscar todas las ventas realizadas de un producto específico, manejando los errores de conexión.


// const { Pool } = require('pg')
// require('dotenv').config()

// const pool = new Pool({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: 'admin_ventas',
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT,
// })

// const ventas = async () => {
//     try {
//         // Insertar nueva venta
//         const insertSaleQuery = {
//             text: 'INSERT INTO ventas (producto_id, cantidad) VALUES ($1, $2)',
//             values: [3, 3],
//         };
//         await pool.query(insertSaleQuery);
//         console.log('Venta registrada correctamente.');

//         // Buscar ventas de un producto
//         const selectSalesQuery = {
//             text: 'SELECT * FROM ventas WHERE producto_id = $1',
//             values: [1],
//         };
//         const sales = await pool.query(selectSalesQuery);
//         console.log('Ventas del producto específico:', sales.rows);
//     } catch (error) {
//         console.error('Error en el ejercicio 3:', error.message);
//     } finally {
//         await pool.end();
//     }
// }
// ventas();

// ------------------------------------------------------------

//Procesamiento de las respuestas con Node - Postgres

// Resumen de Propiedades del Objeto result

// result.rows: Contiene las filas devueltas por la consulta (si hay filas).
// result.fields: Contiene información sobre los campos o columnas de las filas devueltas.
// result.command: Indica el tipo de comando ejecutado (SELECT, INSERT, UPDATE, etc.).
// result.rowCount: Muestra el número de filas afectadas (devueltas o modificadas).

// const { Pool } = require('pg')
// require('dotenv').config()

// const pool = new Pool({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: 'registro_educativo',
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT,
// })



// const cursos = async () => {
//     try {
//         const selectCursos = {
//             text: 'SELECT * FROM cursos ',

//         }
//         const seleccionarCurso = await pool.query(selectCursos)
//         console.log('Cursos:', seleccionarCurso.rows) //probar con fields, command, rowCount.


//     } catch (err){
//         console.error('Error en el ejercicio 2:', err.message);
//     }
// }
// cursos()

// ------------------------------------------------------------

// Modularizar!

//La modularización es una técnica fundamental en el desarrollo de software que consiste en dividir un programa grande en partes más pequeñas y manejables llamadas módulos. Cada módulo se encarga de una tarea específica o un conjunto de tareas relacionadas, y puede ser reutilizado en otros proyectos o contextos. 

//Ventajas de la Modularización
// Mantenibilidad:
// Los módulos bien definidos facilitan la comprensión y la modificación del código, ya que cada parte tiene una responsabilidad clara.
// Cuando el código está modularizado, los errores son más fáciles de localizar y corregir.
// Reusabilidad:
// Un módulo puede ser reutilizado en diferentes proyectos o partes del mismo proyecto sin necesidad de escribir el código nuevamente.
// Escalabilidad:
// Al trabajar en módulos independientes, es más sencillo añadir nuevas funcionalidades al proyecto sin afectar el código existente.
// Trabajo Colaborativo:
// En equipos de desarrollo, diferentes programadores pueden trabajar en módulos separados sin interferir en el trabajo de los demás.
// Pruebas Unitarias:
// Es más sencillo escribir y ejecutar pruebas para módulos pequeños e independientes, lo que mejora la calidad del software.
// Legibilidad y Organización:
// La modularización permite que el código esté mejor organizado y sea más fácil de entender para otros desarrolladores.
