import mysql from "mysql2"

export const db =  mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database:"crudFull",
    port:3310
}).promise()