import  express  from "express";
import cors from "cors"
import userRouter from "./routes/users.js";

const app = express()

app.use(express.json())
app.use(cors())

app.use('/user',userRouter)

app.listen(3001,()=>{console.log('Server running')})