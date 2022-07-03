import crypto from "crypto";

export default class TipoUsuario {
    private id: string;
    private descricao: string;

    constructor(
        descricao: string,
        id?: string
    ) {
        this.descricao = descricao;
        this.id = id || crypto.randomUUID();
    }

    get getId(): string {
        return this.id;
    }

    get getDescricao(): string {
        return this.descricao;
    }
}