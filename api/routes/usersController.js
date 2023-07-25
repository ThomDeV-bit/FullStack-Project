
import Router from "express";
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
            return response.status(400).json(new Mensage('Internal server error', error, false))

        }

    }


})

// 
UserController.put("/update/:id", async (request, response) => {

    const data = request.body

    const idUser = request.params.id

    const [userValidate] = await getUsers()

    const idExists = userValidate.filter((user => (user.id == idUser)))
    if (idExists.length <= 0) {
        return response.status(400).json(new Mensage('User does not exists', data.id, false))
    }
    else {
        const userExists = userValidate.filter(user => user.user_name === data.user_name)

        if (userExists.length > 0) {
            return response.status(400).json(new Mensage('User Name already in use', data.user_name, false))

        } else {

            try {
                const userUpdate = await updateUser(idUser, data)
                return response.status(200).json(new Mensage("User ha been modify ", data, true))

            } catch (error) {
                return response.status(500).json(new Mensage("Internal Server Error, contact your Admnistrator", error, false))
            }
        }
    }
})


export default UserController;