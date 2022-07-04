import { Schema } from "mongoose";
import TypeUsuarioSchema from "./TypeUsuarioSchema";

const reqString = {
    type: String,
    required: true
}

export default new Schema({
    _id: reqString,
    nome: reqString,
    email: reqString,
    senha: reqString,
    tipo: TypeUsuarioSchema,
    createdAt: {
        type: Date,
        required: false,
        default: new Date()
    }
})