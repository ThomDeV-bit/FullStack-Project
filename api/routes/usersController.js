
import Router from "express";
import express from "express";
import { createUser, getUsers, validate } from "../repository/userRepository.js"
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
    const bodyName = request.body.user_name

    const [users] = await getUsers()
    const validateUser = users.filter(u => u.user_name === bodyName)
    if (validateUser.length > 0) {
        response.status(400).json(new Mensage("User already exists", bodyName, false))
    }
    else {
        const insertUser = await createUser(request.body)
        return response.status(200).json(new Mensage('User Create sucefully', request.body, true))
    }


})
export default UserController;