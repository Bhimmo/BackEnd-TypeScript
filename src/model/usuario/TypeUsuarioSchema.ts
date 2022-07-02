import mongoose, { Schema } from "mongoose";

const reqString = {
    type: String,
    required: true
}

export default new Schema({
    _id: reqString,
    descricao: reqString,
    createdAt: {
        type: Date,
        required: false,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        required: false,
        default: new Date()
    }
})