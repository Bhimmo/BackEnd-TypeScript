import crypto from 'crypto';

export type PropsUser = {
    nome: string,
    email: string,
    senha: string,
    createdAt?: string,
    updatedAt?: string
}

export default class Usuario {
    public readonly id: string;
    public propsUser: PropsUser;

    constructor(propsUser: PropsUser, id?: string) {
        this.propsUser = propsUser;
        this.id = id || crypto.randomUUID();
    }

    get getId() {
        return this.id;
    }

    get getPropsUser() {
        return this.propsUser;
    }

    toJSON() {
        return {
            id: this.id,
            ...this.propsUser
        }
    }
}