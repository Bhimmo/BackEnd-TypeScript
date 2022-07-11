import crypto from "crypto";
import statusEnum from "../../enum/statusEventoEnum";

export default class Evento {
    public id: string;
    public statusId: string;
    public enderecoId: string;
    constructor(
        public nome: string,
        public descricao: string,
        public dataInicio: Date,
        public dataFinal: Date,
        public valor: Number,
        statusId?: string,
        enderecoId?: string,
        id?: string,
    ) {
        this.id = id || crypto.randomUUID();
        this.statusId = statusId || statusEnum.PENDENTE;
        this.enderecoId = enderecoId || "";
    }
}