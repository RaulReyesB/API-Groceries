import express from "express";
import morgan from "morgan";
import { config } from "dotenv";
import productRouter from './routes/products.routes.js'
config();
const app = express();
//setings
app.set("view engine", "ejs");
//Midelware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use('/', productRouter)
export default app;
