import {Express} from "express";
import connectToMongoDB from "../lib/database";
import appConfig from "./app";

export default function serverConfig(app: Express): void {
    connectToMongoDB();
    appConfig(app);
}