import StatusEventoRepositoryInBD from "../../repository/statusEvento/StatusEventoRepositoryInBD";

export default class FindAllStatusEventoUseCase {
    constructor(private statusRepo: StatusEventoRepositoryInBD) {}

    async execute() {
        return this.statusRepo.pegarTodos();
    }
}