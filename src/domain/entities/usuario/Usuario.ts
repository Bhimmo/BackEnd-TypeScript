import crypto from 'crypto';

export default class Usuario {
    constructor(
        public nome: string,
        public email: string,
        public senha: string,
        public tipo: string,
        public readonly id?: string
    ) {
        this.id = id || crypto.randomUUID();
    }

    get getId() {
        return this.id;
    }

    get getNome() {
        return this.nome;
    }

    get getEmail() {
        return this.email;
    }

    get getSenha() {
        return this.senha;
    }

    get getTipo() {
        return this.tipo;
    }
}