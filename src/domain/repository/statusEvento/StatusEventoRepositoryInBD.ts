import mongoose from "mongoose";
import statusEventoInterface, { propsStatusEvento } from "../../entities/statusEvento/statusEventoInterface";
import StatusEventoSchemma from "../../../model/StatusEventoSchemma";

const Schemma = mongoose.model('StatusEvento', StatusEventoSchemma); 

export default class StatusEventoRepositoryInBD implements statusEventoInterface{
    async pegarTodos(): Promise<propsStatusEvento[]> {
        return Schemma
            .find()
            .then((res: any) => res)
    }

    async pegarUm(id: string): Promise<propsStatusEvento> {
        return Schemma
            .findById(id)
            .then((res: any) => res)
    }
}