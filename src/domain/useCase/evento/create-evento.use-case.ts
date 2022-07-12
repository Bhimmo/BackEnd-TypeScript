import Evento from "../../entities/evento/Evento";
import EventoRepositoryInDB from "../../repository/evento/EventoRepositoryInDB";
import StatusEventoRepositoryInBD from "../../repository/statusEvento/StatusEventoRepositoryInBD";
import EnderecoRepositoryInBD from "../../repository/endereco/EnderecoRepositoryInBD";
import FindOneStatusEventoUseCase from "../statusEvento/findOne-statusEvento.use-case";
import FindOneEnderecoUseCase from "../endereco/findOne-endereco.use-case";

export default class CreateEventoUseCase {
    constructor(private eventoRepo: EventoRepositoryInDB) {}

    async execute(
        nome: string,
        descricao: string,
        dataInicio: any,
        dataFinal: any,
        valor: Number,
        statusId: string,
        enderecoId: string
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
        
        //Status
        const statusRepo = new StatusEventoRepositoryInBD();
        const statusUseCase = new FindOneStatusEventoUseCase(statusRepo);
        const status = await statusUseCase.execute(evento.statusId);

        //Endereco
        let endereco;
        if (enderecoId) {
            const enderecoRepo = new EnderecoRepositoryInBD();
            const enderecoUseCase = new FindOneEnderecoUseCase(enderecoRepo);
            endereco = await enderecoUseCase.execute(evento.enderecoId);
        }
        
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
            },
            endereco: endereco,
            ativo: evento.ativo
        })
    }
}