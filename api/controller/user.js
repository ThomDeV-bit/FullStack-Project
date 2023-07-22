import { db } from "../db.js"
import { Mensage } from "../status/Mensage.js";



export const getUsers = (_, res) => {
    const q = "SELECT * FROM users";
    db.query(q, (err, data) => {
        if (err) return res.json(err)

        return res.status(200).json(data)
    })
}

export const addUser = async (req, res) => {
    
    const q = "INSERT INTO users (`user_name`,`mail`,`fone`) VALUES (?)";
    const values =[
        req.body.user_name,
        req.body.mail,
        req.body.fone]
    

    const validate = "SELECT FROM users WHERE user_name?"
    const userValidadete = req.body.user_name
    if (validate != userValidadete) {


        try {
            db.query(q, [values], (err) => {
                if (err) {
                    return res.json(err)
                }
                return res.status(200).json(new Mensage("User Create Sucefully", req.body , true))
            })

        } catch (error) {
            return res.status(500).json(new Mensage("Unexpected Error", error, false))
        }
    }
}