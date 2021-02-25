import express from 'express';
import 'reflect-metadata';
import "./database";  // ./database/index.ts
import { router } from './routes';


 
const app = express();

app.use(express.json())
app.use(router)





app.listen(9999, () => console.log("Server is running!"));



