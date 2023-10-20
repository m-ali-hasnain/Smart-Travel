import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from 'cors'
import dotenv from 'dotenv'
import path from "path";

import { corsOptions } from "./utils/cors.js";
import { connect } from "./configs/mongo.js";
import { adminRouter } from "./routes/admin.js";
import { packageRouter } from "./routes/package.js";
import { paymentRouter } from "./routes/payment.js";
import { handleError } from "./middleware/error.js";

dotenv.config()

const app = express();
// DB Connection
connect()

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(corsOptions))
app.use(`${process.env.ENTRY_POINT}/admin`, adminRouter);
app.use(`${process.env.ENTRY_POINT}/packages`, packageRouter);
app.use(`${process.env.ENTRY_POINT}/payments`, paymentRouter);
app.use(handleError)


// app.use(express.static(path.join(__dirname, "public")));
//handleError(error, res, next);
export default app;
