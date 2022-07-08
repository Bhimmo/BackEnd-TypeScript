import EventoRepositoryInDB from "../../repository/evento/EventoRepositoryInDB";

export default class FindAllEventoUseCase {
    constructor(private eventoRepo: EventoRepositoryInDB) {}

    async execute() {
        return this.eventoRepo.pegarTodos();
    }
}