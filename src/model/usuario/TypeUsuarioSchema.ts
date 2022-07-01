import mongoose, { Schema } from "mongoose";

const TipoUsuarioSchema: Schema = new Schema({
    _id: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
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

export default mongoose.model('TipoUsuario', TipoUsuarioSchema);