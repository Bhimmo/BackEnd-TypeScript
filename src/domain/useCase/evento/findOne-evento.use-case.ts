import EventoRepositoryInDB from "../../repository/evento/EventoRepositoryInDB";

export default class FindOneEventoUseCase {
    constructor(private eventoRepo: EventoRepositoryInDB) {}

    async execute(id: string) {
        return this.eventoRepo.pegarUm(id);
    }
}