import crypto from "crypto";

export default class StatusEvento {
    constructor(
        public readonly id: string,
        public descricao: string
    ) {
        this.id = id || crypto.randomUUID();
    }
    
    get getId(): string {
        return this.id;
    }

    get getDescricao(): string {
        return this.descricao;
    }
}