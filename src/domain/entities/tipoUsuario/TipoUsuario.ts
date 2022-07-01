import crypto from "crypto";

type TipoProps = {
    descricao: string,
    createdAt?: Date,
    updatedAt?: Date
}

export default class TipoUsuario {
    public id: string;
    public tipoProps: TipoProps;

    constructor(tipoProps: TipoProps, id?: string) {
        this.tipoProps = tipoProps;
        this.id = id || crypto.randomUUID();
    }

    toJSON() {
        return {
            id: this.id,
            ...this.tipoProps
        }
    }
}