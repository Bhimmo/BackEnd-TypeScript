import crypto from "crypto";
import statusEnum from "../../enum/statusEventoEnum";

export default class Evento {
    constructor(
        public nome: String,
        public descricao: String,
        public dataInicio: Date,
        public dataFinal: Date,
        public valor: Number,
        public statusId?: String,
        public enderecoId?: String,
        public readonly id?: String,
    ) {
        this.id = id || crypto.randomUUID();
        this.statusId = statusId || statusEnum.PENDENTE;
    }
}