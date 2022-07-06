import { propsEvento } from './../../entities/evento/eventoInterface';
import eventoInterface from "../../entities/evento/eventoInterface";

export default class EventoRepositoryInMemory implements eventoInterface {
    itens: propsEvento[] = [];

    async inserir(evento: propsEvento): Promise<void> {
        this.itens.push(evento);
    }
    async pegarTodos(): Promise<propsEvento[]> {
        return this.itens;
    }
    async pegarUm(): Promise<propsEvento> {
        return this.itens[0];
    }
}