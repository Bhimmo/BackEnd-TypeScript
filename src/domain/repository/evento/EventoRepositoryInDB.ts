import mongoose from 'mongoose';
import EventoSchemma from '../../../model/EventoSchemma';
import eventoInterface, { propsEvento } from "../../entities/evento/eventoInterface";

const Schema = mongoose.model('Evento', EventoSchemma);

export default class EventoRepositoryInDB implements eventoInterface {
    async inserir(evento: propsEvento): Promise<void> {
        return new Schema({
            _id: evento.id,
            nome: evento.nome,
            descricao: evento.descricao,
            dataInicio: evento.dataInicio,
            dataFinal: evento.dataFinal,
            status: {
                _id: evento.status.id,
                descricao: evento.status.descricao
            },
            endereco: evento.endereco
        }).save().then((res: any) => res)
    }

    async pegarTodos(): Promise<propsEvento[]> {
        return Schema.find();
    }

    async pegarUm(id: string): Promise<propsEvento> {
        return Schema
            .findById(id)
            .then((res: any) => res)
    }
}