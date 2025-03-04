import app from "./app.js"
import {connectDB} from"./db.js"
import {PORT} from "./config.js"


connectDB()

const IP="0.0.0.0"
app.listen(PORT,IP,()=>{
    console.log("Server on port ", PORT)

})
