import { Schema } from "mongoose";

const reqString = {
    type: String,
    required: true
}

export default new Schema({
    _id: reqString,
    logradouro: reqString,
    bairro: reqString,
    numero: reqString,
    cep: reqString,
    complemento: {
        type: String,
        required: false
    }
})