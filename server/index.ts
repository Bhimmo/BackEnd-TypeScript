import express, {Express, Request, Response} from "express";
import routers from "../routes/index";

const app: Express = express();
app.use(express.json());
app.use(routers);
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor api  rodando na porta: ${port}`);
});