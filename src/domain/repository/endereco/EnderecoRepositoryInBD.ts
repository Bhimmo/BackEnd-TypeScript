import mongoose from "mongoose";
import EnderecoSchemma from "../../../model/EnderecoSchemma";
import enderecoInterface, { propsEnd } from "../../entities/endereco/enderecoInterface";

const Schema = mongoose.model('Endereco', EnderecoSchemma);

export default class EnderecoRepositoryInBD implements enderecoInterface{
    async pegarTodos(): Promise<propsEnd[]> {
        return Schema
            .find()
            .then((res: any) => res)
    }

    async pegarUm(id: string): Promise<propsEnd> {
        return Schema
            .findById(id)
            .then((res: any) => res)
    }

    async inserir(props: propsEnd): Promise<void> {
        return new Schema({
            _id: props.id,
            logradouro: props.logradouro,
            bairro: props.bairro,
            numero: props.numero,
            cep: props.cep,
            complemento: props.complemento
        }).save().then((res: any) => res)
    }

    async atualizar(props: propsEnd): Promise<void> {
        return Schema
            .findByIdAndUpdate({_id: props.id}, {
                logradouro: props.logradouro,
                bairro: props.bairro,
                numero: props.numero,
                cep: props.cep,
                complemento: props.complemento
            }).then((res: any) => res);
    }
}