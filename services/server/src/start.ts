import { config } from "dotenv";
config();
import express, { Application } from "express";
import cors from "cors"
import cookieParser from "cookie-parser"

const app: Application = express();

// application level middlewares
app.use(express.json())
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET","POST", "PUT", "PATCH", "DELETE"],
    credentials: true
}))
app.use(cookieParser())

// route to check health;
app.get('/health', (req, res) => {
    res.send({
        message: "checkup success, app is running fine"
    })
})

const PORT: number = Number(process.env.PORT)
app.listen(PORT, () => {
    console.log(`server started at the port ${PORT}`);
})

export default app;