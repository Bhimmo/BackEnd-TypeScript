import mongoose from "mongoose";
import EnderecoSchemma from "../../../model/EnderecoSchemma";

export type propsEndereco = {
    id: string,
    logradouro: string,
    numero: string,
    bairro: string,
    cep: string,
    complemento: string
}

const Schema = mongoose.model('Endereco', EnderecoSchemma);

export default class EnderecoRepositoryInBD {
    async pegarTodos(): Promise<propsEndereco[]> {
        return Schema
            .find()
            .then((res: any) => res)
    }

    async pegarUm(id: string): Promise<propsEndereco> {
        return Schema
            .findById(id)
            .then((res: any) => res)
    }
}