import mongoose, { Schema } from "mongoose";
import UsuarioModel from "./UsuarioInterface";

const UsuarioSchema: Schema = new Schema(
    {
        nome: { type: String, required: true },
        email: { type: String, required: true },
        senha: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<UsuarioModel>('Usuario', UsuarioSchema);