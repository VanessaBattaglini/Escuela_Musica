import pkg from 'pg';
const { Pool } = pkg;
import "dotenv/config";
const { DB_USER, DB_PASSWORD, DB_DATABASE, DB_HOST } = process.env

//Configurando las variables de entorno
const config = {
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    allowExitOnIdle: true
};

const pool = new Pool(config);

// //Crear función para obtener datos esta en queries.js
// const getData = async () => {
//     // <const { nombre, rut, curso, nivel } = await pool.query('CREATE TABLE students')
//     // console.log(nombre, rut, curso, nivel);>
//     const response = await pool.query('SELECT NOW()')
//     console.log(response)
// };
// getData();

export default pool;