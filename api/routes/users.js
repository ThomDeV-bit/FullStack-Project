import express from "express"
import {addUser, getUsers} from "../controller/user.js"

const userRouter = express.Router()

userRouter.get('/find',getUsers)
userRouter.post('/create', addUser)

export default userRouter