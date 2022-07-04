import { Schema } from "mongoose";

const reqString = {
    type: String,
    required: true
}

export default new Schema({
    _id: reqString,
    nome: reqString,
    email: reqString,
    senha: reqString,
    tipo: reqString,
    createdAt: {
        type: Date,
        required: false,
        default: new Date()
    }
})