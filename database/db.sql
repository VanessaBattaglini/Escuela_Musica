// Crear tabla de estudiantes
CREATE TABLE students (
id serial primary key,
nombre varchar(80),
rut int,
curso varchar(50),
nivel varchar(100)
);

//Visualizar la tabla de estudiantes
SELECT *  FROM students;