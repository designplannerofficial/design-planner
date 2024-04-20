require('dotenv').config();
import express, { Application } from "express";
import cors from "cors"
import cookieParser from "cookie-parser"
import router from "./routers";
import { NotFoundError } from "./utils/errors";
import { ErrorHandler } from "./middlewares/error.handler";

const app: Application = express();

// application level middlewares
app.use(express.json())
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true
}))
app.use(cookieParser())

// route to check health;
app.get('/health', (req, res) => {
    res.send({
        message: "checkup success, app is running fine"
    })
})

// router to controll all routes;
app.use('/api', router)

app.use('*', () => { throw new NotFoundError() });
app.use(ErrorHandler);

const PORT: number = Number(process.env.PORT)
app.listen(PORT, () => {
    console.log(`server started at the port ${PORT}`);
})

export default app;