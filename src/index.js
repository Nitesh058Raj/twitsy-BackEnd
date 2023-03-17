import express  from "express";
import ip from 'ip';
import dotenv from 'dotenv';
import cors from 'cors';

import Response from "./domain/response";

dotenv.config();

const PORT = process.env.SERVER_PORT || 3000;

//calling express function
const app = express();

//adding middleware for cors
app.use(cors({origin: '*'}));
app.use(express.json());

app.get('/', (req,res) => {
    res.send(new Response(200, 'OK', 'Message: v1.0.0'));
});
// process.env --> ansible facts (works link)
app.listen(PORT, () => console.log(`Server is running on : ${ip.address()} : ${PORT}`));
