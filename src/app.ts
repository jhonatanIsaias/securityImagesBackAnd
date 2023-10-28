import cors from "cors";
import express  from "express";
import router from "./routes/router";
const app = express();
app.use(cors()) // permite que a API seja usada em outros fronts como react 
app.use(express.json()); 
app.use(router);



export default app;