import { propsEvento } from './../../entities/evento/eventoInterface';
import EventoRepositoryInDB from "../../repository/evento/EventoRepositoryInDB";
import FindOneStatusEventoUseCase from '../statusEvento/findOne-statusEvento.use-case';
import StatusEventoRepositoryInBD from '../../repository/statusEvento/StatusEventoRepositoryInBD';

export default class UpdateStatusEventoUseCase {
    constructor (private eventoRepo: EventoRepositoryInDB) {}

    async execute(evento: propsEvento, statusId: string) {
        if (statusId == evento.status.id) {
            return statusId;
        }
        const statusRepo = new StatusEventoRepositoryInBD();
        const statusUseCase = new FindOneStatusEventoUseCase(statusRepo);
        const status = await statusUseCase.execute(statusId);

        if (!status) {
            throw new Error("Status nao encontrado");
        }

        await this.eventoRepo.atualizarStatus(evento.id, status);
        return status.id;
    }
}