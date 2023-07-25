import  express  from "express";
import cors from "cors"
import UserController from "./routes/usersController.js"

const app = express()

app.use(express.json())
app.use(cors())

app.use(("/", UserController))

app.listen(3001,()=>{console.log('Server running')})