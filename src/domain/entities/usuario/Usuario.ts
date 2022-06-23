export type PropsUser = {
    nome: string,
    email: string,
    senha: string
}

export default class Usuario {
    private id?: string;
    private propsUser: PropsUser;

    constructor(propsUser: PropsUser) {
        this.propsUser = propsUser;
    }

    set setId (id: string) {
        this.id = id;
    }

    get getId() {
        return this.id;
    }

    get getPropsUser() {
        return this.propsUser;
    }
}