import express  from "express";
import ip from 'ip';
import dotenv from 'dotenv';
import cors from 'cors';

import Response from "./domain/response.js";
import logger from "./util/logger.js";
import HttpStatus from "../domain/httpStatus.js";

dotenv.config();

const PORT = process.env.SERVER_PORT || 3000;

//calling express function
const app = express();

//adding middleware for cors
app.use(cors({origin: '*'}));
app.use(express.json());

app.get('/', (req,res) => {
    res.send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'Message: v1.0.0'));
});
// process.env --> ansible facts (works link)
app.listen(PORT, () => logger.info(`Server is running on : ${ip.address()} : ${PORT}`));
