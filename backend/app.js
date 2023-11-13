import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import compression from 'compression';

// import path from "path";

import { corsOptions } from "./utils/cors.js";
import { connect } from "./configs/mongo.js";
import { packageRouter } from "./routes/package.js";
import { paymentRouter } from "./routes/payment.js";
import { authRouter } from "./routes/auth.js";
import { handleError } from "./middleware/error.js";
import { preflight } from "./middleware/preflight.js";
import { orderRouter } from "./routes/order.js";
import { tourRouter } from "./routes/tour.js";
import { ticketRouter } from "./routes/ticket.js";

dotenv.config();

const app = express();
// DB Connection
await connect();
app.use(compression());
app.use(preflight);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(`${process.env.ENTRY_POINT}/packages`, packageRouter);
app.use(`${process.env.ENTRY_POINT}/payments`, paymentRouter);
app.use(`${process.env.ENTRY_POINT}/orders`, orderRouter);
app.use(`${process.env.ENTRY_POINT}/tours`, tourRouter);
app.use(`${process.env.ENTRY_POINT}/tickets`, ticketRouter);
app.use(`${process.env.ENTRY_POINT}/auth`, authRouter);

app.use(handleError);

// app.use(express.static(path.join(__dirname, "public")));
export default app;
