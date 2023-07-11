import  express  from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.get("/", (req, res) => {
    res.send("<h1>hello</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white)
})