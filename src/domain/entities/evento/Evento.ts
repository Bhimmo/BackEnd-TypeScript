import crypto from "crypto";
import statusEnum from "../../enum/statusEventoEnum";

export default class Evento {
    public id: string;
    public statusId: string;
    constructor(
        public nome: String,
        public descricao: String,
        public dataInicio: Date,
        public dataFinal: Date,
        public valor: Number,
        statusId?: string,
        public enderecoId?: String,
        id?: string,
    ) {
        this.id = id || crypto.randomUUID();
        this.statusId = statusId || statusEnum.PENDENTE;
    }
}