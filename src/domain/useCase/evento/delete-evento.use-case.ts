import EventoRepositoryInDB from "../../repository/evento/EventoRepositoryInDB";

export default class DeleteEventoUseCase {
    constructor(private eventoRepo: EventoRepositoryInDB) {}

    async execute(id: string) {
        return this.eventoRepo.deletar(id);
    }
}