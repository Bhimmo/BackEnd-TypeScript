import { Schema } from "mongoose";

const reqString = {
    type: String,
    required: true
}

export default new Schema({
    _id: reqString,
    descricao: reqString
})