import Evento from "../../entities/evento/Evento";
import EnderecoRepositoryInBD from "../../repository/endereco/EnderecoRepositoryInBD";
import EventoRepositoryInDB from "../../repository/evento/EventoRepositoryInDB";
import StatusEventoRepositoryInBD from "../../repository/statusEvento/StatusEventoRepositoryInBD";
import FindOneEnderecoUseCase from "../endereco/findOne-endereco.use-case";
import FindOneStatusEventoUseCase from "../statusEvento/findOne-statusEvento.use-case";

type propsEvento = {
    nome: string,
    descricao: string,
    dataInicio: Date,
    dataFinal: Date,
    valor: Number,
    statusId: string,
    enderecoId: string,
    ativo: Boolean
}

export default class UpdateEventoUseCase {
    constructor(private eventoRepo: EventoRepositoryInDB) {}

    async execute(id: string, props: propsEvento) {
        const eventoSelect = await this.eventoRepo.pegarUm(id);

        if (!eventoSelect) {
            throw new Error("Evento nao encontrado");
        }

        //status
        const statusRepo = new StatusEventoRepositoryInBD();
        const statusUseCase = new FindOneStatusEventoUseCase(statusRepo);
        const status = await statusUseCase.execute(props.statusId);
        if (!status) {
            throw new Error("Status nao encontrado");
        }

        //endereco
        let endereco;
        if (props.enderecoId) {
            const enderecoRepo = new EnderecoRepositoryInBD();
            const enderecoUseCase = new FindOneEnderecoUseCase(enderecoRepo);
            endereco = await enderecoUseCase.execute(props.enderecoId);
            
        }

        const eventoAtu = {
            id: eventoSelect.id,
            nome: props.nome || eventoSelect.nome,
            descricao: props.descricao || eventoSelect.descricao,
            dataInicio: props.dataInicio || eventoSelect.dataInicio,
            dataFinal: props.dataFinal || eventoSelect.dataFinal,
            valor: props.valor || eventoSelect.valor,
            status: {
                id: status.id,
                descricao: status.descricao
            },
            endereco: endereco,
            ativo: props.ativo || eventoSelect.ativo

        }

        await this.eventoRepo.atualizar(eventoAtu);
        return this.eventoRepo.pegarUm(id);
    }
}