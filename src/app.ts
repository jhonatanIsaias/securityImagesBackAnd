import cors from "cors";
import express  from "express";

const app = express();
app.use(cors()) // permite que a API seja usada em outros fronts como react 
app.use(express.json()); 




export default app;