import pool from '../config/db.js';

//Argumentos para definir los registros
const argument = process.argv.slice(2);
const option = argument[0];
const nombre = argument[1];
let rut = argument[2];
const curso = argument[3];
const nivel = argument[4];

//Agregar usuarios
const addUser = async (nombre, rut, curso, nivel) => {
    const sql = "INSERT INTO students(nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4)"
    
    const values = [nombre, rut, curso, nivel];
    const response = await pool.query(sql, values)
    console.log('Estudiante agregado con éxito')
}
// addUser(nombre, rut, curso, nivel);

//Mostrar tabla con datos
const showUsers = async (nombre, rut, curso, nivel) => {
    const sql = "SELECT * FROM students"
    const values = [nombre, rut, curso, nivel];
    const response = await pool.query(sql)
    console.log(response.rows)
}


const updateUser = async (nombre, rut, curso, nivel) => {
    const sql = "UPDATE students SET nombre= $1, rut= $2, nivel= $3, curso= $4 WHERE rut= $2 "
    const values = (nombre, rut, curso, nivel);
    const response = await pool.query(sql, values);
    console.log('Datos del estudiante actualizado con éxito')
};
showUsers(nombre, rut, curso, nivel);

//Borrar registro
const deleteUser = async(rut) => {
    const sql = "DELETE FROM students WHERE rut = $1"
    const values = [rut];
    const response = await pool.query(sql, values);
    console.log(`Estudiante con el rut:${rut} fue eliminado con éxito`)
}
// deleteUser(rut);

//Seleccionar estudiantes por rut
const selectUser = async (rut) => {
    let sql = "SELECT  * FROM students WHERE rut= $1"
    const values = [rut];
    const response = await pool.query(sql, values)
    console.log(response.rows)
};

//Validación de operaciones
if (option === 'add') {
    addUser(nombre, rut, curso, nivel)
} else if (option === 'show') {
    showUsers()
} else if (option === 'update') {
    updateUser(nombre, rut, curso, nivel)
} else if (option === 'delete') {
    rut=argument[1]
    deleteUser(rut)
} else if (option == 'select') {
    rut = argument[1];
    selectUser(rut)
}
else {
    console.log('Estudiante no esta registrado')
}
 