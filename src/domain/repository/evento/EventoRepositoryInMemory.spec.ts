import EventoRepositoryInMemory from "./EventoRepositoryInMemory";
import Evento from "../../entities/evento/Evento"

describe('testing class Event', () => {
    const banco = new EventoRepositoryInMemory();
    it('creating Event', async () => {
        const evento = new Evento(
            "Carneiro",
            "caneiro top",
            new Date(),
            new Date(),
            15
        );
        const status = {id: "62c3aa92468f6a95fbfbf532", descricao: "nao iniciado"};
        expect(evento.statusId).toBe("62c3aa92468f6a95fbfbf532");
        expect(evento.id).not.toBeNull();
        let props = {
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
        }
        await banco.inserir(props); 
        
        expect(banco.itens[0].status.descricao).toBe("nao iniciado");
    })
})