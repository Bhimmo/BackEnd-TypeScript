import express, {Express} from "express";
import routers from "../routes/index";

const app: Express = express();
app.use(express.json());
app.use(routers);

export default app;