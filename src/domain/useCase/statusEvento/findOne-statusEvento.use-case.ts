import StatusEventoRepositoryInBD from "../../repository/statusEvento/StatusEventoRepositoryInBD";

export default class FindOneStatusEventoUseCase {
    constructor(private statusRepo: StatusEventoRepositoryInBD) {}

    async execute(id: string) {
        return this.statusRepo.pegarUm(id);
    }
}