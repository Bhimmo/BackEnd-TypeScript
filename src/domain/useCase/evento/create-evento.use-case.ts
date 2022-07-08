import Evento from "../../entities/evento/Evento";
import EventoRepositoryInDB from "../../repository/evento/EventoRepositoryInDB";
import StatusEventoRepositoryInBD from "../../repository/statusEvento/StatusEventoRepositoryInBD";
import FindOneStatusEventoUseCase from "../statusEvento/findOne-statusEvento.use-case";

export default class CreateEventoUseCase {
    constructor(private eventoRepo: EventoRepositoryInDB) {}

    async execute(
        nome: String,
        descricao: String,
        dataInicio: any,
        dataFinal: any,
        valor: Number,
        statusId: string,
        enderecoId: String
    ) {
        const evento = new Evento(
            nome,
            descricao,
            new Date(dataInicio),
            new Date(dataFinal),
            valor,
            statusId,
            enderecoId
        );
        
        console.log(evento);
        
        //Status
        const statusRepo = new StatusEventoRepositoryInBD();
        const statusUseCase = new FindOneStatusEventoUseCase(statusRepo);
        const status = await statusUseCase.execute(evento.statusId);
        
        //Create evento
        return this.eventoRepo.inserir({
            id: evento.id,
            nome: evento.nome,
            descricao: evento.descricao,
            dataInicio: evento.dataInicio,
            dataFinal: evento.dataFinal,
            valor: evento.valor,
            status: {
                id: status.id,
                descricao: status.descricao
            }
        })
    }
}