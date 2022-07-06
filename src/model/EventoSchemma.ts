import { Schema } from "mongoose";
import EnderecoSchemma from "./EnderecoSchemma";
import StatusEventoSchemma from "./StatusEventoSchemma";

const reqString = {
    type: String,
    required: true
}

const dateRequired = {
    type: Date,
    required: true
}

export default new Schema({
    _id: reqString,
    nome: reqString,
    descricao: reqString,
    dataInicio: dateRequired,
    dataFinal: dateRequired,
    status: {
        type: StatusEventoSchemma,
        required: true
    },
    endereco: {
        type: EnderecoSchemma,
        required: false,
        default: null
    }
})