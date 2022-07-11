import Evento from "../../entities/evento/Evento";
import EnderecoRepositoryInBD from "../../repository/endereco/EnderecoRepositoryInBD";
import EventoRepositoryInDB from "../../repository/evento/EventoRepositoryInDB";
import StatusEventoRepositoryInBD from "../../repository/statusEvento/StatusEventoRepositoryInBD";
import FindOneEnderecoUseCase from "../endereco/findOne-endereco.use-case";
import FindOneStatusEventoUseCase from "../statusEvento/findOne-statusEvento.use-case";
import UpdateStatusEventoUseCase from "./updateStatus-evento.use-case";

type propsEvento = {
    nome: string,
    descricao: string,
    dataInicio: Date,
    dataFinal: Date,
    valor: Number,
    statusId: string,
    enderecoId: string
}

export default class UpdateEventoUseCase {
    constructor(private eventoRepo: EventoRepositoryInDB) {}

    async execute(id: string, props: propsEvento) {
        const eventoSelect = await this.eventoRepo.pegarUm(id);

        if (!eventoSelect) {
            throw new Error("Evento nao encontrado");
        }

        //status
        const statusUpdateUseCase = new UpdateStatusEventoUseCase(this.eventoRepo);
        const statusVerify = await statusUpdateUseCase.execute(eventoSelect, props.statusId);
        const statusRepo = new StatusEventoRepositoryInBD();
        const statusUseCase = new FindOneStatusEventoUseCase(statusRepo);
        const status = await statusUseCase.execute(statusVerify);

        //endereco
        let endereco;
        if (props.enderecoId) {
            const enderecoRepo = new EnderecoRepositoryInBD();
            const enderecoUseCase = new FindOneEnderecoUseCase(enderecoRepo);
            const endereco = await enderecoUseCase.execute(props.enderecoId);
        }

        const evento = new Evento(
            props.nome, 
            props.descricao, 
            props.dataInicio, 
            props.dataFinal, 
            props.valor, 
            props.statusId, 
            props.enderecoId
        );

        const eventoAtu = {
            id: eventoSelect.id || evento.id,
            nome: evento.nome || eventoSelect.nome,
            descricao: evento.descricao || eventoSelect.descricao,
            dataInicio: evento.dataInicio || eventoSelect.dataInicio,
            dataFinal: evento.dataFinal || eventoSelect.dataFinal,
            valor: evento.valor || eventoSelect.valor,
            status: {
                id: status.id || eventoSelect.status.id,
                descricao: status.descricao || eventoSelect.status.descricao
            },
            endereco: endereco
        }

        await this.eventoRepo.atualizar(eventoAtu);
        return this.eventoRepo.pegarUm(id);
    }
}