import { db } from "../db.js"
import { Mensage } from "../status/Mensage.js";

// GET
 export const getUsers = async () =>{
    const [users] = await db.query("SELECT * FROM users")
    return [users]
    
}


// INSERT
export const createUser = async(data) =>{
    const insertUser = [data.user_name,data.mail,data.fone]
    const sql = "INSERT INTO users(user_name, mail, fone) VALUES (?)"
    await db.query(sql,[insertUser])
    
}



// UPDATE

export const updateUser = async(id,data) =>{
    const sql = "UPDATE users SET user_name=?,mail=?,fone=? WHERE ID=?"
    const client = [data.user_name,data.mail,data.fone,id]
    await db.query(sql,client)
}