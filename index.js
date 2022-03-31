const express = require("express")
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const todoRoute = require("./routes/todos")
const cors = require('cors')

dotenv.config();
app.use(express.json())


mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log("connected to mongodb"))
.catch((err) => console.log(err))


app.use(cors({
    origin: '*'
}));



app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/todos", todoRoute)

const PORT = process.env.PORT || 000;

app.listen(PORT, () => {
    console.log("Backend is running")
})