
import Router, { response } from "express";
import express from "express";
import { createUser, getUsers, updateUser } from "../repository/userRepository.js"
import { Mensage } from "../status/Mensage.js";
const UserController = Router()

UserController.get(("/find"), async (request, response) => {
    try {
        const users = await getUsers()
        return response.json(users)
    } catch (error) {
        return response.json(error)
    }
})

UserController.post("/create", async (request, response) => {
    const userName = request.body.user_name

    const [users] = await getUsers()
    const validateUser = users.filter(u => u.user_name === userName)
    if (validateUser.length > 0) {
        response.status(400).json(new Mensage("User already exists", userName.user_name, false))
    }
    else {
        try {
            const insertUser = await createUser(request.body)
            return response.status(200).json(new Mensage('User Create sucefully', request.body, true))
            
        } catch (error) {
            
            
        }
       
    }


})


UserController.put("/update/:id", async (request,response)=>{
    const data = request.body
    const idUser = request.params.id
    const [idValidate] = await getUsers()
    const exists = idValidate.filter((user => (user.id == idUser)))
    console.log(exists)
    if(exists.length <= 0){
        return response.status(400).json(new Mensage('User does not exists',data.id,false))
    }
    else{
        const update = await updateUser(idUser,data)
        return response.status(200).json(new Mensage('User update sucefully',request.body, true))
    }

})


export default UserController;