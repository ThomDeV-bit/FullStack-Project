import { db } from "../db.js"
import { Mensage } from "../status/Mensage.js";


 export const getUsers = async () =>{
    const [users] = await db.query("SELECT * FROM users")
    return [users]
    
}


export const createUser = async(data) =>{
    const insertUser = [data.user_name,data.mail,data.fone]
    const sql = "INSERT INTO users(user_name, mail, fone) VALUES (?)"
    await db.query(sql,[insertUser])
    
}


export const validate = async(data)=>{
    const user = [data.user_name]
    const valid ="SELECE user_name FROM users WHERE user_name=? "
    await db.query(valid,user)
    
}






   /* if (validate === req.body.user_name){
        return res.status(401).json(new Mensage("User already exists", req.body.user_name, true))

    }
    else {
        try {
            db.query(q, [values], (err) => {
                if (err) {
                    return res.json(err)
                }
                return res.status(200).json(new Mensage("User Create Sucefully", req.body, true))
            })

        } catch (error) {
            return res.status(500).json(new Mensage("Unexpected Error", error, false))
        }
    }
}
*/