import express from 'express';
import 'reflect-metadata';
import "./database";  // ./database/index.ts
<<<<<<< HEAD
import { router } from './routes';
=======
>>>>>>> 41eaa33e150e74fbb151410a2f8c2556f5ff8a70

 
const app = express();

app.use(express.json())
app.use(router)





app.listen(9999, () => console.log("Server is running!"));



