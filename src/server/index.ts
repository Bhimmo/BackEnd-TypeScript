import "dotenv/config";
import express from 'express';
import serverConfig from "./server";

const app = express();
serverConfig(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor api  rodando na porta: ${port}`);
});