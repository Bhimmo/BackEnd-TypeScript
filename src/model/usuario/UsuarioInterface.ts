import mongoose, { Document } from "mongoose";

export default interface UsuarioModel extends Document {
    nome: string;
    email: string;
    senha: string;
}