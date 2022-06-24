import express, {Express} from "express";
import cors from "cors";
import routers from "../routes/index";

export default function appConfig(app: Express): void {
    app.use(cors());
    app.use(express.json());
    app.use(routers);
}